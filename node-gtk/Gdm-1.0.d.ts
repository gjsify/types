// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gdm-1.0
 */

import type Gio from './Gio-2.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Gdm {

enum ClientError {
    CLIENT_ERROR_GENERIC,
}
function chooserInterfaceInfo(): Gio.DBusInterfaceInfo
function chooserOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Reads /usr/share/xsessions and other relevant places for possible sessions
 * to log into and returns the complete list.
 */
function getSessionIds(): string[]
/**
 * Takes an xsession id and returns the name and comment about it.
 * @param id an id from gdm_get_session_ids()
 */
function getSessionNameAndDescription(id: string): [ /* returnType */ string, /* description */ string ]
function gotoLoginSessionSync(cancellable: Gio.Cancellable | null): boolean
function greeterInterfaceInfo(): Gio.DBusInterfaceInfo
function greeterOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
function managerInterfaceInfo(): Gio.DBusInterfaceInfo
function managerOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
function remoteGreeterInterfaceInfo(): Gio.DBusInterfaceInfo
function remoteGreeterOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
function userVerifierChoiceListInterfaceInfo(): Gio.DBusInterfaceInfo
function userVerifierChoiceListOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
function userVerifierInterfaceInfo(): Gio.DBusInterfaceInfo
function userVerifierOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
function workerManagerInterfaceInfo(): Gio.DBusInterfaceInfo
function workerManagerOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
interface Chooser_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `handle-disconnect`
 */
interface Chooser_HandleDisconnectSignalCallback {
    (object: Gio.DBusMethodInvocation): boolean
}

/**
 * Signal callback interface for `handle-select-hostname`
 */
interface Chooser_HandleSelectHostnameSignalCallback {
    (object: Gio.DBusMethodInvocation, p0: string): boolean
}

interface Chooser {

    // Owm methods of Gdm-1.0.Gdm.Chooser

