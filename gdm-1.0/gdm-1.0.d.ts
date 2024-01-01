
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

export namespace Gdm {

enum ClientError {
    CLIENT_ERROR_GENERIC,
}
function chooser_interface_info(): Gio.DBusInterfaceInfo
function chooser_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Reads /usr/share/xsessions and other relevant places for possible sessions
 * to log into and returns the complete list.
 * @returns a %NULL terminated list of session ids
 */
function get_session_ids(): string[]
/**
 * Takes an xsession id and returns the name and comment about it.
 * @param id an id from gdm_get_session_ids()
 * @returns The session name if found, or %NULL otherwise
 */
function get_session_name_and_description(id: string): [ /* returnType */ string | null, /* description */ string | null ]
function goto_login_session_sync(cancellable: Gio.Cancellable | null): boolean
function greeter_interface_info(): Gio.DBusInterfaceInfo
function greeter_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
function manager_interface_info(): Gio.DBusInterfaceInfo
function manager_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
function remote_greeter_interface_info(): Gio.DBusInterfaceInfo
function remote_greeter_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
function user_verifier_choice_list_interface_info(): Gio.DBusInterfaceInfo
function user_verifier_choice_list_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
function user_verifier_interface_info(): Gio.DBusInterfaceInfo
function user_verifier_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
function worker_manager_interface_info(): Gio.DBusInterfaceInfo
function worker_manager_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
module Chooser {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-disconnect`
     */
    interface HandleDisconnectSignalCallback {
        ($obj: Chooser, object: Gio.DBusMethodInvocation): boolean
    }

    /**
     * Signal callback interface for `handle-select-hostname`
     */
    interface HandleSelectHostnameSignalCallback {
        ($obj: Chooser, object: Gio.DBusMethodInvocation, p0: string | null): boolean
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Chooser {

    // Owm methods of Gdm-1.0.Gdm.Chooser

    call_disconnect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    call_disconnect_finish(res: Gio.AsyncResult): boolean
    call_disconnect_sync(cancellable: Gio.Cancellable | null): boolean
    call_select_hostname(arg_hostname: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    call_select_hostname_finish(res: Gio.AsyncResult): boolean
    call_select_hostname_sync(arg_hostname: string, cancellable: Gio.Cancellable | null): boolean
    complete_disconnect(invocation: Gio.DBusMethodInvocation): void
    complete_select_hostname(invocation: Gio.DBusMethodInvocation): void

    // Own virtual methods of Gdm-1.0.Gdm.Chooser

    vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_select_hostname(invocation: Gio.DBusMethodInvocation, arg_hostname: string): boolean

    // Own signals of Gdm-1.0.Gdm.Chooser

    connect(sigName: "handle-disconnect", callback: Chooser.HandleDisconnectSignalCallback): number
    connect_after(sigName: "handle-disconnect", callback: Chooser.HandleDisconnectSignalCallback): number
    emit(sigName: "handle-disconnect", object: Gio.DBusMethodInvocation, ...args: any[]): void
    connect(sigName: "handle-select-hostname", callback: Chooser.HandleSelectHostnameSignalCallback): number
    connect_after(sigName: "handle-select-hostname", callback: Chooser.HandleSelectHostnameSignalCallback): number
    emit(sigName: "handle-select-hostname", object: Gio.DBusMethodInvocation, p0: string | null, ...args: any[]): void

    // Class property signals of Gdm-1.0.Gdm.Chooser

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Chooser extends GObject.Object {

    // Own properties of Gdm-1.0.Gdm.Chooser

    static name: string
    static $gtype: GObject.GType<Chooser>

    // Constructors of Gdm-1.0.Gdm.Chooser

    constructor(config?: Chooser.ConstructorProperties) 
    _init(config?: Chooser.ConstructorProperties): void
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module Greeter {

    // Signal callback interfaces

    /**
     * Signal callback interface for `default-language-name-changed`
     */
    interface DefaultLanguageNameChangedSignalCallback {
        ($obj: Greeter, object: string | null): void
    }

    /**
     * Signal callback interface for `default-session-name-changed`
     */
    interface DefaultSessionNameChangedSignalCallback {
        ($obj: Greeter, object: string | null): void
    }

    /**
     * Signal callback interface for `handle-begin-auto-login`
     */
    interface HandleBeginAutoLoginSignalCallback {
        ($obj: Greeter, object: Gio.DBusMethodInvocation, p0: string | null): boolean
    }

    /**
     * Signal callback interface for `handle-get-timed-login-details`
     */
    interface HandleGetTimedLoginDetailsSignalCallback {
        ($obj: Greeter, object: Gio.DBusMethodInvocation): boolean
    }

    /**
     * Signal callback interface for `handle-select-session`
     */
    interface HandleSelectSessionSignalCallback {
        ($obj: Greeter, object: Gio.DBusMethodInvocation, p0: string | null): boolean
    }

    /**
     * Signal callback interface for `handle-select-user`
     */
    interface HandleSelectUserSignalCallback {
        ($obj: Greeter, object: Gio.DBusMethodInvocation, p0: string | null): boolean
    }

    /**
     * Signal callback interface for `handle-start-session-when-ready`
     */
    interface HandleStartSessionWhenReadySignalCallback {
        ($obj: Greeter, object: Gio.DBusMethodInvocation, p0: string | null, p1: boolean): boolean
    }

    /**
     * Signal callback interface for `reauthenticated`
     */
    interface ReauthenticatedSignalCallback {
        ($obj: Greeter, object: string | null): void
    }

    /**
     * Signal callback interface for `selected-user-changed`
     */
    interface SelectedUserChangedSignalCallback {
        ($obj: Greeter, object: string | null): void
    }

    /**
     * Signal callback interface for `session-opened`
     */
    interface SessionOpenedSignalCallback {
        ($obj: Greeter, object: string | null): void
    }

    /**
     * Signal callback interface for `timed-login-requested`
     */
    interface TimedLoginRequestedSignalCallback {
        ($obj: Greeter, object: string | null, p0: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Greeter {

    // Owm methods of Gdm-1.0.Gdm.Greeter

    call_begin_auto_login(arg_username: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    call_begin_auto_login_finish(res: Gio.AsyncResult): boolean
    call_begin_auto_login_sync(arg_username: string, cancellable: Gio.Cancellable | null): boolean
    call_get_timed_login_details(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    call_get_timed_login_details_finish(out_enabled: boolean, out_username: string | null, out_delay: number, res: Gio.AsyncResult): boolean
    call_get_timed_login_details_sync(out_enabled: boolean, out_username: string | null, out_delay: number, cancellable: Gio.Cancellable | null): boolean
    call_select_session(arg_session: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    call_select_session_finish(res: Gio.AsyncResult): boolean
    call_select_session_sync(arg_session: string, cancellable: Gio.Cancellable | null): boolean
    call_select_user(arg_username: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    call_select_user_finish(res: Gio.AsyncResult): boolean
    call_select_user_sync(arg_username: string, cancellable: Gio.Cancellable | null): boolean
    call_start_session_when_ready(arg_service_name: string, arg_should_start_session: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    call_start_session_when_ready_finish(res: Gio.AsyncResult): boolean
    call_start_session_when_ready_sync(arg_service_name: string, arg_should_start_session: boolean, cancellable: Gio.Cancellable | null): boolean
    complete_begin_auto_login(invocation: Gio.DBusMethodInvocation): void
    complete_get_timed_login_details(invocation: Gio.DBusMethodInvocation, enabled: boolean, username: string, delay: number): void
    complete_select_session(invocation: Gio.DBusMethodInvocation): void
    complete_select_user(invocation: Gio.DBusMethodInvocation): void
    complete_start_session_when_ready(invocation: Gio.DBusMethodInvocation): void
    emit_default_language_name_changed(arg_language_name: string): void
    emit_default_session_name_changed(arg_session_name: string): void
    emit_reauthenticated(arg_service_name: string): void
    emit_selected_user_changed(arg_username: string): void
    emit_session_opened(arg_service_name: string): void
    emit_timed_login_requested(arg_username: string, arg_delay: number): void

    // Own virtual methods of Gdm-1.0.Gdm.Greeter

    vfunc_default_language_name_changed(arg_language_name: string): void
    vfunc_default_session_name_changed(arg_session_name: string): void
    vfunc_handle_begin_auto_login(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean
    vfunc_handle_get_timed_login_details(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_select_session(invocation: Gio.DBusMethodInvocation, arg_session: string): boolean
    vfunc_handle_select_user(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean
    vfunc_handle_start_session_when_ready(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_should_start_session: boolean): boolean
    vfunc_reauthenticated(arg_service_name: string): void
    vfunc_selected_user_changed(arg_username: string): void
    vfunc_session_opened(arg_service_name: string): void
    vfunc_timed_login_requested(arg_username: string, arg_delay: number): void

    // Own signals of Gdm-1.0.Gdm.Greeter

    connect(sigName: "default-language-name-changed", callback: Greeter.DefaultLanguageNameChangedSignalCallback): number
    connect_after(sigName: "default-language-name-changed", callback: Greeter.DefaultLanguageNameChangedSignalCallback): number
    emit(sigName: "default-language-name-changed", object: string | null, ...args: any[]): void
    connect(sigName: "default-session-name-changed", callback: Greeter.DefaultSessionNameChangedSignalCallback): number
    connect_after(sigName: "default-session-name-changed", callback: Greeter.DefaultSessionNameChangedSignalCallback): number
    emit(sigName: "default-session-name-changed", object: string | null, ...args: any[]): void
    connect(sigName: "handle-begin-auto-login", callback: Greeter.HandleBeginAutoLoginSignalCallback): number
    connect_after(sigName: "handle-begin-auto-login", callback: Greeter.HandleBeginAutoLoginSignalCallback): number
    emit(sigName: "handle-begin-auto-login", object: Gio.DBusMethodInvocation, p0: string | null, ...args: any[]): void
    connect(sigName: "handle-get-timed-login-details", callback: Greeter.HandleGetTimedLoginDetailsSignalCallback): number
    connect_after(sigName: "handle-get-timed-login-details", callback: Greeter.HandleGetTimedLoginDetailsSignalCallback): number
    emit(sigName: "handle-get-timed-login-details", object: Gio.DBusMethodInvocation, ...args: any[]): void
    connect(sigName: "handle-select-session", callback: Greeter.HandleSelectSessionSignalCallback): number
    connect_after(sigName: "handle-select-session", callback: Greeter.HandleSelectSessionSignalCallback): number
    emit(sigName: "handle-select-session", object: Gio.DBusMethodInvocation, p0: string | null, ...args: any[]): void
    connect(sigName: "handle-select-user", callback: Greeter.HandleSelectUserSignalCallback): number
    connect_after(sigName: "handle-select-user", callback: Greeter.HandleSelectUserSignalCallback): number
    emit(sigName: "handle-select-user", object: Gio.DBusMethodInvocation, p0: string | null, ...args: any[]): void
    connect(sigName: "handle-start-session-when-ready", callback: Greeter.HandleStartSessionWhenReadySignalCallback): number
    connect_after(sigName: "handle-start-session-when-ready", callback: Greeter.HandleStartSessionWhenReadySignalCallback): number
    emit(sigName: "handle-start-session-when-ready", object: Gio.DBusMethodInvocation, p0: string | null, p1: boolean, ...args: any[]): void
    connect(sigName: "reauthenticated", callback: Greeter.ReauthenticatedSignalCallback): number
    connect_after(sigName: "reauthenticated", callback: Greeter.ReauthenticatedSignalCallback): number
    emit(sigName: "reauthenticated", object: string | null, ...args: any[]): void
    connect(sigName: "selected-user-changed", callback: Greeter.SelectedUserChangedSignalCallback): number
    connect_after(sigName: "selected-user-changed", callback: Greeter.SelectedUserChangedSignalCallback): number
    emit(sigName: "selected-user-changed", object: string | null, ...args: any[]): void
    connect(sigName: "session-opened", callback: Greeter.SessionOpenedSignalCallback): number
    connect_after(sigName: "session-opened", callback: Greeter.SessionOpenedSignalCallback): number
    emit(sigName: "session-opened", object: string | null, ...args: any[]): void
    connect(sigName: "timed-login-requested", callback: Greeter.TimedLoginRequestedSignalCallback): number
    connect_after(sigName: "timed-login-requested", callback: Greeter.TimedLoginRequestedSignalCallback): number
    emit(sigName: "timed-login-requested", object: string | null, p0: number, ...args: any[]): void

    // Class property signals of Gdm-1.0.Gdm.Greeter

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Greeter extends GObject.Object {

    // Own properties of Gdm-1.0.Gdm.Greeter

    static name: string
    static $gtype: GObject.GType<Greeter>

    // Constructors of Gdm-1.0.Gdm.Greeter

    constructor(config?: Greeter.ConstructorProperties) 
    _init(config?: Greeter.ConstructorProperties): void
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module Manager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-open-reauthentication-channel`
     */
    interface HandleOpenReauthenticationChannelSignalCallback {
        ($obj: Manager, object: Gio.DBusMethodInvocation, p0: string | null): boolean
    }

