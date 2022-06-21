// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gdm-1.0
 */

import type * as Gjs from './Gjs';
import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Gdm {

enum ClientError {
    CLIENT_ERROR_GENERIC,
}
function chooser_interface_info(): Gio.DBusInterfaceInfo
function chooser_override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
/**
 * Reads /usr/share/xsessions and other relevant places for possible sessions
 * to log into and returns the complete list.
 */
function get_session_ids(): string[]
/**
 * Takes an xsession id and returns the name and comment about it.
 * @param id an id from gdm_get_session_ids()
 */
function get_session_name_and_description(id: string): [ /* returnType */ string, /* description */ string ]
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
interface Chooser_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `handle-disconnect`
 */
interface Chooser_HandleDisconnectSignalCallback {
    ($obj: Chooser, object: Gio.DBusMethodInvocation): boolean
}

/**
 * Signal callback interface for `handle-select-hostname`
 */
interface Chooser_HandleSelectHostnameSignalCallback {
    ($obj: Chooser, object: Gio.DBusMethodInvocation, p0: string): boolean
}

interface Chooser {

    // Owm methods of Gdm-1.0.Gdm.Chooser

    call_disconnect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_disconnect_finish(res: Gio.AsyncResult): boolean
    call_disconnect_sync(cancellable: Gio.Cancellable | null): boolean
    call_select_hostname(arg_hostname: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_select_hostname_finish(res: Gio.AsyncResult): boolean
    call_select_hostname_sync(arg_hostname: string, cancellable: Gio.Cancellable | null): boolean
    complete_disconnect(invocation: Gio.DBusMethodInvocation): void
    complete_select_hostname(invocation: Gio.DBusMethodInvocation): void

    // Own virtual methods of Gdm-1.0.Gdm.Chooser

    vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_select_hostname(invocation: Gio.DBusMethodInvocation, arg_hostname: string): boolean

    // Own signals of Gdm-1.0.Gdm.Chooser

    connect(sigName: "handle-disconnect", callback: Chooser_HandleDisconnectSignalCallback): number
    connect_after(sigName: "handle-disconnect", callback: Chooser_HandleDisconnectSignalCallback): number
    emit(sigName: "handle-disconnect", object: Gio.DBusMethodInvocation, ...args: any[]): void
    connect(sigName: "handle-select-hostname", callback: Chooser_HandleSelectHostnameSignalCallback): number
    connect_after(sigName: "handle-select-hostname", callback: Chooser_HandleSelectHostnameSignalCallback): number
    emit(sigName: "handle-select-hostname", object: Gio.DBusMethodInvocation, p0: string, ...args: any[]): void

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

    constructor(config?: Chooser_ConstructProps) 
    _init(config?: Chooser_ConstructProps): void
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

interface Greeter_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `default-language-name-changed`
 */
interface Greeter_DefaultLanguageNameChangedSignalCallback {
    ($obj: Greeter, object: string): void
}

/**
 * Signal callback interface for `default-session-name-changed`
 */
interface Greeter_DefaultSessionNameChangedSignalCallback {
    ($obj: Greeter, object: string): void
}

/**
 * Signal callback interface for `handle-begin-auto-login`
 */
interface Greeter_HandleBeginAutoLoginSignalCallback {
    ($obj: Greeter, object: Gio.DBusMethodInvocation, p0: string): boolean
}

/**
 * Signal callback interface for `handle-get-timed-login-details`
 */
interface Greeter_HandleGetTimedLoginDetailsSignalCallback {
    ($obj: Greeter, object: Gio.DBusMethodInvocation): boolean
}

/**
 * Signal callback interface for `handle-select-session`
 */
interface Greeter_HandleSelectSessionSignalCallback {
    ($obj: Greeter, object: Gio.DBusMethodInvocation, p0: string): boolean
}

/**
 * Signal callback interface for `handle-select-user`
 */
interface Greeter_HandleSelectUserSignalCallback {
    ($obj: Greeter, object: Gio.DBusMethodInvocation, p0: string): boolean
}

/**
 * Signal callback interface for `handle-start-session-when-ready`
 */
interface Greeter_HandleStartSessionWhenReadySignalCallback {
    ($obj: Greeter, object: Gio.DBusMethodInvocation, p0: string, p1: boolean): boolean
}

/**
 * Signal callback interface for `reauthenticated`
 */
interface Greeter_ReauthenticatedSignalCallback {
    ($obj: Greeter, object: string): void
}

/**
 * Signal callback interface for `selected-user-changed`
 */
interface Greeter_SelectedUserChangedSignalCallback {
    ($obj: Greeter, object: string): void
}

/**
 * Signal callback interface for `session-opened`
 */
interface Greeter_SessionOpenedSignalCallback {
    ($obj: Greeter, object: string): void
}

/**
 * Signal callback interface for `timed-login-requested`
 */
interface Greeter_TimedLoginRequestedSignalCallback {
    ($obj: Greeter, object: string, p0: number): void
}

interface Greeter {

    // Owm methods of Gdm-1.0.Gdm.Greeter

    call_begin_auto_login(arg_username: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_begin_auto_login_finish(res: Gio.AsyncResult): boolean
    call_begin_auto_login_sync(arg_username: string, cancellable: Gio.Cancellable | null): boolean
    call_get_timed_login_details(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_get_timed_login_details_finish(out_enabled: boolean, out_username: string, out_delay: number, res: Gio.AsyncResult): boolean
    call_get_timed_login_details_sync(out_enabled: boolean, out_username: string, out_delay: number, cancellable: Gio.Cancellable | null): boolean
    call_select_session(arg_session: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_select_session_finish(res: Gio.AsyncResult): boolean
    call_select_session_sync(arg_session: string, cancellable: Gio.Cancellable | null): boolean
    call_select_user(arg_username: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_select_user_finish(res: Gio.AsyncResult): boolean
    call_select_user_sync(arg_username: string, cancellable: Gio.Cancellable | null): boolean
    call_start_session_when_ready(arg_service_name: string, arg_should_start_session: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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

    connect(sigName: "default-language-name-changed", callback: Greeter_DefaultLanguageNameChangedSignalCallback): number
    connect_after(sigName: "default-language-name-changed", callback: Greeter_DefaultLanguageNameChangedSignalCallback): number
    emit(sigName: "default-language-name-changed", object: string, ...args: any[]): void
    connect(sigName: "default-session-name-changed", callback: Greeter_DefaultSessionNameChangedSignalCallback): number
    connect_after(sigName: "default-session-name-changed", callback: Greeter_DefaultSessionNameChangedSignalCallback): number
    emit(sigName: "default-session-name-changed", object: string, ...args: any[]): void
    connect(sigName: "handle-begin-auto-login", callback: Greeter_HandleBeginAutoLoginSignalCallback): number
    connect_after(sigName: "handle-begin-auto-login", callback: Greeter_HandleBeginAutoLoginSignalCallback): number
    emit(sigName: "handle-begin-auto-login", object: Gio.DBusMethodInvocation, p0: string, ...args: any[]): void
    connect(sigName: "handle-get-timed-login-details", callback: Greeter_HandleGetTimedLoginDetailsSignalCallback): number
    connect_after(sigName: "handle-get-timed-login-details", callback: Greeter_HandleGetTimedLoginDetailsSignalCallback): number
    emit(sigName: "handle-get-timed-login-details", object: Gio.DBusMethodInvocation, ...args: any[]): void
    connect(sigName: "handle-select-session", callback: Greeter_HandleSelectSessionSignalCallback): number
    connect_after(sigName: "handle-select-session", callback: Greeter_HandleSelectSessionSignalCallback): number
    emit(sigName: "handle-select-session", object: Gio.DBusMethodInvocation, p0: string, ...args: any[]): void
    connect(sigName: "handle-select-user", callback: Greeter_HandleSelectUserSignalCallback): number
    connect_after(sigName: "handle-select-user", callback: Greeter_HandleSelectUserSignalCallback): number
    emit(sigName: "handle-select-user", object: Gio.DBusMethodInvocation, p0: string, ...args: any[]): void
    connect(sigName: "handle-start-session-when-ready", callback: Greeter_HandleStartSessionWhenReadySignalCallback): number
    connect_after(sigName: "handle-start-session-when-ready", callback: Greeter_HandleStartSessionWhenReadySignalCallback): number
    emit(sigName: "handle-start-session-when-ready", object: Gio.DBusMethodInvocation, p0: string, p1: boolean, ...args: any[]): void
    connect(sigName: "reauthenticated", callback: Greeter_ReauthenticatedSignalCallback): number
    connect_after(sigName: "reauthenticated", callback: Greeter_ReauthenticatedSignalCallback): number
    emit(sigName: "reauthenticated", object: string, ...args: any[]): void
    connect(sigName: "selected-user-changed", callback: Greeter_SelectedUserChangedSignalCallback): number
    connect_after(sigName: "selected-user-changed", callback: Greeter_SelectedUserChangedSignalCallback): number
    emit(sigName: "selected-user-changed", object: string, ...args: any[]): void
    connect(sigName: "session-opened", callback: Greeter_SessionOpenedSignalCallback): number
    connect_after(sigName: "session-opened", callback: Greeter_SessionOpenedSignalCallback): number
    emit(sigName: "session-opened", object: string, ...args: any[]): void
    connect(sigName: "timed-login-requested", callback: Greeter_TimedLoginRequestedSignalCallback): number
    connect_after(sigName: "timed-login-requested", callback: Greeter_TimedLoginRequestedSignalCallback): number
    emit(sigName: "timed-login-requested", object: string, p0: number, ...args: any[]): void

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

    constructor(config?: Greeter_ConstructProps) 
    _init(config?: Greeter_ConstructProps): void
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

interface Manager_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gdm-1.0.Gdm.Manager

    version?: string | null
}

/**
 * Signal callback interface for `handle-open-reauthentication-channel`
 */
interface Manager_HandleOpenReauthenticationChannelSignalCallback {
    ($obj: Manager, object: Gio.DBusMethodInvocation, p0: string): boolean
}

/**
 * Signal callback interface for `handle-open-session`
 */
interface Manager_HandleOpenSessionSignalCallback {
    ($obj: Manager, object: Gio.DBusMethodInvocation): boolean
}

/**
 * Signal callback interface for `handle-register-display`
 */
interface Manager_HandleRegisterDisplaySignalCallback {
    ($obj: Manager, object: Gio.DBusMethodInvocation, p0: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-register-session`
 */
interface Manager_HandleRegisterSessionSignalCallback {
    ($obj: Manager, object: Gio.DBusMethodInvocation, p0: GLib.Variant): boolean
}

interface Manager {

    // Own properties of Gdm-1.0.Gdm.Manager

    version: string

    // Owm methods of Gdm-1.0.Gdm.Manager

    call_open_reauthentication_channel(arg_username: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_open_reauthentication_channel_finish(out_address: string, res: Gio.AsyncResult): boolean
    call_open_reauthentication_channel_sync(arg_username: string, out_address: string, cancellable: Gio.Cancellable | null): boolean
    call_open_session(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_open_session_finish(out_address: string, res: Gio.AsyncResult): boolean
    call_open_session_sync(out_address: string, cancellable: Gio.Cancellable | null): boolean
    call_register_display(arg_details: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_register_display_finish(res: Gio.AsyncResult): boolean
    call_register_display_sync(arg_details: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    call_register_session(arg_details: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_register_session_finish(res: Gio.AsyncResult): boolean
    call_register_session_sync(arg_details: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    complete_open_reauthentication_channel(invocation: Gio.DBusMethodInvocation, address: string): void
    complete_open_session(invocation: Gio.DBusMethodInvocation, address: string): void
    complete_register_display(invocation: Gio.DBusMethodInvocation): void
    complete_register_session(invocation: Gio.DBusMethodInvocation): void
    dup_version(): string
    get_version(): string
    set_version(value: string): void

    // Own virtual methods of Gdm-1.0.Gdm.Manager

    vfunc_get_version(): string
    vfunc_handle_open_reauthentication_channel(invocation: Gio.DBusMethodInvocation, arg_username: string): boolean
    vfunc_handle_open_session(invocation: Gio.DBusMethodInvocation): boolean
    vfunc_handle_register_display(invocation: Gio.DBusMethodInvocation, arg_details: GLib.Variant): boolean
    vfunc_handle_register_session(invocation: Gio.DBusMethodInvocation, arg_details: GLib.Variant): boolean

    // Own signals of Gdm-1.0.Gdm.Manager

    connect(sigName: "handle-open-reauthentication-channel", callback: Manager_HandleOpenReauthenticationChannelSignalCallback): number
    connect_after(sigName: "handle-open-reauthentication-channel", callback: Manager_HandleOpenReauthenticationChannelSignalCallback): number
    emit(sigName: "handle-open-reauthentication-channel", object: Gio.DBusMethodInvocation, p0: string, ...args: any[]): void
    connect(sigName: "handle-open-session", callback: Manager_HandleOpenSessionSignalCallback): number
    connect_after(sigName: "handle-open-session", callback: Manager_HandleOpenSessionSignalCallback): number
    emit(sigName: "handle-open-session", object: Gio.DBusMethodInvocation, ...args: any[]): void
    connect(sigName: "handle-register-display", callback: Manager_HandleRegisterDisplaySignalCallback): number
    connect_after(sigName: "handle-register-display", callback: Manager_HandleRegisterDisplaySignalCallback): number
    emit(sigName: "handle-register-display", object: Gio.DBusMethodInvocation, p0: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-register-session", callback: Manager_HandleRegisterSessionSignalCallback): number
    connect_after(sigName: "handle-register-session", callback: Manager_HandleRegisterSessionSignalCallback): number
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

    constructor(config?: Manager_ConstructProps) 
    _init(config?: Manager_ConstructProps): void
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

interface RemoteGreeter_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `handle-disconnect`
 */
interface RemoteGreeter_HandleDisconnectSignalCallback {
    ($obj: RemoteGreeter, object: Gio.DBusMethodInvocation): boolean
}

interface RemoteGreeter {

    // Owm methods of Gdm-1.0.Gdm.RemoteGreeter

    call_disconnect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_disconnect_finish(res: Gio.AsyncResult): boolean
    call_disconnect_sync(cancellable: Gio.Cancellable | null): boolean
    complete_disconnect(invocation: Gio.DBusMethodInvocation): void

    // Own virtual methods of Gdm-1.0.Gdm.RemoteGreeter

    vfunc_handle_disconnect(invocation: Gio.DBusMethodInvocation): boolean

    // Own signals of Gdm-1.0.Gdm.RemoteGreeter

    connect(sigName: "handle-disconnect", callback: RemoteGreeter_HandleDisconnectSignalCallback): number
    connect_after(sigName: "handle-disconnect", callback: RemoteGreeter_HandleDisconnectSignalCallback): number
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

    constructor(config?: RemoteGreeter_ConstructProps) 
    _init(config?: RemoteGreeter_ConstructProps): void
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

interface UserVerifier_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `conversation-started`
 */
interface UserVerifier_ConversationStartedSignalCallback {
    ($obj: UserVerifier, object: string): void
}

/**
 * Signal callback interface for `conversation-stopped`
 */
interface UserVerifier_ConversationStoppedSignalCallback {
    ($obj: UserVerifier, object: string): void
}

/**
 * Signal callback interface for `handle-answer-query`
 */
interface UserVerifier_HandleAnswerQuerySignalCallback {
    ($obj: UserVerifier, object: Gio.DBusMethodInvocation, p0: string, p1: string): boolean
}

/**
 * Signal callback interface for `handle-begin-verification`
 */
interface UserVerifier_HandleBeginVerificationSignalCallback {
    ($obj: UserVerifier, object: Gio.DBusMethodInvocation, p0: string): boolean
}

/**
 * Signal callback interface for `handle-begin-verification-for-user`
 */
interface UserVerifier_HandleBeginVerificationForUserSignalCallback {
    ($obj: UserVerifier, object: Gio.DBusMethodInvocation, p0: string, p1: string): boolean
}

/**
 * Signal callback interface for `handle-cancel`
 */
interface UserVerifier_HandleCancelSignalCallback {
    ($obj: UserVerifier, object: Gio.DBusMethodInvocation): boolean
}

/**
 * Signal callback interface for `handle-enable-extensions`
 */
interface UserVerifier_HandleEnableExtensionsSignalCallback {
    ($obj: UserVerifier, object: Gio.DBusMethodInvocation, p0: string[]): boolean
}

/**
 * Signal callback interface for `info`
 */
interface UserVerifier_InfoSignalCallback {
    ($obj: UserVerifier, object: string, p0: string): void
}

/**
 * Signal callback interface for `info-query`
 */
interface UserVerifier_InfoQuerySignalCallback {
    ($obj: UserVerifier, object: string, p0: string): void
}

/**
 * Signal callback interface for `problem`
 */
interface UserVerifier_ProblemSignalCallback {
    ($obj: UserVerifier, object: string, p0: string): void
}

/**
 * Signal callback interface for `reauthentication-started`
 */
interface UserVerifier_ReauthenticationStartedSignalCallback {
    ($obj: UserVerifier, object: number): void
}

/**
 * Signal callback interface for `reset`
 */
interface UserVerifier_ResetSignalCallback {
    ($obj: UserVerifier): void
}

/**
 * Signal callback interface for `secret-info-query`
 */
interface UserVerifier_SecretInfoQuerySignalCallback {
    ($obj: UserVerifier, object: string, p0: string): void
}

/**
 * Signal callback interface for `service-unavailable`
 */
interface UserVerifier_ServiceUnavailableSignalCallback {
    ($obj: UserVerifier, object: string, p0: string): void
}

/**
 * Signal callback interface for `verification-complete`
 */
interface UserVerifier_VerificationCompleteSignalCallback {
    ($obj: UserVerifier, object: string): void
}

/**
 * Signal callback interface for `verification-failed`
 */
interface UserVerifier_VerificationFailedSignalCallback {
    ($obj: UserVerifier, object: string): void
}

interface UserVerifier {

    // Owm methods of Gdm-1.0.Gdm.UserVerifier

    call_answer_query(arg_service_name: string, arg_answer: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_answer_query_finish(res: Gio.AsyncResult): boolean
    call_answer_query_sync(arg_service_name: string, arg_answer: string, cancellable: Gio.Cancellable | null): boolean
    call_begin_verification(arg_service_name: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_begin_verification_finish(res: Gio.AsyncResult): boolean
    call_begin_verification_for_user(arg_service_name: string, arg_username: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_begin_verification_for_user_finish(res: Gio.AsyncResult): boolean
    call_begin_verification_for_user_sync(arg_service_name: string, arg_username: string, cancellable: Gio.Cancellable | null): boolean
    call_begin_verification_sync(arg_service_name: string, cancellable: Gio.Cancellable | null): boolean
    call_cancel(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_cancel_finish(res: Gio.AsyncResult): boolean
    call_cancel_sync(cancellable: Gio.Cancellable | null): boolean
    call_enable_extensions(arg_extensions: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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

    connect(sigName: "conversation-started", callback: UserVerifier_ConversationStartedSignalCallback): number
    connect_after(sigName: "conversation-started", callback: UserVerifier_ConversationStartedSignalCallback): number
    emit(sigName: "conversation-started", object: string, ...args: any[]): void
    connect(sigName: "conversation-stopped", callback: UserVerifier_ConversationStoppedSignalCallback): number
    connect_after(sigName: "conversation-stopped", callback: UserVerifier_ConversationStoppedSignalCallback): number
    emit(sigName: "conversation-stopped", object: string, ...args: any[]): void
    connect(sigName: "handle-answer-query", callback: UserVerifier_HandleAnswerQuerySignalCallback): number
    connect_after(sigName: "handle-answer-query", callback: UserVerifier_HandleAnswerQuerySignalCallback): number
    emit(sigName: "handle-answer-query", object: Gio.DBusMethodInvocation, p0: string, p1: string, ...args: any[]): void
    connect(sigName: "handle-begin-verification", callback: UserVerifier_HandleBeginVerificationSignalCallback): number
    connect_after(sigName: "handle-begin-verification", callback: UserVerifier_HandleBeginVerificationSignalCallback): number
    emit(sigName: "handle-begin-verification", object: Gio.DBusMethodInvocation, p0: string, ...args: any[]): void
    connect(sigName: "handle-begin-verification-for-user", callback: UserVerifier_HandleBeginVerificationForUserSignalCallback): number
    connect_after(sigName: "handle-begin-verification-for-user", callback: UserVerifier_HandleBeginVerificationForUserSignalCallback): number
    emit(sigName: "handle-begin-verification-for-user", object: Gio.DBusMethodInvocation, p0: string, p1: string, ...args: any[]): void
    connect(sigName: "handle-cancel", callback: UserVerifier_HandleCancelSignalCallback): number
    connect_after(sigName: "handle-cancel", callback: UserVerifier_HandleCancelSignalCallback): number
    emit(sigName: "handle-cancel", object: Gio.DBusMethodInvocation, ...args: any[]): void
    connect(sigName: "handle-enable-extensions", callback: UserVerifier_HandleEnableExtensionsSignalCallback): number
    connect_after(sigName: "handle-enable-extensions", callback: UserVerifier_HandleEnableExtensionsSignalCallback): number
    emit(sigName: "handle-enable-extensions", object: Gio.DBusMethodInvocation, p0: string[], ...args: any[]): void
    connect(sigName: "info", callback: UserVerifier_InfoSignalCallback): number
    connect_after(sigName: "info", callback: UserVerifier_InfoSignalCallback): number
    emit(sigName: "info", object: string, p0: string, ...args: any[]): void
    connect(sigName: "info-query", callback: UserVerifier_InfoQuerySignalCallback): number
    connect_after(sigName: "info-query", callback: UserVerifier_InfoQuerySignalCallback): number
    emit(sigName: "info-query", object: string, p0: string, ...args: any[]): void
    connect(sigName: "problem", callback: UserVerifier_ProblemSignalCallback): number
    connect_after(sigName: "problem", callback: UserVerifier_ProblemSignalCallback): number
    emit(sigName: "problem", object: string, p0: string, ...args: any[]): void
    connect(sigName: "reauthentication-started", callback: UserVerifier_ReauthenticationStartedSignalCallback): number
    connect_after(sigName: "reauthentication-started", callback: UserVerifier_ReauthenticationStartedSignalCallback): number
    emit(sigName: "reauthentication-started", object: number, ...args: any[]): void
    connect(sigName: "reset", callback: UserVerifier_ResetSignalCallback): number
    connect_after(sigName: "reset", callback: UserVerifier_ResetSignalCallback): number
    emit(sigName: "reset", ...args: any[]): void
    connect(sigName: "secret-info-query", callback: UserVerifier_SecretInfoQuerySignalCallback): number
    connect_after(sigName: "secret-info-query", callback: UserVerifier_SecretInfoQuerySignalCallback): number
    emit(sigName: "secret-info-query", object: string, p0: string, ...args: any[]): void
    connect(sigName: "service-unavailable", callback: UserVerifier_ServiceUnavailableSignalCallback): number
    connect_after(sigName: "service-unavailable", callback: UserVerifier_ServiceUnavailableSignalCallback): number
    emit(sigName: "service-unavailable", object: string, p0: string, ...args: any[]): void
    connect(sigName: "verification-complete", callback: UserVerifier_VerificationCompleteSignalCallback): number
    connect_after(sigName: "verification-complete", callback: UserVerifier_VerificationCompleteSignalCallback): number
    emit(sigName: "verification-complete", object: string, ...args: any[]): void
    connect(sigName: "verification-failed", callback: UserVerifier_VerificationFailedSignalCallback): number
    connect_after(sigName: "verification-failed", callback: UserVerifier_VerificationFailedSignalCallback): number
    emit(sigName: "verification-failed", object: string, ...args: any[]): void

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

    constructor(config?: UserVerifier_ConstructProps) 
    _init(config?: UserVerifier_ConstructProps): void
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

interface UserVerifierChoiceList_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `choice-query`
 */
interface UserVerifierChoiceList_ChoiceQuerySignalCallback {
    ($obj: UserVerifierChoiceList, object: string, p0: string, p1: GLib.Variant): void
}

/**
 * Signal callback interface for `handle-select-choice`
 */
interface UserVerifierChoiceList_HandleSelectChoiceSignalCallback {
    ($obj: UserVerifierChoiceList, object: Gio.DBusMethodInvocation, p0: string, p1: string): boolean
}

interface UserVerifierChoiceList {

    // Owm methods of Gdm-1.0.Gdm.UserVerifierChoiceList

    call_select_choice(arg_service_name: string, arg_choice: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_select_choice_finish(res: Gio.AsyncResult): boolean
    call_select_choice_sync(arg_service_name: string, arg_choice: string, cancellable: Gio.Cancellable | null): boolean
    complete_select_choice(invocation: Gio.DBusMethodInvocation): void
    emit_choice_query(arg_service_name: string, arg_prompt_message: string, arg_list: GLib.Variant): void

    // Own virtual methods of Gdm-1.0.Gdm.UserVerifierChoiceList

    vfunc_choice_query(arg_service_name: string, arg_prompt_message: string, arg_list: GLib.Variant): void
    vfunc_handle_select_choice(invocation: Gio.DBusMethodInvocation, arg_service_name: string, arg_choice: string): boolean

    // Own signals of Gdm-1.0.Gdm.UserVerifierChoiceList

    connect(sigName: "choice-query", callback: UserVerifierChoiceList_ChoiceQuerySignalCallback): number
    connect_after(sigName: "choice-query", callback: UserVerifierChoiceList_ChoiceQuerySignalCallback): number
    emit(sigName: "choice-query", object: string, p0: string, p1: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-select-choice", callback: UserVerifierChoiceList_HandleSelectChoiceSignalCallback): number
    connect_after(sigName: "handle-select-choice", callback: UserVerifierChoiceList_HandleSelectChoiceSignalCallback): number
    emit(sigName: "handle-select-choice", object: Gio.DBusMethodInvocation, p0: string, p1: string, ...args: any[]): void

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

    constructor(config?: UserVerifierChoiceList_ConstructProps) 
    _init(config?: UserVerifierChoiceList_ConstructProps): void
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

interface WorkerManager_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `handle-choice-list-query`
 */
interface WorkerManager_HandleChoiceListQuerySignalCallback {
    ($obj: WorkerManager, object: Gio.DBusMethodInvocation, p0: string, p1: string, p2: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-hello`
 */
interface WorkerManager_HandleHelloSignalCallback {
    ($obj: WorkerManager, object: Gio.DBusMethodInvocation): boolean
}

/**
 * Signal callback interface for `handle-info`
 */
interface WorkerManager_HandleInfoSignalCallback {
    ($obj: WorkerManager, object: Gio.DBusMethodInvocation, p0: string, p1: string): boolean
}

/**
 * Signal callback interface for `handle-info-query`
 */
interface WorkerManager_HandleInfoQuerySignalCallback {
    ($obj: WorkerManager, object: Gio.DBusMethodInvocation, p0: string, p1: string): boolean
}

/**
 * Signal callback interface for `handle-problem`
 */
interface WorkerManager_HandleProblemSignalCallback {
    ($obj: WorkerManager, object: Gio.DBusMethodInvocation, p0: string, p1: string): boolean
}

/**
 * Signal callback interface for `handle-secret-info-query`
 */
interface WorkerManager_HandleSecretInfoQuerySignalCallback {
    ($obj: WorkerManager, object: Gio.DBusMethodInvocation, p0: string, p1: string): boolean
}

interface WorkerManager {

    // Owm methods of Gdm-1.0.Gdm.WorkerManager

    call_choice_list_query(arg_service_name: string, arg_prompt_message: string, arg_query: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_choice_list_query_finish(out_answer: string, res: Gio.AsyncResult): boolean
    call_choice_list_query_sync(arg_service_name: string, arg_prompt_message: string, arg_query: GLib.Variant, out_answer: string, cancellable: Gio.Cancellable | null): boolean
    call_hello(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_hello_finish(res: Gio.AsyncResult): boolean
    call_hello_sync(cancellable: Gio.Cancellable | null): boolean
    call_info(arg_service_name: string, arg_info: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_info_finish(res: Gio.AsyncResult): boolean
    call_info_query(arg_service_name: string, arg_query: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_info_query_finish(out_answer: string, res: Gio.AsyncResult): boolean
    call_info_query_sync(arg_service_name: string, arg_query: string, out_answer: string, cancellable: Gio.Cancellable | null): boolean
    call_info_sync(arg_service_name: string, arg_info: string, cancellable: Gio.Cancellable | null): boolean
    call_problem(arg_service_name: string, arg_problem: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_problem_finish(res: Gio.AsyncResult): boolean
    call_problem_sync(arg_service_name: string, arg_problem: string, cancellable: Gio.Cancellable | null): boolean
    call_secret_info_query(arg_service_name: string, arg_query: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    call_secret_info_query_finish(out_answer: string, res: Gio.AsyncResult): boolean
    call_secret_info_query_sync(arg_service_name: string, arg_query: string, out_answer: string, cancellable: Gio.Cancellable | null): boolean
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

    connect(sigName: "handle-choice-list-query", callback: WorkerManager_HandleChoiceListQuerySignalCallback): number
    connect_after(sigName: "handle-choice-list-query", callback: WorkerManager_HandleChoiceListQuerySignalCallback): number
    emit(sigName: "handle-choice-list-query", object: Gio.DBusMethodInvocation, p0: string, p1: string, p2: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-hello", callback: WorkerManager_HandleHelloSignalCallback): number
    connect_after(sigName: "handle-hello", callback: WorkerManager_HandleHelloSignalCallback): number
    emit(sigName: "handle-hello", object: Gio.DBusMethodInvocation, ...args: any[]): void
    connect(sigName: "handle-info", callback: WorkerManager_HandleInfoSignalCallback): number
    connect_after(sigName: "handle-info", callback: WorkerManager_HandleInfoSignalCallback): number
    emit(sigName: "handle-info", object: Gio.DBusMethodInvocation, p0: string, p1: string, ...args: any[]): void
    connect(sigName: "handle-info-query", callback: WorkerManager_HandleInfoQuerySignalCallback): number
    connect_after(sigName: "handle-info-query", callback: WorkerManager_HandleInfoQuerySignalCallback): number
    emit(sigName: "handle-info-query", object: Gio.DBusMethodInvocation, p0: string, p1: string, ...args: any[]): void
    connect(sigName: "handle-problem", callback: WorkerManager_HandleProblemSignalCallback): number
    connect_after(sigName: "handle-problem", callback: WorkerManager_HandleProblemSignalCallback): number
    emit(sigName: "handle-problem", object: Gio.DBusMethodInvocation, p0: string, p1: string, ...args: any[]): void
    connect(sigName: "handle-secret-info-query", callback: WorkerManager_HandleSecretInfoQuerySignalCallback): number
    connect_after(sigName: "handle-secret-info-query", callback: WorkerManager_HandleSecretInfoQuerySignalCallback): number
    emit(sigName: "handle-secret-info-query", object: Gio.DBusMethodInvocation, p0: string, p1: string, ...args: any[]): void

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

    constructor(config?: WorkerManager_ConstructProps) 
    _init(config?: WorkerManager_ConstructProps): void
    static interface_info(): Gio.DBusInterfaceInfo
    static override_properties(klass: GObject.ObjectClass, property_id_begin: number): number
}

interface ChooserProxy_ConstructProps extends Chooser_ConstructProps, Gio.AsyncInitable_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.Initable_ConstructProps, Gio.DBusProxy_ConstructProps {
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

    constructor(config?: ChooserProxy_ConstructProps) 
    _init(config?: ChooserProxy_ConstructProps): void
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(...args: any[]): any
    static new_for_bus(args_or_bus_type: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface ChooserSkeleton_ConstructProps extends Chooser_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
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

    constructor(config?: ChooserSkeleton_ConstructProps) 
    _init(config?: ChooserSkeleton_ConstructProps): void
}

interface Client_ConstructProps extends GObject.Object_ConstructProps {
}

interface Client {

    // Owm methods of Gdm-1.0.Gdm.Client

    /**
     * Gets a #GdmChooser object that can be used to
     * verify a user's local account.
     * @param cancellable a #GCancellable
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_chooser(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with
     * gdm_client_get_chooser().
     * @param result The #GAsyncResult from the callback
     */
    get_chooser_finish(result: Gio.AsyncResult): Chooser
    /**
     * Gets a #GdmChooser object that can be used
     * to do do various XDMCP chooser related tasks, such
     * as selecting a host or disconnecting.
     * @param cancellable a #GCancellable
     */
    get_chooser_sync(cancellable: Gio.Cancellable | null): Chooser
    /**
     * Gets a #GdmGreeter object that can be used to
     * verify a user's local account.
     * @param cancellable a #GCancellable
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_greeter(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with
     * gdm_client_get_greeter().
     * @param result The #GAsyncResult from the callback
     */
    get_greeter_finish(result: Gio.AsyncResult): Greeter
    /**
     * Gets a #GdmGreeter object that can be used
     * to do do various login screen related tasks, such
     * as selecting a users session, and starting that
     * session.
     * @param cancellable a #GCancellable
     */
    get_greeter_sync(cancellable: Gio.Cancellable | null): Greeter
    /**
     * Gets a #GdmRemoteGreeter object that can be used to
     * verify a user's local account.
     * @param cancellable a #GCancellable
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_remote_greeter(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with
     * gdm_client_get_remote_greeter().
     * @param result The #GAsyncResult from the callback
     */
    get_remote_greeter_finish(result: Gio.AsyncResult): RemoteGreeter
    /**
     * Gets a #GdmRemoteGreeter object that can be used
     * to do do various remote login screen related tasks,
     * such as disconnecting.
     * @param cancellable a #GCancellable
     */
    get_remote_greeter_sync(cancellable: Gio.Cancellable | null): RemoteGreeter
    /**
     * Gets a #GdmUserVerifier object that can be used to
     * verify a user's local account.
     * @param cancellable a #GCancellable
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    get_user_verifier(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets a #GdmUserVerifierChoiceList object that can be used to
     * verify a user's local account.
     */
    get_user_verifier_choice_list(): UserVerifierChoiceList
    /**
     * Finishes an operation started with
     * gdm_client_get_user_verifier().
     * @param result The #GAsyncResult from the callback
     */
    get_user_verifier_finish(result: Gio.AsyncResult): UserVerifier
    /**
     * Gets a #GdmUserVerifier object that can be used to
     * verify a user's local account.
     * @param cancellable a #GCancellable
     */
    get_user_verifier_sync(cancellable: Gio.Cancellable | null): UserVerifier
    /**
     * Gets a #GdmUserVerifier object that can be used to
     * reauthenticate an already logged in user.
     * @param username user to reauthenticate
     * @param cancellable a #GCancellable
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    open_reauthentication_channel(username: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with
     * gdm_client_open_reauthentication_channel().
     * @param result The #GAsyncResult from the callback
     */
    open_reauthentication_channel_finish(result: Gio.AsyncResult): UserVerifier
    /**
     * Gets a #GdmUserVerifier object that can be used to
     * reauthenticate an already logged in user. Free with
     * g_object_unref to close reauthentication channel.
     * @param username user to reauthenticate
     * @param cancellable a #GCancellable
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

    constructor(config?: Client_ConstructProps) 
    constructor() 
    static new(): Client
    _init(config?: Client_ConstructProps): void
    static error_quark(): GLib.Quark
}

interface GreeterProxy_ConstructProps extends Greeter_ConstructProps, Gio.AsyncInitable_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.Initable_ConstructProps, Gio.DBusProxy_ConstructProps {
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

    constructor(config?: GreeterProxy_ConstructProps) 
    _init(config?: GreeterProxy_ConstructProps): void
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(...args: any[]): any
    static new_for_bus(args_or_bus_type: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface GreeterSkeleton_ConstructProps extends Greeter_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
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

    constructor(config?: GreeterSkeleton_ConstructProps) 
    _init(config?: GreeterSkeleton_ConstructProps): void
}

interface ManagerProxy_ConstructProps extends Manager_ConstructProps, Gio.AsyncInitable_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.Initable_ConstructProps, Gio.DBusProxy_ConstructProps {
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

    constructor(config?: ManagerProxy_ConstructProps) 
    _init(config?: ManagerProxy_ConstructProps): void
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(...args: any[]): any
    static new_for_bus(args_or_bus_type: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface ManagerSkeleton_ConstructProps extends Manager_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
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

    constructor(config?: ManagerSkeleton_ConstructProps) 
    _init(config?: ManagerSkeleton_ConstructProps): void
}

interface RemoteGreeterProxy_ConstructProps extends RemoteGreeter_ConstructProps, Gio.AsyncInitable_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.Initable_ConstructProps, Gio.DBusProxy_ConstructProps {
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

    constructor(config?: RemoteGreeterProxy_ConstructProps) 
    _init(config?: RemoteGreeterProxy_ConstructProps): void
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(...args: any[]): any
    static new_for_bus(args_or_bus_type: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface RemoteGreeterSkeleton_ConstructProps extends RemoteGreeter_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
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

    constructor(config?: RemoteGreeterSkeleton_ConstructProps) 
    _init(config?: RemoteGreeterSkeleton_ConstructProps): void
}

interface UserVerifierChoiceListProxy_ConstructProps extends UserVerifierChoiceList_ConstructProps, Gio.AsyncInitable_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.Initable_ConstructProps, Gio.DBusProxy_ConstructProps {
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

    constructor(config?: UserVerifierChoiceListProxy_ConstructProps) 
    _init(config?: UserVerifierChoiceListProxy_ConstructProps): void
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(...args: any[]): any
    static new_for_bus(args_or_bus_type: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface UserVerifierChoiceListSkeleton_ConstructProps extends UserVerifierChoiceList_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
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

    constructor(config?: UserVerifierChoiceListSkeleton_ConstructProps) 
    _init(config?: UserVerifierChoiceListSkeleton_ConstructProps): void
}

interface UserVerifierProxy_ConstructProps extends UserVerifier_ConstructProps, Gio.AsyncInitable_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.Initable_ConstructProps, Gio.DBusProxy_ConstructProps {
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

    constructor(config?: UserVerifierProxy_ConstructProps) 
    _init(config?: UserVerifierProxy_ConstructProps): void
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(...args: any[]): any
    static new_for_bus(args_or_bus_type: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface UserVerifierSkeleton_ConstructProps extends UserVerifier_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
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

    constructor(config?: UserVerifierSkeleton_ConstructProps) 
    _init(config?: UserVerifierSkeleton_ConstructProps): void
}

interface WorkerManagerProxy_ConstructProps extends WorkerManager_ConstructProps, Gio.AsyncInitable_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.Initable_ConstructProps, Gio.DBusProxy_ConstructProps {
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

    constructor(config?: WorkerManagerProxy_ConstructProps) 
    _init(config?: WorkerManagerProxy_ConstructProps): void
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, object_path?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
    static new_for_bus(bus_type: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new_for_bus(...args: any[]): any
    static new_for_bus(args_or_bus_type: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, object_path?: string, interface_name?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface WorkerManagerSkeleton_ConstructProps extends WorkerManager_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
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

    constructor(config?: WorkerManagerSkeleton_ConstructProps) 
    _init(config?: WorkerManagerSkeleton_ConstructProps): void
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

}
export default Gdm;