    callDisconnect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callDisconnectFinish(res: Gio.AsyncResult): boolean
    callDisconnectSync(cancellable: Gio.Cancellable | null): boolean
    callSelectHostname(argHostname: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callSelectHostnameFinish(res: Gio.AsyncResult): boolean
    callSelectHostnameSync(argHostname: string, cancellable: Gio.Cancellable | null): boolean
    completeDisconnect(invocation: Gio.DBusMethodInvocation): void
    completeSelectHostname(invocation: Gio.DBusMethodInvocation): void

    // Own signals of Gdm-1.0.Gdm.Chooser

    connect(sigName: "handle-disconnect", callback: Chooser_HandleDisconnectSignalCallback): number
    on(sigName: "handle-disconnect", callback: Chooser_HandleDisconnectSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-disconnect", callback: Chooser_HandleDisconnectSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-disconnect", callback: Chooser_HandleDisconnectSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-disconnect", ...args: any[]): void
    connect(sigName: "handle-select-hostname", callback: Chooser_HandleSelectHostnameSignalCallback): number
    on(sigName: "handle-select-hostname", callback: Chooser_HandleSelectHostnameSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-select-hostname", callback: Chooser_HandleSelectHostnameSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-select-hostname", callback: Chooser_HandleSelectHostnameSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-select-hostname", p0: string, ...args: any[]): void

    // Class property signals of Gdm-1.0.Gdm.Chooser

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Chooser extends GObject.Object {

    // Own properties of Gdm-1.0.Gdm.Chooser

    static name: string
    static $gtype: GObject.GType<Chooser>

    // Constructors of Gdm-1.0.Gdm.Chooser

    constructor(config?: Chooser_ConstructProps) 
    _init(config?: Chooser_ConstructProps): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

interface Greeter_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `default-language-name-changed`
 */
interface Greeter_DefaultLanguageNameChangedSignalCallback {
    (object: string): void
}

/**
 * Signal callback interface for `default-session-name-changed`
 */
interface Greeter_DefaultSessionNameChangedSignalCallback {
    (object: string): void
}

/**
 * Signal callback interface for `handle-begin-auto-login`
 */
interface Greeter_HandleBeginAutoLoginSignalCallback {
    (object: Gio.DBusMethodInvocation, p0: string): boolean
}

/**
 * Signal callback interface for `handle-get-timed-login-details`
 */
interface Greeter_HandleGetTimedLoginDetailsSignalCallback {
    (object: Gio.DBusMethodInvocation): boolean
}

/**
 * Signal callback interface for `handle-select-session`
 */
interface Greeter_HandleSelectSessionSignalCallback {
    (object: Gio.DBusMethodInvocation, p0: string): boolean
}

/**
 * Signal callback interface for `handle-select-user`
 */
interface Greeter_HandleSelectUserSignalCallback {
    (object: Gio.DBusMethodInvocation, p0: string): boolean
}

/**
 * Signal callback interface for `handle-start-session-when-ready`
 */
interface Greeter_HandleStartSessionWhenReadySignalCallback {
    (object: Gio.DBusMethodInvocation, p0: string, p1: boolean): boolean
}

/**
 * Signal callback interface for `reauthenticated`
 */
interface Greeter_ReauthenticatedSignalCallback {
    (object: string): void
}

/**
 * Signal callback interface for `selected-user-changed`
 */
interface Greeter_SelectedUserChangedSignalCallback {
    (object: string): void
}

/**
 * Signal callback interface for `session-opened`
 */
interface Greeter_SessionOpenedSignalCallback {
    (object: string): void
}

/**
 * Signal callback interface for `timed-login-requested`
 */
interface Greeter_TimedLoginRequestedSignalCallback {
    (object: string, p0: number): void
}

interface Greeter {

    // Owm methods of Gdm-1.0.Gdm.Greeter

    callBeginAutoLogin(argUsername: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callBeginAutoLoginFinish(res: Gio.AsyncResult): boolean
    callBeginAutoLoginSync(argUsername: string, cancellable: Gio.Cancellable | null): boolean
    callGetTimedLoginDetails(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetTimedLoginDetailsFinish(outEnabled: boolean, outUsername: string, outDelay: number, res: Gio.AsyncResult): boolean
    callGetTimedLoginDetailsSync(outEnabled: boolean, outUsername: string, outDelay: number, cancellable: Gio.Cancellable | null): boolean
    callSelectSession(argSession: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callSelectSessionFinish(res: Gio.AsyncResult): boolean
    callSelectSessionSync(argSession: string, cancellable: Gio.Cancellable | null): boolean
    callSelectUser(argUsername: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callSelectUserFinish(res: Gio.AsyncResult): boolean
    callSelectUserSync(argUsername: string, cancellable: Gio.Cancellable | null): boolean
    callStartSessionWhenReady(argServiceName: string, argShouldStartSession: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callStartSessionWhenReadyFinish(res: Gio.AsyncResult): boolean
    callStartSessionWhenReadySync(argServiceName: string, argShouldStartSession: boolean, cancellable: Gio.Cancellable | null): boolean
    completeBeginAutoLogin(invocation: Gio.DBusMethodInvocation): void
    completeGetTimedLoginDetails(invocation: Gio.DBusMethodInvocation, enabled: boolean, username: string, delay: number): void
    completeSelectSession(invocation: Gio.DBusMethodInvocation): void
    completeSelectUser(invocation: Gio.DBusMethodInvocation): void
    completeStartSessionWhenReady(invocation: Gio.DBusMethodInvocation): void
    emitDefaultLanguageNameChanged(argLanguageName: string): void
    emitDefaultSessionNameChanged(argSessionName: string): void
    emitReauthenticated(argServiceName: string): void
    emitSelectedUserChanged(argUsername: string): void
    emitSessionOpened(argServiceName: string): void
    emitTimedLoginRequested(argUsername: string, argDelay: number): void

    // Own signals of Gdm-1.0.Gdm.Greeter

    connect(sigName: "default-language-name-changed", callback: Greeter_DefaultLanguageNameChangedSignalCallback): number
    on(sigName: "default-language-name-changed", callback: Greeter_DefaultLanguageNameChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "default-language-name-changed", callback: Greeter_DefaultLanguageNameChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "default-language-name-changed", callback: Greeter_DefaultLanguageNameChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "default-language-name-changed", ...args: any[]): void
    connect(sigName: "default-session-name-changed", callback: Greeter_DefaultSessionNameChangedSignalCallback): number
    on(sigName: "default-session-name-changed", callback: Greeter_DefaultSessionNameChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "default-session-name-changed", callback: Greeter_DefaultSessionNameChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "default-session-name-changed", callback: Greeter_DefaultSessionNameChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "default-session-name-changed", ...args: any[]): void
    connect(sigName: "handle-begin-auto-login", callback: Greeter_HandleBeginAutoLoginSignalCallback): number
    on(sigName: "handle-begin-auto-login", callback: Greeter_HandleBeginAutoLoginSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-begin-auto-login", callback: Greeter_HandleBeginAutoLoginSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-begin-auto-login", callback: Greeter_HandleBeginAutoLoginSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-begin-auto-login", p0: string, ...args: any[]): void
    connect(sigName: "handle-get-timed-login-details", callback: Greeter_HandleGetTimedLoginDetailsSignalCallback): number
    on(sigName: "handle-get-timed-login-details", callback: Greeter_HandleGetTimedLoginDetailsSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-timed-login-details", callback: Greeter_HandleGetTimedLoginDetailsSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-timed-login-details", callback: Greeter_HandleGetTimedLoginDetailsSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-get-timed-login-details", ...args: any[]): void
    connect(sigName: "handle-select-session", callback: Greeter_HandleSelectSessionSignalCallback): number
    on(sigName: "handle-select-session", callback: Greeter_HandleSelectSessionSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-select-session", callback: Greeter_HandleSelectSessionSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-select-session", callback: Greeter_HandleSelectSessionSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-select-session", p0: string, ...args: any[]): void
    connect(sigName: "handle-select-user", callback: Greeter_HandleSelectUserSignalCallback): number
    on(sigName: "handle-select-user", callback: Greeter_HandleSelectUserSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-select-user", callback: Greeter_HandleSelectUserSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-select-user", callback: Greeter_HandleSelectUserSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-select-user", p0: string, ...args: any[]): void
    connect(sigName: "handle-start-session-when-ready", callback: Greeter_HandleStartSessionWhenReadySignalCallback): number
    on(sigName: "handle-start-session-when-ready", callback: Greeter_HandleStartSessionWhenReadySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-start-session-when-ready", callback: Greeter_HandleStartSessionWhenReadySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-start-session-when-ready", callback: Greeter_HandleStartSessionWhenReadySignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-start-session-when-ready", p0: string, p1: boolean, ...args: any[]): void
    connect(sigName: "reauthenticated", callback: Greeter_ReauthenticatedSignalCallback): number
    on(sigName: "reauthenticated", callback: Greeter_ReauthenticatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reauthenticated", callback: Greeter_ReauthenticatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reauthenticated", callback: Greeter_ReauthenticatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "reauthenticated", ...args: any[]): void
    connect(sigName: "selected-user-changed", callback: Greeter_SelectedUserChangedSignalCallback): number
    on(sigName: "selected-user-changed", callback: Greeter_SelectedUserChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selected-user-changed", callback: Greeter_SelectedUserChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selected-user-changed", callback: Greeter_SelectedUserChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "selected-user-changed", ...args: any[]): void
    connect(sigName: "session-opened", callback: Greeter_SessionOpenedSignalCallback): number
    on(sigName: "session-opened", callback: Greeter_SessionOpenedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "session-opened", callback: Greeter_SessionOpenedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "session-opened", callback: Greeter_SessionOpenedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "session-opened", ...args: any[]): void
    connect(sigName: "timed-login-requested", callback: Greeter_TimedLoginRequestedSignalCallback): number
    on(sigName: "timed-login-requested", callback: Greeter_TimedLoginRequestedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "timed-login-requested", callback: Greeter_TimedLoginRequestedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "timed-login-requested", callback: Greeter_TimedLoginRequestedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "timed-login-requested", p0: number, ...args: any[]): void

    // Class property signals of Gdm-1.0.Gdm.Greeter

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Greeter extends GObject.Object {

    // Own properties of Gdm-1.0.Gdm.Greeter

    static name: string
    static $gtype: GObject.GType<Greeter>

    // Constructors of Gdm-1.0.Gdm.Greeter

    constructor(config?: Greeter_ConstructProps) 
    _init(config?: Greeter_ConstructProps): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

interface Manager_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of Gdm-1.0.Gdm.Manager

    version?: string | null
}

/**
 * Signal callback interface for `handle-open-reauthentication-channel`
 */
interface Manager_HandleOpenReauthenticationChannelSignalCallback {
    (object: Gio.DBusMethodInvocation, p0: string): boolean
}

/**
 * Signal callback interface for `handle-open-session`
 */
interface Manager_HandleOpenSessionSignalCallback {
    (object: Gio.DBusMethodInvocation): boolean
}

/**
 * Signal callback interface for `handle-register-display`
 */
interface Manager_HandleRegisterDisplaySignalCallback {
    (object: Gio.DBusMethodInvocation, p0: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-register-session`
 */
interface Manager_HandleRegisterSessionSignalCallback {
    (object: Gio.DBusMethodInvocation, p0: GLib.Variant): boolean
}

interface Manager {

    // Own properties of Gdm-1.0.Gdm.Manager

    version: string

    // Owm methods of Gdm-1.0.Gdm.Manager

    callOpenReauthenticationChannel(argUsername: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callOpenReauthenticationChannelFinish(outAddress: string, res: Gio.AsyncResult): boolean
    callOpenReauthenticationChannelSync(argUsername: string, outAddress: string, cancellable: Gio.Cancellable | null): boolean
    callOpenSession(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callOpenSessionFinish(outAddress: string, res: Gio.AsyncResult): boolean
    callOpenSessionSync(outAddress: string, cancellable: Gio.Cancellable | null): boolean
    callRegisterDisplay(argDetails: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callRegisterDisplayFinish(res: Gio.AsyncResult): boolean
    callRegisterDisplaySync(argDetails: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    callRegisterSession(argDetails: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callRegisterSessionFinish(res: Gio.AsyncResult): boolean
    callRegisterSessionSync(argDetails: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    completeOpenReauthenticationChannel(invocation: Gio.DBusMethodInvocation, address: string): void
    completeOpenSession(invocation: Gio.DBusMethodInvocation, address: string): void
    completeRegisterDisplay(invocation: Gio.DBusMethodInvocation): void
    completeRegisterSession(invocation: Gio.DBusMethodInvocation): void
    dupVersion(): string
    getVersion(): string
    setVersion(value: string): void

    // Own signals of Gdm-1.0.Gdm.Manager

    connect(sigName: "handle-open-reauthentication-channel", callback: Manager_HandleOpenReauthenticationChannelSignalCallback): number
    on(sigName: "handle-open-reauthentication-channel", callback: Manager_HandleOpenReauthenticationChannelSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-open-reauthentication-channel", callback: Manager_HandleOpenReauthenticationChannelSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-open-reauthentication-channel", callback: Manager_HandleOpenReauthenticationChannelSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-open-reauthentication-channel", p0: string, ...args: any[]): void
    connect(sigName: "handle-open-session", callback: Manager_HandleOpenSessionSignalCallback): number
    on(sigName: "handle-open-session", callback: Manager_HandleOpenSessionSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-open-session", callback: Manager_HandleOpenSessionSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-open-session", callback: Manager_HandleOpenSessionSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-open-session", ...args: any[]): void
    connect(sigName: "handle-register-display", callback: Manager_HandleRegisterDisplaySignalCallback): number
    on(sigName: "handle-register-display", callback: Manager_HandleRegisterDisplaySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-register-display", callback: Manager_HandleRegisterDisplaySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-register-display", callback: Manager_HandleRegisterDisplaySignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-register-display", p0: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-register-session", callback: Manager_HandleRegisterSessionSignalCallback): number
    on(sigName: "handle-register-session", callback: Manager_HandleRegisterSessionSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-register-session", callback: Manager_HandleRegisterSessionSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-register-session", callback: Manager_HandleRegisterSessionSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-register-session", p0: GLib.Variant, ...args: any[]): void

    // Class property signals of Gdm-1.0.Gdm.Manager

    connect(sigName: "notify::version", callback: (...args: any[]) => void): number
    on(sigName: "notify::version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Manager extends GObject.Object {

    // Own properties of Gdm-1.0.Gdm.Manager

    static name: string
    static $gtype: GObject.GType<Manager>

    // Constructors of Gdm-1.0.Gdm.Manager

    constructor(config?: Manager_ConstructProps) 
    _init(config?: Manager_ConstructProps): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

interface RemoteGreeter_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `handle-disconnect`
 */
interface RemoteGreeter_HandleDisconnectSignalCallback {
    (object: Gio.DBusMethodInvocation): boolean
}

interface RemoteGreeter {

    // Owm methods of Gdm-1.0.Gdm.RemoteGreeter

    callDisconnect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callDisconnectFinish(res: Gio.AsyncResult): boolean
    callDisconnectSync(cancellable: Gio.Cancellable | null): boolean
    completeDisconnect(invocation: Gio.DBusMethodInvocation): void

    // Own signals of Gdm-1.0.Gdm.RemoteGreeter

    connect(sigName: "handle-disconnect", callback: RemoteGreeter_HandleDisconnectSignalCallback): number
    on(sigName: "handle-disconnect", callback: RemoteGreeter_HandleDisconnectSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-disconnect", callback: RemoteGreeter_HandleDisconnectSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-disconnect", callback: RemoteGreeter_HandleDisconnectSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-disconnect", ...args: any[]): void

    // Class property signals of Gdm-1.0.Gdm.RemoteGreeter

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class RemoteGreeter extends GObject.Object {

    // Own properties of Gdm-1.0.Gdm.RemoteGreeter

    static name: string
    static $gtype: GObject.GType<RemoteGreeter>

    // Constructors of Gdm-1.0.Gdm.RemoteGreeter

    constructor(config?: RemoteGreeter_ConstructProps) 
    _init(config?: RemoteGreeter_ConstructProps): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

interface UserVerifier_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `conversation-started`
 */
interface UserVerifier_ConversationStartedSignalCallback {
    (object: string): void
}

/**
 * Signal callback interface for `conversation-stopped`
 */
interface UserVerifier_ConversationStoppedSignalCallback {
    (object: string): void
}

/**
 * Signal callback interface for `handle-answer-query`
 */
interface UserVerifier_HandleAnswerQuerySignalCallback {
    (object: Gio.DBusMethodInvocation, p0: string, p1: string): boolean
}

/**
 * Signal callback interface for `handle-begin-verification`
 */
interface UserVerifier_HandleBeginVerificationSignalCallback {
    (object: Gio.DBusMethodInvocation, p0: string): boolean
}

/**
 * Signal callback interface for `handle-begin-verification-for-user`
 */
interface UserVerifier_HandleBeginVerificationForUserSignalCallback {
    (object: Gio.DBusMethodInvocation, p0: string, p1: string): boolean
}

/**
 * Signal callback interface for `handle-cancel`
 */
interface UserVerifier_HandleCancelSignalCallback {
    (object: Gio.DBusMethodInvocation): boolean
}

/**
 * Signal callback interface for `handle-enable-extensions`
 */
interface UserVerifier_HandleEnableExtensionsSignalCallback {
    (object: Gio.DBusMethodInvocation, p0: string[]): boolean
}

/**
 * Signal callback interface for `info`
 */
interface UserVerifier_InfoSignalCallback {
    (object: string, p0: string): void
}

/**
 * Signal callback interface for `info-query`
 */
interface UserVerifier_InfoQuerySignalCallback {
    (object: string, p0: string): void
}

/**
 * Signal callback interface for `problem`
 */
interface UserVerifier_ProblemSignalCallback {
    (object: string, p0: string): void
}

/**
 * Signal callback interface for `reauthentication-started`
 */
interface UserVerifier_ReauthenticationStartedSignalCallback {
    (object: number): void
}

/**
 * Signal callback interface for `reset`
 */
interface UserVerifier_ResetSignalCallback {
    (): void
}

/**
 * Signal callback interface for `secret-info-query`
 */
interface UserVerifier_SecretInfoQuerySignalCallback {
    (object: string, p0: string): void
}

/**
 * Signal callback interface for `service-unavailable`
 */
interface UserVerifier_ServiceUnavailableSignalCallback {
    (object: string, p0: string): void
}

/**
 * Signal callback interface for `verification-complete`
 */
interface UserVerifier_VerificationCompleteSignalCallback {
    (object: string): void
}

/**
 * Signal callback interface for `verification-failed`
 */
interface UserVerifier_VerificationFailedSignalCallback {
    (object: string): void
}

interface UserVerifier {

    // Owm methods of Gdm-1.0.Gdm.UserVerifier

    callAnswerQuery(argServiceName: string, argAnswer: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callAnswerQueryFinish(res: Gio.AsyncResult): boolean
    callAnswerQuerySync(argServiceName: string, argAnswer: string, cancellable: Gio.Cancellable | null): boolean
    callBeginVerification(argServiceName: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callBeginVerificationFinish(res: Gio.AsyncResult): boolean
    callBeginVerificationForUser(argServiceName: string, argUsername: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callBeginVerificationForUserFinish(res: Gio.AsyncResult): boolean
    callBeginVerificationForUserSync(argServiceName: string, argUsername: string, cancellable: Gio.Cancellable | null): boolean
    callBeginVerificationSync(argServiceName: string, cancellable: Gio.Cancellable | null): boolean
    callCancel(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callCancelFinish(res: Gio.AsyncResult): boolean
    callCancelSync(cancellable: Gio.Cancellable | null): boolean
    callEnableExtensions(argExtensions: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callEnableExtensionsFinish(res: Gio.AsyncResult): boolean
    callEnableExtensionsSync(argExtensions: string, cancellable: Gio.Cancellable | null): boolean
    completeAnswerQuery(invocation: Gio.DBusMethodInvocation): void
    completeBeginVerification(invocation: Gio.DBusMethodInvocation): void
    completeBeginVerificationForUser(invocation: Gio.DBusMethodInvocation): void
    completeCancel(invocation: Gio.DBusMethodInvocation): void
    completeEnableExtensions(invocation: Gio.DBusMethodInvocation): void
    emitConversationStarted(argServiceName: string): void
    emitConversationStopped(argServiceName: string): void
    emitInfo(argServiceName: string, argInfo: string): void
    emitInfoQuery(argServiceName: string, argQuery: string): void
    emitProblem(argServiceName: string, argProblem: string): void
    emitReauthenticationStarted(argPidOfCaller: number): void
    emitReset(): void
    emitSecretInfoQuery(argServiceName: string, argQuery: string): void
    emitServiceUnavailable(argServiceName: string, argMessage: string): void
    emitVerificationComplete(argServiceName: string): void
    emitVerificationFailed(argServiceName: string): void

    // Own signals of Gdm-1.0.Gdm.UserVerifier

    connect(sigName: "conversation-started", callback: UserVerifier_ConversationStartedSignalCallback): number
    on(sigName: "conversation-started", callback: UserVerifier_ConversationStartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "conversation-started", callback: UserVerifier_ConversationStartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "conversation-started", callback: UserVerifier_ConversationStartedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "conversation-started", ...args: any[]): void
    connect(sigName: "conversation-stopped", callback: UserVerifier_ConversationStoppedSignalCallback): number
    on(sigName: "conversation-stopped", callback: UserVerifier_ConversationStoppedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "conversation-stopped", callback: UserVerifier_ConversationStoppedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "conversation-stopped", callback: UserVerifier_ConversationStoppedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "conversation-stopped", ...args: any[]): void
    connect(sigName: "handle-answer-query", callback: UserVerifier_HandleAnswerQuerySignalCallback): number
    on(sigName: "handle-answer-query", callback: UserVerifier_HandleAnswerQuerySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-answer-query", callback: UserVerifier_HandleAnswerQuerySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-answer-query", callback: UserVerifier_HandleAnswerQuerySignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-answer-query", p0: string, p1: string, ...args: any[]): void
    connect(sigName: "handle-begin-verification", callback: UserVerifier_HandleBeginVerificationSignalCallback): number
    on(sigName: "handle-begin-verification", callback: UserVerifier_HandleBeginVerificationSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-begin-verification", callback: UserVerifier_HandleBeginVerificationSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-begin-verification", callback: UserVerifier_HandleBeginVerificationSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-begin-verification", p0: string, ...args: any[]): void
    connect(sigName: "handle-begin-verification-for-user", callback: UserVerifier_HandleBeginVerificationForUserSignalCallback): number
    on(sigName: "handle-begin-verification-for-user", callback: UserVerifier_HandleBeginVerificationForUserSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-begin-verification-for-user", callback: UserVerifier_HandleBeginVerificationForUserSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-begin-verification-for-user", callback: UserVerifier_HandleBeginVerificationForUserSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-begin-verification-for-user", p0: string, p1: string, ...args: any[]): void
    connect(sigName: "handle-cancel", callback: UserVerifier_HandleCancelSignalCallback): number
    on(sigName: "handle-cancel", callback: UserVerifier_HandleCancelSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-cancel", callback: UserVerifier_HandleCancelSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-cancel", callback: UserVerifier_HandleCancelSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-cancel", ...args: any[]): void
    connect(sigName: "handle-enable-extensions", callback: UserVerifier_HandleEnableExtensionsSignalCallback): number
    on(sigName: "handle-enable-extensions", callback: UserVerifier_HandleEnableExtensionsSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-enable-extensions", callback: UserVerifier_HandleEnableExtensionsSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-enable-extensions", callback: UserVerifier_HandleEnableExtensionsSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-enable-extensions", p0: string[], ...args: any[]): void
    connect(sigName: "info", callback: UserVerifier_InfoSignalCallback): number
    on(sigName: "info", callback: UserVerifier_InfoSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "info", callback: UserVerifier_InfoSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "info", callback: UserVerifier_InfoSignalCallback): NodeJS.EventEmitter
    emit(sigName: "info", p0: string, ...args: any[]): void
    connect(sigName: "info-query", callback: UserVerifier_InfoQuerySignalCallback): number
    on(sigName: "info-query", callback: UserVerifier_InfoQuerySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "info-query", callback: UserVerifier_InfoQuerySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "info-query", callback: UserVerifier_InfoQuerySignalCallback): NodeJS.EventEmitter
    emit(sigName: "info-query", p0: string, ...args: any[]): void
    connect(sigName: "problem", callback: UserVerifier_ProblemSignalCallback): number
    on(sigName: "problem", callback: UserVerifier_ProblemSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "problem", callback: UserVerifier_ProblemSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "problem", callback: UserVerifier_ProblemSignalCallback): NodeJS.EventEmitter
    emit(sigName: "problem", p0: string, ...args: any[]): void
    connect(sigName: "reauthentication-started", callback: UserVerifier_ReauthenticationStartedSignalCallback): number
    on(sigName: "reauthentication-started", callback: UserVerifier_ReauthenticationStartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reauthentication-started", callback: UserVerifier_ReauthenticationStartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reauthentication-started", callback: UserVerifier_ReauthenticationStartedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "reauthentication-started", ...args: any[]): void
    connect(sigName: "reset", callback: UserVerifier_ResetSignalCallback): number
    on(sigName: "reset", callback: UserVerifier_ResetSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reset", callback: UserVerifier_ResetSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reset", callback: UserVerifier_ResetSignalCallback): NodeJS.EventEmitter
    emit(sigName: "reset", ...args: any[]): void
    connect(sigName: "secret-info-query", callback: UserVerifier_SecretInfoQuerySignalCallback): number
    on(sigName: "secret-info-query", callback: UserVerifier_SecretInfoQuerySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "secret-info-query", callback: UserVerifier_SecretInfoQuerySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "secret-info-query", callback: UserVerifier_SecretInfoQuerySignalCallback): NodeJS.EventEmitter
    emit(sigName: "secret-info-query", p0: string, ...args: any[]): void
    connect(sigName: "service-unavailable", callback: UserVerifier_ServiceUnavailableSignalCallback): number
    on(sigName: "service-unavailable", callback: UserVerifier_ServiceUnavailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "service-unavailable", callback: UserVerifier_ServiceUnavailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "service-unavailable", callback: UserVerifier_ServiceUnavailableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "service-unavailable", p0: string, ...args: any[]): void
    connect(sigName: "verification-complete", callback: UserVerifier_VerificationCompleteSignalCallback): number
    on(sigName: "verification-complete", callback: UserVerifier_VerificationCompleteSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "verification-complete", callback: UserVerifier_VerificationCompleteSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "verification-complete", callback: UserVerifier_VerificationCompleteSignalCallback): NodeJS.EventEmitter
    emit(sigName: "verification-complete", ...args: any[]): void
    connect(sigName: "verification-failed", callback: UserVerifier_VerificationFailedSignalCallback): number
    on(sigName: "verification-failed", callback: UserVerifier_VerificationFailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "verification-failed", callback: UserVerifier_VerificationFailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "verification-failed", callback: UserVerifier_VerificationFailedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "verification-failed", ...args: any[]): void

    // Class property signals of Gdm-1.0.Gdm.UserVerifier

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class UserVerifier extends GObject.Object {

    // Own properties of Gdm-1.0.Gdm.UserVerifier

    static name: string
    static $gtype: GObject.GType<UserVerifier>

    // Constructors of Gdm-1.0.Gdm.UserVerifier

    constructor(config?: UserVerifier_ConstructProps) 
    _init(config?: UserVerifier_ConstructProps): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

interface UserVerifierChoiceList_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `choice-query`
 */
interface UserVerifierChoiceList_ChoiceQuerySignalCallback {
    (object: string, p0: string, p1: GLib.Variant): void
}

/**
 * Signal callback interface for `handle-select-choice`
 */
interface UserVerifierChoiceList_HandleSelectChoiceSignalCallback {
    (object: Gio.DBusMethodInvocation, p0: string, p1: string): boolean
}

interface UserVerifierChoiceList {

    // Owm methods of Gdm-1.0.Gdm.UserVerifierChoiceList

    callSelectChoice(argServiceName: string, argChoice: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callSelectChoiceFinish(res: Gio.AsyncResult): boolean
    callSelectChoiceSync(argServiceName: string, argChoice: string, cancellable: Gio.Cancellable | null): boolean
    completeSelectChoice(invocation: Gio.DBusMethodInvocation): void
    emitChoiceQuery(argServiceName: string, argPromptMessage: string, argList: GLib.Variant): void

    // Own signals of Gdm-1.0.Gdm.UserVerifierChoiceList

    connect(sigName: "choice-query", callback: UserVerifierChoiceList_ChoiceQuerySignalCallback): number
    on(sigName: "choice-query", callback: UserVerifierChoiceList_ChoiceQuerySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "choice-query", callback: UserVerifierChoiceList_ChoiceQuerySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "choice-query", callback: UserVerifierChoiceList_ChoiceQuerySignalCallback): NodeJS.EventEmitter
    emit(sigName: "choice-query", p0: string, p1: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-select-choice", callback: UserVerifierChoiceList_HandleSelectChoiceSignalCallback): number
    on(sigName: "handle-select-choice", callback: UserVerifierChoiceList_HandleSelectChoiceSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-select-choice", callback: UserVerifierChoiceList_HandleSelectChoiceSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-select-choice", callback: UserVerifierChoiceList_HandleSelectChoiceSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-select-choice", p0: string, p1: string, ...args: any[]): void

    // Class property signals of Gdm-1.0.Gdm.UserVerifierChoiceList

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class UserVerifierChoiceList extends GObject.Object {

    // Own properties of Gdm-1.0.Gdm.UserVerifierChoiceList

    static name: string
    static $gtype: GObject.GType<UserVerifierChoiceList>

    // Constructors of Gdm-1.0.Gdm.UserVerifierChoiceList

    constructor(config?: UserVerifierChoiceList_ConstructProps) 
    _init(config?: UserVerifierChoiceList_ConstructProps): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

interface WorkerManager_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `handle-choice-list-query`
 */
interface WorkerManager_HandleChoiceListQuerySignalCallback {
    (object: Gio.DBusMethodInvocation, p0: string, p1: string, p2: GLib.Variant): boolean
}

/**
 * Signal callback interface for `handle-hello`
 */
interface WorkerManager_HandleHelloSignalCallback {
    (object: Gio.DBusMethodInvocation): boolean
}

/**
 * Signal callback interface for `handle-info`
 */
interface WorkerManager_HandleInfoSignalCallback {
    (object: Gio.DBusMethodInvocation, p0: string, p1: string): boolean
}

/**
 * Signal callback interface for `handle-info-query`
 */
interface WorkerManager_HandleInfoQuerySignalCallback {
    (object: Gio.DBusMethodInvocation, p0: string, p1: string): boolean
}

/**
 * Signal callback interface for `handle-problem`
 */
interface WorkerManager_HandleProblemSignalCallback {
    (object: Gio.DBusMethodInvocation, p0: string, p1: string): boolean
}

/**
 * Signal callback interface for `handle-secret-info-query`
 */
interface WorkerManager_HandleSecretInfoQuerySignalCallback {
    (object: Gio.DBusMethodInvocation, p0: string, p1: string): boolean
}

interface WorkerManager {

    // Owm methods of Gdm-1.0.Gdm.WorkerManager

    callChoiceListQuery(argServiceName: string, argPromptMessage: string, argQuery: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callChoiceListQueryFinish(outAnswer: string, res: Gio.AsyncResult): boolean
    callChoiceListQuerySync(argServiceName: string, argPromptMessage: string, argQuery: GLib.Variant, outAnswer: string, cancellable: Gio.Cancellable | null): boolean
    callHello(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callHelloFinish(res: Gio.AsyncResult): boolean
    callHelloSync(cancellable: Gio.Cancellable | null): boolean
    callInfo(argServiceName: string, argInfo: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callInfoFinish(res: Gio.AsyncResult): boolean
    callInfoQuery(argServiceName: string, argQuery: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callInfoQueryFinish(outAnswer: string, res: Gio.AsyncResult): boolean
    callInfoQuerySync(argServiceName: string, argQuery: string, outAnswer: string, cancellable: Gio.Cancellable | null): boolean
    callInfoSync(argServiceName: string, argInfo: string, cancellable: Gio.Cancellable | null): boolean
    callProblem(argServiceName: string, argProblem: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callProblemFinish(res: Gio.AsyncResult): boolean
    callProblemSync(argServiceName: string, argProblem: string, cancellable: Gio.Cancellable | null): boolean
    callSecretInfoQuery(argServiceName: string, argQuery: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callSecretInfoQueryFinish(outAnswer: string, res: Gio.AsyncResult): boolean
    callSecretInfoQuerySync(argServiceName: string, argQuery: string, outAnswer: string, cancellable: Gio.Cancellable | null): boolean
    completeChoiceListQuery(invocation: Gio.DBusMethodInvocation, answer: string): void
    completeHello(invocation: Gio.DBusMethodInvocation): void
    completeInfo(invocation: Gio.DBusMethodInvocation): void
    completeInfoQuery(invocation: Gio.DBusMethodInvocation, answer: string): void
    completeProblem(invocation: Gio.DBusMethodInvocation): void
    completeSecretInfoQuery(invocation: Gio.DBusMethodInvocation, answer: string): void

    // Own signals of Gdm-1.0.Gdm.WorkerManager

    connect(sigName: "handle-choice-list-query", callback: WorkerManager_HandleChoiceListQuerySignalCallback): number
    on(sigName: "handle-choice-list-query", callback: WorkerManager_HandleChoiceListQuerySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-choice-list-query", callback: WorkerManager_HandleChoiceListQuerySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-choice-list-query", callback: WorkerManager_HandleChoiceListQuerySignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-choice-list-query", p0: string, p1: string, p2: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-hello", callback: WorkerManager_HandleHelloSignalCallback): number
    on(sigName: "handle-hello", callback: WorkerManager_HandleHelloSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-hello", callback: WorkerManager_HandleHelloSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-hello", callback: WorkerManager_HandleHelloSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-hello", ...args: any[]): void
    connect(sigName: "handle-info", callback: WorkerManager_HandleInfoSignalCallback): number
    on(sigName: "handle-info", callback: WorkerManager_HandleInfoSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-info", callback: WorkerManager_HandleInfoSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-info", callback: WorkerManager_HandleInfoSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-info", p0: string, p1: string, ...args: any[]): void
    connect(sigName: "handle-info-query", callback: WorkerManager_HandleInfoQuerySignalCallback): number
    on(sigName: "handle-info-query", callback: WorkerManager_HandleInfoQuerySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-info-query", callback: WorkerManager_HandleInfoQuerySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-info-query", callback: WorkerManager_HandleInfoQuerySignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-info-query", p0: string, p1: string, ...args: any[]): void
    connect(sigName: "handle-problem", callback: WorkerManager_HandleProblemSignalCallback): number
    on(sigName: "handle-problem", callback: WorkerManager_HandleProblemSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-problem", callback: WorkerManager_HandleProblemSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-problem", callback: WorkerManager_HandleProblemSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-problem", p0: string, p1: string, ...args: any[]): void
    connect(sigName: "handle-secret-info-query", callback: WorkerManager_HandleSecretInfoQuerySignalCallback): number
    on(sigName: "handle-secret-info-query", callback: WorkerManager_HandleSecretInfoQuerySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-secret-info-query", callback: WorkerManager_HandleSecretInfoQuerySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-secret-info-query", callback: WorkerManager_HandleSecretInfoQuerySignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-secret-info-query", p0: string, p1: string, ...args: any[]): void

    // Class property signals of Gdm-1.0.Gdm.WorkerManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class WorkerManager extends GObject.Object {

    // Own properties of Gdm-1.0.Gdm.WorkerManager

    static name: string
    static $gtype: GObject.GType<WorkerManager>

    // Constructors of Gdm-1.0.Gdm.WorkerManager

    constructor(config?: WorkerManager_ConstructProps) 
    _init(config?: WorkerManager_ConstructProps): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

interface ChooserProxy_ConstructProps extends Chooser_ConstructProps, Gio.AsyncInitable_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.Initable_ConstructProps, Gio.DBusProxy_ConstructProps {
}

interface ChooserProxy extends Chooser, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Class property signals of Gdm-1.0.Gdm.ChooserProxy

    connect(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ChooserProxy extends Gio.DBusProxy {

    // Own properties of Gdm-1.0.Gdm.ChooserProxy

    static name: string
    static $gtype: GObject.GType<ChooserProxy>

    // Constructors of Gdm-1.0.Gdm.ChooserProxy

    constructor(config?: ChooserProxy_ConstructProps) 
    _init(config?: ChooserProxy_ConstructProps): void
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of newForBus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(...args: any[]): any
    static newForBus(args_or_busType: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface ChooserSkeleton_ConstructProps extends Chooser_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
}

interface ChooserSkeleton extends Chooser, Gio.DBusInterface {

    // Class property signals of Gdm-1.0.Gdm.ChooserSkeleton

    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    getChooser(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with
     * gdm_client_get_chooser().
     * @param result The #GAsyncResult from the callback
     */
    getChooserFinish(result: Gio.AsyncResult): Chooser
    /**
     * Gets a #GdmChooser object that can be used
     * to do do various XDMCP chooser related tasks, such
     * as selecting a host or disconnecting.
     * @param cancellable a #GCancellable
     */
    getChooserSync(cancellable: Gio.Cancellable | null): Chooser
    /**
     * Gets a #GdmGreeter object that can be used to
     * verify a user's local account.
     * @param cancellable a #GCancellable
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    getGreeter(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with
     * gdm_client_get_greeter().
     * @param result The #GAsyncResult from the callback
     */
    getGreeterFinish(result: Gio.AsyncResult): Greeter
    /**
     * Gets a #GdmGreeter object that can be used
     * to do do various login screen related tasks, such
     * as selecting a users session, and starting that
     * session.
     * @param cancellable a #GCancellable
     */
    getGreeterSync(cancellable: Gio.Cancellable | null): Greeter
    /**
     * Gets a #GdmRemoteGreeter object that can be used to
     * verify a user's local account.
     * @param cancellable a #GCancellable
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    getRemoteGreeter(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with
     * gdm_client_get_remote_greeter().
     * @param result The #GAsyncResult from the callback
     */
    getRemoteGreeterFinish(result: Gio.AsyncResult): RemoteGreeter
    /**
     * Gets a #GdmRemoteGreeter object that can be used
     * to do do various remote login screen related tasks,
     * such as disconnecting.
     * @param cancellable a #GCancellable
     */
    getRemoteGreeterSync(cancellable: Gio.Cancellable | null): RemoteGreeter
    /**
     * Gets a #GdmUserVerifier object that can be used to
     * verify a user's local account.
     * @param cancellable a #GCancellable
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    getUserVerifier(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets a #GdmUserVerifierChoiceList object that can be used to
     * verify a user's local account.
     */
    getUserVerifierChoiceList(): UserVerifierChoiceList
    /**
     * Finishes an operation started with
     * gdm_client_get_user_verifier().
     * @param result The #GAsyncResult from the callback
     */
    getUserVerifierFinish(result: Gio.AsyncResult): UserVerifier
    /**
     * Gets a #GdmUserVerifier object that can be used to
     * verify a user's local account.
     * @param cancellable a #GCancellable
     */
    getUserVerifierSync(cancellable: Gio.Cancellable | null): UserVerifier
    /**
     * Gets a #GdmUserVerifier object that can be used to
     * reauthenticate an already logged in user.
     * @param username user to reauthenticate
     * @param cancellable a #GCancellable
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    openReauthenticationChannel(username: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with
     * gdm_client_open_reauthentication_channel().
     * @param result The #GAsyncResult from the callback
     */
    openReauthenticationChannelFinish(result: Gio.AsyncResult): UserVerifier
    /**
     * Gets a #GdmUserVerifier object that can be used to
     * reauthenticate an already logged in user. Free with
     * g_object_unref to close reauthentication channel.
     * @param username user to reauthenticate
     * @param cancellable a #GCancellable
     */
    openReauthenticationChannelSync(username: string, cancellable: Gio.Cancellable | null): UserVerifier
    /**
     * Enables GDM's pam extensions.  Currently, only
     * org.gnome.DisplayManager.UserVerifier.ChoiceList is supported.
     * @param extensions a list of extensions
     */
    setEnabledExtensions(extensions: string[]): void

    // Class property signals of Gdm-1.0.Gdm.Client

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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
    static errorQuark(): GLib.Quark
}

interface GreeterProxy_ConstructProps extends Greeter_ConstructProps, Gio.AsyncInitable_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.Initable_ConstructProps, Gio.DBusProxy_ConstructProps {
}

interface GreeterProxy extends Greeter, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Class property signals of Gdm-1.0.Gdm.GreeterProxy

    connect(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class GreeterProxy extends Gio.DBusProxy {

    // Own properties of Gdm-1.0.Gdm.GreeterProxy

    static name: string
    static $gtype: GObject.GType<GreeterProxy>

    // Constructors of Gdm-1.0.Gdm.GreeterProxy

    constructor(config?: GreeterProxy_ConstructProps) 
    _init(config?: GreeterProxy_ConstructProps): void
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of newForBus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(...args: any[]): any
    static newForBus(args_or_busType: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface GreeterSkeleton_ConstructProps extends Greeter_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
}

interface GreeterSkeleton extends Greeter, Gio.DBusInterface {

    // Class property signals of Gdm-1.0.Gdm.GreeterSkeleton

    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    connect(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::version", callback: (...args: any[]) => void): number
    on(sigName: "notify::version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class ManagerProxy extends Gio.DBusProxy {

    // Own properties of Gdm-1.0.Gdm.ManagerProxy

    static name: string
    static $gtype: GObject.GType<ManagerProxy>

    // Constructors of Gdm-1.0.Gdm.ManagerProxy

    constructor(config?: ManagerProxy_ConstructProps) 
    _init(config?: ManagerProxy_ConstructProps): void
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of newForBus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(...args: any[]): any
    static newForBus(args_or_busType: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface ManagerSkeleton_ConstructProps extends Manager_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
}

interface ManagerSkeleton extends Manager, Gio.DBusInterface {

    // Class property signals of Gdm-1.0.Gdm.ManagerSkeleton

    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::version", callback: (...args: any[]) => void): number
    on(sigName: "notify::version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    connect(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class RemoteGreeterProxy extends Gio.DBusProxy {

    // Own properties of Gdm-1.0.Gdm.RemoteGreeterProxy

    static name: string
    static $gtype: GObject.GType<RemoteGreeterProxy>

    // Constructors of Gdm-1.0.Gdm.RemoteGreeterProxy

    constructor(config?: RemoteGreeterProxy_ConstructProps) 
    _init(config?: RemoteGreeterProxy_ConstructProps): void
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of newForBus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(...args: any[]): any
    static newForBus(args_or_busType: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface RemoteGreeterSkeleton_ConstructProps extends RemoteGreeter_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
}

interface RemoteGreeterSkeleton extends RemoteGreeter, Gio.DBusInterface {

    // Class property signals of Gdm-1.0.Gdm.RemoteGreeterSkeleton

    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    connect(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class UserVerifierChoiceListProxy extends Gio.DBusProxy {

    // Own properties of Gdm-1.0.Gdm.UserVerifierChoiceListProxy

    static name: string
    static $gtype: GObject.GType<UserVerifierChoiceListProxy>

    // Constructors of Gdm-1.0.Gdm.UserVerifierChoiceListProxy

    constructor(config?: UserVerifierChoiceListProxy_ConstructProps) 
    _init(config?: UserVerifierChoiceListProxy_ConstructProps): void
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of newForBus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(...args: any[]): any
    static newForBus(args_or_busType: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface UserVerifierChoiceListSkeleton_ConstructProps extends UserVerifierChoiceList_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
}

interface UserVerifierChoiceListSkeleton extends UserVerifierChoiceList, Gio.DBusInterface {

    // Class property signals of Gdm-1.0.Gdm.UserVerifierChoiceListSkeleton

    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    connect(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class UserVerifierProxy extends Gio.DBusProxy {

    // Own properties of Gdm-1.0.Gdm.UserVerifierProxy

    static name: string
    static $gtype: GObject.GType<UserVerifierProxy>

    // Constructors of Gdm-1.0.Gdm.UserVerifierProxy

    constructor(config?: UserVerifierProxy_ConstructProps) 
    _init(config?: UserVerifierProxy_ConstructProps): void
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of newForBus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(...args: any[]): any
    static newForBus(args_or_busType: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface UserVerifierSkeleton_ConstructProps extends UserVerifier_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
}

interface UserVerifierSkeleton extends UserVerifier, Gio.DBusInterface {

    // Class property signals of Gdm-1.0.Gdm.UserVerifierSkeleton

    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    connect(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-bus-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-bus-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-bus-type", ...args: any[]): void
    connect(sigName: "notify::g-connection", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-connection", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-connection", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-default-timeout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-default-timeout", ...args: any[]): void
    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-info", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-info", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-info", ...args: any[]): void
    connect(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-interface-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-interface-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-interface-name", ...args: any[]): void
    connect(sigName: "notify::g-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name", ...args: any[]): void
    connect(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-name-owner", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-name-owner", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-name-owner", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class WorkerManagerProxy extends Gio.DBusProxy {

    // Own properties of Gdm-1.0.Gdm.WorkerManagerProxy

    static name: string
    static $gtype: GObject.GType<WorkerManagerProxy>

    // Constructors of Gdm-1.0.Gdm.WorkerManagerProxy

    constructor(config?: WorkerManagerProxy_ConstructProps) 
    _init(config?: WorkerManagerProxy_ConstructProps): void
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, name?: string, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

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
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static new(connection: Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static new(...args: any[]): any
    static new(args_or_connection: any[] | Gio.DBusConnection, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string | null, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, name?: string, objectPath?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void

    // Overloads of newForBus

    /**
     * Like g_dbus_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * #GDBusProxy is used in this [example][gdbus-wellknown-proxy].
     * @param busType A #GBusType.
     * @param flags Flags used when constructing the proxy.
     * @param info A #GDBusInterfaceInfo specifying the minimal interface that `proxy` conforms to or %NULL.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param interfaceName A D-Bus interface name.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Callback function to invoke when the proxy is ready.
     */
    static newForBus(busType: Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    static newForBus(...args: any[]): any
    static newForBus(args_or_busType: any[] | Gio.BusType, flags?: Gio.DBusProxyFlags, info?: Gio.DBusInterfaceInfo | null, name?: string, objectPath?: string, interfaceName?: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void | any
}

interface WorkerManagerSkeleton_ConstructProps extends WorkerManager_ConstructProps, Gio.DBusInterface_ConstructProps, Gio.DBusInterfaceSkeleton_ConstructProps {
}

interface WorkerManagerSkeleton extends WorkerManager, Gio.DBusInterface {

    // Class property signals of Gdm-1.0.Gdm.WorkerManagerSkeleton

    connect(sigName: "notify::g-flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::g-flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::g-flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
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

    parentIface: GObject.TypeInterface
    handleDisconnect: (object: Chooser, invocation: Gio.DBusMethodInvocation) => boolean
    handleSelectHostname: (object: Chooser, invocation: Gio.DBusMethodInvocation, argHostname: string) => boolean
}

abstract class ChooserIface {

    // Own properties of Gdm-1.0.Gdm.ChooserIface

    static name: string
}

interface ChooserProxyClass {

    // Own fields of Gdm-1.0.Gdm.ChooserProxyClass

    parentClass: Gio.DBusProxyClass
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

    parentClass: Gio.DBusInterfaceSkeletonClass
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

    parentClass: GObject.ObjectClass
}

abstract class ClientClass {

    // Own properties of Gdm-1.0.Gdm.ClientClass

    static name: string
}

interface GreeterIface {

    // Own fields of Gdm-1.0.Gdm.GreeterIface

    parentIface: GObject.TypeInterface
    handleBeginAutoLogin: (object: Greeter, invocation: Gio.DBusMethodInvocation, argUsername: string) => boolean
    handleGetTimedLoginDetails: (object: Greeter, invocation: Gio.DBusMethodInvocation) => boolean
    handleSelectSession: (object: Greeter, invocation: Gio.DBusMethodInvocation, argSession: string) => boolean
    handleSelectUser: (object: Greeter, invocation: Gio.DBusMethodInvocation, argUsername: string) => boolean
    handleStartSessionWhenReady: (object: Greeter, invocation: Gio.DBusMethodInvocation, argServiceName: string, argShouldStartSession: boolean) => boolean
    defaultLanguageNameChanged: (object: Greeter, argLanguageName: string) => void
    defaultSessionNameChanged: (object: Greeter, argSessionName: string) => void
    reauthenticated: (object: Greeter, argServiceName: string) => void
    selectedUserChanged: (object: Greeter, argUsername: string) => void
    sessionOpened: (object: Greeter, argServiceName: string) => void
    timedLoginRequested: (object: Greeter, argUsername: string, argDelay: number) => void
}

abstract class GreeterIface {

    // Own properties of Gdm-1.0.Gdm.GreeterIface

    static name: string
}

interface GreeterProxyClass {

    // Own fields of Gdm-1.0.Gdm.GreeterProxyClass

    parentClass: Gio.DBusProxyClass
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

    parentClass: Gio.DBusInterfaceSkeletonClass
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

    parentIface: GObject.TypeInterface
    handleOpenReauthenticationChannel: (object: Manager, invocation: Gio.DBusMethodInvocation, argUsername: string) => boolean
    handleOpenSession: (object: Manager, invocation: Gio.DBusMethodInvocation) => boolean
    handleRegisterDisplay: (object: Manager, invocation: Gio.DBusMethodInvocation, argDetails: GLib.Variant) => boolean
    handleRegisterSession: (object: Manager, invocation: Gio.DBusMethodInvocation, argDetails: GLib.Variant) => boolean
    getVersion: (object: Manager) => string
}

abstract class ManagerIface {

    // Own properties of Gdm-1.0.Gdm.ManagerIface

    static name: string
}

interface ManagerProxyClass {

    // Own fields of Gdm-1.0.Gdm.ManagerProxyClass

    parentClass: Gio.DBusProxyClass
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

    parentClass: Gio.DBusInterfaceSkeletonClass
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

    parentIface: GObject.TypeInterface
    handleDisconnect: (object: RemoteGreeter, invocation: Gio.DBusMethodInvocation) => boolean
}

abstract class RemoteGreeterIface {

    // Own properties of Gdm-1.0.Gdm.RemoteGreeterIface

    static name: string
}

interface RemoteGreeterProxyClass {

    // Own fields of Gdm-1.0.Gdm.RemoteGreeterProxyClass

    parentClass: Gio.DBusProxyClass
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

    parentClass: Gio.DBusInterfaceSkeletonClass
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

    parentIface: GObject.TypeInterface
    handleSelectChoice: (object: UserVerifierChoiceList, invocation: Gio.DBusMethodInvocation, argServiceName: string, argChoice: string) => boolean
    choiceQuery: (object: UserVerifierChoiceList, argServiceName: string, argPromptMessage: string, argList: GLib.Variant) => void
}

abstract class UserVerifierChoiceListIface {

    // Own properties of Gdm-1.0.Gdm.UserVerifierChoiceListIface

    static name: string
}

interface UserVerifierChoiceListProxyClass {

    // Own fields of Gdm-1.0.Gdm.UserVerifierChoiceListProxyClass

    parentClass: Gio.DBusProxyClass
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

    parentClass: Gio.DBusInterfaceSkeletonClass
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

    parentIface: GObject.TypeInterface
    handleAnswerQuery: (object: UserVerifier, invocation: Gio.DBusMethodInvocation, argServiceName: string, argAnswer: string) => boolean
    handleBeginVerification: (object: UserVerifier, invocation: Gio.DBusMethodInvocation, argServiceName: string) => boolean
    handleBeginVerificationForUser: (object: UserVerifier, invocation: Gio.DBusMethodInvocation, argServiceName: string, argUsername: string) => boolean
    handleCancel: (object: UserVerifier, invocation: Gio.DBusMethodInvocation) => boolean
    handleEnableExtensions: (object: UserVerifier, invocation: Gio.DBusMethodInvocation, argExtensions: string) => boolean
    conversationStarted: (object: UserVerifier, argServiceName: string) => void
    conversationStopped: (object: UserVerifier, argServiceName: string) => void
    info: (object: UserVerifier, argServiceName: string, argInfo: string) => void
    infoQuery: (object: UserVerifier, argServiceName: string, argQuery: string) => void
    problem: (object: UserVerifier, argServiceName: string, argProblem: string) => void
    reauthenticationStarted: (object: UserVerifier, argPidOfCaller: number) => void
    reset: (object: UserVerifier) => void
    secretInfoQuery: (object: UserVerifier, argServiceName: string, argQuery: string) => void
    serviceUnavailable: (object: UserVerifier, argServiceName: string, argMessage: string) => void
    verificationComplete: (object: UserVerifier, argServiceName: string) => void
    verificationFailed: (object: UserVerifier, argServiceName: string) => void
}

abstract class UserVerifierIface {

    // Own properties of Gdm-1.0.Gdm.UserVerifierIface

    static name: string
}

interface UserVerifierProxyClass {

    // Own fields of Gdm-1.0.Gdm.UserVerifierProxyClass

    parentClass: Gio.DBusProxyClass
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

    parentClass: Gio.DBusInterfaceSkeletonClass
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

    parentIface: GObject.TypeInterface
    handleChoiceListQuery: (object: WorkerManager, invocation: Gio.DBusMethodInvocation, argServiceName: string, argPromptMessage: string, argQuery: GLib.Variant) => boolean
    handleHello: (object: WorkerManager, invocation: Gio.DBusMethodInvocation) => boolean
    handleInfo: (object: WorkerManager, invocation: Gio.DBusMethodInvocation, argServiceName: string, argInfo: string) => boolean
    handleInfoQuery: (object: WorkerManager, invocation: Gio.DBusMethodInvocation, argServiceName: string, argQuery: string) => boolean
    handleProblem: (object: WorkerManager, invocation: Gio.DBusMethodInvocation, argServiceName: string, argProblem: string) => boolean
    handleSecretInfoQuery: (object: WorkerManager, invocation: Gio.DBusMethodInvocation, argServiceName: string, argQuery: string) => boolean
}

abstract class WorkerManagerIface {

    // Own properties of Gdm-1.0.Gdm.WorkerManagerIface

    static name: string
}

interface WorkerManagerProxyClass {

    // Own fields of Gdm-1.0.Gdm.WorkerManagerProxyClass

    parentClass: Gio.DBusProxyClass
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

    parentClass: Gio.DBusInterfaceSkeletonClass
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