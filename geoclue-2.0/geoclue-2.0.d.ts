
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

export namespace Geoclue {

    /**
     * Geoclue-2.0
     */


    /**
     * @gir-type Enum
     */
    export namespace AccuracyLevel {
        export const $gtype: GObject.GType<AccuracyLevel>;
    }

    /**
     * @gir-type Enum
     */
    enum AccuracyLevel {
        NONE,
        COUNTRY,
        CITY,
        NEIGHBORHOOD,
        STREET,
        EXACT,
    }


    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Client.top_of_page">org.freedesktop.GeoClue2.Client</link> D-Bus interface.
     * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
     */
    function client_interface_info(): Gio.DBusInterfaceInfo;

    /**
     * Overrides all {@link GObject.Object} properties in the {@link Geoclue.Client} interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a {@link GObject.Object} derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function client_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;

    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Location.top_of_page">org.freedesktop.GeoClue2.Location</link> D-Bus interface.
     * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
     */
    function location_interface_info(): Gio.DBusInterfaceInfo;

    /**
     * Overrides all {@link GObject.Object} properties in the {@link Geoclue.Location} interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a {@link GObject.Object} derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function location_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;

    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Manager.top_of_page">org.freedesktop.GeoClue2.Manager</link> D-Bus interface.
     * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
     */
    function manager_interface_info(): Gio.DBusInterfaceInfo;

    /**
     * Overrides all {@link GObject.Object} properties in the {@link Geoclue.Manager} interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a {@link GObject.Object} derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function manager_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;

    /**
     * @gir-type Flags
     */
    export namespace ClientProxyCreateFlags {
        export const $gtype: GObject.GType<ClientProxyCreateFlags>;
    }

    /**
     * @gir-type Flags
     */
    enum ClientProxyCreateFlags {
        NONE,
        AUTO_DELETE,
    }


    namespace ClientProxy {
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
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::desktop-id": (pspec: GObject.ParamSpec) => void;
            "notify::distance-threshold": (pspec: GObject.ParamSpec) => void;
            "notify::location": (pspec: GObject.ParamSpec) => void;
            "notify::requested-accuracy-level": (pspec: GObject.ParamSpec) => void;
            "notify::time-threshold": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, Client.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps {}
    }

    /**
     * The {@link Geoclue.ClientProxy} structure contains only private data and should only be accessed using the provided API.
     * @gir-type Class
     */
    class ClientProxy extends Gio.DBusProxy implements Client, Gio.AsyncInitable<ClientProxy>, Gio.DBusInterface, Gio.Initable {
        static $gtype: GObject.GType<ClientProxy>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ClientProxy.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ClientProxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_finish(res: Gio.AsyncResult): ClientProxy;

        // Conflicted with Gio.AsyncInitable.new_finish
        static new_finish(...args: never[]): any;

        static new_for_bus_finish(res: Gio.AsyncResult): ClientProxy;

        static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): ClientProxy;

        // Conflicted with Gio.DBusProxy.new_for_bus_sync
        static new_for_bus_sync(...args: never[]): any;

