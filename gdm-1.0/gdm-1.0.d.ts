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
    function goto_login_session_sync(cancellable?: Gio.Cancellable | null): boolean;
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-DisplayManager-Greeter.top_of_page">org.gnome.DisplayManager.Greeter</link> D-Bus interface.
     * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
     */
    function greeter_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all {@link GObject.Object} properties in the {@link Gdm.Greeter} interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a {@link GObject.Object} derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function greeter_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-DisplayManager-Manager.top_of_page">org.gnome.DisplayManager.Manager</link> D-Bus interface.
     * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
     */
    function manager_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all {@link GObject.Object} properties in the {@link Gdm.Manager} interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a {@link GObject.Object} derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function manager_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-DisplayManager-UserVerifier-ChoiceList.top_of_page">org.gnome.DisplayManager.UserVerifier.ChoiceList</link> D-Bus interface.
     * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
     */
    function user_verifier_choice_list_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all {@link GObject.Object} properties in the {@link Gdm.UserVerifierChoiceList} interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a {@link GObject.Object} derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function user_verifier_choice_list_override_properties(
        klass: typeof GObject.Object,
        property_id_begin: number,
    ): number;
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-DisplayManager-UserVerifier-CustomJSON.top_of_page">org.gnome.DisplayManager.UserVerifier.CustomJSON</link> D-Bus interface.
     * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
     */
    function user_verifier_custom_json_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all {@link GObject.Object} properties in the {@link Gdm.UserVerifierCustomJSON} interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a {@link GObject.Object} derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function user_verifier_custom_json_override_properties(
        klass: typeof GObject.Object,
        property_id_begin: number,
    ): number;
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-DisplayManager-UserVerifier.top_of_page">org.gnome.DisplayManager.UserVerifier</link> D-Bus interface.
     * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
     */
    function user_verifier_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all {@link GObject.Object} properties in the {@link Gdm.UserVerifier} interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a {@link GObject.Object} derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function user_verifier_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-DisplayManager-WorkerManager.top_of_page">org.gnome.DisplayManager.WorkerManager</link> D-Bus interface.
     * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
     */
    function worker_manager_interface_info(): Gio.DBusInterfaceInfo;
    /**
     * Overrides all {@link GObject.Object} properties in the {@link Gdm.WorkerManager} interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a {@link GObject.Object} derived class.
     * @param property_id_begin The property id to assign to the first overridden property.
     * @returns The last property id.
     */
    function worker_manager_override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    namespace Client {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
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

        static ['new'](): Client;

        // Signals

        /** @signal */
        connect<K extends keyof Client.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Client.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Client.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Client.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static error_quark(): GLib.Quark;

        // Methods

        /**
         * Gets GDM's enabled pam extensions.  Currently, only
         * `org.gnome.DisplayManager.UserVerifier.ChoiceList` and
         * `org.gnome.DisplayManager.UserVerifier.CustomJSON` are supported.
         * @returns a list of extensions
         */
        get_enabled_extensions(): string[];
        /**
         * Gets a {@link Gdm.Greeter} object that can be used to
         * verify a user's local account.
         * @param cancellable a {@link Gio.Cancellable}
         */
        get_greeter(cancellable?: Gio.Cancellable | null): globalThis.Promise<Greeter>;
        /**
         * Gets a {@link Gdm.Greeter} object that can be used to
         * verify a user's local account.
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_greeter(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Gets a {@link Gdm.Greeter} object that can be used to
         * verify a user's local account.
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_greeter(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Greeter> | void;
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
        get_greeter_sync(cancellable?: Gio.Cancellable | null): Greeter;
        /**
         * Gets a {@link Gdm.UserVerifier} object that can be used to
         * verify a user's local account.
         * @param cancellable a {@link Gio.Cancellable}
         */
        get_user_verifier(cancellable?: Gio.Cancellable | null): globalThis.Promise<UserVerifier>;
        /**
         * Gets a {@link Gdm.UserVerifier} object that can be used to
         * verify a user's local account.
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_user_verifier(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Gets a {@link Gdm.UserVerifier} object that can be used to
         * verify a user's local account.
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        get_user_verifier(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<UserVerifier> | void;
        /**
         * Gets a {@link Gdm.UserVerifierChoiceList} object that can be used to
         * verify a user's local account.
         * @returns {@link Gdm.UserVerifierChoiceList} or `null` if user verifier isn't yet fetched, or daemon doesn't support choice lists
         */
        get_user_verifier_choice_list(): UserVerifierChoiceList;
        /**
         * Gets a {@link Gdm.UserVerifierCustomJSON} object that can be used to
         * verify a user's local account.
         * @returns {@link Gdm.UserVerifierCustomJSON} or `null` if user verifier isn't yet fetched, or daemon doesn't support the custom JSON protocol
         */
        get_user_verifier_custom_json(): UserVerifierCustomJSON;
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
        get_user_verifier_sync(cancellable?: Gio.Cancellable | null): UserVerifier;
        /**
         * Gets a {@link Gdm.UserVerifier} object that can be used to
         * reauthenticate an already logged in user.
         * @param username user to reauthenticate
         * @param cancellable a {@link Gio.Cancellable}
         */
        open_reauthentication_channel(
            username: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<UserVerifier>;
        /**
         * Gets a {@link Gdm.UserVerifier} object that can be used to
         * reauthenticate an already logged in user.
         * @param username user to reauthenticate
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        open_reauthentication_channel(
            username: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Gets a {@link Gdm.UserVerifier} object that can be used to
         * reauthenticate an already logged in user.
         * @param username user to reauthenticate
         * @param cancellable a {@link Gio.Cancellable}
         * @param callback a {@link Gio.AsyncReadyCallback} to call when the request is satisfied
         */
        open_reauthentication_channel(
            username: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<UserVerifier> | void;
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
        open_reauthentication_channel_sync(username: string, cancellable?: Gio.Cancellable | null): UserVerifier;
        /**
         * Enables GDM's pam extensions.  Currently, only
         * `org.gnome.DisplayManager.UserVerifier.ChoiceList` and
         * `org.gnome.DisplayManager.UserVerifier.CustomJSON` are supported.
         * @param extensions a list of extensions
         */
        set_enabled_extensions(extensions: string[]): void;
    }

    namespace GreeterProxy {
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
                Greeter.ConstructorProps,
                Gio.AsyncInitable.ConstructorProps,
                Gio.DBusInterface.ConstructorProps,
                Gio.Initable.ConstructorProps {}
    }

    /**
     * The {@link Gdm.GreeterProxy} structure contains only private data and should only be accessed using the provided API.
     * @gir-type Class
     */
    class GreeterProxy
        extends Gio.DBusProxy
        implements Greeter, Gio.AsyncInitable<GreeterProxy>, Gio.DBusInterface, Gio.Initable
    {
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

        static new_finish(res: Gio.AsyncResult): GreeterProxy;
        // Conflicted with Gio.AsyncInitable.new_finish

        static new_finish(...args: never[]): any;

        static new_for_bus_finish(res: Gio.AsyncResult): GreeterProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): GreeterProxy;
        // Conflicted with Gio.DBusProxy.new_for_bus_sync

        static new_for_bus_sync(...args: never[]): any;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): GreeterProxy;
        // Conflicted with Gio.DBusProxy.new_sync

        static new_sync(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof GreeterProxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GreeterProxy.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GreeterProxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GreeterProxy.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GreeterProxy.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GreeterProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-DisplayManager-Greeter.top_of_page">org.gnome.DisplayManager.Greeter</link>. See `g_dbus_proxy_new()` for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_proxy_new_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_proxy_new_sync()` for the synchronous, blocking version of this constructor.
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
            callback?: Gio.AsyncReadyCallback<GreeterProxy> | null,
        ): void;
        /**
         * @param args
         */
        // Conflicted with Gio.DBusProxy.new
        static ['new'](...args: never[]): any;
        /**
         * Like `gdm_greeter_proxy_new()` but takes a {@link Gio.BusType} instead of a {@link Gio.DBusConnection}.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_proxy_new_for_bus_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_proxy_new_for_bus_sync()` for the synchronous, blocking version of this constructor.
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
            callback?: Gio.AsyncReadyCallback<GreeterProxy> | null,
        ): void;
        /**
         * @param args
         */
        // Conflicted with Gio.DBusProxy.new_for_bus
        static new_for_bus(...args: never[]): any;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.BeginAutoLogin">BeginAutoLogin()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_begin_auto_login_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_begin_auto_login_sync()` for the synchronous, blocking version of this method.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_begin_auto_login(arg_username: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.BeginAutoLogin">BeginAutoLogin()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_begin_auto_login_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_begin_auto_login_sync()` for the synchronous, blocking version of this method.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_begin_auto_login(
            arg_username: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.BeginAutoLogin">BeginAutoLogin()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_begin_auto_login_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_begin_auto_login_sync()` for the synchronous, blocking version of this method.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_begin_auto_login(
            arg_username: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_greeter_call_begin_auto_login()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_greeter_call_begin_auto_login()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_begin_auto_login_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.BeginAutoLogin">BeginAutoLogin()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_greeter_call_begin_auto_login()` for the asynchronous version of this method.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_begin_auto_login_sync(arg_username: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.GetTimedLoginDetails">GetTimedLoginDetails()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_get_timed_login_details_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_get_timed_login_details_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_get_timed_login_details(
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[boolean, string, number]>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.GetTimedLoginDetails">GetTimedLoginDetails()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_get_timed_login_details_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_get_timed_login_details_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_get_timed_login_details(
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.GetTimedLoginDetails">GetTimedLoginDetails()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_get_timed_login_details_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_get_timed_login_details_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_get_timed_login_details(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[boolean, string, number]> | void;
        /**
         * Finishes an operation started with `gdm_greeter_call_get_timed_login_details()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_greeter_call_get_timed_login_details()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_get_timed_login_details_finish(res: Gio.AsyncResult): [boolean, boolean, string, number];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.GetTimedLoginDetails">GetTimedLoginDetails()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_greeter_call_get_timed_login_details()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_get_timed_login_details_sync(cancellable?: Gio.Cancellable | null): [boolean, boolean, string, number];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.SelectSession">SelectSession()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_select_session_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_select_session_sync()` for the synchronous, blocking version of this method.
         * @param arg_session Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_select_session(arg_session: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.SelectSession">SelectSession()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_select_session_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_select_session_sync()` for the synchronous, blocking version of this method.
         * @param arg_session Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_select_session(
            arg_session: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.SelectSession">SelectSession()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_select_session_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_select_session_sync()` for the synchronous, blocking version of this method.
         * @param arg_session Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_select_session(
            arg_session: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_greeter_call_select_session()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_greeter_call_select_session()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_select_session_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.SelectSession">SelectSession()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_greeter_call_select_session()` for the asynchronous version of this method.
         * @param arg_session Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_select_session_sync(arg_session: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.SelectUser">SelectUser()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_select_user_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_select_user_sync()` for the synchronous, blocking version of this method.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_select_user(arg_username: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.SelectUser">SelectUser()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_select_user_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_select_user_sync()` for the synchronous, blocking version of this method.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_select_user(
            arg_username: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.SelectUser">SelectUser()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_select_user_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_select_user_sync()` for the synchronous, blocking version of this method.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_select_user(
            arg_username: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_greeter_call_select_user()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_greeter_call_select_user()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_select_user_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.SelectUser">SelectUser()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_greeter_call_select_user()` for the asynchronous version of this method.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_select_user_sync(arg_username: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.StartSessionWhenReady">StartSessionWhenReady()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_start_session_when_ready_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_start_session_when_ready_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_should_start_session Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_start_session_when_ready(
            arg_service_name: string,
            arg_should_start_session: boolean,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.StartSessionWhenReady">StartSessionWhenReady()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_start_session_when_ready_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_start_session_when_ready_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_should_start_session Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_start_session_when_ready(
            arg_service_name: string,
            arg_should_start_session: boolean,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.StartSessionWhenReady">StartSessionWhenReady()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_start_session_when_ready_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_start_session_when_ready_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_should_start_session Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_start_session_when_ready(
            arg_service_name: string,
            arg_should_start_session: boolean,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_greeter_call_start_session_when_ready()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_greeter_call_start_session_when_ready()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_start_session_when_ready_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.StartSessionWhenReady">StartSessionWhenReady()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_greeter_call_start_session_when_ready()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_should_start_session Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_start_session_when_ready_sync(
            arg_service_name: string,
            arg_should_start_session: boolean,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.StopConflictingSession">StopConflictingSession()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_stop_conflicting_session_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_stop_conflicting_session_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_stop_conflicting_session(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.StopConflictingSession">StopConflictingSession()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_stop_conflicting_session_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_stop_conflicting_session_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_stop_conflicting_session(
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.StopConflictingSession">StopConflictingSession()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_stop_conflicting_session_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_stop_conflicting_session_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_stop_conflicting_session(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_greeter_call_stop_conflicting_session()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_greeter_call_stop_conflicting_session()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_stop_conflicting_session_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.StopConflictingSession">StopConflictingSession()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_greeter_call_stop_conflicting_session()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_stop_conflicting_session_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.BeginAutoLogin">BeginAutoLogin()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_begin_auto_login(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.GetTimedLoginDetails">GetTimedLoginDetails()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param enabled Parameter to return.
         * @param username Parameter to return.
         * @param delay Parameter to return.
         */
        complete_get_timed_login_details(
            invocation: Gio.DBusMethodInvocation,
            enabled: boolean,
            username: string,
            delay: number,
        ): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.SelectSession">SelectSession()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_select_session(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.SelectUser">SelectUser()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_select_user(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.StartSessionWhenReady">StartSessionWhenReady()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_start_session_when_ready(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.StopConflictingSession">StopConflictingSession()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_stop_conflicting_session(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-Greeter.DefaultLanguageNameChanged">"DefaultLanguageNameChanged"</link> D-Bus signal.
         * @param arg_language_name Argument to pass with the signal.
         */
        emit_default_language_name_changed(arg_language_name: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-Greeter.DefaultSessionNameChanged">"DefaultSessionNameChanged"</link> D-Bus signal.
         * @param arg_session_name Argument to pass with the signal.
         */
        emit_default_session_name_changed(arg_session_name: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-Greeter.Reauthenticated">"Reauthenticated"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         */
        emit_reauthenticated(arg_service_name: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-Greeter.SelectedUserChanged">"SelectedUserChanged"</link> D-Bus signal.
         * @param arg_username Argument to pass with the signal.
         */
        emit_selected_user_changed(arg_username: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-Greeter.SessionOpened">"SessionOpened"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         * @param arg_session_id Argument to pass with the signal.
         */
        emit_session_opened(arg_service_name: string, arg_session_id: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-Greeter.TimedLoginRequested">"TimedLoginRequested"</link> D-Bus signal.
         * @param arg_username Argument to pass with the signal.
         * @param arg_delay Argument to pass with the signal.
         */
        emit_timed_login_requested(arg_username: string, arg_delay: number): void;
        /**
         * Handler for the {@link Gdm.Greeter.SignalSignatures.default_language_name_changed | Gdm.Greeter::default-language-name-changed} signal.
         * @param arg_language_name
         * @virtual
         */
        vfunc_default_language_name_changed(arg_language_name: string): void;
        /**
         * Handler for the {@link Gdm.Greeter.SignalSignatures.default_session_name_changed | Gdm.Greeter::default-session-name-changed} signal.
         * @param arg_session_name
         * @virtual
         */
        vfunc_default_session_name_changed(arg_session_name: string): void;
        /**
         * Handler for the {@link Gdm.Greeter.SignalSignatures.handle_begin_auto_login | Gdm.Greeter::handle-begin-auto-login} signal.
         * @param invocation
         * @param arg_username
         * @virtual
         */
        vfunc_handle_begin_auto_login(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean;
        /**
         * Handler for the {@link Gdm.Greeter.SignalSignatures.handle_get_timed_login_details | Gdm.Greeter::handle-get-timed-login-details} signal.
         * @param invocation
         * @virtual
         */
        vfunc_handle_get_timed_login_details(invocation: Gio.DBusMethodInvocation): boolean;
        /**
         * Handler for the {@link Gdm.Greeter.SignalSignatures.handle_select_session | Gdm.Greeter::handle-select-session} signal.
         * @param invocation
         * @param arg_session
         * @virtual
         */
        vfunc_handle_select_session(invocation: Gio.DBusMethodInvocation, arg_session: string): boolean;
        /**
         * Handler for the {@link Gdm.Greeter.SignalSignatures.handle_select_user | Gdm.Greeter::handle-select-user} signal.
         * @param invocation
         * @param arg_username
         * @virtual
         */
        vfunc_handle_select_user(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean;
        /**
         * Handler for the {@link Gdm.Greeter.SignalSignatures.handle_start_session_when_ready | Gdm.Greeter::handle-start-session-when-ready} signal.
         * @param invocation
         * @param arg_service_name
         * @param arg_should_start_session
         * @virtual
         */
        vfunc_handle_start_session_when_ready(
            invocation: Gio.DBusMethodInvocation,
            arg_service_name: string,
            arg_should_start_session: boolean,
        ): boolean;
        /**
         * Handler for the {@link Gdm.Greeter.SignalSignatures.handle_stop_conflicting_session | Gdm.Greeter::handle-stop-conflicting-session} signal.
         * @param invocation
         * @virtual
         */
        vfunc_handle_stop_conflicting_session(invocation: Gio.DBusMethodInvocation): boolean;
        /**
         * Handler for the {@link Gdm.Greeter.SignalSignatures.reauthenticated | Gdm.Greeter::reauthenticated} signal.
         * @param arg_service_name
         * @virtual
         */
        vfunc_reauthenticated(arg_service_name: string): void;
        /**
         * Handler for the {@link Gdm.Greeter.SignalSignatures.selected_user_changed | Gdm.Greeter::selected-user-changed} signal.
         * @param arg_username
         * @virtual
         */
        vfunc_selected_user_changed(arg_username: string): void;
        /**
         * Handler for the {@link Gdm.Greeter.SignalSignatures.session_opened | Gdm.Greeter::session-opened} signal.
         * @param arg_service_name
         * @param arg_session_id
         * @virtual
         */
        vfunc_session_opened(arg_service_name: string, arg_session_id: string): void;
        /**
         * Handler for the {@link Gdm.Greeter.SignalSignatures.timed_login_requested | Gdm.Greeter::timed-login-requested} signal.
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
         *
         * This can return `null` if no {@link Gio.DBusInterfaceInfo} was provided during
         * construction of `interface_` and is also not made available otherwise.
         * For example, {@link Gio.DBusProxy} implements {@link Gio.DBusInterface} but allows for a `null`
         * {@link Gio.DBusInterfaceInfo}.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo | null;
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
         *
         * This can return `null` if no {@link Gio.DBusInterfaceInfo} was provided during
         * construction of `interface_` and is also not made available otherwise.
         * For example, {@link Gio.DBusProxy} implements {@link Gio.DBusInterface} but allows for a `null`
         * {@link Gio.DBusInterfaceInfo}.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
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
         * a [floating](floating-refs.html) object reference. Doing this is seldom
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
         * Checks whether `object` has a [floating](floating-refs.html) reference.
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
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
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

    namespace GreeterSkeleton {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            'notify::g-flags': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gio.DBusInterfaceSkeleton.ConstructorProps,
                Greeter.ConstructorProps,
                Gio.DBusInterface.ConstructorProps {}
    }

    /**
     * The {@link Gdm.GreeterSkeleton} structure contains only private data and should only be accessed using the provided API.
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

        static ['new'](): GreeterSkeleton;

        // Signals

        /** @signal */
        connect<K extends keyof GreeterSkeleton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GreeterSkeleton.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof GreeterSkeleton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, GreeterSkeleton.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof GreeterSkeleton.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<GreeterSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.BeginAutoLogin">BeginAutoLogin()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_begin_auto_login_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_begin_auto_login_sync()` for the synchronous, blocking version of this method.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_begin_auto_login(arg_username: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.BeginAutoLogin">BeginAutoLogin()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_begin_auto_login_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_begin_auto_login_sync()` for the synchronous, blocking version of this method.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_begin_auto_login(
            arg_username: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.BeginAutoLogin">BeginAutoLogin()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_begin_auto_login_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_begin_auto_login_sync()` for the synchronous, blocking version of this method.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_begin_auto_login(
            arg_username: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_greeter_call_begin_auto_login()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_greeter_call_begin_auto_login()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_begin_auto_login_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.BeginAutoLogin">BeginAutoLogin()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_greeter_call_begin_auto_login()` for the asynchronous version of this method.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_begin_auto_login_sync(arg_username: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.GetTimedLoginDetails">GetTimedLoginDetails()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_get_timed_login_details_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_get_timed_login_details_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_get_timed_login_details(
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[boolean, string, number]>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.GetTimedLoginDetails">GetTimedLoginDetails()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_get_timed_login_details_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_get_timed_login_details_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_get_timed_login_details(
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.GetTimedLoginDetails">GetTimedLoginDetails()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_get_timed_login_details_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_get_timed_login_details_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_get_timed_login_details(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[boolean, string, number]> | void;
        /**
         * Finishes an operation started with `gdm_greeter_call_get_timed_login_details()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_greeter_call_get_timed_login_details()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_get_timed_login_details_finish(res: Gio.AsyncResult): [boolean, boolean, string, number];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.GetTimedLoginDetails">GetTimedLoginDetails()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_greeter_call_get_timed_login_details()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_get_timed_login_details_sync(cancellable?: Gio.Cancellable | null): [boolean, boolean, string, number];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.SelectSession">SelectSession()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_select_session_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_select_session_sync()` for the synchronous, blocking version of this method.
         * @param arg_session Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_select_session(arg_session: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.SelectSession">SelectSession()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_select_session_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_select_session_sync()` for the synchronous, blocking version of this method.
         * @param arg_session Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_select_session(
            arg_session: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.SelectSession">SelectSession()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_select_session_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_select_session_sync()` for the synchronous, blocking version of this method.
         * @param arg_session Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_select_session(
            arg_session: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_greeter_call_select_session()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_greeter_call_select_session()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_select_session_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.SelectSession">SelectSession()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_greeter_call_select_session()` for the asynchronous version of this method.
         * @param arg_session Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_select_session_sync(arg_session: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.SelectUser">SelectUser()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_select_user_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_select_user_sync()` for the synchronous, blocking version of this method.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_select_user(arg_username: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.SelectUser">SelectUser()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_select_user_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_select_user_sync()` for the synchronous, blocking version of this method.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_select_user(
            arg_username: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.SelectUser">SelectUser()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_select_user_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_select_user_sync()` for the synchronous, blocking version of this method.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_select_user(
            arg_username: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_greeter_call_select_user()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_greeter_call_select_user()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_select_user_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.SelectUser">SelectUser()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_greeter_call_select_user()` for the asynchronous version of this method.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_select_user_sync(arg_username: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.StartSessionWhenReady">StartSessionWhenReady()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_start_session_when_ready_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_start_session_when_ready_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_should_start_session Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_start_session_when_ready(
            arg_service_name: string,
            arg_should_start_session: boolean,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.StartSessionWhenReady">StartSessionWhenReady()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_start_session_when_ready_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_start_session_when_ready_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_should_start_session Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_start_session_when_ready(
            arg_service_name: string,
            arg_should_start_session: boolean,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.StartSessionWhenReady">StartSessionWhenReady()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_start_session_when_ready_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_start_session_when_ready_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_should_start_session Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_start_session_when_ready(
            arg_service_name: string,
            arg_should_start_session: boolean,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_greeter_call_start_session_when_ready()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_greeter_call_start_session_when_ready()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_start_session_when_ready_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.StartSessionWhenReady">StartSessionWhenReady()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_greeter_call_start_session_when_ready()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_should_start_session Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_start_session_when_ready_sync(
            arg_service_name: string,
            arg_should_start_session: boolean,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.StopConflictingSession">StopConflictingSession()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_stop_conflicting_session_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_stop_conflicting_session_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_stop_conflicting_session(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.StopConflictingSession">StopConflictingSession()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_stop_conflicting_session_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_stop_conflicting_session_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_stop_conflicting_session(
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.StopConflictingSession">StopConflictingSession()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_stop_conflicting_session_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_stop_conflicting_session_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_stop_conflicting_session(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_greeter_call_stop_conflicting_session()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_greeter_call_stop_conflicting_session()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_stop_conflicting_session_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.StopConflictingSession">StopConflictingSession()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_greeter_call_stop_conflicting_session()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_stop_conflicting_session_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.BeginAutoLogin">BeginAutoLogin()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_begin_auto_login(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.GetTimedLoginDetails">GetTimedLoginDetails()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param enabled Parameter to return.
         * @param username Parameter to return.
         * @param delay Parameter to return.
         */
        complete_get_timed_login_details(
            invocation: Gio.DBusMethodInvocation,
            enabled: boolean,
            username: string,
            delay: number,
        ): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.SelectSession">SelectSession()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_select_session(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.SelectUser">SelectUser()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_select_user(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.StartSessionWhenReady">StartSessionWhenReady()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_start_session_when_ready(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.StopConflictingSession">StopConflictingSession()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_stop_conflicting_session(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-Greeter.DefaultLanguageNameChanged">"DefaultLanguageNameChanged"</link> D-Bus signal.
         * @param arg_language_name Argument to pass with the signal.
         */
        emit_default_language_name_changed(arg_language_name: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-Greeter.DefaultSessionNameChanged">"DefaultSessionNameChanged"</link> D-Bus signal.
         * @param arg_session_name Argument to pass with the signal.
         */
        emit_default_session_name_changed(arg_session_name: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-Greeter.Reauthenticated">"Reauthenticated"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         */
        emit_reauthenticated(arg_service_name: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-Greeter.SelectedUserChanged">"SelectedUserChanged"</link> D-Bus signal.
         * @param arg_username Argument to pass with the signal.
         */
        emit_selected_user_changed(arg_username: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-Greeter.SessionOpened">"SessionOpened"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         * @param arg_session_id Argument to pass with the signal.
         */
        emit_session_opened(arg_service_name: string, arg_session_id: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-Greeter.TimedLoginRequested">"TimedLoginRequested"</link> D-Bus signal.
         * @param arg_username Argument to pass with the signal.
         * @param arg_delay Argument to pass with the signal.
         */
        emit_timed_login_requested(arg_username: string, arg_delay: number): void;
        /**
         * Handler for the {@link Gdm.Greeter.SignalSignatures.default_language_name_changed | Gdm.Greeter::default-language-name-changed} signal.
         * @param arg_language_name
         * @virtual
         */
        vfunc_default_language_name_changed(arg_language_name: string): void;
        /**
         * Handler for the {@link Gdm.Greeter.SignalSignatures.default_session_name_changed | Gdm.Greeter::default-session-name-changed} signal.
         * @param arg_session_name
         * @virtual
         */
        vfunc_default_session_name_changed(arg_session_name: string): void;
        /**
         * Handler for the {@link Gdm.Greeter.SignalSignatures.handle_begin_auto_login | Gdm.Greeter::handle-begin-auto-login} signal.
         * @param invocation
         * @param arg_username
         * @virtual
         */
        vfunc_handle_begin_auto_login(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean;
        /**
         * Handler for the {@link Gdm.Greeter.SignalSignatures.handle_get_timed_login_details | Gdm.Greeter::handle-get-timed-login-details} signal.
         * @param invocation
         * @virtual
         */
        vfunc_handle_get_timed_login_details(invocation: Gio.DBusMethodInvocation): boolean;
        /**
         * Handler for the {@link Gdm.Greeter.SignalSignatures.handle_select_session | Gdm.Greeter::handle-select-session} signal.
         * @param invocation
         * @param arg_session
         * @virtual
         */
        vfunc_handle_select_session(invocation: Gio.DBusMethodInvocation, arg_session: string): boolean;
        /**
         * Handler for the {@link Gdm.Greeter.SignalSignatures.handle_select_user | Gdm.Greeter::handle-select-user} signal.
         * @param invocation
         * @param arg_username
         * @virtual
         */
        vfunc_handle_select_user(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean;
        /**
         * Handler for the {@link Gdm.Greeter.SignalSignatures.handle_start_session_when_ready | Gdm.Greeter::handle-start-session-when-ready} signal.
         * @param invocation
         * @param arg_service_name
         * @param arg_should_start_session
         * @virtual
         */
        vfunc_handle_start_session_when_ready(
            invocation: Gio.DBusMethodInvocation,
            arg_service_name: string,
            arg_should_start_session: boolean,
        ): boolean;
        /**
         * Handler for the {@link Gdm.Greeter.SignalSignatures.handle_stop_conflicting_session | Gdm.Greeter::handle-stop-conflicting-session} signal.
         * @param invocation
         * @virtual
         */
        vfunc_handle_stop_conflicting_session(invocation: Gio.DBusMethodInvocation): boolean;
        /**
         * Handler for the {@link Gdm.Greeter.SignalSignatures.reauthenticated | Gdm.Greeter::reauthenticated} signal.
         * @param arg_service_name
         * @virtual
         */
        vfunc_reauthenticated(arg_service_name: string): void;
        /**
         * Handler for the {@link Gdm.Greeter.SignalSignatures.selected_user_changed | Gdm.Greeter::selected-user-changed} signal.
         * @param arg_username
         * @virtual
         */
        vfunc_selected_user_changed(arg_username: string): void;
        /**
         * Handler for the {@link Gdm.Greeter.SignalSignatures.session_opened | Gdm.Greeter::session-opened} signal.
         * @param arg_service_name
         * @param arg_session_id
         * @virtual
         */
        vfunc_session_opened(arg_service_name: string, arg_session_id: string): void;
        /**
         * Handler for the {@link Gdm.Greeter.SignalSignatures.timed_login_requested | Gdm.Greeter::timed-login-requested} signal.
         * @param arg_username
         * @param arg_delay
         * @virtual
         */
        vfunc_timed_login_requested(arg_username: string, arg_delay: number): void;
        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         */
        get_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         *
         * This can return `null` if no {@link Gio.DBusInterfaceInfo} was provided during
         * construction of `interface_` and is also not made available otherwise.
         * For example, {@link Gio.DBusProxy} implements {@link Gio.DBusInterface} but allows for a `null`
         * {@link Gio.DBusInterfaceInfo}.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo | null;
        /**
         * @param args
         */
        // Conflicted with Gio.DBusInterfaceSkeleton.get_info
        get_info(...args: never[]): any;
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
         *
         * This can return `null` if no {@link Gio.DBusInterfaceInfo} was provided during
         * construction of `interface_` and is also not made available otherwise.
         * For example, {@link Gio.DBusProxy} implements {@link Gio.DBusInterface} but allows for a `null`
         * {@link Gio.DBusInterfaceInfo}.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        /**
         * @param args
         * @virtual
         */
        // Conflicted with Gio.DBusInterfaceSkeleton.vfunc_get_info
        vfunc_get_info(...args: never[]): any;
        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         * @virtual
         */
        vfunc_set_object(object?: Gio.DBusObject | null): void;
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
         * a [floating](floating-refs.html) object reference. Doing this is seldom
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
         * Checks whether `object` has a [floating](floating-refs.html) reference.
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
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
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

    namespace ManagerProxy {
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
            'notify::version': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gio.DBusProxy.ConstructorProps,
                Manager.ConstructorProps,
                Gio.AsyncInitable.ConstructorProps,
                Gio.DBusInterface.ConstructorProps,
                Gio.Initable.ConstructorProps {}
    }

    /**
     * The {@link Gdm.ManagerProxy} structure contains only private data and should only be accessed using the provided API.
     * @gir-type Class
     */
    class ManagerProxy
        extends Gio.DBusProxy
        implements Manager, Gio.AsyncInitable<ManagerProxy>, Gio.DBusInterface, Gio.Initable
    {
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

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): ManagerProxy;
        // Conflicted with Gio.DBusProxy.new_for_bus_sync

        static new_for_bus_sync(...args: never[]): any;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): ManagerProxy;
        // Conflicted with Gio.DBusProxy.new_sync

        static new_sync(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof ManagerProxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ManagerProxy.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ManagerProxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ManagerProxy.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ManagerProxy.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ManagerProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-DisplayManager-Manager.top_of_page">org.gnome.DisplayManager.Manager</link>. See `g_dbus_proxy_new()` for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_proxy_new_finish()` to get the result of the operation.
         *
         * See `gdm_manager_proxy_new_sync()` for the synchronous, blocking version of this constructor.
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
            callback?: Gio.AsyncReadyCallback<ManagerProxy> | null,
        ): void;
        /**
         * @param args
         */
        // Conflicted with Gio.DBusProxy.new
        static ['new'](...args: never[]): any;
        /**
         * Like `gdm_manager_proxy_new()` but takes a {@link Gio.BusType} instead of a {@link Gio.DBusConnection}.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_proxy_new_for_bus_finish()` to get the result of the operation.
         *
         * See `gdm_manager_proxy_new_for_bus_sync()` for the synchronous, blocking version of this constructor.
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
            callback?: Gio.AsyncReadyCallback<ManagerProxy> | null,
        ): void;
        /**
         * @param args
         */
        // Conflicted with Gio.DBusProxy.new_for_bus
        static new_for_bus(...args: never[]): any;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-DisplayManager-Manager.Version">"Version"</link>.
         *
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @category Inherited from Gdm.Manager
         */
        get version(): string;
        set version(val: string);
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.OpenReauthenticationChannel">OpenReauthenticationChannel()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_call_open_reauthentication_channel_finish()` to get the result of the operation.
         *
         * See `gdm_manager_call_open_reauthentication_channel_sync()` for the synchronous, blocking version of this method.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_open_reauthentication_channel(
            arg_username: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<string>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.OpenReauthenticationChannel">OpenReauthenticationChannel()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_call_open_reauthentication_channel_finish()` to get the result of the operation.
         *
         * See `gdm_manager_call_open_reauthentication_channel_sync()` for the synchronous, blocking version of this method.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_open_reauthentication_channel(
            arg_username: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.OpenReauthenticationChannel">OpenReauthenticationChannel()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_call_open_reauthentication_channel_finish()` to get the result of the operation.
         *
         * See `gdm_manager_call_open_reauthentication_channel_sync()` for the synchronous, blocking version of this method.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_open_reauthentication_channel(
            arg_username: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string> | void;
        /**
         * Finishes an operation started with `gdm_manager_call_open_reauthentication_channel()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_manager_call_open_reauthentication_channel()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_open_reauthentication_channel_finish(res: Gio.AsyncResult): [boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.OpenReauthenticationChannel">OpenReauthenticationChannel()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_manager_call_open_reauthentication_channel()` for the asynchronous version of this method.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_open_reauthentication_channel_sync(
            arg_username: string,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, string];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.OpenSession">OpenSession()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_call_open_session_finish()` to get the result of the operation.
         *
         * See `gdm_manager_call_open_session_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_open_session(cancellable?: Gio.Cancellable | null): globalThis.Promise<string>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.OpenSession">OpenSession()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_call_open_session_finish()` to get the result of the operation.
         *
         * See `gdm_manager_call_open_session_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_open_session(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.OpenSession">OpenSession()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_call_open_session_finish()` to get the result of the operation.
         *
         * See `gdm_manager_call_open_session_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_open_session(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string> | void;
        /**
         * Finishes an operation started with `gdm_manager_call_open_session()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_manager_call_open_session()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_open_session_finish(res: Gio.AsyncResult): [boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.OpenSession">OpenSession()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_manager_call_open_session()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_open_session_sync(cancellable?: Gio.Cancellable | null): [boolean, string];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.RegisterDisplay">RegisterDisplay()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_call_register_display_finish()` to get the result of the operation.
         *
         * See `gdm_manager_call_register_display_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_register_display(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.RegisterDisplay">RegisterDisplay()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_call_register_display_finish()` to get the result of the operation.
         *
         * See `gdm_manager_call_register_display_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_register_display(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.RegisterDisplay">RegisterDisplay()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_call_register_display_finish()` to get the result of the operation.
         *
         * See `gdm_manager_call_register_display_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_register_display(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_manager_call_register_display()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_manager_call_register_display()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_register_display_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.RegisterDisplay">RegisterDisplay()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_manager_call_register_display()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_register_display_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.RegisterSession">RegisterSession()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_call_register_session_finish()` to get the result of the operation.
         *
         * See `gdm_manager_call_register_session_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_register_session(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.RegisterSession">RegisterSession()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_call_register_session_finish()` to get the result of the operation.
         *
         * See `gdm_manager_call_register_session_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_register_session(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.RegisterSession">RegisterSession()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_call_register_session_finish()` to get the result of the operation.
         *
         * See `gdm_manager_call_register_session_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_register_session(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_manager_call_register_session()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_manager_call_register_session()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_register_session_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.RegisterSession">RegisterSession()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_manager_call_register_session()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_register_session_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.OpenReauthenticationChannel">OpenReauthenticationChannel()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param address Parameter to return.
         */
        complete_open_reauthentication_channel(invocation: Gio.DBusMethodInvocation, address: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.OpenSession">OpenSession()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param address Parameter to return.
         */
        complete_open_session(invocation: Gio.DBusMethodInvocation, address: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.RegisterDisplay">RegisterDisplay()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_register_display(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.RegisterSession">RegisterSession()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_register_session(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Handler for the {@link Gdm.Manager.SignalSignatures.handle_open_reauthentication_channel | Gdm.Manager::handle-open-reauthentication-channel} signal.
         * @param invocation
         * @param arg_username
         * @virtual
         */
        vfunc_handle_open_reauthentication_channel(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean;
        /**
         * Handler for the {@link Gdm.Manager.SignalSignatures.handle_open_session | Gdm.Manager::handle-open-session} signal.
         * @param invocation
         * @virtual
         */
        vfunc_handle_open_session(invocation: Gio.DBusMethodInvocation): boolean;
        /**
         * Handler for the {@link Gdm.Manager.SignalSignatures.handle_register_display | Gdm.Manager::handle-register-display} signal.
         * @param invocation
         * @virtual
         */
        vfunc_handle_register_display(invocation: Gio.DBusMethodInvocation): boolean;
        /**
         * Handler for the {@link Gdm.Manager.SignalSignatures.handle_register_session | Gdm.Manager::handle-register-session} signal.
         * @param invocation
         * @virtual
         */
        vfunc_handle_register_session(invocation: Gio.DBusMethodInvocation): boolean;
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
         *
         * This can return `null` if no {@link Gio.DBusInterfaceInfo} was provided during
         * construction of `interface_` and is also not made available otherwise.
         * For example, {@link Gio.DBusProxy} implements {@link Gio.DBusInterface} but allows for a `null`
         * {@link Gio.DBusInterfaceInfo}.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo | null;
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
         *
         * This can return `null` if no {@link Gio.DBusInterfaceInfo} was provided during
         * construction of `interface_` and is also not made available otherwise.
         * For example, {@link Gio.DBusProxy} implements {@link Gio.DBusInterface} but allows for a `null`
         * {@link Gio.DBusInterfaceInfo}.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
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
         * a [floating](floating-refs.html) object reference. Doing this is seldom
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
         * Checks whether `object` has a [floating](floating-refs.html) reference.
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
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
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

    namespace ManagerSkeleton {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            'notify::g-flags': (pspec: GObject.ParamSpec) => void;
            'notify::version': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gio.DBusInterfaceSkeleton.ConstructorProps,
                Manager.ConstructorProps,
                Gio.DBusInterface.ConstructorProps {}
    }

    /**
     * The {@link Gdm.ManagerSkeleton} structure contains only private data and should only be accessed using the provided API.
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

        static ['new'](): ManagerSkeleton;

        // Signals

        /** @signal */
        connect<K extends keyof ManagerSkeleton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ManagerSkeleton.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ManagerSkeleton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ManagerSkeleton.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ManagerSkeleton.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ManagerSkeleton.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-DisplayManager-Manager.Version">"Version"</link>.
         *
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         * @category Inherited from Gdm.Manager
         */
        get version(): string;
        set version(val: string);
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.OpenReauthenticationChannel">OpenReauthenticationChannel()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_call_open_reauthentication_channel_finish()` to get the result of the operation.
         *
         * See `gdm_manager_call_open_reauthentication_channel_sync()` for the synchronous, blocking version of this method.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_open_reauthentication_channel(
            arg_username: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<string>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.OpenReauthenticationChannel">OpenReauthenticationChannel()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_call_open_reauthentication_channel_finish()` to get the result of the operation.
         *
         * See `gdm_manager_call_open_reauthentication_channel_sync()` for the synchronous, blocking version of this method.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_open_reauthentication_channel(
            arg_username: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.OpenReauthenticationChannel">OpenReauthenticationChannel()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_call_open_reauthentication_channel_finish()` to get the result of the operation.
         *
         * See `gdm_manager_call_open_reauthentication_channel_sync()` for the synchronous, blocking version of this method.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_open_reauthentication_channel(
            arg_username: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string> | void;
        /**
         * Finishes an operation started with `gdm_manager_call_open_reauthentication_channel()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_manager_call_open_reauthentication_channel()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_open_reauthentication_channel_finish(res: Gio.AsyncResult): [boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.OpenReauthenticationChannel">OpenReauthenticationChannel()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_manager_call_open_reauthentication_channel()` for the asynchronous version of this method.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_open_reauthentication_channel_sync(
            arg_username: string,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, string];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.OpenSession">OpenSession()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_call_open_session_finish()` to get the result of the operation.
         *
         * See `gdm_manager_call_open_session_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_open_session(cancellable?: Gio.Cancellable | null): globalThis.Promise<string>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.OpenSession">OpenSession()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_call_open_session_finish()` to get the result of the operation.
         *
         * See `gdm_manager_call_open_session_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_open_session(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.OpenSession">OpenSession()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_call_open_session_finish()` to get the result of the operation.
         *
         * See `gdm_manager_call_open_session_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_open_session(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string> | void;
        /**
         * Finishes an operation started with `gdm_manager_call_open_session()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_manager_call_open_session()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_open_session_finish(res: Gio.AsyncResult): [boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.OpenSession">OpenSession()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_manager_call_open_session()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_open_session_sync(cancellable?: Gio.Cancellable | null): [boolean, string];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.RegisterDisplay">RegisterDisplay()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_call_register_display_finish()` to get the result of the operation.
         *
         * See `gdm_manager_call_register_display_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_register_display(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.RegisterDisplay">RegisterDisplay()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_call_register_display_finish()` to get the result of the operation.
         *
         * See `gdm_manager_call_register_display_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_register_display(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.RegisterDisplay">RegisterDisplay()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_call_register_display_finish()` to get the result of the operation.
         *
         * See `gdm_manager_call_register_display_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_register_display(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_manager_call_register_display()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_manager_call_register_display()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_register_display_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.RegisterDisplay">RegisterDisplay()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_manager_call_register_display()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_register_display_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.RegisterSession">RegisterSession()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_call_register_session_finish()` to get the result of the operation.
         *
         * See `gdm_manager_call_register_session_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_register_session(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.RegisterSession">RegisterSession()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_call_register_session_finish()` to get the result of the operation.
         *
         * See `gdm_manager_call_register_session_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_register_session(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.RegisterSession">RegisterSession()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_call_register_session_finish()` to get the result of the operation.
         *
         * See `gdm_manager_call_register_session_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_register_session(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_manager_call_register_session()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_manager_call_register_session()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_register_session_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.RegisterSession">RegisterSession()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_manager_call_register_session()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_register_session_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.OpenReauthenticationChannel">OpenReauthenticationChannel()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param address Parameter to return.
         */
        complete_open_reauthentication_channel(invocation: Gio.DBusMethodInvocation, address: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.OpenSession">OpenSession()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param address Parameter to return.
         */
        complete_open_session(invocation: Gio.DBusMethodInvocation, address: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.RegisterDisplay">RegisterDisplay()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_register_display(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.RegisterSession">RegisterSession()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_register_session(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Handler for the {@link Gdm.Manager.SignalSignatures.handle_open_reauthentication_channel | Gdm.Manager::handle-open-reauthentication-channel} signal.
         * @param invocation
         * @param arg_username
         * @virtual
         */
        vfunc_handle_open_reauthentication_channel(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean;
        /**
         * Handler for the {@link Gdm.Manager.SignalSignatures.handle_open_session | Gdm.Manager::handle-open-session} signal.
         * @param invocation
         * @virtual
         */
        vfunc_handle_open_session(invocation: Gio.DBusMethodInvocation): boolean;
        /**
         * Handler for the {@link Gdm.Manager.SignalSignatures.handle_register_display | Gdm.Manager::handle-register-display} signal.
         * @param invocation
         * @virtual
         */
        vfunc_handle_register_display(invocation: Gio.DBusMethodInvocation): boolean;
        /**
         * Handler for the {@link Gdm.Manager.SignalSignatures.handle_register_session | Gdm.Manager::handle-register-session} signal.
         * @param invocation
         * @virtual
         */
        vfunc_handle_register_session(invocation: Gio.DBusMethodInvocation): boolean;
        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         */
        get_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         *
         * This can return `null` if no {@link Gio.DBusInterfaceInfo} was provided during
         * construction of `interface_` and is also not made available otherwise.
         * For example, {@link Gio.DBusProxy} implements {@link Gio.DBusInterface} but allows for a `null`
         * {@link Gio.DBusInterfaceInfo}.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo | null;
        /**
         * @param args
         */
        // Conflicted with Gio.DBusInterfaceSkeleton.get_info
        get_info(...args: never[]): any;
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
         *
         * This can return `null` if no {@link Gio.DBusInterfaceInfo} was provided during
         * construction of `interface_` and is also not made available otherwise.
         * For example, {@link Gio.DBusProxy} implements {@link Gio.DBusInterface} but allows for a `null`
         * {@link Gio.DBusInterfaceInfo}.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        /**
         * @param args
         * @virtual
         */
        // Conflicted with Gio.DBusInterfaceSkeleton.vfunc_get_info
        vfunc_get_info(...args: never[]): any;
        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         * @virtual
         */
        vfunc_set_object(object?: Gio.DBusObject | null): void;
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
         * a [floating](floating-refs.html) object reference. Doing this is seldom
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
         * Checks whether `object` has a [floating](floating-refs.html) reference.
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
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
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

    namespace UserVerifierChoiceListProxy {
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
                UserVerifierChoiceList.ConstructorProps,
                Gio.AsyncInitable.ConstructorProps,
                Gio.DBusInterface.ConstructorProps,
                Gio.Initable.ConstructorProps {}
    }

    /**
     * The {@link Gdm.UserVerifierChoiceListProxy} structure contains only private data and should only be accessed using the provided API.
     * @gir-type Class
     */
    class UserVerifierChoiceListProxy
        extends Gio.DBusProxy
        implements
            UserVerifierChoiceList,
            Gio.AsyncInitable<UserVerifierChoiceListProxy>,
            Gio.DBusInterface,
            Gio.Initable
    {
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

        static new_finish(res: Gio.AsyncResult): UserVerifierChoiceListProxy;
        // Conflicted with Gio.AsyncInitable.new_finish

        static new_finish(...args: never[]): any;

        static new_for_bus_finish(res: Gio.AsyncResult): UserVerifierChoiceListProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): UserVerifierChoiceListProxy;
        // Conflicted with Gio.DBusProxy.new_for_bus_sync

        static new_for_bus_sync(...args: never[]): any;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): UserVerifierChoiceListProxy;
        // Conflicted with Gio.DBusProxy.new_sync

        static new_sync(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof UserVerifierChoiceListProxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserVerifierChoiceListProxy.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof UserVerifierChoiceListProxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserVerifierChoiceListProxy.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof UserVerifierChoiceListProxy.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UserVerifierChoiceListProxy.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-DisplayManager-UserVerifier-ChoiceList.top_of_page">org.gnome.DisplayManager.UserVerifier.ChoiceList</link>. See `g_dbus_proxy_new()` for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_choice_list_proxy_new_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_choice_list_proxy_new_sync()` for the synchronous, blocking version of this constructor.
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
            callback?: Gio.AsyncReadyCallback<UserVerifierChoiceListProxy> | null,
        ): void;
        /**
         * @param args
         */
        // Conflicted with Gio.DBusProxy.new
        static ['new'](...args: never[]): any;
        /**
         * Like `gdm_user_verifier_choice_list_proxy_new()` but takes a {@link Gio.BusType} instead of a {@link Gio.DBusConnection}.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_choice_list_proxy_new_for_bus_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_choice_list_proxy_new_for_bus_sync()` for the synchronous, blocking version of this constructor.
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
            callback?: Gio.AsyncReadyCallback<UserVerifierChoiceListProxy> | null,
        ): void;
        /**
         * @param args
         */
        // Conflicted with Gio.DBusProxy.new_for_bus
        static new_for_bus(...args: never[]): any;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-ChoiceList.SelectChoice">SelectChoice()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_choice_list_call_select_choice_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_choice_list_call_select_choice_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_choice Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_select_choice(
            arg_service_name: string,
            arg_choice: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-ChoiceList.SelectChoice">SelectChoice()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_choice_list_call_select_choice_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_choice_list_call_select_choice_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_choice Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_select_choice(
            arg_service_name: string,
            arg_choice: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-ChoiceList.SelectChoice">SelectChoice()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_choice_list_call_select_choice_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_choice_list_call_select_choice_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_choice Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_select_choice(
            arg_service_name: string,
            arg_choice: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_user_verifier_choice_list_call_select_choice()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_user_verifier_choice_list_call_select_choice()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_select_choice_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-ChoiceList.SelectChoice">SelectChoice()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_user_verifier_choice_list_call_select_choice()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_choice Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_select_choice_sync(
            arg_service_name: string,
            arg_choice: string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-ChoiceList.SelectChoice">SelectChoice()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_select_choice(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier-ChoiceList.ChoiceQuery">"ChoiceQuery"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         * @param arg_prompt_message Argument to pass with the signal.
         * @param arg_list Argument to pass with the signal.
         */
        emit_choice_query(arg_service_name: string, arg_prompt_message: string, arg_list: GLib.Variant): void;
        /**
         * Handler for the {@link Gdm.UserVerifierChoiceList.SignalSignatures.choice_query | Gdm.UserVerifierChoiceList::choice-query} signal.
         * @param arg_service_name
         * @param arg_prompt_message
         * @param arg_list
         * @virtual
         */
        vfunc_choice_query(arg_service_name: string, arg_prompt_message: string, arg_list: GLib.Variant): void;
        /**
         * Handler for the {@link Gdm.UserVerifierChoiceList.SignalSignatures.handle_select_choice | Gdm.UserVerifierChoiceList::handle-select-choice} signal.
         * @param invocation
         * @param arg_service_name
         * @param arg_choice
         * @virtual
         */
        vfunc_handle_select_choice(
            invocation: Gio.DBusMethodInvocation,
            arg_service_name: string,
            arg_choice: string,
        ): boolean;
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
         *
         * This can return `null` if no {@link Gio.DBusInterfaceInfo} was provided during
         * construction of `interface_` and is also not made available otherwise.
         * For example, {@link Gio.DBusProxy} implements {@link Gio.DBusInterface} but allows for a `null`
         * {@link Gio.DBusInterfaceInfo}.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo | null;
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
         *
         * This can return `null` if no {@link Gio.DBusInterfaceInfo} was provided during
         * construction of `interface_` and is also not made available otherwise.
         * For example, {@link Gio.DBusProxy} implements {@link Gio.DBusInterface} but allows for a `null`
         * {@link Gio.DBusInterfaceInfo}.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
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
         * a [floating](floating-refs.html) object reference. Doing this is seldom
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
         * Checks whether `object` has a [floating](floating-refs.html) reference.
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
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
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

    namespace UserVerifierChoiceListSkeleton {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            'notify::g-flags': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gio.DBusInterfaceSkeleton.ConstructorProps,
                UserVerifierChoiceList.ConstructorProps,
                Gio.DBusInterface.ConstructorProps {}
    }

    /**
     * The {@link Gdm.UserVerifierChoiceListSkeleton} structure contains only private data and should only be accessed using the provided API.
     * @gir-type Class
     */
    class UserVerifierChoiceListSkeleton
        extends Gio.DBusInterfaceSkeleton
        implements UserVerifierChoiceList, Gio.DBusInterface
    {
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

        static ['new'](): UserVerifierChoiceListSkeleton;

        // Signals

        /** @signal */
        connect<K extends keyof UserVerifierChoiceListSkeleton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserVerifierChoiceListSkeleton.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof UserVerifierChoiceListSkeleton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserVerifierChoiceListSkeleton.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof UserVerifierChoiceListSkeleton.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UserVerifierChoiceListSkeleton.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-ChoiceList.SelectChoice">SelectChoice()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_choice_list_call_select_choice_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_choice_list_call_select_choice_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_choice Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_select_choice(
            arg_service_name: string,
            arg_choice: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-ChoiceList.SelectChoice">SelectChoice()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_choice_list_call_select_choice_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_choice_list_call_select_choice_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_choice Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_select_choice(
            arg_service_name: string,
            arg_choice: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-ChoiceList.SelectChoice">SelectChoice()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_choice_list_call_select_choice_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_choice_list_call_select_choice_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_choice Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_select_choice(
            arg_service_name: string,
            arg_choice: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_user_verifier_choice_list_call_select_choice()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_user_verifier_choice_list_call_select_choice()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_select_choice_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-ChoiceList.SelectChoice">SelectChoice()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_user_verifier_choice_list_call_select_choice()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_choice Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_select_choice_sync(
            arg_service_name: string,
            arg_choice: string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-ChoiceList.SelectChoice">SelectChoice()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_select_choice(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier-ChoiceList.ChoiceQuery">"ChoiceQuery"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         * @param arg_prompt_message Argument to pass with the signal.
         * @param arg_list Argument to pass with the signal.
         */
        emit_choice_query(arg_service_name: string, arg_prompt_message: string, arg_list: GLib.Variant): void;
        /**
         * Handler for the {@link Gdm.UserVerifierChoiceList.SignalSignatures.choice_query | Gdm.UserVerifierChoiceList::choice-query} signal.
         * @param arg_service_name
         * @param arg_prompt_message
         * @param arg_list
         * @virtual
         */
        vfunc_choice_query(arg_service_name: string, arg_prompt_message: string, arg_list: GLib.Variant): void;
        /**
         * Handler for the {@link Gdm.UserVerifierChoiceList.SignalSignatures.handle_select_choice | Gdm.UserVerifierChoiceList::handle-select-choice} signal.
         * @param invocation
         * @param arg_service_name
         * @param arg_choice
         * @virtual
         */
        vfunc_handle_select_choice(
            invocation: Gio.DBusMethodInvocation,
            arg_service_name: string,
            arg_choice: string,
        ): boolean;
        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         */
        get_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         *
         * This can return `null` if no {@link Gio.DBusInterfaceInfo} was provided during
         * construction of `interface_` and is also not made available otherwise.
         * For example, {@link Gio.DBusProxy} implements {@link Gio.DBusInterface} but allows for a `null`
         * {@link Gio.DBusInterfaceInfo}.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo | null;
        /**
         * @param args
         */
        // Conflicted with Gio.DBusInterfaceSkeleton.get_info
        get_info(...args: never[]): any;
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
         *
         * This can return `null` if no {@link Gio.DBusInterfaceInfo} was provided during
         * construction of `interface_` and is also not made available otherwise.
         * For example, {@link Gio.DBusProxy} implements {@link Gio.DBusInterface} but allows for a `null`
         * {@link Gio.DBusInterfaceInfo}.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        /**
         * @param args
         * @virtual
         */
        // Conflicted with Gio.DBusInterfaceSkeleton.vfunc_get_info
        vfunc_get_info(...args: never[]): any;
        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         * @virtual
         */
        vfunc_set_object(object?: Gio.DBusObject | null): void;
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
         * a [floating](floating-refs.html) object reference. Doing this is seldom
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
         * Checks whether `object` has a [floating](floating-refs.html) reference.
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
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
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

    namespace UserVerifierCustomJSONProxy {
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
                UserVerifierCustomJSON.ConstructorProps,
                Gio.AsyncInitable.ConstructorProps,
                Gio.DBusInterface.ConstructorProps,
                Gio.Initable.ConstructorProps {}
    }

    /**
     * The {@link Gdm.UserVerifierCustomJSONProxy} structure contains only private data and should only be accessed using the provided API.
     * @gir-type Class
     */
    class UserVerifierCustomJSONProxy
        extends Gio.DBusProxy
        implements
            UserVerifierCustomJSON,
            Gio.AsyncInitable<UserVerifierCustomJSONProxy>,
            Gio.DBusInterface,
            Gio.Initable
    {
        static $gtype: GObject.GType<UserVerifierCustomJSONProxy>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UserVerifierCustomJSONProxy.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<UserVerifierCustomJSONProxy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_finish(res: Gio.AsyncResult): UserVerifierCustomJSONProxy;
        // Conflicted with Gio.AsyncInitable.new_finish

        static new_finish(...args: never[]): any;

        static new_for_bus_finish(res: Gio.AsyncResult): UserVerifierCustomJSONProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): UserVerifierCustomJSONProxy;
        // Conflicted with Gio.DBusProxy.new_for_bus_sync

        static new_for_bus_sync(...args: never[]): any;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): UserVerifierCustomJSONProxy;
        // Conflicted with Gio.DBusProxy.new_sync

        static new_sync(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof UserVerifierCustomJSONProxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserVerifierCustomJSONProxy.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof UserVerifierCustomJSONProxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserVerifierCustomJSONProxy.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof UserVerifierCustomJSONProxy.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UserVerifierCustomJSONProxy.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-DisplayManager-UserVerifier-CustomJSON.top_of_page">org.gnome.DisplayManager.UserVerifier.CustomJSON</link>. See `g_dbus_proxy_new()` for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_custom_json_proxy_new_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_custom_json_proxy_new_sync()` for the synchronous, blocking version of this constructor.
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
            callback?: Gio.AsyncReadyCallback<UserVerifierCustomJSONProxy> | null,
        ): void;
        /**
         * @param args
         */
        // Conflicted with Gio.DBusProxy.new
        static ['new'](...args: never[]): any;
        /**
         * Like `gdm_user_verifier_custom_json_proxy_new()` but takes a {@link Gio.BusType} instead of a {@link Gio.DBusConnection}.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_custom_json_proxy_new_for_bus_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_custom_json_proxy_new_for_bus_sync()` for the synchronous, blocking version of this constructor.
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
            callback?: Gio.AsyncReadyCallback<UserVerifierCustomJSONProxy> | null,
        ): void;
        /**
         * @param args
         */
        // Conflicted with Gio.DBusProxy.new_for_bus
        static new_for_bus(...args: never[]): any;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-CustomJSON.Reply">Reply()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_custom_json_call_reply_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_custom_json_call_reply_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_reply Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_reply(
            arg_service_name: string,
            arg_reply: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-CustomJSON.Reply">Reply()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_custom_json_call_reply_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_custom_json_call_reply_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_reply Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_reply(
            arg_service_name: string,
            arg_reply: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-CustomJSON.Reply">Reply()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_custom_json_call_reply_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_custom_json_call_reply_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_reply Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_reply(
            arg_service_name: string,
            arg_reply: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_user_verifier_custom_json_call_reply()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_user_verifier_custom_json_call_reply()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_reply_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-CustomJSON.Reply">Reply()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_user_verifier_custom_json_call_reply()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_reply Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_reply_sync(arg_service_name: string, arg_reply: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-CustomJSON.ReportError">ReportError()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_custom_json_call_report_error_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_custom_json_call_report_error_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_error Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_report_error(
            arg_service_name: string,
            arg_error: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-CustomJSON.ReportError">ReportError()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_custom_json_call_report_error_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_custom_json_call_report_error_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_error Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_report_error(
            arg_service_name: string,
            arg_error: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-CustomJSON.ReportError">ReportError()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_custom_json_call_report_error_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_custom_json_call_report_error_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_error Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_report_error(
            arg_service_name: string,
            arg_error: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_user_verifier_custom_json_call_report_error()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_user_verifier_custom_json_call_report_error()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_report_error_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-CustomJSON.ReportError">ReportError()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_user_verifier_custom_json_call_report_error()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_error Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_report_error_sync(
            arg_service_name: string,
            arg_error: string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-CustomJSON.Reply">Reply()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_reply(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-CustomJSON.ReportError">ReportError()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_report_error(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier-CustomJSON.Request">"Request"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         * @param arg_protocol Argument to pass with the signal.
         * @param arg_version Argument to pass with the signal.
         * @param arg_request Argument to pass with the signal.
         */
        emit_request(arg_service_name: string, arg_protocol: string, arg_version: number, arg_request: string): void;
        /**
         * Handler for the {@link Gdm.UserVerifierCustomJSON.SignalSignatures.handle_reply | Gdm.UserVerifierCustomJSON::handle-reply} signal.
         * @param invocation
         * @param arg_service_name
         * @param arg_reply
         * @virtual
         */
        vfunc_handle_reply(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_reply: string): boolean;
        /**
         * Handler for the {@link Gdm.UserVerifierCustomJSON.SignalSignatures.handle_report_error | Gdm.UserVerifierCustomJSON::handle-report-error} signal.
         * @param invocation
         * @param arg_service_name
         * @param arg_error
         * @virtual
         */
        vfunc_handle_report_error(
            invocation: Gio.DBusMethodInvocation,
            arg_service_name: string,
            arg_error: string,
        ): boolean;
        /**
         * Handler for the {@link Gdm.UserVerifierCustomJSON.SignalSignatures.request | Gdm.UserVerifierCustomJSON::request} signal.
         * @param arg_service_name
         * @param arg_protocol
         * @param arg_version
         * @param arg_request
         * @virtual
         */
        vfunc_request(arg_service_name: string, arg_protocol: string, arg_version: number, arg_request: string): void;
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
        new_finish(res: Gio.AsyncResult): UserVerifierCustomJSONProxy;
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
         *
         * This can return `null` if no {@link Gio.DBusInterfaceInfo} was provided during
         * construction of `interface_` and is also not made available otherwise.
         * For example, {@link Gio.DBusProxy} implements {@link Gio.DBusInterface} but allows for a `null`
         * {@link Gio.DBusInterfaceInfo}.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo | null;
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
         *
         * This can return `null` if no {@link Gio.DBusInterfaceInfo} was provided during
         * construction of `interface_` and is also not made available otherwise.
         * For example, {@link Gio.DBusProxy} implements {@link Gio.DBusInterface} but allows for a `null`
         * {@link Gio.DBusInterfaceInfo}.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
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
         * a [floating](floating-refs.html) object reference. Doing this is seldom
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
         * Checks whether `object` has a [floating](floating-refs.html) reference.
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
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
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

    namespace UserVerifierCustomJSONSkeleton {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            'notify::g-flags': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gio.DBusInterfaceSkeleton.ConstructorProps,
                UserVerifierCustomJSON.ConstructorProps,
                Gio.DBusInterface.ConstructorProps {}
    }

    /**
     * The {@link Gdm.UserVerifierCustomJSONSkeleton} structure contains only private data and should only be accessed using the provided API.
     * @gir-type Class
     */
    class UserVerifierCustomJSONSkeleton
        extends Gio.DBusInterfaceSkeleton
        implements UserVerifierCustomJSON, Gio.DBusInterface
    {
        static $gtype: GObject.GType<UserVerifierCustomJSONSkeleton>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UserVerifierCustomJSONSkeleton.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<UserVerifierCustomJSONSkeleton.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): UserVerifierCustomJSONSkeleton;

        // Signals

        /** @signal */
        connect<K extends keyof UserVerifierCustomJSONSkeleton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserVerifierCustomJSONSkeleton.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof UserVerifierCustomJSONSkeleton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserVerifierCustomJSONSkeleton.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof UserVerifierCustomJSONSkeleton.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UserVerifierCustomJSONSkeleton.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-CustomJSON.Reply">Reply()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_custom_json_call_reply_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_custom_json_call_reply_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_reply Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_reply(
            arg_service_name: string,
            arg_reply: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-CustomJSON.Reply">Reply()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_custom_json_call_reply_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_custom_json_call_reply_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_reply Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_reply(
            arg_service_name: string,
            arg_reply: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-CustomJSON.Reply">Reply()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_custom_json_call_reply_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_custom_json_call_reply_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_reply Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_reply(
            arg_service_name: string,
            arg_reply: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_user_verifier_custom_json_call_reply()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_user_verifier_custom_json_call_reply()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_reply_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-CustomJSON.Reply">Reply()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_user_verifier_custom_json_call_reply()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_reply Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_reply_sync(arg_service_name: string, arg_reply: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-CustomJSON.ReportError">ReportError()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_custom_json_call_report_error_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_custom_json_call_report_error_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_error Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_report_error(
            arg_service_name: string,
            arg_error: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-CustomJSON.ReportError">ReportError()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_custom_json_call_report_error_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_custom_json_call_report_error_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_error Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_report_error(
            arg_service_name: string,
            arg_error: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-CustomJSON.ReportError">ReportError()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_custom_json_call_report_error_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_custom_json_call_report_error_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_error Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_report_error(
            arg_service_name: string,
            arg_error: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_user_verifier_custom_json_call_report_error()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_user_verifier_custom_json_call_report_error()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_report_error_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-CustomJSON.ReportError">ReportError()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_user_verifier_custom_json_call_report_error()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_error Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_report_error_sync(
            arg_service_name: string,
            arg_error: string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-CustomJSON.Reply">Reply()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_reply(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-CustomJSON.ReportError">ReportError()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_report_error(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier-CustomJSON.Request">"Request"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         * @param arg_protocol Argument to pass with the signal.
         * @param arg_version Argument to pass with the signal.
         * @param arg_request Argument to pass with the signal.
         */
        emit_request(arg_service_name: string, arg_protocol: string, arg_version: number, arg_request: string): void;
        /**
         * Handler for the {@link Gdm.UserVerifierCustomJSON.SignalSignatures.handle_reply | Gdm.UserVerifierCustomJSON::handle-reply} signal.
         * @param invocation
         * @param arg_service_name
         * @param arg_reply
         * @virtual
         */
        vfunc_handle_reply(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_reply: string): boolean;
        /**
         * Handler for the {@link Gdm.UserVerifierCustomJSON.SignalSignatures.handle_report_error | Gdm.UserVerifierCustomJSON::handle-report-error} signal.
         * @param invocation
         * @param arg_service_name
         * @param arg_error
         * @virtual
         */
        vfunc_handle_report_error(
            invocation: Gio.DBusMethodInvocation,
            arg_service_name: string,
            arg_error: string,
        ): boolean;
        /**
         * Handler for the {@link Gdm.UserVerifierCustomJSON.SignalSignatures.request | Gdm.UserVerifierCustomJSON::request} signal.
         * @param arg_service_name
         * @param arg_protocol
         * @param arg_version
         * @param arg_request
         * @virtual
         */
        vfunc_request(arg_service_name: string, arg_protocol: string, arg_version: number, arg_request: string): void;
        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         */
        get_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         *
         * This can return `null` if no {@link Gio.DBusInterfaceInfo} was provided during
         * construction of `interface_` and is also not made available otherwise.
         * For example, {@link Gio.DBusProxy} implements {@link Gio.DBusInterface} but allows for a `null`
         * {@link Gio.DBusInterfaceInfo}.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo | null;
        /**
         * @param args
         */
        // Conflicted with Gio.DBusInterfaceSkeleton.get_info
        get_info(...args: never[]): any;
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
         *
         * This can return `null` if no {@link Gio.DBusInterfaceInfo} was provided during
         * construction of `interface_` and is also not made available otherwise.
         * For example, {@link Gio.DBusProxy} implements {@link Gio.DBusInterface} but allows for a `null`
         * {@link Gio.DBusInterfaceInfo}.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        /**
         * @param args
         * @virtual
         */
        // Conflicted with Gio.DBusInterfaceSkeleton.vfunc_get_info
        vfunc_get_info(...args: never[]): any;
        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         * @virtual
         */
        vfunc_set_object(object?: Gio.DBusObject | null): void;
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
         * a [floating](floating-refs.html) object reference. Doing this is seldom
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
         * Checks whether `object` has a [floating](floating-refs.html) reference.
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
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
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

    namespace UserVerifierProxy {
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
                UserVerifier.ConstructorProps,
                Gio.AsyncInitable.ConstructorProps,
                Gio.DBusInterface.ConstructorProps,
                Gio.Initable.ConstructorProps {}
    }

    /**
     * The {@link Gdm.UserVerifierProxy} structure contains only private data and should only be accessed using the provided API.
     * @gir-type Class
     */
    class UserVerifierProxy
        extends Gio.DBusProxy
        implements UserVerifier, Gio.AsyncInitable<UserVerifierProxy>, Gio.DBusInterface, Gio.Initable
    {
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

        static new_finish(res: Gio.AsyncResult): UserVerifierProxy;
        // Conflicted with Gio.AsyncInitable.new_finish

        static new_finish(...args: never[]): any;

        static new_for_bus_finish(res: Gio.AsyncResult): UserVerifierProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): UserVerifierProxy;
        // Conflicted with Gio.DBusProxy.new_for_bus_sync

        static new_for_bus_sync(...args: never[]): any;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): UserVerifierProxy;
        // Conflicted with Gio.DBusProxy.new_sync

        static new_sync(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof UserVerifierProxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserVerifierProxy.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof UserVerifierProxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserVerifierProxy.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof UserVerifierProxy.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UserVerifierProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-DisplayManager-UserVerifier.top_of_page">org.gnome.DisplayManager.UserVerifier</link>. See `g_dbus_proxy_new()` for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_proxy_new_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_proxy_new_sync()` for the synchronous, blocking version of this constructor.
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
            callback?: Gio.AsyncReadyCallback<UserVerifierProxy> | null,
        ): void;
        /**
         * @param args
         */
        // Conflicted with Gio.DBusProxy.new
        static ['new'](...args: never[]): any;
        /**
         * Like `gdm_user_verifier_proxy_new()` but takes a {@link Gio.BusType} instead of a {@link Gio.DBusConnection}.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_proxy_new_for_bus_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_proxy_new_for_bus_sync()` for the synchronous, blocking version of this constructor.
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
            callback?: Gio.AsyncReadyCallback<UserVerifierProxy> | null,
        ): void;
        /**
         * @param args
         */
        // Conflicted with Gio.DBusProxy.new_for_bus
        static new_for_bus(...args: never[]): any;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.AnswerQuery">AnswerQuery()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_answer_query_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_answer_query_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_answer Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_answer_query(
            arg_service_name: string,
            arg_answer: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.AnswerQuery">AnswerQuery()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_answer_query_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_answer_query_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_answer Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_answer_query(
            arg_service_name: string,
            arg_answer: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.AnswerQuery">AnswerQuery()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_answer_query_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_answer_query_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_answer Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_answer_query(
            arg_service_name: string,
            arg_answer: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_user_verifier_call_answer_query()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_user_verifier_call_answer_query()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_answer_query_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.AnswerQuery">AnswerQuery()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_user_verifier_call_answer_query()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_answer Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_answer_query_sync(
            arg_service_name: string,
            arg_answer: string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.BeginVerification">BeginVerification()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_begin_verification_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_begin_verification_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_begin_verification(
            arg_service_name: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.BeginVerification">BeginVerification()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_begin_verification_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_begin_verification_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_begin_verification(
            arg_service_name: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.BeginVerification">BeginVerification()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_begin_verification_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_begin_verification_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_begin_verification(
            arg_service_name: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_user_verifier_call_begin_verification()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_user_verifier_call_begin_verification()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_begin_verification_finish(res: Gio.AsyncResult): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.BeginVerificationForUser">BeginVerificationForUser()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_begin_verification_for_user_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_begin_verification_for_user_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_begin_verification_for_user(
            arg_service_name: string,
            arg_username: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.BeginVerificationForUser">BeginVerificationForUser()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_begin_verification_for_user_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_begin_verification_for_user_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_begin_verification_for_user(
            arg_service_name: string,
            arg_username: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.BeginVerificationForUser">BeginVerificationForUser()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_begin_verification_for_user_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_begin_verification_for_user_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_begin_verification_for_user(
            arg_service_name: string,
            arg_username: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_user_verifier_call_begin_verification_for_user()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_user_verifier_call_begin_verification_for_user()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_begin_verification_for_user_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.BeginVerificationForUser">BeginVerificationForUser()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_user_verifier_call_begin_verification_for_user()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_begin_verification_for_user_sync(
            arg_service_name: string,
            arg_username: string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.BeginVerification">BeginVerification()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_user_verifier_call_begin_verification()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_begin_verification_sync(arg_service_name: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.Cancel">Cancel()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_cancel_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_cancel_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_cancel(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.Cancel">Cancel()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_cancel_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_cancel_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_cancel(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.Cancel">Cancel()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_cancel_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_cancel_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_cancel(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_user_verifier_call_cancel()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_user_verifier_call_cancel()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_cancel_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.Cancel">Cancel()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_user_verifier_call_cancel()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_cancel_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.EnableExtensions">EnableExtensions()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_enable_extensions_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_enable_extensions_sync()` for the synchronous, blocking version of this method.
         * @param arg_extensions Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_enable_extensions(
            arg_extensions: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.EnableExtensions">EnableExtensions()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_enable_extensions_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_enable_extensions_sync()` for the synchronous, blocking version of this method.
         * @param arg_extensions Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_enable_extensions(
            arg_extensions: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.EnableExtensions">EnableExtensions()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_enable_extensions_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_enable_extensions_sync()` for the synchronous, blocking version of this method.
         * @param arg_extensions Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_enable_extensions(
            arg_extensions: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_user_verifier_call_enable_extensions()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_user_verifier_call_enable_extensions()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_enable_extensions_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.EnableExtensions">EnableExtensions()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_user_verifier_call_enable_extensions()` for the asynchronous version of this method.
         * @param arg_extensions Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_enable_extensions_sync(arg_extensions: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.AnswerQuery">AnswerQuery()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_answer_query(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.BeginVerification">BeginVerification()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_begin_verification(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.BeginVerificationForUser">BeginVerificationForUser()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_begin_verification_for_user(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.Cancel">Cancel()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_cancel(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.EnableExtensions">EnableExtensions()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_enable_extensions(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier.ConversationStarted">"ConversationStarted"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         */
        emit_conversation_started(arg_service_name: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier.ConversationStopped">"ConversationStopped"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         */
        emit_conversation_stopped(arg_service_name: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier.Info">"Info"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         * @param arg_info Argument to pass with the signal.
         */
        emit_info(arg_service_name: string, arg_info: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier.InfoQuery">"InfoQuery"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         * @param arg_query Argument to pass with the signal.
         */
        emit_info_query(arg_service_name: string, arg_query: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier.Problem">"Problem"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         * @param arg_problem Argument to pass with the signal.
         */
        emit_problem(arg_service_name: string, arg_problem: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier.ReauthenticationStarted">"ReauthenticationStarted"</link> D-Bus signal.
         * @param arg_pid_of_caller Argument to pass with the signal.
         */
        emit_reauthentication_started(arg_pid_of_caller: number): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier.Reset">"Reset"</link> D-Bus signal.
         */
        emit_reset(): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier.SecretInfoQuery">"SecretInfoQuery"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         * @param arg_query Argument to pass with the signal.
         */
        emit_secret_info_query(arg_service_name: string, arg_query: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier.ServiceUnavailable">"ServiceUnavailable"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         * @param arg_message Argument to pass with the signal.
         */
        emit_service_unavailable(arg_service_name: string, arg_message: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier.VerificationComplete">"VerificationComplete"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         */
        emit_verification_complete(arg_service_name: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier.VerificationFailed">"VerificationFailed"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         */
        emit_verification_failed(arg_service_name: string): void;
        /**
         * Handler for the {@link Gdm.UserVerifier.SignalSignatures.conversation_started | Gdm.UserVerifier::conversation-started} signal.
         * @param arg_service_name
         * @virtual
         */
        vfunc_conversation_started(arg_service_name: string): void;
        /**
         * Handler for the {@link Gdm.UserVerifier.SignalSignatures.conversation_stopped | Gdm.UserVerifier::conversation-stopped} signal.
         * @param arg_service_name
         * @virtual
         */
        vfunc_conversation_stopped(arg_service_name: string): void;
        /**
         * Handler for the {@link Gdm.UserVerifier.SignalSignatures.handle_answer_query | Gdm.UserVerifier::handle-answer-query} signal.
         * @param invocation
         * @param arg_service_name
         * @param arg_answer
         * @virtual
         */
        vfunc_handle_answer_query(
            invocation: Gio.DBusMethodInvocation,
            arg_service_name: string,
            arg_answer: string,
        ): boolean;
        /**
         * Handler for the {@link Gdm.UserVerifier.SignalSignatures.handle_begin_verification | Gdm.UserVerifier::handle-begin-verification} signal.
         * @param invocation
         * @param arg_service_name
         * @virtual
         */
        vfunc_handle_begin_verification(invocation: Gio.DBusMethodInvocation, arg_service_name: string): boolean;
        /**
         * Handler for the {@link Gdm.UserVerifier.SignalSignatures.handle_begin_verification_for_user | Gdm.UserVerifier::handle-begin-verification-for-user} signal.
         * @param invocation
         * @param arg_service_name
         * @param arg_username
         * @virtual
         */
        vfunc_handle_begin_verification_for_user(
            invocation: Gio.DBusMethodInvocation,
            arg_service_name: string,
            arg_username: string,
        ): boolean;
        /**
         * Handler for the {@link Gdm.UserVerifier.SignalSignatures.handle_cancel | Gdm.UserVerifier::handle-cancel} signal.
         * @param invocation
         * @virtual
         */
        vfunc_handle_cancel(invocation: Gio.DBusMethodInvocation): boolean;
        /**
         * Handler for the {@link Gdm.UserVerifier.SignalSignatures.handle_enable_extensions | Gdm.UserVerifier::handle-enable-extensions} signal.
         * @param invocation
         * @param arg_extensions
         * @virtual
         */
        vfunc_handle_enable_extensions(invocation: Gio.DBusMethodInvocation, arg_extensions: string): boolean;
        /**
         * Handler for the {@link Gdm.UserVerifier.SignalSignatures.info | Gdm.UserVerifier::info} signal.
         * @param arg_service_name
         * @param arg_info
         * @virtual
         */
        vfunc_info(arg_service_name: string, arg_info: string): void;
        /**
         * Handler for the {@link Gdm.UserVerifier.SignalSignatures.info_query | Gdm.UserVerifier::info-query} signal.
         * @param arg_service_name
         * @param arg_query
         * @virtual
         */
        vfunc_info_query(arg_service_name: string, arg_query: string): void;
        /**
         * Handler for the {@link Gdm.UserVerifier.SignalSignatures.problem | Gdm.UserVerifier::problem} signal.
         * @param arg_service_name
         * @param arg_problem
         * @virtual
         */
        vfunc_problem(arg_service_name: string, arg_problem: string): void;
        /**
         * Handler for the {@link Gdm.UserVerifier.SignalSignatures.reauthentication_started | Gdm.UserVerifier::reauthentication-started} signal.
         * @param arg_pid_of_caller
         * @virtual
         */
        vfunc_reauthentication_started(arg_pid_of_caller: number): void;
        /**
         * Handler for the {@link Gdm.UserVerifier.SignalSignatures.reset | Gdm.UserVerifier::reset} signal.
         * @virtual
         */
        vfunc_reset(): void;
        /**
         * Handler for the {@link Gdm.UserVerifier.SignalSignatures.secret_info_query | Gdm.UserVerifier::secret-info-query} signal.
         * @param arg_service_name
         * @param arg_query
         * @virtual
         */
        vfunc_secret_info_query(arg_service_name: string, arg_query: string): void;
        /**
         * Handler for the {@link Gdm.UserVerifier.SignalSignatures.service_unavailable | Gdm.UserVerifier::service-unavailable} signal.
         * @param arg_service_name
         * @param arg_message
         * @virtual
         */
        vfunc_service_unavailable(arg_service_name: string, arg_message: string): void;
        /**
         * Handler for the {@link Gdm.UserVerifier.SignalSignatures.verification_complete | Gdm.UserVerifier::verification-complete} signal.
         * @param arg_service_name
         * @virtual
         */
        vfunc_verification_complete(arg_service_name: string): void;
        /**
         * Handler for the {@link Gdm.UserVerifier.SignalSignatures.verification_failed | Gdm.UserVerifier::verification-failed} signal.
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
         *
         * This can return `null` if no {@link Gio.DBusInterfaceInfo} was provided during
         * construction of `interface_` and is also not made available otherwise.
         * For example, {@link Gio.DBusProxy} implements {@link Gio.DBusInterface} but allows for a `null`
         * {@link Gio.DBusInterfaceInfo}.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo | null;
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
         *
         * This can return `null` if no {@link Gio.DBusInterfaceInfo} was provided during
         * construction of `interface_` and is also not made available otherwise.
         * For example, {@link Gio.DBusProxy} implements {@link Gio.DBusInterface} but allows for a `null`
         * {@link Gio.DBusInterfaceInfo}.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
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
         * a [floating](floating-refs.html) object reference. Doing this is seldom
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
         * Checks whether `object` has a [floating](floating-refs.html) reference.
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
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
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

    namespace UserVerifierSkeleton {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            'notify::g-flags': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gio.DBusInterfaceSkeleton.ConstructorProps,
                UserVerifier.ConstructorProps,
                Gio.DBusInterface.ConstructorProps {}
    }

    /**
     * The {@link Gdm.UserVerifierSkeleton} structure contains only private data and should only be accessed using the provided API.
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

        static ['new'](): UserVerifierSkeleton;

        // Signals

        /** @signal */
        connect<K extends keyof UserVerifierSkeleton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserVerifierSkeleton.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof UserVerifierSkeleton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserVerifierSkeleton.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof UserVerifierSkeleton.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UserVerifierSkeleton.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.AnswerQuery">AnswerQuery()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_answer_query_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_answer_query_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_answer Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_answer_query(
            arg_service_name: string,
            arg_answer: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.AnswerQuery">AnswerQuery()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_answer_query_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_answer_query_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_answer Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_answer_query(
            arg_service_name: string,
            arg_answer: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.AnswerQuery">AnswerQuery()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_answer_query_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_answer_query_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_answer Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_answer_query(
            arg_service_name: string,
            arg_answer: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_user_verifier_call_answer_query()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_user_verifier_call_answer_query()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_answer_query_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.AnswerQuery">AnswerQuery()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_user_verifier_call_answer_query()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_answer Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_answer_query_sync(
            arg_service_name: string,
            arg_answer: string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.BeginVerification">BeginVerification()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_begin_verification_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_begin_verification_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_begin_verification(
            arg_service_name: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.BeginVerification">BeginVerification()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_begin_verification_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_begin_verification_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_begin_verification(
            arg_service_name: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.BeginVerification">BeginVerification()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_begin_verification_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_begin_verification_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_begin_verification(
            arg_service_name: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_user_verifier_call_begin_verification()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_user_verifier_call_begin_verification()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_begin_verification_finish(res: Gio.AsyncResult): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.BeginVerificationForUser">BeginVerificationForUser()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_begin_verification_for_user_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_begin_verification_for_user_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_begin_verification_for_user(
            arg_service_name: string,
            arg_username: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.BeginVerificationForUser">BeginVerificationForUser()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_begin_verification_for_user_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_begin_verification_for_user_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_begin_verification_for_user(
            arg_service_name: string,
            arg_username: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.BeginVerificationForUser">BeginVerificationForUser()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_begin_verification_for_user_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_begin_verification_for_user_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_begin_verification_for_user(
            arg_service_name: string,
            arg_username: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_user_verifier_call_begin_verification_for_user()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_user_verifier_call_begin_verification_for_user()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_begin_verification_for_user_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.BeginVerificationForUser">BeginVerificationForUser()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_user_verifier_call_begin_verification_for_user()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_begin_verification_for_user_sync(
            arg_service_name: string,
            arg_username: string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.BeginVerification">BeginVerification()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_user_verifier_call_begin_verification()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_begin_verification_sync(arg_service_name: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.Cancel">Cancel()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_cancel_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_cancel_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_cancel(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.Cancel">Cancel()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_cancel_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_cancel_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_cancel(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.Cancel">Cancel()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_cancel_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_cancel_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_cancel(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_user_verifier_call_cancel()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_user_verifier_call_cancel()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_cancel_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.Cancel">Cancel()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_user_verifier_call_cancel()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_cancel_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.EnableExtensions">EnableExtensions()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_enable_extensions_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_enable_extensions_sync()` for the synchronous, blocking version of this method.
         * @param arg_extensions Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_enable_extensions(
            arg_extensions: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.EnableExtensions">EnableExtensions()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_enable_extensions_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_enable_extensions_sync()` for the synchronous, blocking version of this method.
         * @param arg_extensions Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_enable_extensions(
            arg_extensions: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.EnableExtensions">EnableExtensions()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_enable_extensions_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_enable_extensions_sync()` for the synchronous, blocking version of this method.
         * @param arg_extensions Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_enable_extensions(
            arg_extensions: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_user_verifier_call_enable_extensions()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_user_verifier_call_enable_extensions()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_enable_extensions_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.EnableExtensions">EnableExtensions()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_user_verifier_call_enable_extensions()` for the asynchronous version of this method.
         * @param arg_extensions Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_enable_extensions_sync(arg_extensions: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.AnswerQuery">AnswerQuery()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_answer_query(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.BeginVerification">BeginVerification()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_begin_verification(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.BeginVerificationForUser">BeginVerificationForUser()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_begin_verification_for_user(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.Cancel">Cancel()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_cancel(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.EnableExtensions">EnableExtensions()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_enable_extensions(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier.ConversationStarted">"ConversationStarted"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         */
        emit_conversation_started(arg_service_name: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier.ConversationStopped">"ConversationStopped"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         */
        emit_conversation_stopped(arg_service_name: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier.Info">"Info"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         * @param arg_info Argument to pass with the signal.
         */
        emit_info(arg_service_name: string, arg_info: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier.InfoQuery">"InfoQuery"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         * @param arg_query Argument to pass with the signal.
         */
        emit_info_query(arg_service_name: string, arg_query: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier.Problem">"Problem"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         * @param arg_problem Argument to pass with the signal.
         */
        emit_problem(arg_service_name: string, arg_problem: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier.ReauthenticationStarted">"ReauthenticationStarted"</link> D-Bus signal.
         * @param arg_pid_of_caller Argument to pass with the signal.
         */
        emit_reauthentication_started(arg_pid_of_caller: number): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier.Reset">"Reset"</link> D-Bus signal.
         */
        emit_reset(): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier.SecretInfoQuery">"SecretInfoQuery"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         * @param arg_query Argument to pass with the signal.
         */
        emit_secret_info_query(arg_service_name: string, arg_query: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier.ServiceUnavailable">"ServiceUnavailable"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         * @param arg_message Argument to pass with the signal.
         */
        emit_service_unavailable(arg_service_name: string, arg_message: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier.VerificationComplete">"VerificationComplete"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         */
        emit_verification_complete(arg_service_name: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier.VerificationFailed">"VerificationFailed"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         */
        emit_verification_failed(arg_service_name: string): void;
        /**
         * Handler for the {@link Gdm.UserVerifier.SignalSignatures.conversation_started | Gdm.UserVerifier::conversation-started} signal.
         * @param arg_service_name
         * @virtual
         */
        vfunc_conversation_started(arg_service_name: string): void;
        /**
         * Handler for the {@link Gdm.UserVerifier.SignalSignatures.conversation_stopped | Gdm.UserVerifier::conversation-stopped} signal.
         * @param arg_service_name
         * @virtual
         */
        vfunc_conversation_stopped(arg_service_name: string): void;
        /**
         * Handler for the {@link Gdm.UserVerifier.SignalSignatures.handle_answer_query | Gdm.UserVerifier::handle-answer-query} signal.
         * @param invocation
         * @param arg_service_name
         * @param arg_answer
         * @virtual
         */
        vfunc_handle_answer_query(
            invocation: Gio.DBusMethodInvocation,
            arg_service_name: string,
            arg_answer: string,
        ): boolean;
        /**
         * Handler for the {@link Gdm.UserVerifier.SignalSignatures.handle_begin_verification | Gdm.UserVerifier::handle-begin-verification} signal.
         * @param invocation
         * @param arg_service_name
         * @virtual
         */
        vfunc_handle_begin_verification(invocation: Gio.DBusMethodInvocation, arg_service_name: string): boolean;
        /**
         * Handler for the {@link Gdm.UserVerifier.SignalSignatures.handle_begin_verification_for_user | Gdm.UserVerifier::handle-begin-verification-for-user} signal.
         * @param invocation
         * @param arg_service_name
         * @param arg_username
         * @virtual
         */
        vfunc_handle_begin_verification_for_user(
            invocation: Gio.DBusMethodInvocation,
            arg_service_name: string,
            arg_username: string,
        ): boolean;
        /**
         * Handler for the {@link Gdm.UserVerifier.SignalSignatures.handle_cancel | Gdm.UserVerifier::handle-cancel} signal.
         * @param invocation
         * @virtual
         */
        vfunc_handle_cancel(invocation: Gio.DBusMethodInvocation): boolean;
        /**
         * Handler for the {@link Gdm.UserVerifier.SignalSignatures.handle_enable_extensions | Gdm.UserVerifier::handle-enable-extensions} signal.
         * @param invocation
         * @param arg_extensions
         * @virtual
         */
        vfunc_handle_enable_extensions(invocation: Gio.DBusMethodInvocation, arg_extensions: string): boolean;
        /**
         * Handler for the {@link Gdm.UserVerifier.SignalSignatures.info | Gdm.UserVerifier::info} signal.
         * @param arg_service_name
         * @param arg_info
         * @virtual
         */
        vfunc_info(arg_service_name: string, arg_info: string): void;
        /**
         * Handler for the {@link Gdm.UserVerifier.SignalSignatures.info_query | Gdm.UserVerifier::info-query} signal.
         * @param arg_service_name
         * @param arg_query
         * @virtual
         */
        vfunc_info_query(arg_service_name: string, arg_query: string): void;
        /**
         * Handler for the {@link Gdm.UserVerifier.SignalSignatures.problem | Gdm.UserVerifier::problem} signal.
         * @param arg_service_name
         * @param arg_problem
         * @virtual
         */
        vfunc_problem(arg_service_name: string, arg_problem: string): void;
        /**
         * Handler for the {@link Gdm.UserVerifier.SignalSignatures.reauthentication_started | Gdm.UserVerifier::reauthentication-started} signal.
         * @param arg_pid_of_caller
         * @virtual
         */
        vfunc_reauthentication_started(arg_pid_of_caller: number): void;
        /**
         * Handler for the {@link Gdm.UserVerifier.SignalSignatures.reset | Gdm.UserVerifier::reset} signal.
         * @virtual
         */
        vfunc_reset(): void;
        /**
         * Handler for the {@link Gdm.UserVerifier.SignalSignatures.secret_info_query | Gdm.UserVerifier::secret-info-query} signal.
         * @param arg_service_name
         * @param arg_query
         * @virtual
         */
        vfunc_secret_info_query(arg_service_name: string, arg_query: string): void;
        /**
         * Handler for the {@link Gdm.UserVerifier.SignalSignatures.service_unavailable | Gdm.UserVerifier::service-unavailable} signal.
         * @param arg_service_name
         * @param arg_message
         * @virtual
         */
        vfunc_service_unavailable(arg_service_name: string, arg_message: string): void;
        /**
         * Handler for the {@link Gdm.UserVerifier.SignalSignatures.verification_complete | Gdm.UserVerifier::verification-complete} signal.
         * @param arg_service_name
         * @virtual
         */
        vfunc_verification_complete(arg_service_name: string): void;
        /**
         * Handler for the {@link Gdm.UserVerifier.SignalSignatures.verification_failed | Gdm.UserVerifier::verification-failed} signal.
         * @param arg_service_name
         * @virtual
         */
        vfunc_verification_failed(arg_service_name: string): void;
        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         */
        get_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         *
         * This can return `null` if no {@link Gio.DBusInterfaceInfo} was provided during
         * construction of `interface_` and is also not made available otherwise.
         * For example, {@link Gio.DBusProxy} implements {@link Gio.DBusInterface} but allows for a `null`
         * {@link Gio.DBusInterfaceInfo}.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo | null;
        /**
         * @param args
         */
        // Conflicted with Gio.DBusInterfaceSkeleton.get_info
        get_info(...args: never[]): any;
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
         *
         * This can return `null` if no {@link Gio.DBusInterfaceInfo} was provided during
         * construction of `interface_` and is also not made available otherwise.
         * For example, {@link Gio.DBusProxy} implements {@link Gio.DBusInterface} but allows for a `null`
         * {@link Gio.DBusInterfaceInfo}.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        /**
         * @param args
         * @virtual
         */
        // Conflicted with Gio.DBusInterfaceSkeleton.vfunc_get_info
        vfunc_get_info(...args: never[]): any;
        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         * @virtual
         */
        vfunc_set_object(object?: Gio.DBusObject | null): void;
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
         * a [floating](floating-refs.html) object reference. Doing this is seldom
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
         * Checks whether `object` has a [floating](floating-refs.html) reference.
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
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
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

    namespace WorkerManagerProxy {
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
                WorkerManager.ConstructorProps,
                Gio.AsyncInitable.ConstructorProps,
                Gio.DBusInterface.ConstructorProps,
                Gio.Initable.ConstructorProps {}
    }

    /**
     * The {@link Gdm.WorkerManagerProxy} structure contains only private data and should only be accessed using the provided API.
     * @gir-type Class
     */
    class WorkerManagerProxy
        extends Gio.DBusProxy
        implements WorkerManager, Gio.AsyncInitable<WorkerManagerProxy>, Gio.DBusInterface, Gio.Initable
    {
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

        static new_finish(res: Gio.AsyncResult): WorkerManagerProxy;
        // Conflicted with Gio.AsyncInitable.new_finish

        static new_finish(...args: never[]): any;

        static new_for_bus_finish(res: Gio.AsyncResult): WorkerManagerProxy;

        static new_for_bus_sync(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): WorkerManagerProxy;
        // Conflicted with Gio.DBusProxy.new_for_bus_sync

        static new_for_bus_sync(...args: never[]): any;

        static new_sync(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string | null,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
        ): WorkerManagerProxy;
        // Conflicted with Gio.DBusProxy.new_sync

        static new_sync(...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof WorkerManagerProxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WorkerManagerProxy.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WorkerManagerProxy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WorkerManagerProxy.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WorkerManagerProxy.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WorkerManagerProxy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-DisplayManager-WorkerManager.top_of_page">org.gnome.DisplayManager.WorkerManager</link>. See `g_dbus_proxy_new()` for more details.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_proxy_new_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_proxy_new_sync()` for the synchronous, blocking version of this constructor.
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
            callback?: Gio.AsyncReadyCallback<WorkerManagerProxy> | null,
        ): void;
        /**
         * @param args
         */
        // Conflicted with Gio.DBusProxy.new
        static ['new'](...args: never[]): any;
        /**
         * Like `gdm_worker_manager_proxy_new()` but takes a {@link Gio.BusType} instead of a {@link Gio.DBusConnection}.
         *
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_proxy_new_for_bus_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_proxy_new_for_bus_sync()` for the synchronous, blocking version of this constructor.
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
            callback?: Gio.AsyncReadyCallback<WorkerManagerProxy> | null,
        ): void;
        /**
         * @param args
         */
        // Conflicted with Gio.DBusProxy.new_for_bus
        static new_for_bus(...args: never[]): any;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.ChoiceListQuery">ChoiceListQuery()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_choice_list_query_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_choice_list_query_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_prompt_message Argument to pass with the method invocation.
         * @param arg_query Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_choice_list_query(
            arg_service_name: string,
            arg_prompt_message: string,
            arg_query: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<string>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.ChoiceListQuery">ChoiceListQuery()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_choice_list_query_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_choice_list_query_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_prompt_message Argument to pass with the method invocation.
         * @param arg_query Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_choice_list_query(
            arg_service_name: string,
            arg_prompt_message: string,
            arg_query: GLib.Variant,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.ChoiceListQuery">ChoiceListQuery()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_choice_list_query_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_choice_list_query_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_prompt_message Argument to pass with the method invocation.
         * @param arg_query Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_choice_list_query(
            arg_service_name: string,
            arg_prompt_message: string,
            arg_query: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string> | void;
        /**
         * Finishes an operation started with `gdm_worker_manager_call_choice_list_query()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_worker_manager_call_choice_list_query()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_choice_list_query_finish(res: Gio.AsyncResult): [boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.ChoiceListQuery">ChoiceListQuery()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_worker_manager_call_choice_list_query()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_prompt_message Argument to pass with the method invocation.
         * @param arg_query Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_choice_list_query_sync(
            arg_service_name: string,
            arg_prompt_message: string,
            arg_query: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, string];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.CustomJSONRequest">CustomJSONRequest()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_custom_json_request_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_custom_json_request_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_protocol Argument to pass with the method invocation.
         * @param arg_version Argument to pass with the method invocation.
         * @param arg_request Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_custom_json_request(
            arg_service_name: string,
            arg_protocol: string,
            arg_version: number,
            arg_request: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<string>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.CustomJSONRequest">CustomJSONRequest()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_custom_json_request_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_custom_json_request_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_protocol Argument to pass with the method invocation.
         * @param arg_version Argument to pass with the method invocation.
         * @param arg_request Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_custom_json_request(
            arg_service_name: string,
            arg_protocol: string,
            arg_version: number,
            arg_request: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.CustomJSONRequest">CustomJSONRequest()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_custom_json_request_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_custom_json_request_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_protocol Argument to pass with the method invocation.
         * @param arg_version Argument to pass with the method invocation.
         * @param arg_request Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_custom_json_request(
            arg_service_name: string,
            arg_protocol: string,
            arg_version: number,
            arg_request: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string> | void;
        /**
         * Finishes an operation started with `gdm_worker_manager_call_custom_json_request()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_worker_manager_call_custom_json_request()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_custom_json_request_finish(res: Gio.AsyncResult): [boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.CustomJSONRequest">CustomJSONRequest()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_worker_manager_call_custom_json_request()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_protocol Argument to pass with the method invocation.
         * @param arg_version Argument to pass with the method invocation.
         * @param arg_request Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_custom_json_request_sync(
            arg_service_name: string,
            arg_protocol: string,
            arg_version: number,
            arg_request: string,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, string];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Hello">Hello()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_hello_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_hello_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_hello(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Hello">Hello()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_hello_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_hello_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_hello(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Hello">Hello()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_hello_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_hello_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_hello(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_worker_manager_call_hello()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_worker_manager_call_hello()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_hello_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Hello">Hello()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_worker_manager_call_hello()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_hello_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Info">Info()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_info_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_info_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_info Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_info(
            arg_service_name: string,
            arg_info: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Info">Info()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_info_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_info_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_info Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_info(
            arg_service_name: string,
            arg_info: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Info">Info()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_info_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_info_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_info Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_info(
            arg_service_name: string,
            arg_info: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_worker_manager_call_info()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_worker_manager_call_info()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_info_finish(res: Gio.AsyncResult): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.InfoQuery">InfoQuery()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_info_query_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_info_query_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_query Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_info_query(
            arg_service_name: string,
            arg_query: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<string>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.InfoQuery">InfoQuery()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_info_query_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_info_query_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_query Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_info_query(
            arg_service_name: string,
            arg_query: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.InfoQuery">InfoQuery()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_info_query_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_info_query_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_query Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_info_query(
            arg_service_name: string,
            arg_query: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string> | void;
        /**
         * Finishes an operation started with `gdm_worker_manager_call_info_query()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_worker_manager_call_info_query()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_info_query_finish(res: Gio.AsyncResult): [boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.InfoQuery">InfoQuery()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_worker_manager_call_info_query()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_query Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_info_query_sync(
            arg_service_name: string,
            arg_query: string,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Info">Info()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_worker_manager_call_info()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_info Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_info_sync(arg_service_name: string, arg_info: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Problem">Problem()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_problem_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_problem_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_problem Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_problem(
            arg_service_name: string,
            arg_problem: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Problem">Problem()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_problem_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_problem_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_problem Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_problem(
            arg_service_name: string,
            arg_problem: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Problem">Problem()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_problem_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_problem_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_problem Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_problem(
            arg_service_name: string,
            arg_problem: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_worker_manager_call_problem()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_worker_manager_call_problem()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_problem_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Problem">Problem()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_worker_manager_call_problem()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_problem Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_problem_sync(arg_service_name: string, arg_problem: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.SecretInfoQuery">SecretInfoQuery()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_secret_info_query_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_secret_info_query_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_query Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_secret_info_query(
            arg_service_name: string,
            arg_query: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<string>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.SecretInfoQuery">SecretInfoQuery()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_secret_info_query_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_secret_info_query_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_query Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_secret_info_query(
            arg_service_name: string,
            arg_query: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.SecretInfoQuery">SecretInfoQuery()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_secret_info_query_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_secret_info_query_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_query Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_secret_info_query(
            arg_service_name: string,
            arg_query: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string> | void;
        /**
         * Finishes an operation started with `gdm_worker_manager_call_secret_info_query()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_worker_manager_call_secret_info_query()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_secret_info_query_finish(res: Gio.AsyncResult): [boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.SecretInfoQuery">SecretInfoQuery()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_worker_manager_call_secret_info_query()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_query Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_secret_info_query_sync(
            arg_service_name: string,
            arg_query: string,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, string];
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.ChoiceListQuery">ChoiceListQuery()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param answer Parameter to return.
         */
        complete_choice_list_query(invocation: Gio.DBusMethodInvocation, answer: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.CustomJSONRequest">CustomJSONRequest()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param response Parameter to return.
         */
        complete_custom_json_request(invocation: Gio.DBusMethodInvocation, response: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Hello">Hello()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_hello(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Info">Info()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_info(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.InfoQuery">InfoQuery()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param answer Parameter to return.
         */
        complete_info_query(invocation: Gio.DBusMethodInvocation, answer: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Problem">Problem()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_problem(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.SecretInfoQuery">SecretInfoQuery()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param answer Parameter to return.
         */
        complete_secret_info_query(invocation: Gio.DBusMethodInvocation, answer: string): void;
        /**
         * Handler for the {@link Gdm.WorkerManager.SignalSignatures.handle_choice_list_query | Gdm.WorkerManager::handle-choice-list-query} signal.
         * @param invocation
         * @param arg_service_name
         * @param arg_prompt_message
         * @param arg_query
         * @virtual
         */
        vfunc_handle_choice_list_query(
            invocation: Gio.DBusMethodInvocation,
            arg_service_name: string,
            arg_prompt_message: string,
            arg_query: GLib.Variant,
        ): boolean;
        /**
         * Handler for the {@link Gdm.WorkerManager.SignalSignatures.handle_custom_json_request | Gdm.WorkerManager::handle-custom-json-request} signal.
         * @param invocation
         * @param arg_service_name
         * @param arg_protocol
         * @param arg_version
         * @param arg_request
         * @virtual
         */
        vfunc_handle_custom_json_request(
            invocation: Gio.DBusMethodInvocation,
            arg_service_name: string,
            arg_protocol: string,
            arg_version: number,
            arg_request: string,
        ): boolean;
        /**
         * Handler for the {@link Gdm.WorkerManager.SignalSignatures.handle_hello | Gdm.WorkerManager::handle-hello} signal.
         * @param invocation
         * @virtual
         */
        vfunc_handle_hello(invocation: Gio.DBusMethodInvocation): boolean;
        /**
         * Handler for the {@link Gdm.WorkerManager.SignalSignatures.handle_info | Gdm.WorkerManager::handle-info} signal.
         * @param invocation
         * @param arg_service_name
         * @param arg_info
         * @virtual
         */
        vfunc_handle_info(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_info: string): boolean;
        /**
         * Handler for the {@link Gdm.WorkerManager.SignalSignatures.handle_info_query | Gdm.WorkerManager::handle-info-query} signal.
         * @param invocation
         * @param arg_service_name
         * @param arg_query
         * @virtual
         */
        vfunc_handle_info_query(
            invocation: Gio.DBusMethodInvocation,
            arg_service_name: string,
            arg_query: string,
        ): boolean;
        /**
         * Handler for the {@link Gdm.WorkerManager.SignalSignatures.handle_problem | Gdm.WorkerManager::handle-problem} signal.
         * @param invocation
         * @param arg_service_name
         * @param arg_problem
         * @virtual
         */
        vfunc_handle_problem(
            invocation: Gio.DBusMethodInvocation,
            arg_service_name: string,
            arg_problem: string,
        ): boolean;
        /**
         * Handler for the {@link Gdm.WorkerManager.SignalSignatures.handle_secret_info_query | Gdm.WorkerManager::handle-secret-info-query} signal.
         * @param invocation
         * @param arg_service_name
         * @param arg_query
         * @virtual
         */
        vfunc_handle_secret_info_query(
            invocation: Gio.DBusMethodInvocation,
            arg_service_name: string,
            arg_query: string,
        ): boolean;
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
         *
         * This can return `null` if no {@link Gio.DBusInterfaceInfo} was provided during
         * construction of `interface_` and is also not made available otherwise.
         * For example, {@link Gio.DBusProxy} implements {@link Gio.DBusInterface} but allows for a `null`
         * {@link Gio.DBusInterfaceInfo}.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo | null;
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
         *
         * This can return `null` if no {@link Gio.DBusInterfaceInfo} was provided during
         * construction of `interface_` and is also not made available otherwise.
         * For example, {@link Gio.DBusProxy} implements {@link Gio.DBusInterface} but allows for a `null`
         * {@link Gio.DBusInterfaceInfo}.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
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
         * a [floating](floating-refs.html) object reference. Doing this is seldom
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
         * Checks whether `object` has a [floating](floating-refs.html) reference.
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
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
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

    namespace WorkerManagerSkeleton {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            'notify::g-flags': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Gio.DBusInterfaceSkeleton.ConstructorProps,
                WorkerManager.ConstructorProps,
                Gio.DBusInterface.ConstructorProps {}
    }

    /**
     * The {@link Gdm.WorkerManagerSkeleton} structure contains only private data and should only be accessed using the provided API.
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

        static ['new'](): WorkerManagerSkeleton;

        // Signals

        /** @signal */
        connect<K extends keyof WorkerManagerSkeleton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WorkerManagerSkeleton.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WorkerManagerSkeleton.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WorkerManagerSkeleton.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WorkerManagerSkeleton.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WorkerManagerSkeleton.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.ChoiceListQuery">ChoiceListQuery()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_choice_list_query_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_choice_list_query_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_prompt_message Argument to pass with the method invocation.
         * @param arg_query Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_choice_list_query(
            arg_service_name: string,
            arg_prompt_message: string,
            arg_query: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<string>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.ChoiceListQuery">ChoiceListQuery()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_choice_list_query_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_choice_list_query_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_prompt_message Argument to pass with the method invocation.
         * @param arg_query Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_choice_list_query(
            arg_service_name: string,
            arg_prompt_message: string,
            arg_query: GLib.Variant,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.ChoiceListQuery">ChoiceListQuery()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_choice_list_query_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_choice_list_query_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_prompt_message Argument to pass with the method invocation.
         * @param arg_query Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_choice_list_query(
            arg_service_name: string,
            arg_prompt_message: string,
            arg_query: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string> | void;
        /**
         * Finishes an operation started with `gdm_worker_manager_call_choice_list_query()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_worker_manager_call_choice_list_query()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_choice_list_query_finish(res: Gio.AsyncResult): [boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.ChoiceListQuery">ChoiceListQuery()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_worker_manager_call_choice_list_query()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_prompt_message Argument to pass with the method invocation.
         * @param arg_query Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_choice_list_query_sync(
            arg_service_name: string,
            arg_prompt_message: string,
            arg_query: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, string];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.CustomJSONRequest">CustomJSONRequest()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_custom_json_request_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_custom_json_request_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_protocol Argument to pass with the method invocation.
         * @param arg_version Argument to pass with the method invocation.
         * @param arg_request Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_custom_json_request(
            arg_service_name: string,
            arg_protocol: string,
            arg_version: number,
            arg_request: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<string>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.CustomJSONRequest">CustomJSONRequest()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_custom_json_request_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_custom_json_request_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_protocol Argument to pass with the method invocation.
         * @param arg_version Argument to pass with the method invocation.
         * @param arg_request Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_custom_json_request(
            arg_service_name: string,
            arg_protocol: string,
            arg_version: number,
            arg_request: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.CustomJSONRequest">CustomJSONRequest()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_custom_json_request_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_custom_json_request_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_protocol Argument to pass with the method invocation.
         * @param arg_version Argument to pass with the method invocation.
         * @param arg_request Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_custom_json_request(
            arg_service_name: string,
            arg_protocol: string,
            arg_version: number,
            arg_request: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string> | void;
        /**
         * Finishes an operation started with `gdm_worker_manager_call_custom_json_request()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_worker_manager_call_custom_json_request()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_custom_json_request_finish(res: Gio.AsyncResult): [boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.CustomJSONRequest">CustomJSONRequest()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_worker_manager_call_custom_json_request()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_protocol Argument to pass with the method invocation.
         * @param arg_version Argument to pass with the method invocation.
         * @param arg_request Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_custom_json_request_sync(
            arg_service_name: string,
            arg_protocol: string,
            arg_version: number,
            arg_request: string,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, string];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Hello">Hello()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_hello_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_hello_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_hello(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Hello">Hello()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_hello_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_hello_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_hello(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Hello">Hello()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_hello_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_hello_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_hello(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_worker_manager_call_hello()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_worker_manager_call_hello()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_hello_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Hello">Hello()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_worker_manager_call_hello()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_hello_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Info">Info()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_info_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_info_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_info Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_info(
            arg_service_name: string,
            arg_info: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Info">Info()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_info_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_info_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_info Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_info(
            arg_service_name: string,
            arg_info: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Info">Info()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_info_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_info_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_info Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_info(
            arg_service_name: string,
            arg_info: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_worker_manager_call_info()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_worker_manager_call_info()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_info_finish(res: Gio.AsyncResult): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.InfoQuery">InfoQuery()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_info_query_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_info_query_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_query Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_info_query(
            arg_service_name: string,
            arg_query: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<string>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.InfoQuery">InfoQuery()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_info_query_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_info_query_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_query Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_info_query(
            arg_service_name: string,
            arg_query: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.InfoQuery">InfoQuery()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_info_query_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_info_query_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_query Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_info_query(
            arg_service_name: string,
            arg_query: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string> | void;
        /**
         * Finishes an operation started with `gdm_worker_manager_call_info_query()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_worker_manager_call_info_query()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_info_query_finish(res: Gio.AsyncResult): [boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.InfoQuery">InfoQuery()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_worker_manager_call_info_query()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_query Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_info_query_sync(
            arg_service_name: string,
            arg_query: string,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Info">Info()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_worker_manager_call_info()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_info Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_info_sync(arg_service_name: string, arg_info: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Problem">Problem()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_problem_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_problem_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_problem Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_problem(
            arg_service_name: string,
            arg_problem: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Problem">Problem()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_problem_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_problem_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_problem Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_problem(
            arg_service_name: string,
            arg_problem: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Problem">Problem()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_problem_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_problem_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_problem Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_problem(
            arg_service_name: string,
            arg_problem: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_worker_manager_call_problem()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_worker_manager_call_problem()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_problem_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Problem">Problem()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_worker_manager_call_problem()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_problem Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_problem_sync(arg_service_name: string, arg_problem: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.SecretInfoQuery">SecretInfoQuery()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_secret_info_query_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_secret_info_query_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_query Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_secret_info_query(
            arg_service_name: string,
            arg_query: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<string>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.SecretInfoQuery">SecretInfoQuery()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_secret_info_query_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_secret_info_query_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_query Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_secret_info_query(
            arg_service_name: string,
            arg_query: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.SecretInfoQuery">SecretInfoQuery()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_secret_info_query_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_secret_info_query_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_query Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_secret_info_query(
            arg_service_name: string,
            arg_query: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string> | void;
        /**
         * Finishes an operation started with `gdm_worker_manager_call_secret_info_query()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_worker_manager_call_secret_info_query()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_secret_info_query_finish(res: Gio.AsyncResult): [boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.SecretInfoQuery">SecretInfoQuery()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_worker_manager_call_secret_info_query()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_query Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_secret_info_query_sync(
            arg_service_name: string,
            arg_query: string,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, string];
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.ChoiceListQuery">ChoiceListQuery()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param answer Parameter to return.
         */
        complete_choice_list_query(invocation: Gio.DBusMethodInvocation, answer: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.CustomJSONRequest">CustomJSONRequest()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param response Parameter to return.
         */
        complete_custom_json_request(invocation: Gio.DBusMethodInvocation, response: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Hello">Hello()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_hello(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Info">Info()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_info(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.InfoQuery">InfoQuery()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param answer Parameter to return.
         */
        complete_info_query(invocation: Gio.DBusMethodInvocation, answer: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Problem">Problem()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_problem(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.SecretInfoQuery">SecretInfoQuery()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param answer Parameter to return.
         */
        complete_secret_info_query(invocation: Gio.DBusMethodInvocation, answer: string): void;
        /**
         * Handler for the {@link Gdm.WorkerManager.SignalSignatures.handle_choice_list_query | Gdm.WorkerManager::handle-choice-list-query} signal.
         * @param invocation
         * @param arg_service_name
         * @param arg_prompt_message
         * @param arg_query
         * @virtual
         */
        vfunc_handle_choice_list_query(
            invocation: Gio.DBusMethodInvocation,
            arg_service_name: string,
            arg_prompt_message: string,
            arg_query: GLib.Variant,
        ): boolean;
        /**
         * Handler for the {@link Gdm.WorkerManager.SignalSignatures.handle_custom_json_request | Gdm.WorkerManager::handle-custom-json-request} signal.
         * @param invocation
         * @param arg_service_name
         * @param arg_protocol
         * @param arg_version
         * @param arg_request
         * @virtual
         */
        vfunc_handle_custom_json_request(
            invocation: Gio.DBusMethodInvocation,
            arg_service_name: string,
            arg_protocol: string,
            arg_version: number,
            arg_request: string,
        ): boolean;
        /**
         * Handler for the {@link Gdm.WorkerManager.SignalSignatures.handle_hello | Gdm.WorkerManager::handle-hello} signal.
         * @param invocation
         * @virtual
         */
        vfunc_handle_hello(invocation: Gio.DBusMethodInvocation): boolean;
        /**
         * Handler for the {@link Gdm.WorkerManager.SignalSignatures.handle_info | Gdm.WorkerManager::handle-info} signal.
         * @param invocation
         * @param arg_service_name
         * @param arg_info
         * @virtual
         */
        vfunc_handle_info(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_info: string): boolean;
        /**
         * Handler for the {@link Gdm.WorkerManager.SignalSignatures.handle_info_query | Gdm.WorkerManager::handle-info-query} signal.
         * @param invocation
         * @param arg_service_name
         * @param arg_query
         * @virtual
         */
        vfunc_handle_info_query(
            invocation: Gio.DBusMethodInvocation,
            arg_service_name: string,
            arg_query: string,
        ): boolean;
        /**
         * Handler for the {@link Gdm.WorkerManager.SignalSignatures.handle_problem | Gdm.WorkerManager::handle-problem} signal.
         * @param invocation
         * @param arg_service_name
         * @param arg_problem
         * @virtual
         */
        vfunc_handle_problem(
            invocation: Gio.DBusMethodInvocation,
            arg_service_name: string,
            arg_problem: string,
        ): boolean;
        /**
         * Handler for the {@link Gdm.WorkerManager.SignalSignatures.handle_secret_info_query | Gdm.WorkerManager::handle-secret-info-query} signal.
         * @param invocation
         * @param arg_service_name
         * @param arg_query
         * @virtual
         */
        vfunc_handle_secret_info_query(
            invocation: Gio.DBusMethodInvocation,
            arg_service_name: string,
            arg_query: string,
        ): boolean;
        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         */
        get_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         *
         * This can return `null` if no {@link Gio.DBusInterfaceInfo} was provided during
         * construction of `interface_` and is also not made available otherwise.
         * For example, {@link Gio.DBusProxy} implements {@link Gio.DBusInterface} but allows for a `null`
         * {@link Gio.DBusInterfaceInfo}.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo | null;
        /**
         * @param args
         */
        // Conflicted with Gio.DBusInterfaceSkeleton.get_info
        get_info(...args: never[]): any;
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
         *
         * This can return `null` if no {@link Gio.DBusInterfaceInfo} was provided during
         * construction of `interface_` and is also not made available otherwise.
         * For example, {@link Gio.DBusProxy} implements {@link Gio.DBusInterface} but allows for a `null`
         * {@link Gio.DBusInterfaceInfo}.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo | null;
        /**
         * @param args
         * @virtual
         */
        // Conflicted with Gio.DBusInterfaceSkeleton.vfunc_get_info
        vfunc_get_info(...args: never[]): any;
        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         * @virtual
         */
        vfunc_set_object(object?: Gio.DBusObject | null): void;
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
         * a [floating](floating-refs.html) object reference. Doing this is seldom
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
         * Checks whether `object` has a [floating](floating-refs.html) reference.
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
         * [floating](floating-refs.html) reference, if `object` has a floating reference.
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
    type UserVerifierCustomJSONIface = typeof UserVerifierCustomJSON;
    /**
     * @gir-type Alias
     */
    type UserVerifierCustomJSONProxyClass = typeof UserVerifierCustomJSONProxy;
    /**
     * @gir-type Struct
     */
    abstract class UserVerifierCustomJSONProxyPrivate {
        static $gtype: GObject.GType<UserVerifierCustomJSONProxyPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type UserVerifierCustomJSONSkeletonClass = typeof UserVerifierCustomJSONSkeleton;
    /**
     * @gir-type Struct
     */
    abstract class UserVerifierCustomJSONSkeletonPrivate {
        static $gtype: GObject.GType<UserVerifierCustomJSONSkeletonPrivate>;
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

    namespace Greeter {
        /**
         * Interface for implementing Greeter.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Handler for the {@link Gdm.Greeter.SignalSignatures.default_language_name_changed | Gdm.Greeter::default-language-name-changed} signal.
             * @param arg_language_name
             * @virtual
             */
            vfunc_default_language_name_changed(arg_language_name: string): void;
            /**
             * Handler for the {@link Gdm.Greeter.SignalSignatures.default_session_name_changed | Gdm.Greeter::default-session-name-changed} signal.
             * @param arg_session_name
             * @virtual
             */
            vfunc_default_session_name_changed(arg_session_name: string): void;
            /**
             * Handler for the {@link Gdm.Greeter.SignalSignatures.handle_begin_auto_login | Gdm.Greeter::handle-begin-auto-login} signal.
             * @param invocation
             * @param arg_username
             * @virtual
             */
            vfunc_handle_begin_auto_login(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean;
            /**
             * Handler for the {@link Gdm.Greeter.SignalSignatures.handle_get_timed_login_details | Gdm.Greeter::handle-get-timed-login-details} signal.
             * @param invocation
             * @virtual
             */
            vfunc_handle_get_timed_login_details(invocation: Gio.DBusMethodInvocation): boolean;
            /**
             * Handler for the {@link Gdm.Greeter.SignalSignatures.handle_select_session | Gdm.Greeter::handle-select-session} signal.
             * @param invocation
             * @param arg_session
             * @virtual
             */
            vfunc_handle_select_session(invocation: Gio.DBusMethodInvocation, arg_session: string): boolean;
            /**
             * Handler for the {@link Gdm.Greeter.SignalSignatures.handle_select_user | Gdm.Greeter::handle-select-user} signal.
             * @param invocation
             * @param arg_username
             * @virtual
             */
            vfunc_handle_select_user(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean;
            /**
             * Handler for the {@link Gdm.Greeter.SignalSignatures.handle_start_session_when_ready | Gdm.Greeter::handle-start-session-when-ready} signal.
             * @param invocation
             * @param arg_service_name
             * @param arg_should_start_session
             * @virtual
             */
            vfunc_handle_start_session_when_ready(
                invocation: Gio.DBusMethodInvocation,
                arg_service_name: string,
                arg_should_start_session: boolean,
            ): boolean;
            /**
             * Handler for the {@link Gdm.Greeter.SignalSignatures.handle_stop_conflicting_session | Gdm.Greeter::handle-stop-conflicting-session} signal.
             * @param invocation
             * @virtual
             */
            vfunc_handle_stop_conflicting_session(invocation: Gio.DBusMethodInvocation): boolean;
            /**
             * Handler for the {@link Gdm.Greeter.SignalSignatures.reauthenticated | Gdm.Greeter::reauthenticated} signal.
             * @param arg_service_name
             * @virtual
             */
            vfunc_reauthenticated(arg_service_name: string): void;
            /**
             * Handler for the {@link Gdm.Greeter.SignalSignatures.selected_user_changed | Gdm.Greeter::selected-user-changed} signal.
             * @param arg_username
             * @virtual
             */
            vfunc_selected_user_changed(arg_username: string): void;
            /**
             * Handler for the {@link Gdm.Greeter.SignalSignatures.session_opened | Gdm.Greeter::session-opened} signal.
             * @param arg_service_name
             * @param arg_session_id
             * @virtual
             */
            vfunc_session_opened(arg_service_name: string, arg_session_id: string): void;
            /**
             * Handler for the {@link Gdm.Greeter.SignalSignatures.timed_login_requested | Gdm.Greeter::timed-login-requested} signal.
             * @param arg_username
             * @param arg_delay
             * @virtual
             */
            vfunc_timed_login_requested(arg_username: string, arg_delay: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface GreeterNamespace {
        $gtype: GObject.GType<Greeter>;
        prototype: Greeter;

        /**
         * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-DisplayManager-Greeter.top_of_page">org.gnome.DisplayManager.Greeter</link> D-Bus interface.
         */
        interface_info(): Gio.DBusInterfaceInfo;
        /**
         * Overrides all {@link GObject.Object} properties in the {@link Gdm.Greeter} interface for a concrete class.
         * The properties are overridden in the order they are defined.
         * @param klass The class structure for a {@link GObject.Object} derived class.
         * @param property_id_begin The property id to assign to the first overridden property.
         */
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    /**
     * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-DisplayManager-Greeter.top_of_page">org.gnome.DisplayManager.Greeter</link>.
     * @gir-type Interface
     */
    interface Greeter extends GObject.Object, Greeter.Interface {
        // Methods

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.BeginAutoLogin">BeginAutoLogin()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_begin_auto_login_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_begin_auto_login_sync()` for the synchronous, blocking version of this method.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_begin_auto_login(arg_username: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.BeginAutoLogin">BeginAutoLogin()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_begin_auto_login_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_begin_auto_login_sync()` for the synchronous, blocking version of this method.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_begin_auto_login(
            arg_username: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.BeginAutoLogin">BeginAutoLogin()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_begin_auto_login_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_begin_auto_login_sync()` for the synchronous, blocking version of this method.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_begin_auto_login(
            arg_username: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_greeter_call_begin_auto_login()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_greeter_call_begin_auto_login()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_begin_auto_login_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.BeginAutoLogin">BeginAutoLogin()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_greeter_call_begin_auto_login()` for the asynchronous version of this method.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_begin_auto_login_sync(arg_username: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.GetTimedLoginDetails">GetTimedLoginDetails()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_get_timed_login_details_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_get_timed_login_details_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_get_timed_login_details(
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[boolean, string, number]>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.GetTimedLoginDetails">GetTimedLoginDetails()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_get_timed_login_details_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_get_timed_login_details_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_get_timed_login_details(
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.GetTimedLoginDetails">GetTimedLoginDetails()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_get_timed_login_details_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_get_timed_login_details_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_get_timed_login_details(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[boolean, string, number]> | void;
        /**
         * Finishes an operation started with `gdm_greeter_call_get_timed_login_details()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_greeter_call_get_timed_login_details()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_get_timed_login_details_finish(res: Gio.AsyncResult): [boolean, boolean, string, number];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.GetTimedLoginDetails">GetTimedLoginDetails()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_greeter_call_get_timed_login_details()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_get_timed_login_details_sync(cancellable?: Gio.Cancellable | null): [boolean, boolean, string, number];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.SelectSession">SelectSession()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_select_session_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_select_session_sync()` for the synchronous, blocking version of this method.
         * @param arg_session Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_select_session(arg_session: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.SelectSession">SelectSession()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_select_session_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_select_session_sync()` for the synchronous, blocking version of this method.
         * @param arg_session Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_select_session(
            arg_session: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.SelectSession">SelectSession()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_select_session_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_select_session_sync()` for the synchronous, blocking version of this method.
         * @param arg_session Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_select_session(
            arg_session: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_greeter_call_select_session()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_greeter_call_select_session()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_select_session_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.SelectSession">SelectSession()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_greeter_call_select_session()` for the asynchronous version of this method.
         * @param arg_session Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_select_session_sync(arg_session: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.SelectUser">SelectUser()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_select_user_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_select_user_sync()` for the synchronous, blocking version of this method.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_select_user(arg_username: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.SelectUser">SelectUser()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_select_user_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_select_user_sync()` for the synchronous, blocking version of this method.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_select_user(
            arg_username: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.SelectUser">SelectUser()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_select_user_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_select_user_sync()` for the synchronous, blocking version of this method.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_select_user(
            arg_username: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_greeter_call_select_user()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_greeter_call_select_user()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_select_user_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.SelectUser">SelectUser()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_greeter_call_select_user()` for the asynchronous version of this method.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_select_user_sync(arg_username: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.StartSessionWhenReady">StartSessionWhenReady()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_start_session_when_ready_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_start_session_when_ready_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_should_start_session Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_start_session_when_ready(
            arg_service_name: string,
            arg_should_start_session: boolean,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.StartSessionWhenReady">StartSessionWhenReady()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_start_session_when_ready_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_start_session_when_ready_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_should_start_session Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_start_session_when_ready(
            arg_service_name: string,
            arg_should_start_session: boolean,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.StartSessionWhenReady">StartSessionWhenReady()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_start_session_when_ready_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_start_session_when_ready_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_should_start_session Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_start_session_when_ready(
            arg_service_name: string,
            arg_should_start_session: boolean,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_greeter_call_start_session_when_ready()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_greeter_call_start_session_when_ready()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_start_session_when_ready_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.StartSessionWhenReady">StartSessionWhenReady()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_greeter_call_start_session_when_ready()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_should_start_session Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_start_session_when_ready_sync(
            arg_service_name: string,
            arg_should_start_session: boolean,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.StopConflictingSession">StopConflictingSession()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_stop_conflicting_session_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_stop_conflicting_session_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_stop_conflicting_session(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.StopConflictingSession">StopConflictingSession()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_stop_conflicting_session_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_stop_conflicting_session_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_stop_conflicting_session(
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.StopConflictingSession">StopConflictingSession()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_greeter_call_stop_conflicting_session_finish()` to get the result of the operation.
         *
         * See `gdm_greeter_call_stop_conflicting_session_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_stop_conflicting_session(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_greeter_call_stop_conflicting_session()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_greeter_call_stop_conflicting_session()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_stop_conflicting_session_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.StopConflictingSession">StopConflictingSession()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_greeter_call_stop_conflicting_session()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_stop_conflicting_session_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.BeginAutoLogin">BeginAutoLogin()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_begin_auto_login(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.GetTimedLoginDetails">GetTimedLoginDetails()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param enabled Parameter to return.
         * @param username Parameter to return.
         * @param delay Parameter to return.
         */
        complete_get_timed_login_details(
            invocation: Gio.DBusMethodInvocation,
            enabled: boolean,
            username: string,
            delay: number,
        ): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.SelectSession">SelectSession()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_select_session(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.SelectUser">SelectUser()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_select_user(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.StartSessionWhenReady">StartSessionWhenReady()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_start_session_when_ready(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-Greeter.StopConflictingSession">StopConflictingSession()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_stop_conflicting_session(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-Greeter.DefaultLanguageNameChanged">"DefaultLanguageNameChanged"</link> D-Bus signal.
         * @param arg_language_name Argument to pass with the signal.
         */
        emit_default_language_name_changed(arg_language_name: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-Greeter.DefaultSessionNameChanged">"DefaultSessionNameChanged"</link> D-Bus signal.
         * @param arg_session_name Argument to pass with the signal.
         */
        emit_default_session_name_changed(arg_session_name: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-Greeter.Reauthenticated">"Reauthenticated"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         */
        emit_reauthenticated(arg_service_name: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-Greeter.SelectedUserChanged">"SelectedUserChanged"</link> D-Bus signal.
         * @param arg_username Argument to pass with the signal.
         */
        emit_selected_user_changed(arg_username: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-Greeter.SessionOpened">"SessionOpened"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         * @param arg_session_id Argument to pass with the signal.
         */
        emit_session_opened(arg_service_name: string, arg_session_id: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-Greeter.TimedLoginRequested">"TimedLoginRequested"</link> D-Bus signal.
         * @param arg_username Argument to pass with the signal.
         * @param arg_delay Argument to pass with the signal.
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
             * Handler for the {@link Gdm.Manager.SignalSignatures.handle_open_reauthentication_channel | Gdm.Manager::handle-open-reauthentication-channel} signal.
             * @param invocation
             * @param arg_username
             * @virtual
             */
            vfunc_handle_open_reauthentication_channel(
                invocation: Gio.DBusMethodInvocation,
                arg_username: string,
            ): boolean;
            /**
             * Handler for the {@link Gdm.Manager.SignalSignatures.handle_open_session | Gdm.Manager::handle-open-session} signal.
             * @param invocation
             * @virtual
             */
            vfunc_handle_open_session(invocation: Gio.DBusMethodInvocation): boolean;
            /**
             * Handler for the {@link Gdm.Manager.SignalSignatures.handle_register_display | Gdm.Manager::handle-register-display} signal.
             * @param invocation
             * @virtual
             */
            vfunc_handle_register_display(invocation: Gio.DBusMethodInvocation): boolean;
            /**
             * Handler for the {@link Gdm.Manager.SignalSignatures.handle_register_session | Gdm.Manager::handle-register-session} signal.
             * @param invocation
             * @virtual
             */
            vfunc_handle_register_session(invocation: Gio.DBusMethodInvocation): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            version: string;
        }
    }

    export interface ManagerNamespace {
        $gtype: GObject.GType<Manager>;
        prototype: Manager;

        /**
         * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-DisplayManager-Manager.top_of_page">org.gnome.DisplayManager.Manager</link> D-Bus interface.
         */
        interface_info(): Gio.DBusInterfaceInfo;
        /**
         * Overrides all {@link GObject.Object} properties in the {@link Gdm.Manager} interface for a concrete class.
         * The properties are overridden in the order they are defined.
         * @param klass The class structure for a {@link GObject.Object} derived class.
         * @param property_id_begin The property id to assign to the first overridden property.
         */
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    /**
     * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-DisplayManager-Manager.top_of_page">org.gnome.DisplayManager.Manager</link>.
     * @gir-type Interface
     */
    interface Manager extends GObject.Object, Manager.Interface {
        // Properties

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-DisplayManager-Manager.Version">"Version"</link>.
         *
         * Since the D-Bus property for this {@link GObject.Object} property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        get version(): string;
        set version(val: string);

        // Methods

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.OpenReauthenticationChannel">OpenReauthenticationChannel()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_call_open_reauthentication_channel_finish()` to get the result of the operation.
         *
         * See `gdm_manager_call_open_reauthentication_channel_sync()` for the synchronous, blocking version of this method.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_open_reauthentication_channel(
            arg_username: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<string>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.OpenReauthenticationChannel">OpenReauthenticationChannel()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_call_open_reauthentication_channel_finish()` to get the result of the operation.
         *
         * See `gdm_manager_call_open_reauthentication_channel_sync()` for the synchronous, blocking version of this method.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_open_reauthentication_channel(
            arg_username: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.OpenReauthenticationChannel">OpenReauthenticationChannel()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_call_open_reauthentication_channel_finish()` to get the result of the operation.
         *
         * See `gdm_manager_call_open_reauthentication_channel_sync()` for the synchronous, blocking version of this method.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_open_reauthentication_channel(
            arg_username: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string> | void;
        /**
         * Finishes an operation started with `gdm_manager_call_open_reauthentication_channel()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_manager_call_open_reauthentication_channel()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_open_reauthentication_channel_finish(res: Gio.AsyncResult): [boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.OpenReauthenticationChannel">OpenReauthenticationChannel()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_manager_call_open_reauthentication_channel()` for the asynchronous version of this method.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_open_reauthentication_channel_sync(
            arg_username: string,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, string];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.OpenSession">OpenSession()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_call_open_session_finish()` to get the result of the operation.
         *
         * See `gdm_manager_call_open_session_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_open_session(cancellable?: Gio.Cancellable | null): globalThis.Promise<string>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.OpenSession">OpenSession()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_call_open_session_finish()` to get the result of the operation.
         *
         * See `gdm_manager_call_open_session_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_open_session(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.OpenSession">OpenSession()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_call_open_session_finish()` to get the result of the operation.
         *
         * See `gdm_manager_call_open_session_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_open_session(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string> | void;
        /**
         * Finishes an operation started with `gdm_manager_call_open_session()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_manager_call_open_session()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_open_session_finish(res: Gio.AsyncResult): [boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.OpenSession">OpenSession()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_manager_call_open_session()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_open_session_sync(cancellable?: Gio.Cancellable | null): [boolean, string];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.RegisterDisplay">RegisterDisplay()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_call_register_display_finish()` to get the result of the operation.
         *
         * See `gdm_manager_call_register_display_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_register_display(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.RegisterDisplay">RegisterDisplay()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_call_register_display_finish()` to get the result of the operation.
         *
         * See `gdm_manager_call_register_display_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_register_display(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.RegisterDisplay">RegisterDisplay()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_call_register_display_finish()` to get the result of the operation.
         *
         * See `gdm_manager_call_register_display_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_register_display(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_manager_call_register_display()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_manager_call_register_display()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_register_display_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.RegisterDisplay">RegisterDisplay()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_manager_call_register_display()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_register_display_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.RegisterSession">RegisterSession()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_call_register_session_finish()` to get the result of the operation.
         *
         * See `gdm_manager_call_register_session_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_register_session(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.RegisterSession">RegisterSession()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_call_register_session_finish()` to get the result of the operation.
         *
         * See `gdm_manager_call_register_session_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_register_session(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.RegisterSession">RegisterSession()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_manager_call_register_session_finish()` to get the result of the operation.
         *
         * See `gdm_manager_call_register_session_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_register_session(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_manager_call_register_session()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_manager_call_register_session()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_register_session_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.RegisterSession">RegisterSession()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_manager_call_register_session()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_register_session_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.OpenReauthenticationChannel">OpenReauthenticationChannel()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param address Parameter to return.
         */
        complete_open_reauthentication_channel(invocation: Gio.DBusMethodInvocation, address: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.OpenSession">OpenSession()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param address Parameter to return.
         */
        complete_open_session(invocation: Gio.DBusMethodInvocation, address: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.RegisterDisplay">RegisterDisplay()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_register_display(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-Manager.RegisterSession">RegisterSession()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_register_session(invocation: Gio.DBusMethodInvocation): void;
    }

    export const Manager: ManagerNamespace & {
        new (): Manager; // This allows `obj instanceof Manager`
    };

    namespace UserVerifier {
        /**
         * Interface for implementing UserVerifier.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Handler for the {@link Gdm.UserVerifier.SignalSignatures.conversation_started | Gdm.UserVerifier::conversation-started} signal.
             * @param arg_service_name
             * @virtual
             */
            vfunc_conversation_started(arg_service_name: string): void;
            /**
             * Handler for the {@link Gdm.UserVerifier.SignalSignatures.conversation_stopped | Gdm.UserVerifier::conversation-stopped} signal.
             * @param arg_service_name
             * @virtual
             */
            vfunc_conversation_stopped(arg_service_name: string): void;
            /**
             * Handler for the {@link Gdm.UserVerifier.SignalSignatures.handle_answer_query | Gdm.UserVerifier::handle-answer-query} signal.
             * @param invocation
             * @param arg_service_name
             * @param arg_answer
             * @virtual
             */
            vfunc_handle_answer_query(
                invocation: Gio.DBusMethodInvocation,
                arg_service_name: string,
                arg_answer: string,
            ): boolean;
            /**
             * Handler for the {@link Gdm.UserVerifier.SignalSignatures.handle_begin_verification | Gdm.UserVerifier::handle-begin-verification} signal.
             * @param invocation
             * @param arg_service_name
             * @virtual
             */
            vfunc_handle_begin_verification(invocation: Gio.DBusMethodInvocation, arg_service_name: string): boolean;
            /**
             * Handler for the {@link Gdm.UserVerifier.SignalSignatures.handle_begin_verification_for_user | Gdm.UserVerifier::handle-begin-verification-for-user} signal.
             * @param invocation
             * @param arg_service_name
             * @param arg_username
             * @virtual
             */
            vfunc_handle_begin_verification_for_user(
                invocation: Gio.DBusMethodInvocation,
                arg_service_name: string,
                arg_username: string,
            ): boolean;
            /**
             * Handler for the {@link Gdm.UserVerifier.SignalSignatures.handle_cancel | Gdm.UserVerifier::handle-cancel} signal.
             * @param invocation
             * @virtual
             */
            vfunc_handle_cancel(invocation: Gio.DBusMethodInvocation): boolean;
            /**
             * Handler for the {@link Gdm.UserVerifier.SignalSignatures.handle_enable_extensions | Gdm.UserVerifier::handle-enable-extensions} signal.
             * @param invocation
             * @param arg_extensions
             * @virtual
             */
            vfunc_handle_enable_extensions(invocation: Gio.DBusMethodInvocation, arg_extensions: string): boolean;
            /**
             * Handler for the {@link Gdm.UserVerifier.SignalSignatures.info | Gdm.UserVerifier::info} signal.
             * @param arg_service_name
             * @param arg_info
             * @virtual
             */
            vfunc_info(arg_service_name: string, arg_info: string): void;
            /**
             * Handler for the {@link Gdm.UserVerifier.SignalSignatures.info_query | Gdm.UserVerifier::info-query} signal.
             * @param arg_service_name
             * @param arg_query
             * @virtual
             */
            vfunc_info_query(arg_service_name: string, arg_query: string): void;
            /**
             * Handler for the {@link Gdm.UserVerifier.SignalSignatures.problem | Gdm.UserVerifier::problem} signal.
             * @param arg_service_name
             * @param arg_problem
             * @virtual
             */
            vfunc_problem(arg_service_name: string, arg_problem: string): void;
            /**
             * Handler for the {@link Gdm.UserVerifier.SignalSignatures.reauthentication_started | Gdm.UserVerifier::reauthentication-started} signal.
             * @param arg_pid_of_caller
             * @virtual
             */
            vfunc_reauthentication_started(arg_pid_of_caller: number): void;
            /**
             * Handler for the {@link Gdm.UserVerifier.SignalSignatures.reset | Gdm.UserVerifier::reset} signal.
             * @virtual
             */
            vfunc_reset(): void;
            /**
             * Handler for the {@link Gdm.UserVerifier.SignalSignatures.secret_info_query | Gdm.UserVerifier::secret-info-query} signal.
             * @param arg_service_name
             * @param arg_query
             * @virtual
             */
            vfunc_secret_info_query(arg_service_name: string, arg_query: string): void;
            /**
             * Handler for the {@link Gdm.UserVerifier.SignalSignatures.service_unavailable | Gdm.UserVerifier::service-unavailable} signal.
             * @param arg_service_name
             * @param arg_message
             * @virtual
             */
            vfunc_service_unavailable(arg_service_name: string, arg_message: string): void;
            /**
             * Handler for the {@link Gdm.UserVerifier.SignalSignatures.verification_complete | Gdm.UserVerifier::verification-complete} signal.
             * @param arg_service_name
             * @virtual
             */
            vfunc_verification_complete(arg_service_name: string): void;
            /**
             * Handler for the {@link Gdm.UserVerifier.SignalSignatures.verification_failed | Gdm.UserVerifier::verification-failed} signal.
             * @param arg_service_name
             * @virtual
             */
            vfunc_verification_failed(arg_service_name: string): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface UserVerifierNamespace {
        $gtype: GObject.GType<UserVerifier>;
        prototype: UserVerifier;

        /**
         * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-DisplayManager-UserVerifier.top_of_page">org.gnome.DisplayManager.UserVerifier</link> D-Bus interface.
         */
        interface_info(): Gio.DBusInterfaceInfo;
        /**
         * Overrides all {@link GObject.Object} properties in the {@link Gdm.UserVerifier} interface for a concrete class.
         * The properties are overridden in the order they are defined.
         * @param klass The class structure for a {@link GObject.Object} derived class.
         * @param property_id_begin The property id to assign to the first overridden property.
         */
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    /**
     * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-DisplayManager-UserVerifier.top_of_page">org.gnome.DisplayManager.UserVerifier</link>.
     * @gir-type Interface
     */
    interface UserVerifier extends GObject.Object, UserVerifier.Interface {
        // Methods

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.AnswerQuery">AnswerQuery()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_answer_query_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_answer_query_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_answer Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_answer_query(
            arg_service_name: string,
            arg_answer: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.AnswerQuery">AnswerQuery()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_answer_query_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_answer_query_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_answer Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_answer_query(
            arg_service_name: string,
            arg_answer: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.AnswerQuery">AnswerQuery()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_answer_query_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_answer_query_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_answer Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_answer_query(
            arg_service_name: string,
            arg_answer: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_user_verifier_call_answer_query()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_user_verifier_call_answer_query()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_answer_query_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.AnswerQuery">AnswerQuery()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_user_verifier_call_answer_query()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_answer Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_answer_query_sync(
            arg_service_name: string,
            arg_answer: string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.BeginVerification">BeginVerification()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_begin_verification_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_begin_verification_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_begin_verification(
            arg_service_name: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.BeginVerification">BeginVerification()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_begin_verification_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_begin_verification_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_begin_verification(
            arg_service_name: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.BeginVerification">BeginVerification()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_begin_verification_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_begin_verification_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_begin_verification(
            arg_service_name: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_user_verifier_call_begin_verification()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_user_verifier_call_begin_verification()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_begin_verification_finish(res: Gio.AsyncResult): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.BeginVerificationForUser">BeginVerificationForUser()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_begin_verification_for_user_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_begin_verification_for_user_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_begin_verification_for_user(
            arg_service_name: string,
            arg_username: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.BeginVerificationForUser">BeginVerificationForUser()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_begin_verification_for_user_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_begin_verification_for_user_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_begin_verification_for_user(
            arg_service_name: string,
            arg_username: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.BeginVerificationForUser">BeginVerificationForUser()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_begin_verification_for_user_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_begin_verification_for_user_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_begin_verification_for_user(
            arg_service_name: string,
            arg_username: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_user_verifier_call_begin_verification_for_user()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_user_verifier_call_begin_verification_for_user()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_begin_verification_for_user_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.BeginVerificationForUser">BeginVerificationForUser()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_user_verifier_call_begin_verification_for_user()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_username Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_begin_verification_for_user_sync(
            arg_service_name: string,
            arg_username: string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.BeginVerification">BeginVerification()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_user_verifier_call_begin_verification()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_begin_verification_sync(arg_service_name: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.Cancel">Cancel()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_cancel_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_cancel_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_cancel(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.Cancel">Cancel()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_cancel_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_cancel_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_cancel(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.Cancel">Cancel()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_cancel_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_cancel_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_cancel(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_user_verifier_call_cancel()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_user_verifier_call_cancel()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_cancel_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.Cancel">Cancel()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_user_verifier_call_cancel()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_cancel_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.EnableExtensions">EnableExtensions()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_enable_extensions_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_enable_extensions_sync()` for the synchronous, blocking version of this method.
         * @param arg_extensions Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_enable_extensions(
            arg_extensions: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.EnableExtensions">EnableExtensions()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_enable_extensions_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_enable_extensions_sync()` for the synchronous, blocking version of this method.
         * @param arg_extensions Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_enable_extensions(
            arg_extensions: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.EnableExtensions">EnableExtensions()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_call_enable_extensions_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_call_enable_extensions_sync()` for the synchronous, blocking version of this method.
         * @param arg_extensions Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_enable_extensions(
            arg_extensions: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_user_verifier_call_enable_extensions()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_user_verifier_call_enable_extensions()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_enable_extensions_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.EnableExtensions">EnableExtensions()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_user_verifier_call_enable_extensions()` for the asynchronous version of this method.
         * @param arg_extensions Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_enable_extensions_sync(arg_extensions: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.AnswerQuery">AnswerQuery()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_answer_query(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.BeginVerification">BeginVerification()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_begin_verification(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.BeginVerificationForUser">BeginVerificationForUser()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_begin_verification_for_user(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.Cancel">Cancel()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_cancel(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier.EnableExtensions">EnableExtensions()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_enable_extensions(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier.ConversationStarted">"ConversationStarted"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         */
        emit_conversation_started(arg_service_name: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier.ConversationStopped">"ConversationStopped"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         */
        emit_conversation_stopped(arg_service_name: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier.Info">"Info"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         * @param arg_info Argument to pass with the signal.
         */
        emit_info(arg_service_name: string, arg_info: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier.InfoQuery">"InfoQuery"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         * @param arg_query Argument to pass with the signal.
         */
        emit_info_query(arg_service_name: string, arg_query: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier.Problem">"Problem"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         * @param arg_problem Argument to pass with the signal.
         */
        emit_problem(arg_service_name: string, arg_problem: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier.ReauthenticationStarted">"ReauthenticationStarted"</link> D-Bus signal.
         * @param arg_pid_of_caller Argument to pass with the signal.
         */
        emit_reauthentication_started(arg_pid_of_caller: number): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier.Reset">"Reset"</link> D-Bus signal.
         */
        emit_reset(): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier.SecretInfoQuery">"SecretInfoQuery"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         * @param arg_query Argument to pass with the signal.
         */
        emit_secret_info_query(arg_service_name: string, arg_query: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier.ServiceUnavailable">"ServiceUnavailable"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         * @param arg_message Argument to pass with the signal.
         */
        emit_service_unavailable(arg_service_name: string, arg_message: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier.VerificationComplete">"VerificationComplete"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         */
        emit_verification_complete(arg_service_name: string): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier.VerificationFailed">"VerificationFailed"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
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
             * Handler for the {@link Gdm.UserVerifierChoiceList.SignalSignatures.choice_query | Gdm.UserVerifierChoiceList::choice-query} signal.
             * @param arg_service_name
             * @param arg_prompt_message
             * @param arg_list
             * @virtual
             */
            vfunc_choice_query(arg_service_name: string, arg_prompt_message: string, arg_list: GLib.Variant): void;
            /**
             * Handler for the {@link Gdm.UserVerifierChoiceList.SignalSignatures.handle_select_choice | Gdm.UserVerifierChoiceList::handle-select-choice} signal.
             * @param invocation
             * @param arg_service_name
             * @param arg_choice
             * @virtual
             */
            vfunc_handle_select_choice(
                invocation: Gio.DBusMethodInvocation,
                arg_service_name: string,
                arg_choice: string,
            ): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface UserVerifierChoiceListNamespace {
        $gtype: GObject.GType<UserVerifierChoiceList>;
        prototype: UserVerifierChoiceList;

        /**
         * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-DisplayManager-UserVerifier-ChoiceList.top_of_page">org.gnome.DisplayManager.UserVerifier.ChoiceList</link> D-Bus interface.
         */
        interface_info(): Gio.DBusInterfaceInfo;
        /**
         * Overrides all {@link GObject.Object} properties in the {@link Gdm.UserVerifierChoiceList} interface for a concrete class.
         * The properties are overridden in the order they are defined.
         * @param klass The class structure for a {@link GObject.Object} derived class.
         * @param property_id_begin The property id to assign to the first overridden property.
         */
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    /**
     * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-DisplayManager-UserVerifier-ChoiceList.top_of_page">org.gnome.DisplayManager.UserVerifier.ChoiceList</link>.
     * @gir-type Interface
     */
    interface UserVerifierChoiceList extends GObject.Object, UserVerifierChoiceList.Interface {
        // Methods

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-ChoiceList.SelectChoice">SelectChoice()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_choice_list_call_select_choice_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_choice_list_call_select_choice_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_choice Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_select_choice(
            arg_service_name: string,
            arg_choice: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-ChoiceList.SelectChoice">SelectChoice()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_choice_list_call_select_choice_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_choice_list_call_select_choice_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_choice Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_select_choice(
            arg_service_name: string,
            arg_choice: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-ChoiceList.SelectChoice">SelectChoice()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_choice_list_call_select_choice_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_choice_list_call_select_choice_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_choice Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_select_choice(
            arg_service_name: string,
            arg_choice: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_user_verifier_choice_list_call_select_choice()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_user_verifier_choice_list_call_select_choice()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_select_choice_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-ChoiceList.SelectChoice">SelectChoice()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_user_verifier_choice_list_call_select_choice()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_choice Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_select_choice_sync(
            arg_service_name: string,
            arg_choice: string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-ChoiceList.SelectChoice">SelectChoice()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_select_choice(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier-ChoiceList.ChoiceQuery">"ChoiceQuery"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         * @param arg_prompt_message Argument to pass with the signal.
         * @param arg_list Argument to pass with the signal.
         */
        emit_choice_query(arg_service_name: string, arg_prompt_message: string, arg_list: GLib.Variant): void;
    }

    export const UserVerifierChoiceList: UserVerifierChoiceListNamespace & {
        new (): UserVerifierChoiceList; // This allows `obj instanceof UserVerifierChoiceList`
    };

    namespace UserVerifierCustomJSON {
        /**
         * Interface for implementing UserVerifierCustomJSON.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Handler for the {@link Gdm.UserVerifierCustomJSON.SignalSignatures.handle_reply | Gdm.UserVerifierCustomJSON::handle-reply} signal.
             * @param invocation
             * @param arg_service_name
             * @param arg_reply
             * @virtual
             */
            vfunc_handle_reply(
                invocation: Gio.DBusMethodInvocation,
                arg_service_name: string,
                arg_reply: string,
            ): boolean;
            /**
             * Handler for the {@link Gdm.UserVerifierCustomJSON.SignalSignatures.handle_report_error | Gdm.UserVerifierCustomJSON::handle-report-error} signal.
             * @param invocation
             * @param arg_service_name
             * @param arg_error
             * @virtual
             */
            vfunc_handle_report_error(
                invocation: Gio.DBusMethodInvocation,
                arg_service_name: string,
                arg_error: string,
            ): boolean;
            /**
             * Handler for the {@link Gdm.UserVerifierCustomJSON.SignalSignatures.request | Gdm.UserVerifierCustomJSON::request} signal.
             * @param arg_service_name
             * @param arg_protocol
             * @param arg_version
             * @param arg_request
             * @virtual
             */
            vfunc_request(
                arg_service_name: string,
                arg_protocol: string,
                arg_version: number,
                arg_request: string,
            ): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface UserVerifierCustomJSONNamespace {
        $gtype: GObject.GType<UserVerifierCustomJSON>;
        prototype: UserVerifierCustomJSON;

        /**
         * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-DisplayManager-UserVerifier-CustomJSON.top_of_page">org.gnome.DisplayManager.UserVerifier.CustomJSON</link> D-Bus interface.
         */
        interface_info(): Gio.DBusInterfaceInfo;
        /**
         * Overrides all {@link GObject.Object} properties in the {@link Gdm.UserVerifierCustomJSON} interface for a concrete class.
         * The properties are overridden in the order they are defined.
         * @param klass The class structure for a {@link GObject.Object} derived class.
         * @param property_id_begin The property id to assign to the first overridden property.
         */
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    /**
     * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-DisplayManager-UserVerifier-CustomJSON.top_of_page">org.gnome.DisplayManager.UserVerifier.CustomJSON</link>.
     * @gir-type Interface
     */
    interface UserVerifierCustomJSON extends GObject.Object, UserVerifierCustomJSON.Interface {
        // Methods

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-CustomJSON.Reply">Reply()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_custom_json_call_reply_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_custom_json_call_reply_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_reply Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_reply(
            arg_service_name: string,
            arg_reply: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-CustomJSON.Reply">Reply()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_custom_json_call_reply_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_custom_json_call_reply_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_reply Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_reply(
            arg_service_name: string,
            arg_reply: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-CustomJSON.Reply">Reply()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_custom_json_call_reply_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_custom_json_call_reply_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_reply Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_reply(
            arg_service_name: string,
            arg_reply: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_user_verifier_custom_json_call_reply()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_user_verifier_custom_json_call_reply()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_reply_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-CustomJSON.Reply">Reply()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_user_verifier_custom_json_call_reply()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_reply Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_reply_sync(arg_service_name: string, arg_reply: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-CustomJSON.ReportError">ReportError()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_custom_json_call_report_error_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_custom_json_call_report_error_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_error Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_report_error(
            arg_service_name: string,
            arg_error: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-CustomJSON.ReportError">ReportError()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_custom_json_call_report_error_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_custom_json_call_report_error_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_error Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_report_error(
            arg_service_name: string,
            arg_error: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-CustomJSON.ReportError">ReportError()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_user_verifier_custom_json_call_report_error_finish()` to get the result of the operation.
         *
         * See `gdm_user_verifier_custom_json_call_report_error_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_error Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_report_error(
            arg_service_name: string,
            arg_error: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_user_verifier_custom_json_call_report_error()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_user_verifier_custom_json_call_report_error()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_report_error_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-CustomJSON.ReportError">ReportError()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_user_verifier_custom_json_call_report_error()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_error Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_report_error_sync(
            arg_service_name: string,
            arg_error: string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-CustomJSON.Reply">Reply()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_reply(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-UserVerifier-CustomJSON.ReportError">ReportError()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_report_error(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Emits the <link linkend="gdbus-signal-org-gnome-DisplayManager-UserVerifier-CustomJSON.Request">"Request"</link> D-Bus signal.
         * @param arg_service_name Argument to pass with the signal.
         * @param arg_protocol Argument to pass with the signal.
         * @param arg_version Argument to pass with the signal.
         * @param arg_request Argument to pass with the signal.
         */
        emit_request(arg_service_name: string, arg_protocol: string, arg_version: number, arg_request: string): void;
    }

    export const UserVerifierCustomJSON: UserVerifierCustomJSONNamespace & {
        new (): UserVerifierCustomJSON; // This allows `obj instanceof UserVerifierCustomJSON`
    };

    namespace WorkerManager {
        /**
         * Interface for implementing WorkerManager.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Handler for the {@link Gdm.WorkerManager.SignalSignatures.handle_choice_list_query | Gdm.WorkerManager::handle-choice-list-query} signal.
             * @param invocation
             * @param arg_service_name
             * @param arg_prompt_message
             * @param arg_query
             * @virtual
             */
            vfunc_handle_choice_list_query(
                invocation: Gio.DBusMethodInvocation,
                arg_service_name: string,
                arg_prompt_message: string,
                arg_query: GLib.Variant,
            ): boolean;
            /**
             * Handler for the {@link Gdm.WorkerManager.SignalSignatures.handle_custom_json_request | Gdm.WorkerManager::handle-custom-json-request} signal.
             * @param invocation
             * @param arg_service_name
             * @param arg_protocol
             * @param arg_version
             * @param arg_request
             * @virtual
             */
            vfunc_handle_custom_json_request(
                invocation: Gio.DBusMethodInvocation,
                arg_service_name: string,
                arg_protocol: string,
                arg_version: number,
                arg_request: string,
            ): boolean;
            /**
             * Handler for the {@link Gdm.WorkerManager.SignalSignatures.handle_hello | Gdm.WorkerManager::handle-hello} signal.
             * @param invocation
             * @virtual
             */
            vfunc_handle_hello(invocation: Gio.DBusMethodInvocation): boolean;
            /**
             * Handler for the {@link Gdm.WorkerManager.SignalSignatures.handle_info | Gdm.WorkerManager::handle-info} signal.
             * @param invocation
             * @param arg_service_name
             * @param arg_info
             * @virtual
             */
            vfunc_handle_info(
                invocation: Gio.DBusMethodInvocation,
                arg_service_name: string,
                arg_info: string,
            ): boolean;
            /**
             * Handler for the {@link Gdm.WorkerManager.SignalSignatures.handle_info_query | Gdm.WorkerManager::handle-info-query} signal.
             * @param invocation
             * @param arg_service_name
             * @param arg_query
             * @virtual
             */
            vfunc_handle_info_query(
                invocation: Gio.DBusMethodInvocation,
                arg_service_name: string,
                arg_query: string,
            ): boolean;
            /**
             * Handler for the {@link Gdm.WorkerManager.SignalSignatures.handle_problem | Gdm.WorkerManager::handle-problem} signal.
             * @param invocation
             * @param arg_service_name
             * @param arg_problem
             * @virtual
             */
            vfunc_handle_problem(
                invocation: Gio.DBusMethodInvocation,
                arg_service_name: string,
                arg_problem: string,
            ): boolean;
            /**
             * Handler for the {@link Gdm.WorkerManager.SignalSignatures.handle_secret_info_query | Gdm.WorkerManager::handle-secret-info-query} signal.
             * @param invocation
             * @param arg_service_name
             * @param arg_query
             * @virtual
             */
            vfunc_handle_secret_info_query(
                invocation: Gio.DBusMethodInvocation,
                arg_service_name: string,
                arg_query: string,
            ): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface WorkerManagerNamespace {
        $gtype: GObject.GType<WorkerManager>;
        prototype: WorkerManager;

        /**
         * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-DisplayManager-WorkerManager.top_of_page">org.gnome.DisplayManager.WorkerManager</link> D-Bus interface.
         */
        interface_info(): Gio.DBusInterfaceInfo;
        /**
         * Overrides all {@link GObject.Object} properties in the {@link Gdm.WorkerManager} interface for a concrete class.
         * The properties are overridden in the order they are defined.
         * @param klass The class structure for a {@link GObject.Object} derived class.
         * @param property_id_begin The property id to assign to the first overridden property.
         */
        override_properties(klass: typeof GObject.Object, property_id_begin: number): number;
    }
    /**
     * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-DisplayManager-WorkerManager.top_of_page">org.gnome.DisplayManager.WorkerManager</link>.
     * @gir-type Interface
     */
    interface WorkerManager extends GObject.Object, WorkerManager.Interface {
        // Methods

        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.ChoiceListQuery">ChoiceListQuery()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_choice_list_query_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_choice_list_query_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_prompt_message Argument to pass with the method invocation.
         * @param arg_query Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_choice_list_query(
            arg_service_name: string,
            arg_prompt_message: string,
            arg_query: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<string>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.ChoiceListQuery">ChoiceListQuery()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_choice_list_query_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_choice_list_query_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_prompt_message Argument to pass with the method invocation.
         * @param arg_query Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_choice_list_query(
            arg_service_name: string,
            arg_prompt_message: string,
            arg_query: GLib.Variant,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.ChoiceListQuery">ChoiceListQuery()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_choice_list_query_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_choice_list_query_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_prompt_message Argument to pass with the method invocation.
         * @param arg_query Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_choice_list_query(
            arg_service_name: string,
            arg_prompt_message: string,
            arg_query: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string> | void;
        /**
         * Finishes an operation started with `gdm_worker_manager_call_choice_list_query()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_worker_manager_call_choice_list_query()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_choice_list_query_finish(res: Gio.AsyncResult): [boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.ChoiceListQuery">ChoiceListQuery()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_worker_manager_call_choice_list_query()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_prompt_message Argument to pass with the method invocation.
         * @param arg_query Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_choice_list_query_sync(
            arg_service_name: string,
            arg_prompt_message: string,
            arg_query: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, string];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.CustomJSONRequest">CustomJSONRequest()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_custom_json_request_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_custom_json_request_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_protocol Argument to pass with the method invocation.
         * @param arg_version Argument to pass with the method invocation.
         * @param arg_request Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_custom_json_request(
            arg_service_name: string,
            arg_protocol: string,
            arg_version: number,
            arg_request: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<string>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.CustomJSONRequest">CustomJSONRequest()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_custom_json_request_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_custom_json_request_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_protocol Argument to pass with the method invocation.
         * @param arg_version Argument to pass with the method invocation.
         * @param arg_request Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_custom_json_request(
            arg_service_name: string,
            arg_protocol: string,
            arg_version: number,
            arg_request: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.CustomJSONRequest">CustomJSONRequest()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_custom_json_request_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_custom_json_request_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_protocol Argument to pass with the method invocation.
         * @param arg_version Argument to pass with the method invocation.
         * @param arg_request Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_custom_json_request(
            arg_service_name: string,
            arg_protocol: string,
            arg_version: number,
            arg_request: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string> | void;
        /**
         * Finishes an operation started with `gdm_worker_manager_call_custom_json_request()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_worker_manager_call_custom_json_request()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_custom_json_request_finish(res: Gio.AsyncResult): [boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.CustomJSONRequest">CustomJSONRequest()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_worker_manager_call_custom_json_request()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_protocol Argument to pass with the method invocation.
         * @param arg_version Argument to pass with the method invocation.
         * @param arg_request Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_custom_json_request_sync(
            arg_service_name: string,
            arg_protocol: string,
            arg_version: number,
            arg_request: string,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, string];
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Hello">Hello()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_hello_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_hello_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_hello(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Hello">Hello()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_hello_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_hello_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_hello(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Hello">Hello()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_hello_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_hello_sync()` for the synchronous, blocking version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_hello(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_worker_manager_call_hello()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_worker_manager_call_hello()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_hello_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Hello">Hello()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_worker_manager_call_hello()` for the asynchronous version of this method.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_hello_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Info">Info()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_info_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_info_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_info Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_info(
            arg_service_name: string,
            arg_info: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Info">Info()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_info_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_info_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_info Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_info(
            arg_service_name: string,
            arg_info: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Info">Info()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_info_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_info_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_info Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_info(
            arg_service_name: string,
            arg_info: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_worker_manager_call_info()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_worker_manager_call_info()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_info_finish(res: Gio.AsyncResult): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.InfoQuery">InfoQuery()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_info_query_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_info_query_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_query Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_info_query(
            arg_service_name: string,
            arg_query: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<string>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.InfoQuery">InfoQuery()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_info_query_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_info_query_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_query Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_info_query(
            arg_service_name: string,
            arg_query: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.InfoQuery">InfoQuery()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_info_query_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_info_query_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_query Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_info_query(
            arg_service_name: string,
            arg_query: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string> | void;
        /**
         * Finishes an operation started with `gdm_worker_manager_call_info_query()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_worker_manager_call_info_query()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_info_query_finish(res: Gio.AsyncResult): [boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.InfoQuery">InfoQuery()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_worker_manager_call_info_query()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_query Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_info_query_sync(
            arg_service_name: string,
            arg_query: string,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Info">Info()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_worker_manager_call_info()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_info Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_info_sync(arg_service_name: string, arg_info: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Problem">Problem()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_problem_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_problem_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_problem Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_problem(
            arg_service_name: string,
            arg_problem: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Problem">Problem()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_problem_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_problem_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_problem Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_problem(
            arg_service_name: string,
            arg_problem: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Problem">Problem()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_problem_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_problem_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_problem Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_problem(
            arg_service_name: string,
            arg_problem: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes an operation started with `gdm_worker_manager_call_problem()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_worker_manager_call_problem()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_problem_finish(res: Gio.AsyncResult): boolean;
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Problem">Problem()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_worker_manager_call_problem()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_problem Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_problem_sync(arg_service_name: string, arg_problem: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.SecretInfoQuery">SecretInfoQuery()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_secret_info_query_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_secret_info_query_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_query Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         */
        call_secret_info_query(
            arg_service_name: string,
            arg_query: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<string>;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.SecretInfoQuery">SecretInfoQuery()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_secret_info_query_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_secret_info_query_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_query Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_secret_info_query(
            arg_service_name: string,
            arg_query: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.SecretInfoQuery">SecretInfoQuery()</link> D-Bus method on `proxy`.
         * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see `g_main_context_push_thread_default()`).
         * You can then call `gdm_worker_manager_call_secret_info_query_finish()` to get the result of the operation.
         *
         * See `gdm_worker_manager_call_secret_info_query_sync()` for the synchronous, blocking version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_query Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @param callback A {@link Gio.AsyncReadyCallback} to call when the request is satisfied or `null`.
         */
        call_secret_info_query(
            arg_service_name: string,
            arg_query: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string> | void;
        /**
         * Finishes an operation started with `gdm_worker_manager_call_secret_info_query()`.
         * @param res The {@link Gio.AsyncResult} obtained from the {@link Gio.AsyncReadyCallback} passed to `gdm_worker_manager_call_secret_info_query()`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_secret_info_query_finish(res: Gio.AsyncResult): [boolean, string];
        /**
         * Synchronously invokes the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.SecretInfoQuery">SecretInfoQuery()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
         *
         * See `gdm_worker_manager_call_secret_info_query()` for the asynchronous version of this method.
         * @param arg_service_name Argument to pass with the method invocation.
         * @param arg_query Argument to pass with the method invocation.
         * @param cancellable A {@link Gio.Cancellable} or `null`.
         * @returns `true` if the call succeeded, `false` if `error` is set.
         */
        call_secret_info_query_sync(
            arg_service_name: string,
            arg_query: string,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, string];
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.ChoiceListQuery">ChoiceListQuery()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param answer Parameter to return.
         */
        complete_choice_list_query(invocation: Gio.DBusMethodInvocation, answer: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.CustomJSONRequest">CustomJSONRequest()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param response Parameter to return.
         */
        complete_custom_json_request(invocation: Gio.DBusMethodInvocation, response: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Hello">Hello()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_hello(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Info">Info()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_info(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.InfoQuery">InfoQuery()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param answer Parameter to return.
         */
        complete_info_query(invocation: Gio.DBusMethodInvocation, answer: string): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.Problem">Problem()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         */
        complete_problem(invocation: Gio.DBusMethodInvocation): void;
        /**
         * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-DisplayManager-WorkerManager.SecretInfoQuery">SecretInfoQuery()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use `g_dbus_method_invocation_return_error()` or similar.
         *
         * This method will free `invocation`, you cannot use it afterwards.
         * @param invocation A {@link Gio.DBusMethodInvocation}.
         * @param answer Parameter to return.
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