    /**
     * Signal callback interface for `handle-open-session`
     */
    interface HandleOpenSessionSignalCallback {
        ($obj: Manager, object: Gio.DBusMethodInvocation): boolean
    }

    /**
     * Signal callback interface for `handle-register-display`
     */
    interface HandleRegisterDisplaySignalCallback {
        ($obj: Manager, object: Gio.DBusMethodInvocation, p0: GLib.Variant): boolean
    }

    /**
     * Signal callback interface for `handle-register-session`
     */
    interface HandleRegisterSessionSignalCallback {
        ($obj: Manager, object: Gio.DBusMethodInvocation, p0: GLib.Variant): boolean
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gdm-1.0.Gdm.Manager

        version?: string | null
    }

}

interface Manager {

    // Own properties of Gdm-1.0.Gdm.Manager

    version: string | null

    // Owm methods of Gdm-1.0.Gdm.Manager

    call_open_reauthentication_channel(arg_username: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    call_open_reauthentication_channel_finish(out_address: string | null, res: Gio.AsyncResult): boolean
    call_open_reauthentication_channel_sync(arg_username: string, out_address: string | null, cancellable: Gio.Cancellable | null): boolean
    call_open_session(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    call_open_session_finish(out_address: string | null, res: Gio.AsyncResult): boolean
    call_open_session_sync(out_address: string | null, cancellable: Gio.Cancellable | null): boolean
    call_register_display(arg_details: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    call_register_display_finish(res: Gio.AsyncResult): boolean
    call_register_display_sync(arg_details: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    call_register_session(arg_details: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    call_register_session_finish(res: Gio.AsyncResult): boolean
    call_register_session_sync(arg_details: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    complete_open_reauthentication_channel(invocation: Gio.DBusMethodInvocation, address: string): void
    complete_open_session(invocation: Gio.DBusMethodInvocation, address: string): void
    complete_register_display(invocation: Gio.DBusMethodInvocation): void
    complete_register_session(invocation: Gio.DBusMethodInvocation): void
    dup_version(): string | null
    get_version(): string
    set_version(value: string): void

    // Own virtual methods of Gdm-1.0.Gdm.Manager

    vfunc_get_version(): string
    vfunc_handle_open_reauthentication_channel(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean
    vfunc_handle_open_session(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_register_display(invocation: Gio.DBusMethodInvocation, arg_details: GLib.Variant): boolean
    vfunc_handle_register_session(invocation: Gio.DBusMethodInvocation, arg_details: GLib.Variant): boolean

    // Own signals of Gdm-1.0.Gdm.Manager

    connect(sigName: "handle-open-reauthentication-channel", callback: Manager.HandleOpenReauthenticationChannelSignalCallback): number
    connect_after(sigName: "handle-open-reauthentication-channel", callback: Manager.HandleOpenReauthenticationChannelSignalCallback): number
    emit(sigName: "handle-open-reauthentication-channel", object: Gio.DBusMethodInvocation, p0: string | null, ...args: any[]): void
    connect(sigName: "handle-open-session", callback: Manager.HandleOpenSessionSignalCallback): number
    connect_after(sigName: "handle-open-session", callback: Manager.HandleOpenSessionSignalCallback): number
    emit(sigName: "handle-open-session", object: Gio.DBusMethodInvocation, ...args: any[]): void
    connect(sigName: "handle-register-display", callback: Manager.HandleRegisterDisplaySignalCallback): number
    connect_after(sigName: "handle-register-display", callback: Manager.HandleRegisterDisplaySignalCallback): number
    emit(sigName: "handle-register-display", object: Gio.DBusMethodInvocation, p0: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-register-session", callback: Manager.HandleRegisterSessionSignalCallback): number
    connect_after(sigName: "handle-register-session", callback: Manager.HandleRegisterSessionSignalCallback): number
    emit(sigName: "handle-register-session", object: Gio.DBusMethodInvocation, p0: GLib.Variant, ...args: any[]): void

    // Class property signals of Gdm-1.0.Gdm.Manager

    connect(sigName: "notify::version", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: Manager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Manager extends GObject.Object {

    // Own properties of Gdm-1.0.Gdm.Manager

    static name: string
    static $gtype: GObject.GType<Manager>

    // Constructors of Gdm-1.0.Gdm.Manager

    constructor(config?: Manager.ConstructorProperties) 
    _init(config?: Manager.ConstructorProperties): void
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module RemoteGreeter {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-disconnect`
     */
    interface HandleDisconnectSignalCallback {
        ($obj: RemoteGreeter, object: Gio.DBusMethodInvocation): boolean
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface RemoteGreeter {

    // Owm methods of Gdm-1.0.Gdm.RemoteGreeter

    call_disconnect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    call_disconnect_finish(res: Gio.AsyncResult): boolean
    call_disconnect_sync(cancellable: Gio.Cancellable | null): boolean
    complete_disconnect(invocation: Gio.DBusMethodInvocation): void

    // Own virtual methods of Gdm-1.0.Gdm.RemoteGreeter

    vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation): boolean

    // Own signals of Gdm-1.0.Gdm.RemoteGreeter

    connect(sigName: "handle-disconnect", callback: RemoteGreeter.HandleDisconnectSignalCallback): number
    connect_after(sigName: "handle-disconnect", callback: RemoteGreeter.HandleDisconnectSignalCallback): number
    emit(sigName: "handle-disconnect", object: Gio.DBusMethodInvocation, ...args: any[]): void

    // Class property signals of Gdm-1.0.Gdm.RemoteGreeter

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RemoteGreeter extends GObject.Object {

    // Own properties of Gdm-1.0.Gdm.RemoteGreeter

    static name: string
    static $gtype: GObject.GType<RemoteGreeter>

    // Constructors of Gdm-1.0.Gdm.RemoteGreeter

    constructor(config?: RemoteGreeter.ConstructorProperties) 
    _init(config?: RemoteGreeter.ConstructorProperties): void
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module UserVerifier {

    // Signal callback interfaces

    /**
     * Signal callback interface for `conversation-started`
     */
    interface ConversationStartedSignalCallback {
        ($obj: UserVerifier, object: string | null): void
    }

    /**
     * Signal callback interface for `conversation-stopped`
     */
    interface ConversationStoppedSignalCallback {
        ($obj: UserVerifier, object: string | null): void
    }

    /**
     * Signal callback interface for `handle-answer-query`
     */
    interface HandleAnswerQuerySignalCallback {
        ($obj: UserVerifier, object: Gio.DBusMethodInvocation, p0: string | null, p1: string | null): boolean
    }

    /**
     * Signal callback interface for `handle-begin-verification`
     */
    interface HandleBeginVerificationSignalCallback {
        ($obj: UserVerifier, object: Gio.DBusMethodInvocation, p0: string | null): boolean
    }

    /**
     * Signal callback interface for `handle-begin-verification-for-user`
     */
    interface HandleBeginVerificationForUserSignalCallback {
        ($obj: UserVerifier, object: Gio.DBusMethodInvocation, p0: string | null, p1: string | null): boolean
    }

    /**
     * Signal callback interface for `handle-cancel`
     */
    interface HandleCancelSignalCallback {
        ($obj: UserVerifier, object: Gio.DBusMethodInvocation): boolean
    }

    /**
     * Signal callback interface for `handle-enable-extensions`
     */
    interface HandleEnableExtensionsSignalCallback {
        ($obj: UserVerifier, object: Gio.DBusMethodInvocation, p0: string[]): boolean
    }

    /**
     * Signal callback interface for `info`
     */
    interface InfoSignalCallback {
        ($obj: UserVerifier, object: string | null, p0: string | null): void
    }

    /**
     * Signal callback interface for `info-query`
     */
    interface InfoQuerySignalCallback {
        ($obj: UserVerifier, object: string | null, p0: string | null): void
    }

    /**
     * Signal callback interface for `problem`
     */
    interface ProblemSignalCallback {
        ($obj: UserVerifier, object: string | null, p0: string | null): void
    }

    /**
     * Signal callback interface for `reauthentication-started`
     */
    interface ReauthenticationStartedSignalCallback {
        ($obj: UserVerifier, object: number): void
    }

    /**
     * Signal callback interface for `reset`
     */
    interface ResetSignalCallback {
        ($obj: UserVerifier): void
    }

    /**
     * Signal callback interface for `secret-info-query`
     */
    interface SecretInfoQuerySignalCallback {
        ($obj: UserVerifier, object: string | null, p0: string | null): void
    }

    /**
     * Signal callback interface for `service-unavailable`
     */
    interface ServiceUnavailableSignalCallback {
        ($obj: UserVerifier, object: string | null, p0: string | null): void
    }

    /**
     * Signal callback interface for `verification-complete`
     */
    interface VerificationCompleteSignalCallback {
        ($obj: UserVerifier, object: string | null): void
    }

    /**
     * Signal callback interface for `verification-failed`
     */
    interface VerificationFailedSignalCallback {
        ($obj: UserVerifier, object: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface UserVerifier {

    // Owm methods of Gdm-1.0.Gdm.UserVerifier

    call_answer_query(arg_service_name: string, arg_answer: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    call_answer_query_finish(res: Gio.AsyncResult): boolean
    call_answer_query_sync(arg_service_name: string, arg_answer: string, cancellable: Gio.Cancellable | null): boolean
    call_begin_verification(arg_service_name: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    call_begin_verification_finish(res: Gio.AsyncResult): boolean
    call_begin_verification_for_user(arg_service_name: string, arg_username: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    call_begin_verification_for_user_finish(res: Gio.AsyncResult): boolean
    call_begin_verification_for_user_sync(arg_service_name: string, arg_username: string, cancellable: Gio.Cancellable | null): boolean
    call_begin_verification_sync(arg_service_name: string, cancellable: Gio.Cancellable | null): boolean
    call_cancel(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    call_cancel_finish(res: Gio.AsyncResult): boolean
    call_cancel_sync(cancellable: Gio.Cancellable | null): boolean
    call_enable_extensions(arg_extensions: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    call_enable_extensions_finish(res: Gio.AsyncResult): boolean
    call_enable_extensions_sync(arg_extensions: string, cancellable: Gio.Cancellable | null): boolean
    complete_answer_query(invocation: Gio.DBusMethodInvocation): void
    complete_begin_verification(invocation: Gio.DBusMethodInvocation): void
    complete_begin_verification_for_user(invocation: Gio.DBusMethodInvocation): void
    complete_cancel(invocation: Gio.DBusMethodInvocation): void
    complete_enable_extensions(invocation: Gio.DBusMethodInvocation): void
    emit_conversation_started(arg_service_name: string): void
    emit_conversation_stopped(arg_service_name: string): void
    emit_info(arg_service_name: string, arg_info: string): void
    emit_info_query(arg_service_name: string, arg_query: string): void
    emit_problem(arg_service_name: string, arg_problem: string): void
    emit_reauthentication_started(arg_pid_of_caller: number): void
    emit_reset(): void
    emit_secret_info_query(arg_service_name: string, arg_query: string): void
    emit_service_unavailable(arg_service_name: string, arg_message: string): void
    emit_verification_complete(arg_service_name: string): void
    emit_verification_failed(arg_service_name: string): void

    // Own virtual methods of Gdm-1.0.Gdm.UserVerifier

    vfunc_conversation_started(arg_service_name: string): void
    vfunc_conversation_stopped(arg_service_name: string): void
    vfunc_handle_answer_query(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_answer: string): boolean
    vfunc_handle_begin_verification(invocation: Gio.DBusMethodInvocation, arg_service_name: string): boolean
    vfunc_handle_begin_verification_for_user(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_username: string): boolean
    vfunc_handle_cancel(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_enable_extensions(invocation: Gio.DBusMethodInvocation, arg_extensions: string): boolean
    vfunc_info(arg_service_name: string, arg_info: string): void
    vfunc_info_query(arg_service_name: string, arg_query: string): void
    vfunc_problem(arg_service_name: string, arg_problem: string): void
    vfunc_reauthentication_started(arg_pid_of_caller: number): void
    vfunc_reset(): void
    vfunc_secret_info_query(arg_service_name: string, arg_query: string): void
    vfunc_service_unavailable(arg_service_name: string, arg_message: string): void
    vfunc_verification_complete(arg_service_name: string): void
    vfunc_verification_failed(arg_service_name: string): void

    // Own signals of Gdm-1.0.Gdm.UserVerifier

    connect(sigName: "conversation-started", callback: UserVerifier.ConversationStartedSignalCallback): number
    connect_after(sigName: "conversation-started", callback: UserVerifier.ConversationStartedSignalCallback): number
    emit(sigName: "conversation-started", object: string | null, ...args: any[]): void
    connect(sigName: "conversation-stopped", callback: UserVerifier.ConversationStoppedSignalCallback): number
    connect_after(sigName: "conversation-stopped", callback: UserVerifier.ConversationStoppedSignalCallback): number
    emit(sigName: "conversation-stopped", object: string | null, ...args: any[]): void
    connect(sigName: "handle-answer-query", callback: UserVerifier.HandleAnswerQuerySignalCallback): number
    connect_after(sigName: "handle-answer-query", callback: UserVerifier.HandleAnswerQuerySignalCallback): number
    emit(sigName: "handle-answer-query", object: Gio.DBusMethodInvocation, p0: string | null, p1: string | null, ...args: any[]): void
    connect(sigName: "handle-begin-verification", callback: UserVerifier.HandleBeginVerificationSignalCallback): number
    connect_after(sigName: "handle-begin-verification", callback: UserVerifier.HandleBeginVerificationSignalCallback): number
    emit(sigName: "handle-begin-verification", object: Gio.DBusMethodInvocation, p0: string | null, ...args: any[]): void
    connect(sigName: "handle-begin-verification-for-user", callback: UserVerifier.HandleBeginVerificationForUserSignalCallback): number
    connect_after(sigName: "handle-begin-verification-for-user", callback: UserVerifier.HandleBeginVerificationForUserSignalCallback): number
    emit(sigName: "handle-begin-verification-for-user", object: Gio.DBusMethodInvocation, p0: string | null, p1: string | null, ...args: any[]): void
    connect(sigName: "handle-cancel", callback: UserVerifier.HandleCancelSignalCallback): number
    connect_after(sigName: "handle-cancel", callback: UserVerifier.HandleCancelSignalCallback): number
    emit(sigName: "handle-cancel", object: Gio.DBusMethodInvocation, ...args: any[]): void
    connect(sigName: "handle-enable-extensions", callback: UserVerifier.HandleEnableExtensionsSignalCallback): number
    connect_after(sigName: "handle-enable-extensions", callback: UserVerifier.HandleEnableExtensionsSignalCallback): number
    emit(sigName: "handle-enable-extensions", object: Gio.DBusMethodInvocation, p0: string[], ...args: any[]): void
    connect(sigName: "info", callback: UserVerifier.InfoSignalCallback): number
    connect_after(sigName: "info", callback: UserVerifier.InfoSignalCallback): number
    emit(sigName: "info", object: string | null, p0: string | null, ...args: any[]): void
    connect(sigName: "info-query", callback: UserVerifier.InfoQuerySignalCallback): number
    connect_after(sigName: "info-query", callback: UserVerifier.InfoQuerySignalCallback): number
    emit(sigName: "info-query", object: string | null, p0: string | null, ...args: any[]): void
    connect(sigName: "problem", callback: UserVerifier.ProblemSignalCallback): number
    connect_after(sigName: "problem", callback: UserVerifier.ProblemSignalCallback): number
    emit(sigName: "problem", object: string | null, p0: string | null, ...args: any[]): void
    connect(sigName: "reauthentication-started", callback: UserVerifier.ReauthenticationStartedSignalCallback): number
    connect_after(sigName: "reauthentication-started", callback: UserVerifier.ReauthenticationStartedSignalCallback): number
    emit(sigName: "reauthentication-started", object: number, ...args: any[]): void
    connect(sigName: "reset", callback: UserVerifier.ResetSignalCallback): number
    connect_after(sigName: "reset", callback: UserVerifier.ResetSignalCallback): number
    emit(sigName: "reset", ...args: any[]): void
    connect(sigName: "secret-info-query", callback: UserVerifier.SecretInfoQuerySignalCallback): number
    connect_after(sigName: "secret-info-query", callback: UserVerifier.SecretInfoQuerySignalCallback): number
    emit(sigName: "secret-info-query", object: string | null, p0: string | null, ...args: any[]): void
    connect(sigName: "service-unavailable", callback: UserVerifier.ServiceUnavailableSignalCallback): number
    connect_after(sigName: "service-unavailable", callback: UserVerifier.ServiceUnavailableSignalCallback): number
    emit(sigName: "service-unavailable", object: string | null, p0: string | null, ...args: any[]): void
    connect(sigName: "verification-complete", callback: UserVerifier.VerificationCompleteSignalCallback): number
    connect_after(sigName: "verification-complete", callback: UserVerifier.VerificationCompleteSignalCallback): number
    emit(sigName: "verification-complete", object: string | null, ...args: any[]): void
    connect(sigName: "verification-failed", callback: UserVerifier.VerificationFailedSignalCallback): number
    connect_after(sigName: "verification-failed", callback: UserVerifier.VerificationFailedSignalCallback): number
    emit(sigName: "verification-failed", object: string | null, ...args: any[]): void

    // Class property signals of Gdm-1.0.Gdm.UserVerifier

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class UserVerifier extends GObject.Object {

    // Own properties of Gdm-1.0.Gdm.UserVerifier

    static name: string
    static $gtype: GObject.GType<UserVerifier>

    // Constructors of Gdm-1.0.Gdm.UserVerifier

    constructor(config?: UserVerifier.ConstructorProperties) 
    _init(config?: UserVerifier.ConstructorProperties): void
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module UserVerifierChoiceList {

    // Signal callback interfaces

    /**
     * Signal callback interface for `choice-query`
     */
    interface ChoiceQuerySignalCallback {
        ($obj: UserVerifierChoiceList, object: string | null, p0: string | null, p1: GLib.Variant): void
    }

    /**
     * Signal callback interface for `handle-select-choice`
     */
    interface HandleSelectChoiceSignalCallback {
        ($obj: UserVerifierChoiceList, object: Gio.DBusMethodInvocation, p0: string | null, p1: string | null): boolean
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface UserVerifierChoiceList {

    // Owm methods of Gdm-1.0.Gdm.UserVerifierChoiceList

    call_select_choice(arg_service_name: string, arg_choice: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    call_select_choice_finish(res: Gio.AsyncResult): boolean
    call_select_choice_sync(arg_service_name: string, arg_choice: string, cancellable: Gio.Cancellable | null): boolean
    complete_select_choice(invocation: Gio.DBusMethodInvocation): void
    emit_choice_query(arg_service_name: string, arg_prompt_message: string, arg_list: GLib.Variant): void

    // Own virtual methods of Gdm-1.0.Gdm.UserVerifierChoiceList

    vfunc_choice_query(arg_service_name: string, arg_prompt_message: string, arg_list: GLib.Variant): void
    vfunc_handle_select_choice(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_choice: string): boolean

    // Own signals of Gdm-1.0.Gdm.UserVerifierChoiceList

    connect(sigName: "choice-query", callback: UserVerifierChoiceList.ChoiceQuerySignalCallback): number
    connect_after(sigName: "choice-query", callback: UserVerifierChoiceList.ChoiceQuerySignalCallback): number
    emit(sigName: "choice-query", object: string | null, p0: string | null, p1: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-select-choice", callback: UserVerifierChoiceList.HandleSelectChoiceSignalCallback): number
    connect_after(sigName: "handle-select-choice", callback: UserVerifierChoiceList.HandleSelectChoiceSignalCallback): number
    emit(sigName: "handle-select-choice", object: Gio.DBusMethodInvocation, p0: string | null, p1: string | null, ...args: any[]): void

    // Class property signals of Gdm-1.0.Gdm.UserVerifierChoiceList

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class UserVerifierChoiceList extends GObject.Object {

    // Own properties of Gdm-1.0.Gdm.UserVerifierChoiceList

    static name: string
    static $gtype: GObject.GType<UserVerifierChoiceList>

    // Constructors of Gdm-1.0.Gdm.UserVerifierChoiceList

    constructor(config?: UserVerifierChoiceList.ConstructorProperties) 
    _init(config?: UserVerifierChoiceList.ConstructorProperties): void
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module WorkerManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-choice-list-query`
     */
    interface HandleChoiceListQuerySignalCallback {
        ($obj: WorkerManager, object: Gio.DBusMethodInvocation, p0: string | null, p1: string | null, p2: GLib.Variant): boolean
    }

    /**
     * Signal callback interface for `handle-hello`
     */
    interface HandleHelloSignalCallback {
        ($obj: WorkerManager, object: Gio.DBusMethodInvocation): boolean
    }

    /**
     * Signal callback interface for `handle-info`
     */
    interface HandleInfoSignalCallback {
        ($obj: WorkerManager, object: Gio.DBusMethodInvocation, p0: string | null, p1: string | null): boolean
    }

    /**
     * Signal callback interface for `handle-info-query`
     */
    interface HandleInfoQuerySignalCallback {
        ($obj: WorkerManager, object: Gio.DBusMethodInvocation, p0: string | null, p1: string | null): boolean
    }

    /**
     * Signal callback interface for `handle-problem`
     */
    interface HandleProblemSignalCallback {
        ($obj: WorkerManager, object: Gio.DBusMethodInvocation, p0: string | null, p1: string | null): boolean
    }

    /**
     * Signal callback interface for `handle-secret-info-query`
     */
    interface HandleSecretInfoQuerySignalCallback {
        ($obj: WorkerManager, object: Gio.DBusMethodInvocation, p0: string | null, p1: string | null): boolean
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface WorkerManager {

    // Owm methods of Gdm-1.0.Gdm.WorkerManager

    call_choice_list_query(arg_service_name: string, arg_prompt_message: string, arg_query: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    call_choice_list_query_finish(out_answer: string | null, res: Gio.AsyncResult): boolean
    call_choice_list_query_sync(arg_service_name: string, arg_prompt_message: string, arg_query: GLib.Variant, out_answer: string | null, cancellable: Gio.Cancellable | null): boolean
    call_hello(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    call_hello_finish(res: Gio.AsyncResult): boolean
    call_hello_sync(cancellable: Gio.Cancellable | null): boolean
    call_info(arg_service_name: string, arg_info: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    call_info_finish(res: Gio.AsyncResult): boolean
    call_info_query(arg_service_name: string, arg_query: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    call_info_query_finish(out_answer: string | null, res: Gio.AsyncResult): boolean
    call_info_query_sync(arg_service_name: string, arg_query: string, out_answer: string | null, cancellable: Gio.Cancellable | null): boolean
    call_info_sync(arg_service_name: string, arg_info: string, cancellable: Gio.Cancellable | null): boolean
    call_problem(arg_service_name: string, arg_problem: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    call_problem_finish(res: Gio.AsyncResult): boolean
    call_problem_sync(arg_service_name: string, arg_problem: string, cancellable: Gio.Cancellable | null): boolean
    call_secret_info_query(arg_service_name: string, arg_query: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    call_secret_info_query_finish(out_answer: string | null, res: Gio.AsyncResult): boolean
    call_secret_info_query_sync(arg_service_name: string, arg_query: string, out_answer: string | null, cancellable: Gio.Cancellable | null): boolean
    complete_choice_list_query(invocation: Gio.DBusMethodInvocation, answer: string): void
    complete_hello(invocation: Gio.DBusMethodInvocation): void
    complete_info(invocation: Gio.DBusMethodInvocation): void
    complete_info_query(invocation: Gio.DBusMethodInvocation, answer: string): void
    complete_problem(invocation: Gio.DBusMethodInvocation): void
    complete_secret_info_query(invocation: Gio.DBusMethodInvocation, answer: string): void

    // Own virtual methods of Gdm-1.0.Gdm.WorkerManager

    vfunc_handle_choice_list_query(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_prompt_message: string, arg_query: GLib.Variant): boolean
    vfunc_handle_hello(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_info(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_info: string): boolean
    vfunc_handle_info_query(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_query: string): boolean
    vfunc_handle_problem(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_problem: string): boolean
    vfunc_handle_secret_info_query(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_query: string): boolean

    // Own signals of Gdm-1.0.Gdm.WorkerManager

    connect(sigName: "handle-choice-list-query", callback: WorkerManager.HandleChoiceListQuerySignalCallback): number
    connect_after(sigName: "handle-choice-list-query", callback: WorkerManager.HandleChoiceListQuerySignalCallback): number
    emit(sigName: "handle-choice-list-query", object: Gio.DBusMethodInvocation, p0: string | null, p1: string | null, p2: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-hello", callback: WorkerManager.HandleHelloSignalCallback): number
    connect_after(sigName: "handle-hello", callback: WorkerManager.HandleHelloSignalCallback): number
    emit(sigName: "handle-hello", object: Gio.DBusMethodInvocation, ...args: any[]): void
    connect(sigName: "handle-info", callback: WorkerManager.HandleInfoSignalCallback): number
    connect_after(sigName: "handle-info", callback: WorkerManager.HandleInfoSignalCallback): number
    emit(sigName: "handle-info", object: Gio.DBusMethodInvocation, p0: string | null, p1: string | null, ...args: any[]): void
    connect(sigName: "handle-info-query", callback: WorkerManager.HandleInfoQuerySignalCallback): number
    connect_after(sigName: "handle-info-query", callback: WorkerManager.HandleInfoQuerySignalCallback): number
    emit(sigName: "handle-info-query", object: Gio.DBusMethodInvocation, p0: string | null, p1: string | null, ...args: any[]): void
    connect(sigName: "handle-problem", callback: WorkerManager.HandleProblemSignalCallback): number
    connect_after(sigName: "handle-problem", callback: WorkerManager.HandleProblemSignalCallback): number
    emit(sigName: "handle-problem", object: Gio.DBusMethodInvocation, p0: string | null, p1: string | null, ...args: any[]): void
    connect(sigName: "handle-secret-info-query", callback: WorkerManager.HandleSecretInfoQuerySignalCallback): number
    connect_after(sigName: "handle-secret-info-query", callback: WorkerManager.HandleSecretInfoQuerySignalCallback): number
    emit(sigName: "handle-secret-info-query", object: Gio.DBusMethodInvocation, p0: string | null, p1: string | null, ...args: any[]): void

    // Class property signals of Gdm-1.0.Gdm.WorkerManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WorkerManager extends GObject.Object {

    // Own properties of Gdm-1.0.Gdm.WorkerManager

    static name: string
    static $gtype: GObject.GType<WorkerManager>

    // Constructors of Gdm-1.0.Gdm.WorkerManager

    constructor(config?: WorkerManager.ConstructorProperties) 
    _init(config?: WorkerManager.ConstructorProperties): void
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

module ChooserProxy {

    // Constructor properties interface

    interface ConstructorProperties extends Chooser.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface ChooserProxy extends Chooser, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Class property signals of Gdm-1.0.Gdm.ChooserProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: ChooserProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: ChooserProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: ChooserProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: ChooserProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ChooserProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ChooserProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: ChooserProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ChooserProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: ChooserProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ChooserProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: ChooserProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: ChooserProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: ChooserProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: ChooserProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: ChooserProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ChooserProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: ChooserProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: ChooserProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ChooserProxy extends Gio.DBusProxy {

    // Own properties of Gdm-1.0.Gdm.ChooserProxy

    static name: string
    static $gtype: GObject.GType<ChooserProxy>

    // Constructors of Gdm-1.0.Gdm.ChooserProxy

    constructor(config?: ChooserProxy.ConstructorProperties) 
    _init(config?: ChooserProxy.ConstructorProperties): void
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<ChooserProxy> | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<ChooserProxy> | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module ChooserSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Chooser.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface ChooserSkeleton extends Chooser, Gio.DBusInterface {

    // Class property signals of Gdm-1.0.Gdm.ChooserSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: ChooserSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ChooserSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ChooserSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Gdm-1.0.Gdm.ChooserSkeleton

    static name: string
    static $gtype: GObject.GType<ChooserSkeleton>

    // Constructors of Gdm-1.0.Gdm.ChooserSkeleton

    constructor(config?: ChooserSkeleton.ConstructorProperties) 
    _init(config?: ChooserSkeleton.ConstructorProperties): void
}

module Client {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Client {

    // Owm methods of Gdm-1.0.Gdm.Client

    /**
     * Gets a #GdmChooser object that can be used to
     * verify a user's local account.
     * @param cancellable a #GCancellable
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_chooser(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with
     * gdm_client_get_chooser().
     * @param result The #GAsyncResult from the callback
     * @returns a #GdmChooser
     */
    get_chooser_finish(result: Gio.AsyncResult): Chooser
    /**
     * Gets a #GdmChooser object that can be used
     * to do do various XDMCP chooser related tasks, such
     * as selecting a host or disconnecting.
     * @param cancellable a #GCancellable
     * @returns #GdmChooser or %NULL if caller is not a chooser
     */
    get_chooser_sync(cancellable: Gio.Cancellable | null): Chooser
    /**
     * Gets a #GdmGreeter object that can be used to
     * verify a user's local account.
     * @param cancellable a #GCancellable
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_greeter(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with
     * gdm_client_get_greeter().
     * @param result The #GAsyncResult from the callback
     * @returns a #GdmGreeter
     */
    get_greeter_finish(result: Gio.AsyncResult): Greeter
    /**
     * Gets a #GdmGreeter object that can be used
     * to do do various login screen related tasks, such
     * as selecting a users session, and starting that
     * session.
     * @param cancellable a #GCancellable
     * @returns #GdmGreeter or %NULL if caller is not a greeter
     */
    get_greeter_sync(cancellable: Gio.Cancellable | null): Greeter
    /**
     * Gets a #GdmRemoteGreeter object that can be used to
     * verify a user's local account.
     * @param cancellable a #GCancellable
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_remote_greeter(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with
     * gdm_client_get_remote_greeter().
     * @param result The #GAsyncResult from the callback
     * @returns a #GdmRemoteGreeter
     */
    get_remote_greeter_finish(result: Gio.AsyncResult): RemoteGreeter
    /**
     * Gets a #GdmRemoteGreeter object that can be used
     * to do do various remote login screen related tasks,
     * such as disconnecting.
     * @param cancellable a #GCancellable
     * @returns #GdmRemoteGreeter or %NULL if caller is not remote
     */
    get_remote_greeter_sync(cancellable: Gio.Cancellable | null): RemoteGreeter
    /**
     * Gets a #GdmUserVerifier object that can be used to
     * verify a user's local account.
     * @param cancellable a #GCancellable
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_user_verifier(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Gets a #GdmUserVerifierChoiceList object that can be used to
     * verify a user's local account.
     * @returns #GdmUserVerifierChoiceList or %NULL if user verifier isn't yet fetched, or daemon doesn't support choice lists
     */
    get_user_verifier_choice_list(): UserVerifierChoiceList
    /**
     * Finishes an operation started with
     * gdm_client_get_user_verifier().
     * @param result The #GAsyncResult from the callback
     * @returns a #GdmUserVerifier
     */
    get_user_verifier_finish(result: Gio.AsyncResult): UserVerifier
    /**
     * Gets a #GdmUserVerifier object that can be used to
     * verify a user's local account.
     * @param cancellable a #GCancellable
     * @returns #GdmUserVerifier or %NULL if not connected
     */
    get_user_verifier_sync(cancellable: Gio.Cancellable | null): UserVerifier
    /**
     * Gets a #GdmUserVerifier object that can be used to
     * reauthenticate an already logged in user.
     * @param username user to reauthenticate
     * @param cancellable a #GCancellable
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    open_reauthentication_channel(username: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes an operation started with
     * gdm_client_open_reauthentication_channel().
     * @param result The #GAsyncResult from the callback
     * @returns a #GdmUserVerifier
     */
    open_reauthentication_channel_finish(result: Gio.AsyncResult): UserVerifier
    /**
     * Gets a #GdmUserVerifier object that can be used to
     * reauthenticate an already logged in user. Free with
     * g_object_unref to close reauthentication channel.
     * @param username user to reauthenticate
     * @param cancellable a #GCancellable
     * @returns #GdmUserVerifier or %NULL if @username is not already logged in.
     */
    open_reauthentication_channel_sync(username: string, cancellable: Gio.Cancellable | null): UserVerifier
    /**
     * Enables GDM's pam extensions.  Currently, only
     * org.gnome.DisplayManager.UserVerifier.ChoiceList is supported.
     * @param extensions a list of extensions
     */
    set_enabled_extensions(extensions: string[]): void

    // Class property signals of Gdm-1.0.Gdm.Client

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Client extends GObject.Object {

    // Own properties of Gdm-1.0.Gdm.Client

    static name: string
    static $gtype: GObject.GType<Client>

    // Constructors of Gdm-1.0.Gdm.Client

    constructor(config?: Client.ConstructorProperties) 
    constructor() 
    static new(): Client
    _init(config?: Client.ConstructorProperties): void
    static error_quark(): GLib.Quark
}

module GreeterProxy {

    // Constructor properties interface

    interface ConstructorProperties extends Greeter.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface GreeterProxy extends Greeter, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Class property signals of Gdm-1.0.Gdm.GreeterProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: GreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: GreeterProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: GreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: GreeterProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: GreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: GreeterProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: GreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: GreeterProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: GreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: GreeterProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: GreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: GreeterProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: GreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: GreeterProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: GreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: GreeterProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: GreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: GreeterProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GreeterProxy extends Gio.DBusProxy {

    // Own properties of Gdm-1.0.Gdm.GreeterProxy

    static name: string
    static $gtype: GObject.GType<GreeterProxy>

    // Constructors of Gdm-1.0.Gdm.GreeterProxy

    constructor(config?: GreeterProxy.ConstructorProperties) 
    _init(config?: GreeterProxy.ConstructorProperties): void
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GreeterProxy> | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<GreeterProxy> | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module GreeterSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Greeter.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface GreeterSkeleton extends Greeter, Gio.DBusInterface {

    // Class property signals of Gdm-1.0.Gdm.GreeterSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: GreeterSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: GreeterSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class GreeterSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Gdm-1.0.Gdm.GreeterSkeleton

    static name: string
    static $gtype: GObject.GType<GreeterSkeleton>

    // Constructors of Gdm-1.0.Gdm.GreeterSkeleton

    constructor(config?: GreeterSkeleton.ConstructorProperties) 
    _init(config?: GreeterSkeleton.ConstructorProperties): void
}

module ManagerProxy {

    // Constructor properties interface

    interface ConstructorProperties extends Manager.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface ManagerProxy extends Manager, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Class property signals of Gdm-1.0.Gdm.ManagerProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::version", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: ManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ManagerProxy extends Gio.DBusProxy {

    // Own properties of Gdm-1.0.Gdm.ManagerProxy

    static name: string
    static $gtype: GObject.GType<ManagerProxy>

    // Constructors of Gdm-1.0.Gdm.ManagerProxy

    constructor(config?: ManagerProxy.ConstructorProperties) 
    _init(config?: ManagerProxy.ConstructorProperties): void
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<ManagerProxy> | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<ManagerProxy> | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module ManagerSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Manager.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface ManagerSkeleton extends Manager, Gio.DBusInterface {

    // Class property signals of Gdm-1.0.Gdm.ManagerSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::version", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: ManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ManagerSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Gdm-1.0.Gdm.ManagerSkeleton

    static name: string
    static $gtype: GObject.GType<ManagerSkeleton>

    // Constructors of Gdm-1.0.Gdm.ManagerSkeleton

    constructor(config?: ManagerSkeleton.ConstructorProperties) 
    _init(config?: ManagerSkeleton.ConstructorProperties): void
}

module RemoteGreeterProxy {

    // Constructor properties interface

    interface ConstructorProperties extends RemoteGreeter.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface RemoteGreeterProxy extends RemoteGreeter, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Class property signals of Gdm-1.0.Gdm.RemoteGreeterProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: RemoteGreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: RemoteGreeterProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: RemoteGreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: RemoteGreeterProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: RemoteGreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: RemoteGreeterProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: RemoteGreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: RemoteGreeterProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: RemoteGreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: RemoteGreeterProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: RemoteGreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: RemoteGreeterProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: RemoteGreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: RemoteGreeterProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: RemoteGreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: RemoteGreeterProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: RemoteGreeterProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: RemoteGreeterProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RemoteGreeterProxy extends Gio.DBusProxy {

    // Own properties of Gdm-1.0.Gdm.RemoteGreeterProxy

    static name: string
    static $gtype: GObject.GType<RemoteGreeterProxy>

    // Constructors of Gdm-1.0.Gdm.RemoteGreeterProxy

    constructor(config?: RemoteGreeterProxy.ConstructorProperties) 
    _init(config?: RemoteGreeterProxy.ConstructorProperties): void
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<RemoteGreeterProxy> | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<RemoteGreeterProxy> | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module RemoteGreeterSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends RemoteGreeter.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface RemoteGreeterSkeleton extends RemoteGreeter, Gio.DBusInterface {

    // Class property signals of Gdm-1.0.Gdm.RemoteGreeterSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: RemoteGreeterSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: RemoteGreeterSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class RemoteGreeterSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Gdm-1.0.Gdm.RemoteGreeterSkeleton

    static name: string
    static $gtype: GObject.GType<RemoteGreeterSkeleton>

    // Constructors of Gdm-1.0.Gdm.RemoteGreeterSkeleton

    constructor(config?: RemoteGreeterSkeleton.ConstructorProperties) 
    _init(config?: RemoteGreeterSkeleton.ConstructorProperties): void
}

module UserVerifierChoiceListProxy {

    // Constructor properties interface

    interface ConstructorProperties extends UserVerifierChoiceList.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface UserVerifierChoiceListProxy extends UserVerifierChoiceList, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Class property signals of Gdm-1.0.Gdm.UserVerifierChoiceListProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: UserVerifierChoiceListProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: UserVerifierChoiceListProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: UserVerifierChoiceListProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: UserVerifierChoiceListProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: UserVerifierChoiceListProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: UserVerifierChoiceListProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: UserVerifierChoiceListProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: UserVerifierChoiceListProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: UserVerifierChoiceListProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: UserVerifierChoiceListProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: UserVerifierChoiceListProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: UserVerifierChoiceListProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: UserVerifierChoiceListProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: UserVerifierChoiceListProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: UserVerifierChoiceListProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: UserVerifierChoiceListProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: UserVerifierChoiceListProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: UserVerifierChoiceListProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class UserVerifierChoiceListProxy extends Gio.DBusProxy {

    // Own properties of Gdm-1.0.Gdm.UserVerifierChoiceListProxy

    static name: string
    static $gtype: GObject.GType<UserVerifierChoiceListProxy>

    // Constructors of Gdm-1.0.Gdm.UserVerifierChoiceListProxy

    constructor(config?: UserVerifierChoiceListProxy.ConstructorProperties) 
    _init(config?: UserVerifierChoiceListProxy.ConstructorProperties): void
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<UserVerifierChoiceListProxy> | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<UserVerifierChoiceListProxy> | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module UserVerifierChoiceListSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends UserVerifierChoiceList.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface UserVerifierChoiceListSkeleton extends UserVerifierChoiceList, Gio.DBusInterface {

    // Class property signals of Gdm-1.0.Gdm.UserVerifierChoiceListSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: UserVerifierChoiceListSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: UserVerifierChoiceListSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class UserVerifierChoiceListSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Gdm-1.0.Gdm.UserVerifierChoiceListSkeleton

    static name: string
    static $gtype: GObject.GType<UserVerifierChoiceListSkeleton>

    // Constructors of Gdm-1.0.Gdm.UserVerifierChoiceListSkeleton

    constructor(config?: UserVerifierChoiceListSkeleton.ConstructorProperties) 
    _init(config?: UserVerifierChoiceListSkeleton.ConstructorProperties): void
}

module UserVerifierProxy {

    // Constructor properties interface

    interface ConstructorProperties extends UserVerifier.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface UserVerifierProxy extends UserVerifier, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Class property signals of Gdm-1.0.Gdm.UserVerifierProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: UserVerifierProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: UserVerifierProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: UserVerifierProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: UserVerifierProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: UserVerifierProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: UserVerifierProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: UserVerifierProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: UserVerifierProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: UserVerifierProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: UserVerifierProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: UserVerifierProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: UserVerifierProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: UserVerifierProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: UserVerifierProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: UserVerifierProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: UserVerifierProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: UserVerifierProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: UserVerifierProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class UserVerifierProxy extends Gio.DBusProxy {

    // Own properties of Gdm-1.0.Gdm.UserVerifierProxy

    static name: string
    static $gtype: GObject.GType<UserVerifierProxy>

    // Constructors of Gdm-1.0.Gdm.UserVerifierProxy

    constructor(config?: UserVerifierProxy.ConstructorProperties) 
    _init(config?: UserVerifierProxy.ConstructorProperties): void
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<UserVerifierProxy> | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<UserVerifierProxy> | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module UserVerifierSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends UserVerifier.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface UserVerifierSkeleton extends UserVerifier, Gio.DBusInterface {

    // Class property signals of Gdm-1.0.Gdm.UserVerifierSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: UserVerifierSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: UserVerifierSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class UserVerifierSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Gdm-1.0.Gdm.UserVerifierSkeleton

    static name: string
    static $gtype: GObject.GType<UserVerifierSkeleton>

    // Constructors of Gdm-1.0.Gdm.UserVerifierSkeleton

    constructor(config?: UserVerifierSkeleton.ConstructorProperties) 
    _init(config?: UserVerifierSkeleton.ConstructorProperties): void
}

module WorkerManagerProxy {

    // Constructor properties interface

    interface ConstructorProperties extends WorkerManager.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface WorkerManagerProxy extends WorkerManager, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Class property signals of Gdm-1.0.Gdm.WorkerManagerProxy

    connect(sigName: "notify::g-bus-type", callback: (($obj: WorkerManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-bus-type", callback: (($obj: WorkerManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (($obj: WorkerManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-connection", callback: (($obj: WorkerManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (($obj: WorkerManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-default-timeout", callback: (($obj: WorkerManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (($obj: WorkerManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: WorkerManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (($obj: WorkerManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-info", callback: (($obj: WorkerManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (($obj: WorkerManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-interface-name", callback: (($obj: WorkerManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (($obj: WorkerManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name", callback: (($obj: WorkerManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (($obj: WorkerManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-name-owner", callback: (($obj: WorkerManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (($obj: WorkerManagerProxy, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-object-path", callback: (($obj: WorkerManagerProxy, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WorkerManagerProxy extends Gio.DBusProxy {

    // Own properties of Gdm-1.0.Gdm.WorkerManagerProxy

    static name: string
    static $gtype: GObject.GType<WorkerManagerProxy>

    // Constructors of Gdm-1.0.Gdm.WorkerManagerProxy

    constructor(config?: WorkerManagerProxy.ConstructorProperties) 
    _init(config?: WorkerManagerProxy.ConstructorProperties): void
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<WorkerManagerProxy> | null): void

    // Overloads of new

    /**
     * Creates a proxy for accessing `interface_name` on the remote object
     * at `object_path` owned by `name` at `connection` and asynchronously
     * loads D-Bus properties unless the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES flag is used. Connect to
     * the #GDBusProxy::g-properties-changed signal to get notified about
     * property changes.
     * 
     * If the %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS flag is not set, also sets up
     * match rules for signals. Connect to the #GDBusProxy::g-signal signal
     * to handle signals from the remote object.
     * 
     * If both %G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES and
     * %G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS are set, this constructor is
     * guaranteed to complete immediately without blocking.
     * 
     * If `name` is a well-known name and the
     * %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START and %G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION
     * flags aren't set and no name owner currently exists, the message bus
     * will be requested to launch a name owner for the name.
     * 
     * This is a failable asynchronous constructor - when the proxy is
     * ready, `callback` will be invoked and you can use
     * g_dbus_proxy_new_finish() to get the result.
     * 
     * See g_dbus_proxy_new_sync() and for a synchronous version of this constructor.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param connection A #GDBusConnection.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, object_path: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<WorkerManagerProxy> | null): void

    // Overloads of new_for_bus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param bus_type A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param object_path An object path.
     * @param interface_name A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new_for_bus(bus_type: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.DBusProxy> | null): void
}

module WorkerManagerSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends WorkerManager.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface WorkerManagerSkeleton extends WorkerManager, Gio.DBusInterface {

    // Class property signals of Gdm-1.0.Gdm.WorkerManagerSkeleton

    connect(sigName: "notify::g-flags", callback: (($obj: WorkerManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::g-flags", callback: (($obj: WorkerManagerSkeleton, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class WorkerManagerSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Gdm-1.0.Gdm.WorkerManagerSkeleton

    static name: string
    static $gtype: GObject.GType<WorkerManagerSkeleton>

    // Constructors of Gdm-1.0.Gdm.WorkerManagerSkeleton

    constructor(config?: WorkerManagerSkeleton.ConstructorProperties) 
    _init(config?: WorkerManagerSkeleton.ConstructorProperties): void
}

interface ChooserIface {

    // Own fields of Gdm-1.0.Gdm.ChooserIface

    parent_iface: GObject.TypeInterface
    handle_disconnect: (object: Chooser, invocation: Gio.DBusMethodInvocation) => boolean
    handle_select_hostname: (object: Chooser, invocation: Gio.DBusMethodInvocation, arg_hostname: string) => boolean
}

abstract class ChooserIface {

    // Own properties of Gdm-1.0.Gdm.ChooserIface

    static name: string
}

interface ChooserProxyClass {

    // Own fields of Gdm-1.0.Gdm.ChooserProxyClass

    parent_class: Gio.DBusProxyClass
}

abstract class ChooserProxyClass {

    // Own properties of Gdm-1.0.Gdm.ChooserProxyClass

    static name: string
}

interface ChooserProxyPrivate {
}

class ChooserProxyPrivate {

    // Own properties of Gdm-1.0.Gdm.ChooserProxyPrivate

    static name: string
}

interface ChooserSkeletonClass {

    // Own fields of Gdm-1.0.Gdm.ChooserSkeletonClass

    parent_class: Gio.DBusInterfaceSkeletonClass
}

abstract class ChooserSkeletonClass {

    // Own properties of Gdm-1.0.Gdm.ChooserSkeletonClass

    static name: string
}

interface ChooserSkeletonPrivate {
}

class ChooserSkeletonPrivate {

    // Own properties of Gdm-1.0.Gdm.ChooserSkeletonPrivate

    static name: string
}

interface ClientClass {

    // Own fields of Gdm-1.0.Gdm.ClientClass

    parent_class: GObject.ObjectClass
}

abstract class ClientClass {

    // Own properties of Gdm-1.0.Gdm.ClientClass

    static name: string
}

interface GreeterIface {

    // Own fields of Gdm-1.0.Gdm.GreeterIface

    parent_iface: GObject.TypeInterface
    handle_begin_auto_login: (object: Greeter, invocation: Gio.DBusMethodInvocation, arg_username: string) => boolean
    handle_get_timed_login_details: (object: Greeter, invocation: Gio.DBusMethodInvocation) => boolean
    handle_select_session: (object: Greeter, invocation: Gio.DBusMethodInvocation, arg_session: string) => boolean
    handle_select_user: (object: Greeter, invocation: Gio.DBusMethodInvocation, arg_username: string) => boolean
    handle_start_session_when_ready: (object: Greeter, invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_should_start_session: boolean) => boolean
    default_language_name_changed: (object: Greeter, arg_language_name: string) => void
    default_session_name_changed: (object: Greeter, arg_session_name: string) => void
    reauthenticated: (object: Greeter, arg_service_name: string) => void
    selected_user_changed: (object: Greeter, arg_username: string) => void
    session_opened: (object: Greeter, arg_service_name: string) => void
    timed_login_requested: (object: Greeter, arg_username: string, arg_delay: number) => void
}

abstract class GreeterIface {

    // Own properties of Gdm-1.0.Gdm.GreeterIface

    static name: string
}

interface GreeterProxyClass {

    // Own fields of Gdm-1.0.Gdm.GreeterProxyClass

    parent_class: Gio.DBusProxyClass
}

abstract class GreeterProxyClass {

    // Own properties of Gdm-1.0.Gdm.GreeterProxyClass

    static name: string
}

interface GreeterProxyPrivate {
}

class GreeterProxyPrivate {

    // Own properties of Gdm-1.0.Gdm.GreeterProxyPrivate

    static name: string
}

interface GreeterSkeletonClass {

    // Own fields of Gdm-1.0.Gdm.GreeterSkeletonClass

    parent_class: Gio.DBusInterfaceSkeletonClass
}

abstract class GreeterSkeletonClass {

    // Own properties of Gdm-1.0.Gdm.GreeterSkeletonClass

    static name: string
}

interface GreeterSkeletonPrivate {
}

class GreeterSkeletonPrivate {

    // Own properties of Gdm-1.0.Gdm.GreeterSkeletonPrivate

    static name: string
}

interface ManagerIface {

    // Own fields of Gdm-1.0.Gdm.ManagerIface

    parent_iface: GObject.TypeInterface
    handle_open_reauthentication_channel: (object: Manager, invocation: Gio.DBusMethodInvocation, arg_username: string) => boolean
    handle_open_session: (object: Manager, invocation: Gio.DBusMethodInvocation) => boolean
    handle_register_display: (object: Manager, invocation: Gio.DBusMethodInvocation, arg_details: GLib.Variant) => boolean
    handle_register_session: (object: Manager, invocation: Gio.DBusMethodInvocation, arg_details: GLib.Variant) => boolean
    get_version: (object: Manager) => string
}

abstract class ManagerIface {

    // Own properties of Gdm-1.0.Gdm.ManagerIface

    static name: string
}

interface ManagerProxyClass {

    // Own fields of Gdm-1.0.Gdm.ManagerProxyClass

    parent_class: Gio.DBusProxyClass
}

abstract class ManagerProxyClass {

    // Own properties of Gdm-1.0.Gdm.ManagerProxyClass

    static name: string
}

interface ManagerProxyPrivate {
}

class ManagerProxyPrivate {

    // Own properties of Gdm-1.0.Gdm.ManagerProxyPrivate

    static name: string
}

interface ManagerSkeletonClass {

    // Own fields of Gdm-1.0.Gdm.ManagerSkeletonClass

    parent_class: Gio.DBusInterfaceSkeletonClass
}

abstract class ManagerSkeletonClass {

    // Own properties of Gdm-1.0.Gdm.ManagerSkeletonClass

    static name: string
}

interface ManagerSkeletonPrivate {
}

class ManagerSkeletonPrivate {

    // Own properties of Gdm-1.0.Gdm.ManagerSkeletonPrivate

    static name: string
}

interface RemoteGreeterIface {

    // Own fields of Gdm-1.0.Gdm.RemoteGreeterIface

    parent_iface: GObject.TypeInterface
    handle_disconnect: (object: RemoteGreeter, invocation: Gio.DBusMethodInvocation) => boolean
}

abstract class RemoteGreeterIface {

    // Own properties of Gdm-1.0.Gdm.RemoteGreeterIface

    static name: string
}

interface RemoteGreeterProxyClass {

    // Own fields of Gdm-1.0.Gdm.RemoteGreeterProxyClass

    parent_class: Gio.DBusProxyClass
}

abstract class RemoteGreeterProxyClass {

    // Own properties of Gdm-1.0.Gdm.RemoteGreeterProxyClass

    static name: string
}

interface RemoteGreeterProxyPrivate {
}

class RemoteGreeterProxyPrivate {

    // Own properties of Gdm-1.0.Gdm.RemoteGreeterProxyPrivate

    static name: string
}

interface RemoteGreeterSkeletonClass {

    // Own fields of Gdm-1.0.Gdm.RemoteGreeterSkeletonClass

    parent_class: Gio.DBusInterfaceSkeletonClass
}

abstract class RemoteGreeterSkeletonClass {

    // Own properties of Gdm-1.0.Gdm.RemoteGreeterSkeletonClass

    static name: string
}

interface RemoteGreeterSkeletonPrivate {
}

class RemoteGreeterSkeletonPrivate {

    // Own properties of Gdm-1.0.Gdm.RemoteGreeterSkeletonPrivate

    static name: string
}

interface UserVerifierChoiceListIface {

    // Own fields of Gdm-1.0.Gdm.UserVerifierChoiceListIface

    parent_iface: GObject.TypeInterface
    handle_select_choice: (object: UserVerifierChoiceList, invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_choice: string) => boolean
    choice_query: (object: UserVerifierChoiceList, arg_service_name: string, arg_prompt_message: string, arg_list: GLib.Variant) => void
}

abstract class UserVerifierChoiceListIface {

    // Own properties of Gdm-1.0.Gdm.UserVerifierChoiceListIface

    static name: string
}

interface UserVerifierChoiceListProxyClass {

    // Own fields of Gdm-1.0.Gdm.UserVerifierChoiceListProxyClass

    parent_class: Gio.DBusProxyClass
}

abstract class UserVerifierChoiceListProxyClass {

    // Own properties of Gdm-1.0.Gdm.UserVerifierChoiceListProxyClass

    static name: string
}

interface UserVerifierChoiceListProxyPrivate {
}

class UserVerifierChoiceListProxyPrivate {

    // Own properties of Gdm-1.0.Gdm.UserVerifierChoiceListProxyPrivate

    static name: string
}

interface UserVerifierChoiceListSkeletonClass {

    // Own fields of Gdm-1.0.Gdm.UserVerifierChoiceListSkeletonClass

    parent_class: Gio.DBusInterfaceSkeletonClass
}

abstract class UserVerifierChoiceListSkeletonClass {

    // Own properties of Gdm-1.0.Gdm.UserVerifierChoiceListSkeletonClass

    static name: string
}

interface UserVerifierChoiceListSkeletonPrivate {
}

class UserVerifierChoiceListSkeletonPrivate {

    // Own properties of Gdm-1.0.Gdm.UserVerifierChoiceListSkeletonPrivate

    static name: string
}

interface UserVerifierIface {

    // Own fields of Gdm-1.0.Gdm.UserVerifierIface

    parent_iface: GObject.TypeInterface
    handle_answer_query: (object: UserVerifier, invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_answer: string) => boolean
    handle_begin_verification: (object: UserVerifier, invocation: Gio.DBusMethodInvocation, arg_service_name: string) => boolean
    handle_begin_verification_for_user: (object: UserVerifier, invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_username: string) => boolean
    handle_cancel: (object: UserVerifier, invocation: Gio.DBusMethodInvocation) => boolean
    handle_enable_extensions: (object: UserVerifier, invocation: Gio.DBusMethodInvocation, arg_extensions: string) => boolean
    conversation_started: (object: UserVerifier, arg_service_name: string) => void
    conversation_stopped: (object: UserVerifier, arg_service_name: string) => void
    info: (object: UserVerifier, arg_service_name: string, arg_info: string) => void
    info_query: (object: UserVerifier, arg_service_name: string, arg_query: string) => void
    problem: (object: UserVerifier, arg_service_name: string, arg_problem: string) => void
    reauthentication_started: (object: UserVerifier, arg_pid_of_caller: number) => void
    reset: (object: UserVerifier) => void
    secret_info_query: (object: UserVerifier, arg_service_name: string, arg_query: string) => void
    service_unavailable: (object: UserVerifier, arg_service_name: string, arg_message: string) => void
    verification_complete: (object: UserVerifier, arg_service_name: string) => void
    verification_failed: (object: UserVerifier, arg_service_name: string) => void
}

abstract class UserVerifierIface {

    // Own properties of Gdm-1.0.Gdm.UserVerifierIface

    static name: string
}

interface UserVerifierProxyClass {

    // Own fields of Gdm-1.0.Gdm.UserVerifierProxyClass

    parent_class: Gio.DBusProxyClass
}

abstract class UserVerifierProxyClass {

    // Own properties of Gdm-1.0.Gdm.UserVerifierProxyClass

    static name: string
}

interface UserVerifierProxyPrivate {
}

class UserVerifierProxyPrivate {

    // Own properties of Gdm-1.0.Gdm.UserVerifierProxyPrivate

    static name: string
}

interface UserVerifierSkeletonClass {

    // Own fields of Gdm-1.0.Gdm.UserVerifierSkeletonClass

    parent_class: Gio.DBusInterfaceSkeletonClass
}

abstract class UserVerifierSkeletonClass {

    // Own properties of Gdm-1.0.Gdm.UserVerifierSkeletonClass

    static name: string
}

interface UserVerifierSkeletonPrivate {
}

class UserVerifierSkeletonPrivate {

    // Own properties of Gdm-1.0.Gdm.UserVerifierSkeletonPrivate

    static name: string
}

interface WorkerManagerIface {

    // Own fields of Gdm-1.0.Gdm.WorkerManagerIface

    parent_iface: GObject.TypeInterface
    handle_choice_list_query: (object: WorkerManager, invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_prompt_message: string, arg_query: GLib.Variant) => boolean
    handle_hello: (object: WorkerManager, invocation: Gio.DBusMethodInvocation) => boolean
    handle_info: (object: WorkerManager, invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_info: string) => boolean
    handle_info_query: (object: WorkerManager, invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_query: string) => boolean
    handle_problem: (object: WorkerManager, invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_problem: string) => boolean
    handle_secret_info_query: (object: WorkerManager, invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_query: string) => boolean
}

abstract class WorkerManagerIface {

    // Own properties of Gdm-1.0.Gdm.WorkerManagerIface

    static name: string
}

interface WorkerManagerProxyClass {

    // Own fields of Gdm-1.0.Gdm.WorkerManagerProxyClass

    parent_class: Gio.DBusProxyClass
}

abstract class WorkerManagerProxyClass {

    // Own properties of Gdm-1.0.Gdm.WorkerManagerProxyClass

    static name: string
}

interface WorkerManagerProxyPrivate {
}

class WorkerManagerProxyPrivate {

    // Own properties of Gdm-1.0.Gdm.WorkerManagerProxyPrivate

    static name: string
}

interface WorkerManagerSkeletonClass {

    // Own fields of Gdm-1.0.Gdm.WorkerManagerSkeletonClass

    parent_class: Gio.DBusInterfaceSkeletonClass
}

abstract class WorkerManagerSkeletonClass {

    // Own properties of Gdm-1.0.Gdm.WorkerManagerSkeletonClass

    static name: string
}

interface WorkerManagerSkeletonPrivate {
}

class WorkerManagerSkeletonPrivate {

    // Own properties of Gdm-1.0.Gdm.WorkerManagerSkeletonPrivate

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default Gdm;
// END