        static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): ClientProxy;

        // Conflicted with Gio.DBusProxy.new_sync
        static new_sync(...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof ClientProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ClientProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ClientProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClientProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * A utility function to create a {@link Geoclue.ClientProxy} without having to deal with
         * a {@link Geoclue.Manager}. See also `gclue_client_proxy_create_full()` which improves
         * resource management.
         * 
         * This is identitcal to calling `gclue_client_proxy_create_full()` without any
         * flags set.
         * 
         * See `gclue_client_proxy_create_sync`() for the synchronous, blocking version
         * of this function.
         * @param desktop_id The desktop file id (the basename of the desktop file).
         * @param accuracy_level The requested accuracy level as {@link Geoclue.AccuracyLevel}.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the results are ready.
         */
        static create(desktop_id: string, accuracy_level: AccuracyLevel, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<ClientProxy> | null): void;

        /**
         * Finishes an operation started with `gclue_client_proxy_create()`.
         * @param result The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to          `gclue_client_proxy_create()`.
         */
        static create_finish(result: Gio.AsyncResult): ClientProxy;

        /**
         * A utility function to create a {@link Geoclue.ClientProxy} without having to deal with
         * a {@link Geoclue.Manager}.
         * 
         * By setting the #GCLUE_CLIENT_PROXY_CREATE_AUTO_DELETE flag you can ensure
         * that the client will be deleted again from the geoclue service when
         * it is destroyed. This flag should be used unless you are doing explicit
         * resource management.
         * 
         * See `gclue_client_proxy_create_full_sync`() for the synchronous, blocking
         * version of this function.
         * @param desktop_id The desktop file id (the basename of the desktop file).
         * @param accuracy_level The requested accuracy level as {@link Geoclue.AccuracyLevel}.
         * @param flags {@link Geoclue.ClientProxyCreateFlags} to modify the creation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the results are ready.
         */
        static create_full(desktop_id: string, accuracy_level: AccuracyLevel, flags: ClientProxyCreateFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<ClientProxy> | null): void;

        /**
         * Finishes an operation started with `gclue_client_proxy_create_full()`.
         * @param result The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to          `gclue_client_proxy_create()`.
         */
        static create_full_finish(result: Gio.AsyncResult): ClientProxy;

        /**
         * The synchronous and blocking version of `gclue_client_proxy_create_full`().
         * 
         * By setting the #GCLUE_CLIENT_PROXY_CREATE_AUTO_DELETE flag you can ensure
         * that the client will be deleted again from the geoclue service when
         * it is destroyed. This flag should be used unless you are doing explicit
         * resource management.
         * @param desktop_id The desktop file id (the basename of the desktop file).
         * @param accuracy_level The requested accuracy level as {@link Geoclue.AccuracyLevel}.
         * @param flags {@link Geoclue.ClientProxyCreateFlags} to modify the creation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        static create_full_sync(desktop_id: string, accuracy_level: AccuracyLevel, flags: ClientProxyCreateFlags, cancellable: Gio.Cancellable | null): ClientProxy;

        /**
         * The synchronous and blocking version of `gclue_client_proxy_create`().
         * See also `gclue_client_proxy_create_full_sync()` which improves resource
         * management.
         * 
         * This function is identical to calling `gclue_client_proxy_create_full_sync()`
         * without any flags set.
         * @param desktop_id The desktop file id (the basename of the desktop file).
         * @param accuracy_level The requested accuracy level as {@link Geoclue.AccuracyLevel}.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        static create_sync(desktop_id: string, accuracy_level: AccuracyLevel, cancellable: Gio.Cancellable | null): ClientProxy;

        /**
         * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Client.top_of_page">org.freedesktop.GeoClue2.Client</link>. See `g_dbus_proxy_new()` for more details.
         * 
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_client_proxy_new_finish()` to get the result of the operation.
         * 
         * See `gclue_client_proxy_new_sync()` for the synchronous, blocking version of this constructor.
         * @param connection A {@link Gio.DBusConnection}.
         * @param flags Flags from the {@link Gio.DBusProxyFlags} enumeration.
         * @param name A bus name (well-known or unique) or `null` if `connection` is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<ClientProxy> | null): void;

        /**
         * @param args 
         */
    // Conflicted with Gio.DBusProxy.new
        static ["new"](...args: never[]): any;

        /**
         * Like `gclue_client_proxy_new()` but takes a {@link Gio.BusType} instead of a {@link Gio.DBusConnection}.
         * 
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_client_proxy_new_for_bus_finish()` to get the result of the operation.
         * 
         * See `gclue_client_proxy_new_for_bus_sync()` for the synchronous, blocking version of this constructor.
         * @param bus_type A {@link Gio.BusType}.
         * @param flags Flags from the {@link Gio.DBusProxyFlags} enumeration.
         * @param name A bus name (well-known or unique).
         * @param object_path An object path.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<ClientProxy> | null): void;

        /**
         * @param args 
         */
    // Conflicted with Gio.DBusProxy.new_for_bus
        static new_for_bus(...args: never[]): any;

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.Active">"Active"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default false
          * @category Inherited from Geoclue.Client
         */
        get active(): boolean;
        set active(val: boolean);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DesktopId">"DesktopId"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         * @default null
          * @category Inherited from Geoclue.Client
         */
        get desktop_id(): string | null;
        set desktop_id(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DesktopId">"DesktopId"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         * @default null
          * @category Inherited from Geoclue.Client
         */
        get desktopId(): string | null;
        set desktopId(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DistanceThreshold">"DistanceThreshold"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         * @default 0
          * @category Inherited from Geoclue.Client
         */
        get distance_threshold(): number;
        set distance_threshold(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DistanceThreshold">"DistanceThreshold"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         * @default 0
          * @category Inherited from Geoclue.Client
         */
        get distanceThreshold(): number;
        set distanceThreshold(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.Location">"Location"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
          * @category Inherited from Geoclue.Client
         */
        get location(): string | null;
        set location(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.RequestedAccuracyLevel">"RequestedAccuracyLevel"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         * @default 0
          * @category Inherited from Geoclue.Client
         */
        get requested_accuracy_level(): number;
        set requested_accuracy_level(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.RequestedAccuracyLevel">"RequestedAccuracyLevel"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         * @default 0
          * @category Inherited from Geoclue.Client
         */
        get requestedAccuracyLevel(): number;
        set requestedAccuracyLevel(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.TimeThreshold">"TimeThreshold"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         * @default 0
          * @category Inherited from Geoclue.Client
         */
        get time_threshold(): number;
        set time_threshold(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.TimeThreshold">"TimeThreshold"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         * @default 0
          * @category Inherited from Geoclue.Client
         */
        get timeThreshold(): number;
        set timeThreshold(val: number);

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Start">Start()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_client_call_start_finish()` to get the result of the operation.
         * 
         * See `gclue_client_call_start_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_start(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Start">Start()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_client_call_start_finish()` to get the result of the operation.
         * 
         * See `gclue_client_call_start_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_start(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Start">Start()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_client_call_start_finish()` to get the result of the operation.
         * 
         * See `gclue_client_call_start_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_start(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes an operation started with `gclue_client_call_start()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gclue_client_call_start()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_start_finish(res: Gio.AsyncResult): boolean;

        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Start">Start()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         * 
         * See `gclue_client_call_start()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_start_sync(cancellable: Gio.Cancellable | null): boolean;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Stop">Stop()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_client_call_stop_finish()` to get the result of the operation.
         * 
         * See `gclue_client_call_stop_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_stop(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Stop">Stop()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_client_call_stop_finish()` to get the result of the operation.
         * 
         * See `gclue_client_call_stop_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_stop(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Stop">Stop()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_client_call_stop_finish()` to get the result of the operation.
         * 
         * See `gclue_client_call_stop_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_stop(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes an operation started with `gclue_client_call_stop()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gclue_client_call_stop()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_stop_finish(res: Gio.AsyncResult): boolean;

        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Stop">Stop()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         * 
         * See `gclue_client_call_stop()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_stop_sync(cancellable: Gio.Cancellable | null): boolean;

        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Start">Start()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         * 
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_start(invocation: Gio.DBusMethodInvocation): void;

        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Stop">Stop()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         * 
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_stop(invocation: Gio.DBusMethodInvocation): void;

        /**
         * Emits the <link linkend="gdbus-signal-org-freedesktop-GeoClue2-Client.LocationUpdated">"LocationUpdated"</link> D-Bus signal.
         * @param arg_old Argument to pass with the signal.
         * @param arg_new Argument to pass with the signal.
         */
        emit_location_updated(arg_old: string, arg_new: string): void;

        /**
         * @param invocation 
         * @virtual
         */
        vfunc_handle_start(invocation: Gio.DBusMethodInvocation): boolean;

        /**
         * @param invocation 
         * @virtual
         */
        vfunc_handle_stop(invocation: Gio.DBusMethodInvocation): boolean;

        /**
         * @param arg_old 
         * @param arg_new 
         * @virtual
         */
        vfunc_location_updated(arg_old: string, arg_new: string): void;

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
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

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
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

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
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

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
        new_finish(res: Gio.AsyncResult): ClientProxy;

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
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

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
        set_object(object: Gio.DBusObject | null): void;

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
        vfunc_set_object(object: Gio.DBusObject | null): void;

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
        init(cancellable: Gio.Cancellable | null): boolean;

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
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }


    namespace ClientSkeleton {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::desktop-id": (pspec: GObject.ParamSpec) => void;
            "notify::distance-threshold": (pspec: GObject.ParamSpec) => void;
            "notify::location": (pspec: GObject.ParamSpec) => void;
            "notify::requested-accuracy-level": (pspec: GObject.ParamSpec) => void;
            "notify::time-threshold": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, Client.ConstructorProps, Gio.DBusInterface.ConstructorProps {}
    }

    /**
     * The {@link Geoclue.ClientSkeleton} structure contains only private data and should only be accessed using the provided API.
     * @gir-type Class
     */
    class ClientSkeleton extends Gio.DBusInterfaceSkeleton implements Client, Gio.DBusInterface {
        static $gtype: GObject.GType<ClientSkeleton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ClientSkeleton.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ClientSkeleton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ClientSkeleton;

        // Signals
        /** @signal */
        connect<K extends keyof ClientSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ClientSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClientSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ClientSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClientSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.Active">"Active"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default false
          * @category Inherited from Geoclue.Client
         */
        get active(): boolean;
        set active(val: boolean);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DesktopId">"DesktopId"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         * @default null
          * @category Inherited from Geoclue.Client
         */
        get desktop_id(): string | null;
        set desktop_id(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DesktopId">"DesktopId"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         * @default null
          * @category Inherited from Geoclue.Client
         */
        get desktopId(): string | null;
        set desktopId(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DistanceThreshold">"DistanceThreshold"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         * @default 0
          * @category Inherited from Geoclue.Client
         */
        get distance_threshold(): number;
        set distance_threshold(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DistanceThreshold">"DistanceThreshold"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         * @default 0
          * @category Inherited from Geoclue.Client
         */
        get distanceThreshold(): number;
        set distanceThreshold(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.Location">"Location"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
          * @category Inherited from Geoclue.Client
         */
        get location(): string | null;
        set location(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.RequestedAccuracyLevel">"RequestedAccuracyLevel"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         * @default 0
          * @category Inherited from Geoclue.Client
         */
        get requested_accuracy_level(): number;
        set requested_accuracy_level(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.RequestedAccuracyLevel">"RequestedAccuracyLevel"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         * @default 0
          * @category Inherited from Geoclue.Client
         */
        get requestedAccuracyLevel(): number;
        set requestedAccuracyLevel(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.TimeThreshold">"TimeThreshold"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         * @default 0
          * @category Inherited from Geoclue.Client
         */
        get time_threshold(): number;
        set time_threshold(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.TimeThreshold">"TimeThreshold"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         * @default 0
          * @category Inherited from Geoclue.Client
         */
        get timeThreshold(): number;
        set timeThreshold(val: number);

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Start">Start()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_client_call_start_finish()` to get the result of the operation.
         * 
         * See `gclue_client_call_start_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_start(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Start">Start()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_client_call_start_finish()` to get the result of the operation.
         * 
         * See `gclue_client_call_start_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_start(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Start">Start()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_client_call_start_finish()` to get the result of the operation.
         * 
         * See `gclue_client_call_start_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_start(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes an operation started with `gclue_client_call_start()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gclue_client_call_start()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_start_finish(res: Gio.AsyncResult): boolean;

        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Start">Start()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         * 
         * See `gclue_client_call_start()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_start_sync(cancellable: Gio.Cancellable | null): boolean;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Stop">Stop()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_client_call_stop_finish()` to get the result of the operation.
         * 
         * See `gclue_client_call_stop_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_stop(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Stop">Stop()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_client_call_stop_finish()` to get the result of the operation.
         * 
         * See `gclue_client_call_stop_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_stop(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Stop">Stop()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_client_call_stop_finish()` to get the result of the operation.
         * 
         * See `gclue_client_call_stop_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_stop(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes an operation started with `gclue_client_call_stop()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gclue_client_call_stop()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_stop_finish(res: Gio.AsyncResult): boolean;

        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Stop">Stop()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         * 
         * See `gclue_client_call_stop()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_stop_sync(cancellable: Gio.Cancellable | null): boolean;

        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Start">Start()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         * 
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_start(invocation: Gio.DBusMethodInvocation): void;

        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Stop">Stop()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         * 
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_stop(invocation: Gio.DBusMethodInvocation): void;

        /**
         * Emits the <link linkend="gdbus-signal-org-freedesktop-GeoClue2-Client.LocationUpdated">"LocationUpdated"</link> D-Bus signal.
         * @param arg_old Argument to pass with the signal.
         * @param arg_new Argument to pass with the signal.
         */
        emit_location_updated(arg_old: string, arg_new: string): void;

        /**
         * @param invocation 
         * @virtual
         */
        vfunc_handle_start(invocation: Gio.DBusMethodInvocation): boolean;

        /**
         * @param invocation 
         * @virtual
         */
        vfunc_handle_stop(invocation: Gio.DBusMethodInvocation): boolean;

        /**
         * @param arg_old 
         * @param arg_new 
         * @virtual
         */
        vfunc_location_updated(arg_old: string, arg_new: string): void;

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
        set_object(object: Gio.DBusObject | null): void;

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
        vfunc_set_object(object: Gio.DBusObject | null): void;
    }


    namespace LocationProxy {
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
            "notify::accuracy": (pspec: GObject.ParamSpec) => void;
            "notify::altitude": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::heading": (pspec: GObject.ParamSpec) => void;
            "notify::latitude": (pspec: GObject.ParamSpec) => void;
            "notify::longitude": (pspec: GObject.ParamSpec) => void;
            "notify::speed": (pspec: GObject.ParamSpec) => void;
            "notify::timestamp": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, Location.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps {}
    }

    /**
     * The {@link Geoclue.LocationProxy} structure contains only private data and should only be accessed using the provided API.
     * @gir-type Class
     */
    class LocationProxy extends Gio.DBusProxy implements Location, Gio.AsyncInitable<LocationProxy>, Gio.DBusInterface, Gio.Initable {
        static $gtype: GObject.GType<LocationProxy>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LocationProxy.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<LocationProxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_finish(res: Gio.AsyncResult): LocationProxy;

        // Conflicted with Gio.AsyncInitable.new_finish
        static new_finish(...args: never[]): any;

        static new_for_bus_finish(res: Gio.AsyncResult): LocationProxy;

        static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): LocationProxy;

        // Conflicted with Gio.DBusProxy.new_for_bus_sync
        static new_for_bus_sync(...args: never[]): any;

        static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): LocationProxy;

        // Conflicted with Gio.DBusProxy.new_sync
        static new_sync(...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof LocationProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LocationProxy.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof LocationProxy.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LocationProxy.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof LocationProxy.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<LocationProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Location.top_of_page">org.freedesktop.GeoClue2.Location</link>. See `g_dbus_proxy_new()` for more details.
         * 
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_location_proxy_new_finish()` to get the result of the operation.
         * 
         * See `gclue_location_proxy_new_sync()` for the synchronous, blocking version of this constructor.
         * @param connection A {@link Gio.DBusConnection}.
         * @param flags Flags from the {@link Gio.DBusProxyFlags} enumeration.
         * @param name A bus name (well-known or unique) or `null` if `connection` is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<LocationProxy> | null): void;

        /**
         * @param args 
         */
    // Conflicted with Gio.DBusProxy.new
        static ["new"](...args: never[]): any;

        /**
         * Like `gclue_location_proxy_new()` but takes a {@link Gio.BusType} instead of a {@link Gio.DBusConnection}.
         * 
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_location_proxy_new_for_bus_finish()` to get the result of the operation.
         * 
         * See `gclue_location_proxy_new_for_bus_sync()` for the synchronous, blocking version of this constructor.
         * @param bus_type A {@link Gio.BusType}.
         * @param flags Flags from the {@link Gio.DBusProxyFlags} enumeration.
         * @param name A bus name (well-known or unique).
         * @param object_path An object path.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<LocationProxy> | null): void;

        /**
         * @param args 
         */
    // Conflicted with Gio.DBusProxy.new_for_bus
        static new_for_bus(...args: never[]): any;

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Accuracy">"Accuracy"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default 0
          * @category Inherited from Geoclue.Location
         */
        get accuracy(): number;
        set accuracy(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Altitude">"Altitude"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default 0
          * @category Inherited from Geoclue.Location
         */
        get altitude(): number;
        set altitude(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Description">"Description"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
          * @category Inherited from Geoclue.Location
         */
        get description(): string | null;
        set description(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Heading">"Heading"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default 0
          * @category Inherited from Geoclue.Location
         */
        get heading(): number;
        set heading(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Latitude">"Latitude"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default 0
          * @category Inherited from Geoclue.Location
         */
        get latitude(): number;
        set latitude(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Longitude">"Longitude"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default 0
          * @category Inherited from Geoclue.Location
         */
        get longitude(): number;
        set longitude(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Speed">"Speed"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default 0
          * @category Inherited from Geoclue.Location
         */
        get speed(): number;
        set speed(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Timestamp">"Timestamp"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
          * @category Inherited from Geoclue.Location
         */
        get timestamp(): GLib.Variant | null;
        set timestamp(val: GLib.Variant | null);

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
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

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
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

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
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

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
        new_finish(res: Gio.AsyncResult): LocationProxy;

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
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

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
        set_object(object: Gio.DBusObject | null): void;

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
        vfunc_set_object(object: Gio.DBusObject | null): void;

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
        init(cancellable: Gio.Cancellable | null): boolean;

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
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }


    namespace LocationSkeleton {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::accuracy": (pspec: GObject.ParamSpec) => void;
            "notify::altitude": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::heading": (pspec: GObject.ParamSpec) => void;
            "notify::latitude": (pspec: GObject.ParamSpec) => void;
            "notify::longitude": (pspec: GObject.ParamSpec) => void;
            "notify::speed": (pspec: GObject.ParamSpec) => void;
            "notify::timestamp": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, Location.ConstructorProps, Gio.DBusInterface.ConstructorProps {}
    }

    /**
     * The {@link Geoclue.LocationSkeleton} structure contains only private data and should only be accessed using the provided API.
     * @gir-type Class
     */
    class LocationSkeleton extends Gio.DBusInterfaceSkeleton implements Location, Gio.DBusInterface {
        static $gtype: GObject.GType<LocationSkeleton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LocationSkeleton.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<LocationSkeleton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): LocationSkeleton;

        // Signals
        /** @signal */
        connect<K extends keyof LocationSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LocationSkeleton.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof LocationSkeleton.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LocationSkeleton.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof LocationSkeleton.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<LocationSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Accuracy">"Accuracy"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default 0
          * @category Inherited from Geoclue.Location
         */
        get accuracy(): number;
        set accuracy(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Altitude">"Altitude"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default 0
          * @category Inherited from Geoclue.Location
         */
        get altitude(): number;
        set altitude(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Description">"Description"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
          * @category Inherited from Geoclue.Location
         */
        get description(): string | null;
        set description(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Heading">"Heading"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default 0
          * @category Inherited from Geoclue.Location
         */
        get heading(): number;
        set heading(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Latitude">"Latitude"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default 0
          * @category Inherited from Geoclue.Location
         */
        get latitude(): number;
        set latitude(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Longitude">"Longitude"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default 0
          * @category Inherited from Geoclue.Location
         */
        get longitude(): number;
        set longitude(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Speed">"Speed"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default 0
          * @category Inherited from Geoclue.Location
         */
        get speed(): number;
        set speed(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Timestamp">"Timestamp"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
          * @category Inherited from Geoclue.Location
         */
        get timestamp(): GLib.Variant | null;
        set timestamp(val: GLib.Variant | null);

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
        set_object(object: Gio.DBusObject | null): void;

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
        vfunc_set_object(object: Gio.DBusObject | null): void;
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
            "notify::available-accuracy-level": (pspec: GObject.ParamSpec) => void;
            "notify::in-use": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusProxy.ConstructorProps, Manager.ConstructorProps, Gio.AsyncInitable.ConstructorProps, Gio.DBusInterface.ConstructorProps, Gio.Initable.ConstructorProps {}
    }

    /**
     * The {@link Geoclue.ManagerProxy} structure contains only private data and should only be accessed using the provided API.
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

        static new_finish(res: Gio.AsyncResult): ManagerProxy;

        // Conflicted with Gio.AsyncInitable.new_finish
        static new_finish(...args: never[]): any;

        static new_for_bus_finish(res: Gio.AsyncResult): ManagerProxy;

        static new_for_bus_sync(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null): ManagerProxy;

        // Conflicted with Gio.DBusProxy.new_for_bus_sync
        static new_for_bus_sync(...args: never[]): any;

        static new_sync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null): ManagerProxy;

        // Conflicted with Gio.DBusProxy.new_sync
        static new_sync(...args: never[]): any;

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
         * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Manager.top_of_page">org.freedesktop.GeoClue2.Manager</link>. See `g_dbus_proxy_new()` for more details.
         * 
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_proxy_new_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_proxy_new_sync()` for the synchronous, blocking version of this constructor.
         * @param connection A {@link Gio.DBusConnection}.
         * @param flags Flags from the {@link Gio.DBusProxyFlags} enumeration.
         * @param name A bus name (well-known or unique) or `null` if `connection` is not a message bus connection.
         * @param object_path An object path.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        static ["new"](connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<ManagerProxy> | null): void;

        /**
         * @param args 
         */
    // Conflicted with Gio.DBusProxy.new
        static ["new"](...args: never[]): any;

        /**
         * Like `gclue_manager_proxy_new()` but takes a {@link Gio.BusType} instead of a {@link Gio.DBusConnection}.
         * 
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_proxy_new_for_bus_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_proxy_new_for_bus_sync()` for the synchronous, blocking version of this constructor.
         * @param bus_type A {@link Gio.BusType}.
         * @param flags Flags from the {@link Gio.DBusProxyFlags} enumeration.
         * @param name A bus name (well-known or unique).
         * @param object_path An object path.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied.
         */
        static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<ManagerProxy> | null): void;

        /**
         * @param args 
         */
    // Conflicted with Gio.DBusProxy.new_for_bus
        static new_for_bus(...args: never[]): any;

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.AvailableAccuracyLevel">"AvailableAccuracyLevel"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default 0
          * @category Inherited from Geoclue.Manager
         */
        get available_accuracy_level(): number;
        set available_accuracy_level(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.AvailableAccuracyLevel">"AvailableAccuracyLevel"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default 0
          * @category Inherited from Geoclue.Manager
         */
        get availableAccuracyLevel(): number;
        set availableAccuracyLevel(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.InUse">"InUse"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default false
          * @category Inherited from Geoclue.Manager
         */
        get in_use(): boolean;
        set in_use(val: boolean);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.InUse">"InUse"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default false
          * @category Inherited from Geoclue.Manager
         */
        get inUse(): boolean;
        set inUse(val: boolean);

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.AddAgent">AddAgent()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_call_add_agent_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_call_add_agent_sync()` for the synchronous, blocking version of this method.
         * @param arg_id Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_add_agent(arg_id: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.AddAgent">AddAgent()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_call_add_agent_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_call_add_agent_sync()` for the synchronous, blocking version of this method.
         * @param arg_id Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_add_agent(arg_id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.AddAgent">AddAgent()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_call_add_agent_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_call_add_agent_sync()` for the synchronous, blocking version of this method.
         * @param arg_id Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_add_agent(arg_id: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes an operation started with `gclue_manager_call_add_agent()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gclue_manager_call_add_agent()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_add_agent_finish(res: Gio.AsyncResult): boolean;

        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.AddAgent">AddAgent()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         * 
         * See `gclue_manager_call_add_agent()` for the asynchronous version of this method.
         * @param arg_id Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_add_agent_sync(arg_id: string, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.CreateClient">CreateClient()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_call_create_client_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_call_create_client_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_create_client(cancellable: Gio.Cancellable | null): globalThis.Promise<string>;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.CreateClient">CreateClient()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_call_create_client_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_call_create_client_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_create_client(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.CreateClient">CreateClient()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_call_create_client_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_call_create_client_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_create_client(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;

        /**
         * Finishes an operation started with `gclue_manager_call_create_client()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gclue_manager_call_create_client()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_create_client_finish(res: Gio.AsyncResult): [boolean, string];

        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.CreateClient">CreateClient()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         * 
         * See `gclue_manager_call_create_client()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_create_client_sync(cancellable: Gio.Cancellable | null): [boolean, string];

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.DeleteClient">DeleteClient()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_call_delete_client_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_call_delete_client_sync()` for the synchronous, blocking version of this method.
         * @param arg_client Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_delete_client(arg_client: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.DeleteClient">DeleteClient()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_call_delete_client_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_call_delete_client_sync()` for the synchronous, blocking version of this method.
         * @param arg_client Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_delete_client(arg_client: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.DeleteClient">DeleteClient()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_call_delete_client_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_call_delete_client_sync()` for the synchronous, blocking version of this method.
         * @param arg_client Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_delete_client(arg_client: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes an operation started with `gclue_manager_call_delete_client()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gclue_manager_call_delete_client()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_delete_client_finish(res: Gio.AsyncResult): boolean;

        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.DeleteClient">DeleteClient()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         * 
         * See `gclue_manager_call_delete_client()` for the asynchronous version of this method.
         * @param arg_client Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_delete_client_sync(arg_client: string, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.GetClient">GetClient()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_call_get_client_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_call_get_client_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_get_client(cancellable: Gio.Cancellable | null): globalThis.Promise<string>;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.GetClient">GetClient()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_call_get_client_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_call_get_client_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_get_client(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.GetClient">GetClient()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_call_get_client_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_call_get_client_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_get_client(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;

        /**
         * Finishes an operation started with `gclue_manager_call_get_client()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gclue_manager_call_get_client()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_get_client_finish(res: Gio.AsyncResult): [boolean, string];

        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.GetClient">GetClient()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         * 
         * See `gclue_manager_call_get_client()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_get_client_sync(cancellable: Gio.Cancellable | null): [boolean, string];

        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.AddAgent">AddAgent()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         * 
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_add_agent(invocation: Gio.DBusMethodInvocation): void;

        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.CreateClient">CreateClient()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         * 
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param client Parameter to return.
         */
        complete_create_client(invocation: Gio.DBusMethodInvocation, client: string): void;

        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.DeleteClient">DeleteClient()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         * 
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_delete_client(invocation: Gio.DBusMethodInvocation): void;

        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.GetClient">GetClient()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         * 
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param client Parameter to return.
         */
        complete_get_client(invocation: Gio.DBusMethodInvocation, client: string): void;

        /**
         * @param invocation 
         * @param arg_id 
         * @virtual
         */
        vfunc_handle_add_agent(invocation: Gio.DBusMethodInvocation, arg_id: string): boolean;

        /**
         * @param invocation 
         * @virtual
         */
        vfunc_handle_create_client(invocation: Gio.DBusMethodInvocation): boolean;

        /**
         * @param invocation 
         * @param arg_client 
         * @virtual
         */
        vfunc_handle_delete_client(invocation: Gio.DBusMethodInvocation, arg_client: string): boolean;

        /**
         * @param invocation 
         * @virtual
         */
        vfunc_handle_get_client(invocation: Gio.DBusMethodInvocation): boolean;

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
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

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
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

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
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

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
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

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
        set_object(object: Gio.DBusObject | null): void;

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
        vfunc_set_object(object: Gio.DBusObject | null): void;

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
        init(cancellable: Gio.Cancellable | null): boolean;

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
        vfunc_init(cancellable: Gio.Cancellable | null): boolean;
    }


    namespace ManagerSkeleton {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            "notify::g-flags": (pspec: GObject.ParamSpec) => void;
            "notify::available-accuracy-level": (pspec: GObject.ParamSpec) => void;
            "notify::in-use": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.DBusInterfaceSkeleton.ConstructorProps, Manager.ConstructorProps, Gio.DBusInterface.ConstructorProps {}
    }

    /**
     * The {@link Geoclue.ManagerSkeleton} structure contains only private data and should only be accessed using the provided API.
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

        static ["new"](): ManagerSkeleton;

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
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.AvailableAccuracyLevel">"AvailableAccuracyLevel"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default 0
          * @category Inherited from Geoclue.Manager
         */
        get available_accuracy_level(): number;
        set available_accuracy_level(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.AvailableAccuracyLevel">"AvailableAccuracyLevel"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default 0
          * @category Inherited from Geoclue.Manager
         */
        get availableAccuracyLevel(): number;
        set availableAccuracyLevel(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.InUse">"InUse"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default false
          * @category Inherited from Geoclue.Manager
         */
        get in_use(): boolean;
        set in_use(val: boolean);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.InUse">"InUse"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default false
          * @category Inherited from Geoclue.Manager
         */
        get inUse(): boolean;
        set inUse(val: boolean);

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.AddAgent">AddAgent()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_call_add_agent_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_call_add_agent_sync()` for the synchronous, blocking version of this method.
         * @param arg_id Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_add_agent(arg_id: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.AddAgent">AddAgent()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_call_add_agent_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_call_add_agent_sync()` for the synchronous, blocking version of this method.
         * @param arg_id Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_add_agent(arg_id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.AddAgent">AddAgent()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_call_add_agent_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_call_add_agent_sync()` for the synchronous, blocking version of this method.
         * @param arg_id Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_add_agent(arg_id: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes an operation started with `gclue_manager_call_add_agent()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gclue_manager_call_add_agent()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_add_agent_finish(res: Gio.AsyncResult): boolean;

        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.AddAgent">AddAgent()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         * 
         * See `gclue_manager_call_add_agent()` for the asynchronous version of this method.
         * @param arg_id Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_add_agent_sync(arg_id: string, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.CreateClient">CreateClient()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_call_create_client_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_call_create_client_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_create_client(cancellable: Gio.Cancellable | null): globalThis.Promise<string>;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.CreateClient">CreateClient()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_call_create_client_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_call_create_client_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_create_client(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.CreateClient">CreateClient()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_call_create_client_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_call_create_client_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_create_client(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;

        /**
         * Finishes an operation started with `gclue_manager_call_create_client()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gclue_manager_call_create_client()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_create_client_finish(res: Gio.AsyncResult): [boolean, string];

        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.CreateClient">CreateClient()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         * 
         * See `gclue_manager_call_create_client()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_create_client_sync(cancellable: Gio.Cancellable | null): [boolean, string];

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.DeleteClient">DeleteClient()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_call_delete_client_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_call_delete_client_sync()` for the synchronous, blocking version of this method.
         * @param arg_client Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_delete_client(arg_client: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.DeleteClient">DeleteClient()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_call_delete_client_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_call_delete_client_sync()` for the synchronous, blocking version of this method.
         * @param arg_client Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_delete_client(arg_client: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.DeleteClient">DeleteClient()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_call_delete_client_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_call_delete_client_sync()` for the synchronous, blocking version of this method.
         * @param arg_client Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_delete_client(arg_client: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes an operation started with `gclue_manager_call_delete_client()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gclue_manager_call_delete_client()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_delete_client_finish(res: Gio.AsyncResult): boolean;

        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.DeleteClient">DeleteClient()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         * 
         * See `gclue_manager_call_delete_client()` for the asynchronous version of this method.
         * @param arg_client Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_delete_client_sync(arg_client: string, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.GetClient">GetClient()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_call_get_client_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_call_get_client_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_get_client(cancellable: Gio.Cancellable | null): globalThis.Promise<string>;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.GetClient">GetClient()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_call_get_client_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_call_get_client_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_get_client(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.GetClient">GetClient()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_call_get_client_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_call_get_client_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_get_client(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;

        /**
         * Finishes an operation started with `gclue_manager_call_get_client()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gclue_manager_call_get_client()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_get_client_finish(res: Gio.AsyncResult): [boolean, string];

        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.GetClient">GetClient()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         * 
         * See `gclue_manager_call_get_client()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_get_client_sync(cancellable: Gio.Cancellable | null): [boolean, string];

        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.AddAgent">AddAgent()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         * 
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_add_agent(invocation: Gio.DBusMethodInvocation): void;

        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.CreateClient">CreateClient()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         * 
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param client Parameter to return.
         */
        complete_create_client(invocation: Gio.DBusMethodInvocation, client: string): void;

        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.DeleteClient">DeleteClient()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         * 
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_delete_client(invocation: Gio.DBusMethodInvocation): void;

        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.GetClient">GetClient()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         * 
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param client Parameter to return.
         */
        complete_get_client(invocation: Gio.DBusMethodInvocation, client: string): void;

        /**
         * @param invocation 
         * @param arg_id 
         * @virtual
         */
        vfunc_handle_add_agent(invocation: Gio.DBusMethodInvocation, arg_id: string): boolean;

        /**
         * @param invocation 
         * @virtual
         */
        vfunc_handle_create_client(invocation: Gio.DBusMethodInvocation): boolean;

        /**
         * @param invocation 
         * @param arg_client 
         * @virtual
         */
        vfunc_handle_delete_client(invocation: Gio.DBusMethodInvocation, arg_client: string): boolean;

        /**
         * @param invocation 
         * @virtual
         */
        vfunc_handle_get_client(invocation: Gio.DBusMethodInvocation): boolean;

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
        set_object(object: Gio.DBusObject | null): void;

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
        vfunc_set_object(object: Gio.DBusObject | null): void;
    }


    namespace Simple {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::accuracy-level": (pspec: GObject.ParamSpec) => void;
            "notify::client": (pspec: GObject.ParamSpec) => void;
            "notify::desktop-id": (pspec: GObject.ParamSpec) => void;
            "notify::distance-threshold": (pspec: GObject.ParamSpec) => void;
            "notify::location": (pspec: GObject.ParamSpec) => void;
            "notify::time-threshold": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.AsyncInitable.ConstructorProps {
            accuracy_level: AccuracyLevel;
            accuracyLevel: AccuracyLevel;
            client: ClientProxy;
            desktop_id: string;
            desktopId: string;
            distance_threshold: number;
            distanceThreshold: number;
            location: LocationProxy;
            time_threshold: number;
            timeThreshold: number;
        }
    }

    /**
     * @gir-type Class
     */
    class Simple extends GObject.Object implements Gio.AsyncInitable<Simple> {
        static $gtype: GObject.GType<Simple>;

        // Properties
        /**
         * The requested maximum accuracy level.
         * @construct-only
         * @default Geoclue.AccuracyLevel.NONE
         */
        set accuracy_level(val: AccuracyLevel);

        /**
         * The requested maximum accuracy level.
         * @construct-only
         * @default Geoclue.AccuracyLevel.NONE
         */
        set accuracyLevel(val: AccuracyLevel);

        /**
         * The client proxy. This is `null` if `simple` is not using a client proxy
         * (i-e when inside the Flatpak sandbox).
         * @read-only
         */
        get client(): ClientProxy;

        /**
         * The Desktop ID of the application.
         * @construct-only
         * @default null
         */
        set desktop_id(val: string);

        /**
         * The Desktop ID of the application.
         * @construct-only
         * @default null
         */
        set desktopId(val: string);

        /**
         * The current distance threshold in meters. This value is used by the
         * service when it gets new location info. If the distance moved is
         * below the threshold, it won't emit the LocationUpdated signal.
         * 
         * When set to 0 (default), it always emits the signal.
         * @construct-only
         * @default 0
         */
        get distance_threshold(): number;

        /**
         * The current distance threshold in meters. This value is used by the
         * service when it gets new location info. If the distance moved is
         * below the threshold, it won't emit the LocationUpdated signal.
         * 
         * When set to 0 (default), it always emits the signal.
         * @construct-only
         * @default 0
         */
        get distanceThreshold(): number;

        /**
         * The current location.
         * @read-only
         */
        get location(): LocationProxy;

        /**
         * The current time threshold in seconds. This value is used by the
         * service when it gets new location info. If the time passed is
         * below the threshold, it won't emit the LocationUpdated signal.
         * 
         * When set to 0 (default), it always emits the signal.
         * @construct-only
         * @default 0
         */
        get time_threshold(): number;

        /**
         * The current time threshold in seconds. This value is used by the
         * service when it gets new location info. If the time passed is
         * below the threshold, it won't emit the LocationUpdated signal.
         * 
         * When set to 0 (default), it always emits the signal.
         * @construct-only
         * @default 0
         */
        get timeThreshold(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Simple.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Simple.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_finish(result: Gio.AsyncResult): Simple;

        // Conflicted with Gio.AsyncInitable.new_finish
        static new_finish(...args: never[]): any;

        static new_sync(desktop_id: string, accuracy_level: AccuracyLevel, cancellable: Gio.Cancellable | null): Simple;

        static new_with_thresholds_finish(result: Gio.AsyncResult): Simple;

        static new_with_thresholds_sync(desktop_id: string, accuracy_level: AccuracyLevel, time_threshold: number, distance_threshold: number, cancellable: Gio.Cancellable | null): Simple;

        // Signals
        /** @signal */
        connect<K extends keyof Simple.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Simple.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Simple.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Simple.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Simple.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Simple.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Asynchronously creates a {@link Geoclue.Simple} instance. Use
         * `gclue_simple_new_finish`() to get the created {@link Geoclue.Simple} instance.
         * 
         * See `gclue_simple_new_sync`() for the synchronous, blocking version
         * of this function.
         * @param desktop_id The desktop file id (the basename of the desktop file).
         * @param accuracy_level The requested accuracy level as {@link Geoclue.AccuracyLevel}.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the results are ready.
         */
        static ["new"](desktop_id: string, accuracy_level: AccuracyLevel, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Simple> | null): void;

        /**
         * Asynchronously creates a {@link Geoclue.Simple} instance. Use
         * `gclue_simple_new_with_thresholds_finish`() to get the created {@link Geoclue.Simple} instance.
         * 
         * See `gclue_simple_new_with_thresholds_sync`() for the synchronous,
         * blocking version of this function.
         * @param desktop_id The desktop file id (the basename of the desktop file).
         * @param accuracy_level The requested accuracy level as {@link Geoclue.AccuracyLevel}.
         * @param time_threshold Time threshold in seconds, 0 for no limit.
         * @param distance_threshold Distance threshold in meters, 0 for no limit.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the results are ready.
         */
        static new_with_thresholds(desktop_id: string, accuracy_level: AccuracyLevel, time_threshold: number, distance_threshold: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Simple> | null): void;

        // Methods
        /**
         * Gets the client proxy, or `null` if `simple` is not using a client proxy (i-e
         * when inside the Flatpak sandbox).
         * @returns The client object.
         */
        get_client(): ClientProxy;

        /**
         * Gets the current location.
         * @returns The last known location as {@link Geoclue.Location}.
         */
        get_location(): Location;

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
        init_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

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
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

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
        init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

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
        new_finish(res: Gio.AsyncResult): Simple;

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
        vfunc_init_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Finishes asynchronous initialization and returns the result.
         * See `g_async_initable_init_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_init_finish(res: Gio.AsyncResult): boolean;
    }


    /**
     * @gir-type Alias
     */
    type ClientIface = typeof Client;

    /**
     * @gir-type Alias
     */
    type ClientProxyClass = typeof ClientProxy;

    /**
     * @gir-type Struct
     */
    abstract class ClientProxyPrivate {
        static $gtype: GObject.GType<ClientProxyPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ClientSkeletonClass = typeof ClientSkeleton;

    /**
     * @gir-type Struct
     */
    abstract class ClientSkeletonPrivate {
        static $gtype: GObject.GType<ClientSkeletonPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type LocationIface = typeof Location;

    /**
     * @gir-type Alias
     */
    type LocationProxyClass = typeof LocationProxy;

    /**
     * @gir-type Struct
     */
    abstract class LocationProxyPrivate {
        static $gtype: GObject.GType<LocationProxyPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type LocationSkeletonClass = typeof LocationSkeleton;

    /**
     * @gir-type Struct
     */
    abstract class LocationSkeletonPrivate {
        static $gtype: GObject.GType<LocationSkeletonPrivate>;
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
    type SimpleClass = typeof Simple;

    /**
     * @gir-type Struct
     */
    abstract class SimplePrivate {
        static $gtype: GObject.GType<SimplePrivate>;
    }


    namespace Client {
        /**
         * Interface for implementing Client.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param invocation 
             * @virtual
             */
            vfunc_handle_start(invocation: Gio.DBusMethodInvocation): boolean;

            /**
             * @param invocation 
             * @virtual
             */
            vfunc_handle_stop(invocation: Gio.DBusMethodInvocation): boolean;

            /**
             * @param arg_old 
             * @param arg_new 
             * @virtual
             */
            vfunc_location_updated(arg_old: string, arg_new: string): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            active: boolean;
            desktop_id: string | null;
            desktopId: string | null;
            distance_threshold: number;
            distanceThreshold: number;
            location: string | null;
            requested_accuracy_level: number;
            requestedAccuracyLevel: number;
            time_threshold: number;
            timeThreshold: number;
        }
    }

    export interface ClientNamespace {
        $gtype: GObject.GType<Client>;
        prototype: Client;
        /**
        * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Client.top_of_page">org.freedesktop.GeoClue2.Client</link> D-Bus interface.
        */
        interface_info(): Gio.DBusInterfaceInfo;
        /**
        * Overrides all {@link GObject.Object} properties in the {@link Geoclue.Client} interface for a concrete class.
        * The properties are overridden in the order they are defined.
        * @param klass The class structure for a {@link GObject.Object} derived class.
        * @param property_id_begin The property id to assign to the first overridden property.
        */
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    /**
     * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Client.top_of_page">org.freedesktop.GeoClue2.Client</link>.
     * @gir-type Interface
     */
    interface Client extends GObject.Object, Client.Interface {

        // Properties
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.Active">"Active"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default false
         */
        get active(): boolean;
        set active(val: boolean);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DesktopId">"DesktopId"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         * @default null
         */
        get desktop_id(): string | null;
        set desktop_id(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DesktopId">"DesktopId"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         * @default null
         */
        get desktopId(): string | null;
        set desktopId(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DistanceThreshold">"DistanceThreshold"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         * @default 0
         */
        get distance_threshold(): number;
        set distance_threshold(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.DistanceThreshold">"DistanceThreshold"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         * @default 0
         */
        get distanceThreshold(): number;
        set distanceThreshold(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.Location">"Location"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
         */
        get location(): string | null;
        set location(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.RequestedAccuracyLevel">"RequestedAccuracyLevel"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         * @default 0
         */
        get requested_accuracy_level(): number;
        set requested_accuracy_level(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.RequestedAccuracyLevel">"RequestedAccuracyLevel"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         * @default 0
         */
        get requestedAccuracyLevel(): number;
        set requestedAccuracyLevel(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.TimeThreshold">"TimeThreshold"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         * @default 0
         */
        get time_threshold(): number;
        set time_threshold(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Client.TimeThreshold">"TimeThreshold"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         * @default 0
         */
        get timeThreshold(): number;
        set timeThreshold(val: number);

        // Methods
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Start">Start()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_client_call_start_finish()` to get the result of the operation.
         * 
         * See `gclue_client_call_start_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_start(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Start">Start()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_client_call_start_finish()` to get the result of the operation.
         * 
         * See `gclue_client_call_start_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_start(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Start">Start()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_client_call_start_finish()` to get the result of the operation.
         * 
         * See `gclue_client_call_start_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_start(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes an operation started with `gclue_client_call_start()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gclue_client_call_start()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_start_finish(res: Gio.AsyncResult): boolean;

        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Start">Start()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         * 
         * See `gclue_client_call_start()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_start_sync(cancellable: Gio.Cancellable | null): boolean;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Stop">Stop()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_client_call_stop_finish()` to get the result of the operation.
         * 
         * See `gclue_client_call_stop_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_stop(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Stop">Stop()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_client_call_stop_finish()` to get the result of the operation.
         * 
         * See `gclue_client_call_stop_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_stop(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Stop">Stop()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_client_call_stop_finish()` to get the result of the operation.
         * 
         * See `gclue_client_call_stop_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_stop(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes an operation started with `gclue_client_call_stop()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gclue_client_call_stop()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_stop_finish(res: Gio.AsyncResult): boolean;

        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Stop">Stop()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         * 
         * See `gclue_client_call_stop()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_stop_sync(cancellable: Gio.Cancellable | null): boolean;

        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Start">Start()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         * 
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_start(invocation: Gio.DBusMethodInvocation): void;

        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Client.Stop">Stop()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         * 
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_stop(invocation: Gio.DBusMethodInvocation): void;

        /**
         * Emits the <link linkend="gdbus-signal-org-freedesktop-GeoClue2-Client.LocationUpdated">"LocationUpdated"</link> D-Bus signal.
         * @param arg_old Argument to pass with the signal.
         * @param arg_new Argument to pass with the signal.
         */
        emit_location_updated(arg_old: string, arg_new: string): void;
    }


    export const Client: ClientNamespace & {
        new (): Client; // This allows `obj instanceof Client`
    };

    namespace Location {

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            accuracy: number;
            altitude: number;
            description: string | null;
            heading: number;
            latitude: number;
            longitude: number;
            speed: number;
            timestamp: GLib.Variant | null;
        }
    }

    export interface LocationNamespace {
        $gtype: GObject.GType<Location>;
        prototype: Location;
        /**
        * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Location.top_of_page">org.freedesktop.GeoClue2.Location</link> D-Bus interface.
        */
        interface_info(): Gio.DBusInterfaceInfo;
        /**
        * Overrides all {@link GObject.Object} properties in the {@link Geoclue.Location} interface for a concrete class.
        * The properties are overridden in the order they are defined.
        * @param klass The class structure for a {@link GObject.Object} derived class.
        * @param property_id_begin The property id to assign to the first overridden property.
        */
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    /**
     * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Location.top_of_page">org.freedesktop.GeoClue2.Location</link>.
     * @gir-type Interface
     */
    interface Location extends GObject.Object {

        // Properties
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Accuracy">"Accuracy"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default 0
         */
        get accuracy(): number;
        set accuracy(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Altitude">"Altitude"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default 0
         */
        get altitude(): number;
        set altitude(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Description">"Description"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default null
         */
        get description(): string | null;
        set description(val: string | null);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Heading">"Heading"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default 0
         */
        get heading(): number;
        set heading(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Latitude">"Latitude"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default 0
         */
        get latitude(): number;
        set latitude(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Longitude">"Longitude"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default 0
         */
        get longitude(): number;
        set longitude(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Speed">"Speed"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default 0
         */
        get speed(): number;
        set speed(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Location.Timestamp">"Timestamp"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get timestamp(): GLib.Variant | null;
        set timestamp(val: GLib.Variant | null);
    }


    export const Location: LocationNamespace & {
        new (): Location; // This allows `obj instanceof Location`
    };

    namespace Manager {
        /**
         * Interface for implementing Manager.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * @param invocation 
             * @param arg_id 
             * @virtual
             */
            vfunc_handle_add_agent(invocation: Gio.DBusMethodInvocation, arg_id: string): boolean;

            /**
             * @param invocation 
             * @virtual
             */
            vfunc_handle_create_client(invocation: Gio.DBusMethodInvocation): boolean;

            /**
             * @param invocation 
             * @param arg_client 
             * @virtual
             */
            vfunc_handle_delete_client(invocation: Gio.DBusMethodInvocation, arg_client: string): boolean;

            /**
             * @param invocation 
             * @virtual
             */
            vfunc_handle_get_client(invocation: Gio.DBusMethodInvocation): boolean;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            available_accuracy_level: number;
            availableAccuracyLevel: number;
            in_use: boolean;
            inUse: boolean;
        }
    }

    export interface ManagerNamespace {
        $gtype: GObject.GType<Manager>;
        prototype: Manager;
        /**
        * Gets a machine-readable description of the <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Manager.top_of_page">org.freedesktop.GeoClue2.Manager</link> D-Bus interface.
        */
        interface_info(): Gio.DBusInterfaceInfo;
        /**
        * Overrides all {@link GObject.Object} properties in the {@link Geoclue.Manager} interface for a concrete class.
        * The properties are overridden in the order they are defined.
        * @param klass The class structure for a {@link GObject.Object} derived class.
        * @param property_id_begin The property id to assign to the first overridden property.
        */
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    /**
     * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-freedesktop-GeoClue2-Manager.top_of_page">org.freedesktop.GeoClue2.Manager</link>.
     * @gir-type Interface
     */
    interface Manager extends GObject.Object, Manager.Interface {

        // Properties
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.AvailableAccuracyLevel">"AvailableAccuracyLevel"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default 0
         */
        get available_accuracy_level(): number;
        set available_accuracy_level(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.AvailableAccuracyLevel">"AvailableAccuracyLevel"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default 0
         */
        get availableAccuracyLevel(): number;
        set availableAccuracyLevel(val: number);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.InUse">"InUse"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default false
         */
        get in_use(): boolean;
        set in_use(val: boolean);

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-freedesktop-GeoClue2-Manager.InUse">"InUse"</link>.
         * 
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @default false
         */
        get inUse(): boolean;
        set inUse(val: boolean);

        // Methods
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.AddAgent">AddAgent()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_call_add_agent_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_call_add_agent_sync()` for the synchronous, blocking version of this method.
         * @param arg_id Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_add_agent(arg_id: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.AddAgent">AddAgent()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_call_add_agent_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_call_add_agent_sync()` for the synchronous, blocking version of this method.
         * @param arg_id Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_add_agent(arg_id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.AddAgent">AddAgent()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_call_add_agent_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_call_add_agent_sync()` for the synchronous, blocking version of this method.
         * @param arg_id Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_add_agent(arg_id: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes an operation started with `gclue_manager_call_add_agent()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gclue_manager_call_add_agent()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_add_agent_finish(res: Gio.AsyncResult): boolean;

        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.AddAgent">AddAgent()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         * 
         * See `gclue_manager_call_add_agent()` for the asynchronous version of this method.
         * @param arg_id Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_add_agent_sync(arg_id: string, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.CreateClient">CreateClient()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_call_create_client_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_call_create_client_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_create_client(cancellable: Gio.Cancellable | null): globalThis.Promise<string>;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.CreateClient">CreateClient()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_call_create_client_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_call_create_client_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_create_client(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.CreateClient">CreateClient()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_call_create_client_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_call_create_client_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_create_client(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;

        /**
         * Finishes an operation started with `gclue_manager_call_create_client()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gclue_manager_call_create_client()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_create_client_finish(res: Gio.AsyncResult): [boolean, string];

        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.CreateClient">CreateClient()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         * 
         * See `gclue_manager_call_create_client()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_create_client_sync(cancellable: Gio.Cancellable | null): [boolean, string];

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.DeleteClient">DeleteClient()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_call_delete_client_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_call_delete_client_sync()` for the synchronous, blocking version of this method.
         * @param arg_client Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_delete_client(arg_client: string, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.DeleteClient">DeleteClient()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_call_delete_client_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_call_delete_client_sync()` for the synchronous, blocking version of this method.
         * @param arg_client Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_delete_client(arg_client: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.DeleteClient">DeleteClient()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_call_delete_client_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_call_delete_client_sync()` for the synchronous, blocking version of this method.
         * @param arg_client Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_delete_client(arg_client: string, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes an operation started with `gclue_manager_call_delete_client()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gclue_manager_call_delete_client()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_delete_client_finish(res: Gio.AsyncResult): boolean;

        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.DeleteClient">DeleteClient()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         * 
         * See `gclue_manager_call_delete_client()` for the asynchronous version of this method.
         * @param arg_client Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_delete_client_sync(arg_client: string, cancellable: Gio.Cancellable | null): boolean;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.GetClient">GetClient()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_call_get_client_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_call_get_client_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_get_client(cancellable: Gio.Cancellable | null): globalThis.Promise<string>;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.GetClient">GetClient()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_call_get_client_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_call_get_client_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_get_client(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.GetClient">GetClient()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gclue_manager_call_get_client_finish()` to get the result of the operation.
         * 
         * See `gclue_manager_call_get_client_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_get_client(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string> | void;

        /**
         * Finishes an operation started with `gclue_manager_call_get_client()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gclue_manager_call_get_client()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_get_client_finish(res: Gio.AsyncResult): [boolean, string];

        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.GetClient">GetClient()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         * 
         * See `gclue_manager_call_get_client()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_get_client_sync(cancellable: Gio.Cancellable | null): [boolean, string];

        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.AddAgent">AddAgent()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         * 
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_add_agent(invocation: Gio.DBusMethodInvocation): void;

        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.CreateClient">CreateClient()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         * 
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param client Parameter to return.
         */
        complete_create_client(invocation: Gio.DBusMethodInvocation, client: string): void;

        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.DeleteClient">DeleteClient()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         * 
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_delete_client(invocation: Gio.DBusMethodInvocation): void;

        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-freedesktop-GeoClue2-Manager.GetClient">GetClient()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         * 
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param client Parameter to return.
         */
        complete_get_client(invocation: Gio.DBusMethodInvocation, client: string): void;
    }


    export const Manager: ManagerNamespace & {
        new (): Manager; // This allows `obj instanceof Manager`
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

export default Geoclue;

// END
