/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gdm-1.0-ambient.d.ts';
import './gdm-1.0-import.d.ts';
/**
 * Gdm-1.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Gdm {
    enum ClientError {
        CLIENT_ERROR_GENERIC,
    }
    function chooser_interface_info(): Gio.DBusInterfaceInfo;
    function chooser_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    /**
     * Reads /usr/share/xsessions and other relevant places for possible sessions
     * to log into and returns the complete list.
     * @returns a %NULL terminated list of session ids
     */
    function get_session_ids(): string[];
    /**
     * Takes an xsession id and returns the name and comment about it.
     * @param id an id from gdm_get_session_ids()
     * @returns The session name if found, or %NULL otherwise
     */
    function get_session_name_and_description(id: string): string;
    function goto_login_session_sync(cancellable?: Gio.Cancellable | null): boolean;
    function greeter_interface_info(): Gio.DBusInterfaceInfo;
    function greeter_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    function manager_interface_info(): Gio.DBusInterfaceInfo;
    function manager_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    function remote_greeter_interface_info(): Gio.DBusInterfaceInfo;
    function remote_greeter_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    function user_verifier_choice_list_interface_info(): Gio.DBusInterfaceInfo;
    function user_verifier_choice_list_override_properties(
        klass: GObject.ObjectClass,
        property_id_begin: number,
    ): number;
    function user_verifier_interface_info(): Gio.DBusInterfaceInfo;
    function user_verifier_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    function worker_manager_interface_info(): Gio.DBusInterfaceInfo;
    function worker_manager_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number;
    module ChooserProxy {
        // Constructor properties interface
    }

    class ChooserProxy extends Gio.DBusProxy {
        // Owm methods of Gdm-1.0.ChooserProxy

        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<ChooserProxy> | null,
        ): void;
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<ChooserProxy> | null,
        ): void;
    }

    module ChooserSkeleton {
        // Constructor properties interface
    }

    class ChooserSkeleton extends Gio.DBusInterfaceSkeleton {}

    module Client {
        // Constructor properties interface
    }

    class Client extends GObject.Object {
        // Constructors of Gdm-1.0.Client

        static ['new'](): Client;

        // Owm methods of Gdm-1.0.Client

        static error_quark(): GLib.Quark;

        // Owm methods of Gdm-1.0.Client

        /**
         * Gets a #GdmChooser object that can be used to
         * verify a user's local account.
         * @param cancellable a #GCancellable
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        get_chooser(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an operation started with
         * gdm_client_get_chooser().
         * @param result The #GAsyncResult from the callback
         * @returns a #GdmChooser
         */
        get_chooser_finish(result: Gio.AsyncResult): Chooser;
        /**
         * Gets a #GdmChooser object that can be used
         * to do do various XDMCP chooser related tasks, such
         * as selecting a host or disconnecting.
         * @param cancellable a #GCancellable
         * @returns #GdmChooser or %NULL if caller is not a chooser
         */
        get_chooser_sync(cancellable?: Gio.Cancellable | null): Chooser;
        /**
         * Gets a #GdmGreeter object that can be used to
         * verify a user's local account.
         * @param cancellable a #GCancellable
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        get_greeter(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an operation started with
         * gdm_client_get_greeter().
         * @param result The #GAsyncResult from the callback
         * @returns a #GdmGreeter
         */
        get_greeter_finish(result: Gio.AsyncResult): Greeter;
        /**
         * Gets a #GdmGreeter object that can be used
         * to do do various login screen related tasks, such
         * as selecting a users session, and starting that
         * session.
         * @param cancellable a #GCancellable
         * @returns #GdmGreeter or %NULL if caller is not a greeter
         */
        get_greeter_sync(cancellable?: Gio.Cancellable | null): Greeter;
        /**
         * Gets a #GdmRemoteGreeter object that can be used to
         * verify a user's local account.
         * @param cancellable a #GCancellable
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        get_remote_greeter(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Finishes an operation started with
         * gdm_client_get_remote_greeter().
         * @param result The #GAsyncResult from the callback
         * @returns a #GdmRemoteGreeter
         */
        get_remote_greeter_finish(result: Gio.AsyncResult): RemoteGreeter;
        /**
         * Gets a #GdmRemoteGreeter object that can be used
         * to do do various remote login screen related tasks,
         * such as disconnecting.
         * @param cancellable a #GCancellable
         * @returns #GdmRemoteGreeter or %NULL if caller is not remote
         */
        get_remote_greeter_sync(cancellable?: Gio.Cancellable | null): RemoteGreeter;
        /**
         * Gets a #GdmUserVerifier object that can be used to
         * verify a user's local account.
         * @param cancellable a #GCancellable
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        get_user_verifier(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Gets a #GdmUserVerifierChoiceList object that can be used to
         * verify a user's local account.
         * @returns #GdmUserVerifierChoiceList or %NULL if user verifier isn't yet fetched, or daemon doesn't support choice lists
         */
        get_user_verifier_choice_list(): UserVerifierChoiceList;
        /**
         * Finishes an operation started with
         * gdm_client_get_user_verifier().
         * @param result The #GAsyncResult from the callback
         * @returns a #GdmUserVerifier
         */
        get_user_verifier_finish(result: Gio.AsyncResult): UserVerifier;
        /**
         * Gets a #GdmUserVerifier object that can be used to
         * verify a user's local account.
         * @param cancellable a #GCancellable
         * @returns #GdmUserVerifier or %NULL if not connected
         */
        get_user_verifier_sync(cancellable?: Gio.Cancellable | null): UserVerifier;
        /**
         * Gets a #GdmUserVerifier object that can be used to
         * reauthenticate an already logged in user.
         * @param username user to reauthenticate
         * @param cancellable a #GCancellable
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied
         */
        open_reauthentication_channel(
            username: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an operation started with
         * gdm_client_open_reauthentication_channel().
         * @param result The #GAsyncResult from the callback
         * @returns a #GdmUserVerifier
         */
        open_reauthentication_channel_finish(result: Gio.AsyncResult): UserVerifier;
        /**
         * Gets a #GdmUserVerifier object that can be used to
         * reauthenticate an already logged in user. Free with
         * g_object_unref to close reauthentication channel.
         * @param username user to reauthenticate
         * @param cancellable a #GCancellable
         * @returns #GdmUserVerifier or %NULL if @username is not already logged in.
         */
        open_reauthentication_channel_sync(username: string, cancellable?: Gio.Cancellable | null): UserVerifier;
        /**
         * Enables GDM's pam extensions.  Currently, only
         * org.gnome.DisplayManager.UserVerifier.ChoiceList is supported.
         * @param extensions a list of extensions
         */
        set_enabled_extensions(extensions: string[]): void;
    }

    module GreeterProxy {
        // Constructor properties interface
    }

    class GreeterProxy extends Gio.DBusProxy {
        // Owm methods of Gdm-1.0.GreeterProxy

        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<GreeterProxy> | null,
        ): void;
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<GreeterProxy> | null,
        ): void;
    }

    module GreeterSkeleton {
        // Constructor properties interface
    }

    class GreeterSkeleton extends Gio.DBusInterfaceSkeleton {}

    module ManagerProxy {
        // Constructor properties interface
    }

    class ManagerProxy extends Gio.DBusProxy {
        // Owm methods of Gdm-1.0.ManagerProxy

        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<ManagerProxy> | null,
        ): void;
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<ManagerProxy> | null,
        ): void;
    }

    module ManagerSkeleton {
        // Constructor properties interface
    }

    class ManagerSkeleton extends Gio.DBusInterfaceSkeleton {}

    module RemoteGreeterProxy {
        // Constructor properties interface
    }

    class RemoteGreeterProxy extends Gio.DBusProxy {
        // Owm methods of Gdm-1.0.RemoteGreeterProxy

        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<RemoteGreeterProxy> | null,
        ): void;
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<RemoteGreeterProxy> | null,
        ): void;
    }

    module RemoteGreeterSkeleton {
        // Constructor properties interface
    }

    class RemoteGreeterSkeleton extends Gio.DBusInterfaceSkeleton {}

    module UserVerifierChoiceListProxy {
        // Constructor properties interface
    }

    class UserVerifierChoiceListProxy extends Gio.DBusProxy {
        // Owm methods of Gdm-1.0.UserVerifierChoiceListProxy

        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<UserVerifierChoiceListProxy> | null,
        ): void;
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<UserVerifierChoiceListProxy> | null,
        ): void;
    }

    module UserVerifierChoiceListSkeleton {
        // Constructor properties interface
    }

    class UserVerifierChoiceListSkeleton extends Gio.DBusInterfaceSkeleton {}

    module UserVerifierProxy {
        // Constructor properties interface
    }

    class UserVerifierProxy extends Gio.DBusProxy {
        // Owm methods of Gdm-1.0.UserVerifierProxy

        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<UserVerifierProxy> | null,
        ): void;
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<UserVerifierProxy> | null,
        ): void;
    }

    module UserVerifierSkeleton {
        // Constructor properties interface
    }

    class UserVerifierSkeleton extends Gio.DBusInterfaceSkeleton {}

    module WorkerManagerProxy {
        // Constructor properties interface
    }

    class WorkerManagerProxy extends Gio.DBusProxy {
        // Owm methods of Gdm-1.0.WorkerManagerProxy

        static new(
            connection: Gio.DBusConnection,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<WorkerManagerProxy> | null,
        ): void;
        static new_for_bus(
            bus_type: Gio.BusType,
            flags: Gio.DBusProxyFlags,
            name: string,
            object_path: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<WorkerManagerProxy> | null,
        ): void;
    }

    module WorkerManagerSkeleton {
        // Constructor properties interface
    }

    class WorkerManagerSkeleton extends Gio.DBusInterfaceSkeleton {}

    class ChooserIface {}

    class ChooserProxyClass {}

    class ChooserProxyPrivate {}

    class ChooserSkeletonClass {}

    class ChooserSkeletonPrivate {}

    class ClientClass {}

    class GreeterIface {}

    class GreeterProxyClass {}

    class GreeterProxyPrivate {}

    class GreeterSkeletonClass {}

    class GreeterSkeletonPrivate {}

    class ManagerIface {}

    class ManagerProxyClass {}

    class ManagerProxyPrivate {}

    class ManagerSkeletonClass {}

    class ManagerSkeletonPrivate {}

    class RemoteGreeterIface {}

    class RemoteGreeterProxyClass {}

    class RemoteGreeterProxyPrivate {}

    class RemoteGreeterSkeletonClass {}

    class RemoteGreeterSkeletonPrivate {}

    class UserVerifierChoiceListIface {}

    class UserVerifierChoiceListProxyClass {}

    class UserVerifierChoiceListProxyPrivate {}

    class UserVerifierChoiceListSkeletonClass {}

    class UserVerifierChoiceListSkeletonPrivate {}

    class UserVerifierIface {}

    class UserVerifierProxyClass {}

    class UserVerifierProxyPrivate {}

    class UserVerifierSkeletonClass {}

    class UserVerifierSkeletonPrivate {}

    class WorkerManagerIface {}

    class WorkerManagerProxyClass {}

    class WorkerManagerProxyPrivate {}

    class WorkerManagerSkeletonClass {}

    class WorkerManagerSkeletonPrivate {}

    interface Chooser {
        // Owm methods of Gdm-1.0.Chooser

        call_disconnect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        call_disconnect_finish(res: Gio.AsyncResult): boolean;
        call_disconnect_sync(cancellable?: Gio.Cancellable | null): boolean;
        call_select_hostname(
            arg_hostname: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        call_select_hostname_finish(res: Gio.AsyncResult): boolean;
        call_select_hostname_sync(arg_hostname: string, cancellable?: Gio.Cancellable | null): boolean;
        complete_disconnect(invocation: Gio.DBusMethodInvocation): void;
        complete_select_hostname(invocation: Gio.DBusMethodInvocation): void;

        // Own virtual methods of Gdm-1.0.Chooser

        vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_select_hostname(invocation: Gio.DBusMethodInvocation, arg_hostname: string): boolean;
    }

    interface Greeter {
        // Owm methods of Gdm-1.0.Greeter

        call_begin_auto_login(
            arg_username: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        call_begin_auto_login_finish(res: Gio.AsyncResult): boolean;
        call_begin_auto_login_sync(arg_username: string, cancellable?: Gio.Cancellable | null): boolean;
        call_get_timed_login_details(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        call_get_timed_login_details_finish(
            out_enabled: boolean,
            out_username: string,
            out_delay: number,
            res: Gio.AsyncResult,
        ): boolean;
        call_get_timed_login_details_sync(
            out_enabled: boolean,
            out_username: string,
            out_delay: number,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        call_select_session(
            arg_session: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        call_select_session_finish(res: Gio.AsyncResult): boolean;
        call_select_session_sync(arg_session: string, cancellable?: Gio.Cancellable | null): boolean;
        call_select_user(
            arg_username: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        call_select_user_finish(res: Gio.AsyncResult): boolean;
        call_select_user_sync(arg_username: string, cancellable?: Gio.Cancellable | null): boolean;
        call_start_session_when_ready(
            arg_service_name: string,
            arg_should_start_session: boolean,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        call_start_session_when_ready_finish(res: Gio.AsyncResult): boolean;
        call_start_session_when_ready_sync(
            arg_service_name: string,
            arg_should_start_session: boolean,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        complete_begin_auto_login(invocation: Gio.DBusMethodInvocation): void;
        complete_get_timed_login_details(
            invocation: Gio.DBusMethodInvocation,
            enabled: boolean,
            username: string,
            delay: number,
        ): void;
        complete_select_session(invocation: Gio.DBusMethodInvocation): void;
        complete_select_user(invocation: Gio.DBusMethodInvocation): void;
        complete_start_session_when_ready(invocation: Gio.DBusMethodInvocation): void;
        emit_default_language_name_changed(arg_language_name: string): void;
        emit_default_session_name_changed(arg_session_name: string): void;
        emit_reauthenticated(arg_service_name: string): void;
        emit_selected_user_changed(arg_username: string): void;
        emit_session_opened(arg_service_name: string): void;
        emit_timed_login_requested(arg_username: string, arg_delay: number): void;

        // Own virtual methods of Gdm-1.0.Greeter

        vfunc_default_language_name_changed(arg_language_name: string): void;
        vfunc_default_session_name_changed(arg_session_name: string): void;
        vfunc_handle_begin_auto_login(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean;
        vfunc_handle_get_timed_login_details(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_select_session(invocation: Gio.DBusMethodInvocation, arg_session: string): boolean;
        vfunc_handle_select_user(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean;
        vfunc_handle_start_session_when_ready(
            invocation: Gio.DBusMethodInvocation,
            arg_service_name: string,
            arg_should_start_session: boolean,
        ): boolean;
        vfunc_reauthenticated(arg_service_name: string): void;
        vfunc_selected_user_changed(arg_username: string): void;
        vfunc_session_opened(arg_service_name: string): void;
        vfunc_timed_login_requested(arg_username: string, arg_delay: number): void;
    }

    interface Manager {
        // Own properties of Gdm-1.0.Manager

        version: string;

        // Owm methods of Gdm-1.0.Manager

        call_open_reauthentication_channel(
            arg_username: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        call_open_reauthentication_channel_finish(out_address: string, res: Gio.AsyncResult): boolean;
        call_open_reauthentication_channel_sync(
            arg_username: string,
            out_address: string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        call_open_session(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        call_open_session_finish(out_address: string, res: Gio.AsyncResult): boolean;
        call_open_session_sync(out_address: string, cancellable?: Gio.Cancellable | null): boolean;
        call_register_display(
            arg_details: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        call_register_display_finish(res: Gio.AsyncResult): boolean;
        call_register_display_sync(arg_details: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        call_register_session(
            arg_details: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        call_register_session_finish(res: Gio.AsyncResult): boolean;
        call_register_session_sync(arg_details: GLib.Variant, cancellable?: Gio.Cancellable | null): boolean;
        complete_open_reauthentication_channel(invocation: Gio.DBusMethodInvocation, address: string): void;
        complete_open_session(invocation: Gio.DBusMethodInvocation, address: string): void;
        complete_register_display(invocation: Gio.DBusMethodInvocation): void;
        complete_register_session(invocation: Gio.DBusMethodInvocation): void;
        dup_version(): string;
        get_version(): string;
        set_version(value: string): void;

        // Own virtual methods of Gdm-1.0.Manager

        vfunc_get_version(): string;
        vfunc_handle_open_reauthentication_channel(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean;
        vfunc_handle_open_session(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_register_display(invocation: Gio.DBusMethodInvocation, arg_details: GLib.Variant): boolean;
        vfunc_handle_register_session(invocation: Gio.DBusMethodInvocation, arg_details: GLib.Variant): boolean;
    }

    interface RemoteGreeter {
        // Owm methods of Gdm-1.0.RemoteGreeter

        call_disconnect(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        call_disconnect_finish(res: Gio.AsyncResult): boolean;
        call_disconnect_sync(cancellable?: Gio.Cancellable | null): boolean;
        complete_disconnect(invocation: Gio.DBusMethodInvocation): void;

        // Own virtual methods of Gdm-1.0.RemoteGreeter

        vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation): boolean;
    }

    interface UserVerifier {
        // Owm methods of Gdm-1.0.UserVerifier

        call_answer_query(
            arg_service_name: string,
            arg_answer: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        call_answer_query_finish(res: Gio.AsyncResult): boolean;
        call_answer_query_sync(
            arg_service_name: string,
            arg_answer: string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        call_begin_verification(
            arg_service_name: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        call_begin_verification_finish(res: Gio.AsyncResult): boolean;
        call_begin_verification_for_user(
            arg_service_name: string,
            arg_username: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        call_begin_verification_for_user_finish(res: Gio.AsyncResult): boolean;
        call_begin_verification_for_user_sync(
            arg_service_name: string,
            arg_username: string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        call_begin_verification_sync(arg_service_name: string, cancellable?: Gio.Cancellable | null): boolean;
        call_cancel(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        call_cancel_finish(res: Gio.AsyncResult): boolean;
        call_cancel_sync(cancellable?: Gio.Cancellable | null): boolean;
        call_enable_extensions(
            arg_extensions: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        call_enable_extensions_finish(res: Gio.AsyncResult): boolean;
        call_enable_extensions_sync(arg_extensions: string, cancellable?: Gio.Cancellable | null): boolean;
        complete_answer_query(invocation: Gio.DBusMethodInvocation): void;
        complete_begin_verification(invocation: Gio.DBusMethodInvocation): void;
        complete_begin_verification_for_user(invocation: Gio.DBusMethodInvocation): void;
        complete_cancel(invocation: Gio.DBusMethodInvocation): void;
        complete_enable_extensions(invocation: Gio.DBusMethodInvocation): void;
        emit_conversation_started(arg_service_name: string): void;
        emit_conversation_stopped(arg_service_name: string): void;
        emit_info(arg_service_name: string, arg_info: string): void;
        emit_info_query(arg_service_name: string, arg_query: string): void;
        emit_problem(arg_service_name: string, arg_problem: string): void;
        emit_reauthentication_started(arg_pid_of_caller: number): void;
        emit_reset(): void;
        emit_secret_info_query(arg_service_name: string, arg_query: string): void;
        emit_service_unavailable(arg_service_name: string, arg_message: string): void;
        emit_verification_complete(arg_service_name: string): void;
        emit_verification_failed(arg_service_name: string): void;

        // Own virtual methods of Gdm-1.0.UserVerifier

        vfunc_conversation_started(arg_service_name: string): void;
        vfunc_conversation_stopped(arg_service_name: string): void;
        vfunc_handle_answer_query(
            invocation: Gio.DBusMethodInvocation,
            arg_service_name: string,
            arg_answer: string,
        ): boolean;
        vfunc_handle_begin_verification(invocation: Gio.DBusMethodInvocation, arg_service_name: string): boolean;
        vfunc_handle_begin_verification_for_user(
            invocation: Gio.DBusMethodInvocation,
            arg_service_name: string,
            arg_username: string,
        ): boolean;
        vfunc_handle_cancel(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_enable_extensions(invocation: Gio.DBusMethodInvocation, arg_extensions: string): boolean;
        vfunc_info(arg_service_name: string, arg_info: string): void;
        vfunc_info_query(arg_service_name: string, arg_query: string): void;
        vfunc_problem(arg_service_name: string, arg_problem: string): void;
        vfunc_reauthentication_started(arg_pid_of_caller: number): void;
        vfunc_reset(): void;
        vfunc_secret_info_query(arg_service_name: string, arg_query: string): void;
        vfunc_service_unavailable(arg_service_name: string, arg_message: string): void;
        vfunc_verification_complete(arg_service_name: string): void;
        vfunc_verification_failed(arg_service_name: string): void;
    }

    interface UserVerifierChoiceList {
        // Owm methods of Gdm-1.0.UserVerifierChoiceList

        call_select_choice(
            arg_service_name: string,
            arg_choice: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        call_select_choice_finish(res: Gio.AsyncResult): boolean;
        call_select_choice_sync(
            arg_service_name: string,
            arg_choice: string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        complete_select_choice(invocation: Gio.DBusMethodInvocation): void;
        emit_choice_query(arg_service_name: string, arg_prompt_message: string, arg_list: GLib.Variant): void;

        // Own virtual methods of Gdm-1.0.UserVerifierChoiceList

        vfunc_choice_query(arg_service_name: string, arg_prompt_message: string, arg_list: GLib.Variant): void;
        vfunc_handle_select_choice(
            invocation: Gio.DBusMethodInvocation,
            arg_service_name: string,
            arg_choice: string,
        ): boolean;
    }

    interface WorkerManager {
        // Owm methods of Gdm-1.0.WorkerManager

        call_choice_list_query(
            arg_service_name: string,
            arg_prompt_message: string,
            arg_query: GLib.Variant,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        call_choice_list_query_finish(out_answer: string, res: Gio.AsyncResult): boolean;
        call_choice_list_query_sync(
            arg_service_name: string,
            arg_prompt_message: string,
            arg_query: GLib.Variant,
            out_answer: string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        call_hello(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;
        call_hello_finish(res: Gio.AsyncResult): boolean;
        call_hello_sync(cancellable?: Gio.Cancellable | null): boolean;
        call_info(
            arg_service_name: string,
            arg_info: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        call_info_finish(res: Gio.AsyncResult): boolean;
        call_info_query(
            arg_service_name: string,
            arg_query: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        call_info_query_finish(out_answer: string, res: Gio.AsyncResult): boolean;
        call_info_query_sync(
            arg_service_name: string,
            arg_query: string,
            out_answer: string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        call_info_sync(arg_service_name: string, arg_info: string, cancellable?: Gio.Cancellable | null): boolean;
        call_problem(
            arg_service_name: string,
            arg_problem: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        call_problem_finish(res: Gio.AsyncResult): boolean;
        call_problem_sync(arg_service_name: string, arg_problem: string, cancellable?: Gio.Cancellable | null): boolean;
        call_secret_info_query(
            arg_service_name: string,
            arg_query: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        call_secret_info_query_finish(out_answer: string, res: Gio.AsyncResult): boolean;
        call_secret_info_query_sync(
            arg_service_name: string,
            arg_query: string,
            out_answer: string,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        complete_choice_list_query(invocation: Gio.DBusMethodInvocation, answer: string): void;
        complete_hello(invocation: Gio.DBusMethodInvocation): void;
        complete_info(invocation: Gio.DBusMethodInvocation): void;
        complete_info_query(invocation: Gio.DBusMethodInvocation, answer: string): void;
        complete_problem(invocation: Gio.DBusMethodInvocation): void;
        complete_secret_info_query(invocation: Gio.DBusMethodInvocation, answer: string): void;

        // Own virtual methods of Gdm-1.0.WorkerManager

        vfunc_handle_choice_list_query(
            invocation: Gio.DBusMethodInvocation,
            arg_service_name: string,
            arg_prompt_message: string,
            arg_query: GLib.Variant,
        ): boolean;
        vfunc_handle_hello(invocation: Gio.DBusMethodInvocation): boolean;
        vfunc_handle_info(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_info: string): boolean;
        vfunc_handle_info_query(
            invocation: Gio.DBusMethodInvocation,
            arg_service_name: string,
            arg_query: string,
        ): boolean;
        vfunc_handle_problem(
            invocation: Gio.DBusMethodInvocation,
            arg_service_name: string,
            arg_problem: string,
        ): boolean;
        vfunc_handle_secret_info_query(
            invocation: Gio.DBusMethodInvocation,
            arg_service_name: string,
            arg_query: string,
        ): boolean;
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

export default Gdm;
// END
