
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */
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
function chooserInterfaceInfo(): Gio.DBusInterfaceInfo
function chooserOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Reads /usr/share/xsessions and other relevant places for possible sessions
 * to log into and returns the complete list.
 * @returns a %NULL terminated list of session ids
 */
function getSessionIds(): string[]
/**
 * Takes an xsession id and returns the name and comment about it.
 * @param id an id from gdm_get_session_ids()
 * @returns The session name if found, or %NULL otherwise
 */
function getSessionNameAndDescription(id: string | null): [ /* returnType */ string | null, /* description */ string | null ]
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
module Chooser {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-disconnect`
     */
    interface HandleDisconnectSignalCallback {
        (object: Gio.DBusMethodInvocation): boolean
    }

    /**
     * Signal callback interface for `handle-select-hostname`
     */
    interface HandleSelectHostnameSignalCallback {
        (object: Gio.DBusMethodInvocation, p0: string | null): boolean
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Chooser {

    // Own properties of Gdm-1.0.Gdm.Chooser

    __gtype__: number

    // Owm methods of Gdm-1.0.Gdm.Chooser

    callDisconnect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callDisconnectFinish(res: Gio.AsyncResult): boolean
    callDisconnectSync(cancellable: Gio.Cancellable | null): boolean
    callSelectHostname(argHostname: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callSelectHostnameFinish(res: Gio.AsyncResult): boolean
    callSelectHostnameSync(argHostname: string | null, cancellable: Gio.Cancellable | null): boolean
    completeDisconnect(invocation: Gio.DBusMethodInvocation): void
    completeSelectHostname(invocation: Gio.DBusMethodInvocation): void

    // Own virtual methods of Gdm-1.0.Gdm.Chooser

    handleDisconnect(invocation: Gio.DBusMethodInvocation): boolean
    handleSelectHostname(invocation: Gio.DBusMethodInvocation, argHostname: string | null): boolean

    // Own signals of Gdm-1.0.Gdm.Chooser

    connect(sigName: "handle-disconnect", callback: Chooser.HandleDisconnectSignalCallback): number
    on(sigName: "handle-disconnect", callback: Chooser.HandleDisconnectSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-disconnect", callback: Chooser.HandleDisconnectSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-disconnect", callback: Chooser.HandleDisconnectSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-disconnect", ...args: any[]): void
    connect(sigName: "handle-select-hostname", callback: Chooser.HandleSelectHostnameSignalCallback): number
    on(sigName: "handle-select-hostname", callback: Chooser.HandleSelectHostnameSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-select-hostname", callback: Chooser.HandleSelectHostnameSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-select-hostname", callback: Chooser.HandleSelectHostnameSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-select-hostname", p0: string | null, ...args: any[]): void

    // Class property signals of Gdm-1.0.Gdm.Chooser

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Chooser extends GObject.Object {

    // Own properties of Gdm-1.0.Gdm.Chooser

    static name: string

    // Constructors of Gdm-1.0.Gdm.Chooser

    constructor(config?: Chooser.ConstructorProperties) 
    _init(config?: Chooser.ConstructorProperties): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

module Greeter {

    // Signal callback interfaces

    /**
     * Signal callback interface for `default-language-name-changed`
     */
    interface DefaultLanguageNameChangedSignalCallback {
        (object: string | null): void
    }

    /**
     * Signal callback interface for `default-session-name-changed`
     */
    interface DefaultSessionNameChangedSignalCallback {
        (object: string | null): void
    }

    /**
     * Signal callback interface for `handle-begin-auto-login`
     */
    interface HandleBeginAutoLoginSignalCallback {
        (object: Gio.DBusMethodInvocation, p0: string | null): boolean
    }

    /**
     * Signal callback interface for `handle-get-timed-login-details`
     */
    interface HandleGetTimedLoginDetailsSignalCallback {
        (object: Gio.DBusMethodInvocation): boolean
    }

    /**
     * Signal callback interface for `handle-select-session`
     */
    interface HandleSelectSessionSignalCallback {
        (object: Gio.DBusMethodInvocation, p0: string | null): boolean
    }

    /**
     * Signal callback interface for `handle-select-user`
     */
    interface HandleSelectUserSignalCallback {
        (object: Gio.DBusMethodInvocation, p0: string | null): boolean
    }

    /**
     * Signal callback interface for `handle-start-session-when-ready`
     */
    interface HandleStartSessionWhenReadySignalCallback {
        (object: Gio.DBusMethodInvocation, p0: string | null, p1: boolean): boolean
    }

    /**
     * Signal callback interface for `reauthenticated`
     */
    interface ReauthenticatedSignalCallback {
        (object: string | null): void
    }

    /**
     * Signal callback interface for `selected-user-changed`
     */
    interface SelectedUserChangedSignalCallback {
        (object: string | null): void
    }

    /**
     * Signal callback interface for `session-opened`
     */
    interface SessionOpenedSignalCallback {
        (object: string | null): void
    }

    /**
     * Signal callback interface for `timed-login-requested`
     */
    interface TimedLoginRequestedSignalCallback {
        (object: string | null, p0: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Greeter {

    // Own properties of Gdm-1.0.Gdm.Greeter

    __gtype__: number

    // Owm methods of Gdm-1.0.Gdm.Greeter

    callBeginAutoLogin(argUsername: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callBeginAutoLoginFinish(res: Gio.AsyncResult): boolean
    callBeginAutoLoginSync(argUsername: string | null, cancellable: Gio.Cancellable | null): boolean
    callGetTimedLoginDetails(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetTimedLoginDetailsFinish(outEnabled: boolean, outUsername: string | null, outDelay: number, res: Gio.AsyncResult): boolean
    callGetTimedLoginDetailsSync(outEnabled: boolean, outUsername: string | null, outDelay: number, cancellable: Gio.Cancellable | null): boolean
    callSelectSession(argSession: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callSelectSessionFinish(res: Gio.AsyncResult): boolean
    callSelectSessionSync(argSession: string | null, cancellable: Gio.Cancellable | null): boolean
    callSelectUser(argUsername: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callSelectUserFinish(res: Gio.AsyncResult): boolean
    callSelectUserSync(argUsername: string | null, cancellable: Gio.Cancellable | null): boolean
    callStartSessionWhenReady(argServiceName: string | null, argShouldStartSession: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callStartSessionWhenReadyFinish(res: Gio.AsyncResult): boolean
    callStartSessionWhenReadySync(argServiceName: string | null, argShouldStartSession: boolean, cancellable: Gio.Cancellable | null): boolean
    completeBeginAutoLogin(invocation: Gio.DBusMethodInvocation): void
    completeGetTimedLoginDetails(invocation: Gio.DBusMethodInvocation, enabled: boolean, username: string | null, delay: number): void
    completeSelectSession(invocation: Gio.DBusMethodInvocation): void
    completeSelectUser(invocation: Gio.DBusMethodInvocation): void
    completeStartSessionWhenReady(invocation: Gio.DBusMethodInvocation): void
    emitDefaultLanguageNameChanged(argLanguageName: string | null): void
    emitDefaultSessionNameChanged(argSessionName: string | null): void
    emitReauthenticated(argServiceName: string | null): void
    emitSelectedUserChanged(argUsername: string | null): void
    emitSessionOpened(argServiceName: string | null): void
    emitTimedLoginRequested(argUsername: string | null, argDelay: number): void

    // Own virtual methods of Gdm-1.0.Gdm.Greeter

    defaultLanguageNameChanged(argLanguageName: string | null): void
    defaultSessionNameChanged(argSessionName: string | null): void
    handleBeginAutoLogin(invocation: Gio.DBusMethodInvocation, argUsername: string | null): boolean
    handleGetTimedLoginDetails(invocation: Gio.DBusMethodInvocation): boolean
    handleSelectSession(invocation: Gio.DBusMethodInvocation, argSession: string | null): boolean
    handleSelectUser(invocation: Gio.DBusMethodInvocation, argUsername: string | null): boolean
    handleStartSessionWhenReady(invocation: Gio.DBusMethodInvocation, argServiceName: string | null, argShouldStartSession: boolean): boolean
    reauthenticated(argServiceName: string | null): void
    selectedUserChanged(argUsername: string | null): void
    sessionOpened(argServiceName: string | null): void
    timedLoginRequested(argUsername: string | null, argDelay: number): void

    // Own signals of Gdm-1.0.Gdm.Greeter

    connect(sigName: "default-language-name-changed", callback: Greeter.DefaultLanguageNameChangedSignalCallback): number
    on(sigName: "default-language-name-changed", callback: Greeter.DefaultLanguageNameChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "default-language-name-changed", callback: Greeter.DefaultLanguageNameChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "default-language-name-changed", callback: Greeter.DefaultLanguageNameChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "default-language-name-changed", ...args: any[]): void
    connect(sigName: "default-session-name-changed", callback: Greeter.DefaultSessionNameChangedSignalCallback): number
    on(sigName: "default-session-name-changed", callback: Greeter.DefaultSessionNameChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "default-session-name-changed", callback: Greeter.DefaultSessionNameChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "default-session-name-changed", callback: Greeter.DefaultSessionNameChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "default-session-name-changed", ...args: any[]): void
    connect(sigName: "handle-begin-auto-login", callback: Greeter.HandleBeginAutoLoginSignalCallback): number
    on(sigName: "handle-begin-auto-login", callback: Greeter.HandleBeginAutoLoginSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-begin-auto-login", callback: Greeter.HandleBeginAutoLoginSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-begin-auto-login", callback: Greeter.HandleBeginAutoLoginSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-begin-auto-login", p0: string | null, ...args: any[]): void
    connect(sigName: "handle-get-timed-login-details", callback: Greeter.HandleGetTimedLoginDetailsSignalCallback): number
    on(sigName: "handle-get-timed-login-details", callback: Greeter.HandleGetTimedLoginDetailsSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-get-timed-login-details", callback: Greeter.HandleGetTimedLoginDetailsSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-get-timed-login-details", callback: Greeter.HandleGetTimedLoginDetailsSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-get-timed-login-details", ...args: any[]): void
    connect(sigName: "handle-select-session", callback: Greeter.HandleSelectSessionSignalCallback): number
    on(sigName: "handle-select-session", callback: Greeter.HandleSelectSessionSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-select-session", callback: Greeter.HandleSelectSessionSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-select-session", callback: Greeter.HandleSelectSessionSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-select-session", p0: string | null, ...args: any[]): void
    connect(sigName: "handle-select-user", callback: Greeter.HandleSelectUserSignalCallback): number
    on(sigName: "handle-select-user", callback: Greeter.HandleSelectUserSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-select-user", callback: Greeter.HandleSelectUserSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-select-user", callback: Greeter.HandleSelectUserSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-select-user", p0: string | null, ...args: any[]): void
    connect(sigName: "handle-start-session-when-ready", callback: Greeter.HandleStartSessionWhenReadySignalCallback): number
    on(sigName: "handle-start-session-when-ready", callback: Greeter.HandleStartSessionWhenReadySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-start-session-when-ready", callback: Greeter.HandleStartSessionWhenReadySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-start-session-when-ready", callback: Greeter.HandleStartSessionWhenReadySignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-start-session-when-ready", p0: string | null, p1: boolean, ...args: any[]): void
    connect(sigName: "reauthenticated", callback: Greeter.ReauthenticatedSignalCallback): number
    on(sigName: "reauthenticated", callback: Greeter.ReauthenticatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reauthenticated", callback: Greeter.ReauthenticatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reauthenticated", callback: Greeter.ReauthenticatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "reauthenticated", ...args: any[]): void
    connect(sigName: "selected-user-changed", callback: Greeter.SelectedUserChangedSignalCallback): number
    on(sigName: "selected-user-changed", callback: Greeter.SelectedUserChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "selected-user-changed", callback: Greeter.SelectedUserChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "selected-user-changed", callback: Greeter.SelectedUserChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "selected-user-changed", ...args: any[]): void
    connect(sigName: "session-opened", callback: Greeter.SessionOpenedSignalCallback): number
    on(sigName: "session-opened", callback: Greeter.SessionOpenedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "session-opened", callback: Greeter.SessionOpenedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "session-opened", callback: Greeter.SessionOpenedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "session-opened", ...args: any[]): void
    connect(sigName: "timed-login-requested", callback: Greeter.TimedLoginRequestedSignalCallback): number
    on(sigName: "timed-login-requested", callback: Greeter.TimedLoginRequestedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "timed-login-requested", callback: Greeter.TimedLoginRequestedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "timed-login-requested", callback: Greeter.TimedLoginRequestedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "timed-login-requested", p0: number, ...args: any[]): void

    // Class property signals of Gdm-1.0.Gdm.Greeter

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Greeter extends GObject.Object {

    // Own properties of Gdm-1.0.Gdm.Greeter

    static name: string

    // Constructors of Gdm-1.0.Gdm.Greeter

    constructor(config?: Greeter.ConstructorProperties) 
    _init(config?: Greeter.ConstructorProperties): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

module Manager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-open-reauthentication-channel`
     */
    interface HandleOpenReauthenticationChannelSignalCallback {
        (object: Gio.DBusMethodInvocation, p0: string | null): boolean
    }

    /**
     * Signal callback interface for `handle-open-session`
     */
    interface HandleOpenSessionSignalCallback {
        (object: Gio.DBusMethodInvocation): boolean
    }

    /**
     * Signal callback interface for `handle-register-display`
     */
    interface HandleRegisterDisplaySignalCallback {
        (object: Gio.DBusMethodInvocation, p0: GLib.Variant): boolean
    }

    /**
     * Signal callback interface for `handle-register-session`
     */
    interface HandleRegisterSessionSignalCallback {
        (object: Gio.DBusMethodInvocation, p0: GLib.Variant): boolean
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
    __gtype__: number

    // Owm methods of Gdm-1.0.Gdm.Manager

    callOpenReauthenticationChannel(argUsername: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callOpenReauthenticationChannelFinish(outAddress: string | null, res: Gio.AsyncResult): boolean
    callOpenReauthenticationChannelSync(argUsername: string | null, outAddress: string | null, cancellable: Gio.Cancellable | null): boolean
    callOpenSession(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callOpenSessionFinish(outAddress: string | null, res: Gio.AsyncResult): boolean
    callOpenSessionSync(outAddress: string | null, cancellable: Gio.Cancellable | null): boolean
    callRegisterDisplay(argDetails: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callRegisterDisplayFinish(res: Gio.AsyncResult): boolean
    callRegisterDisplaySync(argDetails: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    callRegisterSession(argDetails: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callRegisterSessionFinish(res: Gio.AsyncResult): boolean
    callRegisterSessionSync(argDetails: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    completeOpenReauthenticationChannel(invocation: Gio.DBusMethodInvocation, address: string | null): void
    completeOpenSession(invocation: Gio.DBusMethodInvocation, address: string | null): void
    completeRegisterDisplay(invocation: Gio.DBusMethodInvocation): void
    completeRegisterSession(invocation: Gio.DBusMethodInvocation): void
    dupVersion(): string | null
    // Has conflict: getVersion(): string | null
    setVersion(value: string | null): void

    // Own virtual methods of Gdm-1.0.Gdm.Manager

    getVersion(): string | null
    handleOpenReauthenticationChannel(invocation: Gio.DBusMethodInvocation, argUsername: string | null): boolean
    handleOpenSession(invocation: Gio.DBusMethodInvocation): boolean
    handleRegisterDisplay(invocation: Gio.DBusMethodInvocation, argDetails: GLib.Variant): boolean
    handleRegisterSession(invocation: Gio.DBusMethodInvocation, argDetails: GLib.Variant): boolean

    // Own signals of Gdm-1.0.Gdm.Manager

    connect(sigName: "handle-open-reauthentication-channel", callback: Manager.HandleOpenReauthenticationChannelSignalCallback): number
    on(sigName: "handle-open-reauthentication-channel", callback: Manager.HandleOpenReauthenticationChannelSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-open-reauthentication-channel", callback: Manager.HandleOpenReauthenticationChannelSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-open-reauthentication-channel", callback: Manager.HandleOpenReauthenticationChannelSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-open-reauthentication-channel", p0: string | null, ...args: any[]): void
    connect(sigName: "handle-open-session", callback: Manager.HandleOpenSessionSignalCallback): number
    on(sigName: "handle-open-session", callback: Manager.HandleOpenSessionSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-open-session", callback: Manager.HandleOpenSessionSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-open-session", callback: Manager.HandleOpenSessionSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-open-session", ...args: any[]): void
    connect(sigName: "handle-register-display", callback: Manager.HandleRegisterDisplaySignalCallback): number
    on(sigName: "handle-register-display", callback: Manager.HandleRegisterDisplaySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-register-display", callback: Manager.HandleRegisterDisplaySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-register-display", callback: Manager.HandleRegisterDisplaySignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-register-display", p0: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-register-session", callback: Manager.HandleRegisterSessionSignalCallback): number
    on(sigName: "handle-register-session", callback: Manager.HandleRegisterSessionSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-register-session", callback: Manager.HandleRegisterSessionSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-register-session", callback: Manager.HandleRegisterSessionSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-register-session", p0: GLib.Variant, ...args: any[]): void

    // Class property signals of Gdm-1.0.Gdm.Manager

    connect(sigName: "notify::version", callback: (...args: any[]) => void): number
    on(sigName: "notify::version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Manager extends GObject.Object {

    // Own properties of Gdm-1.0.Gdm.Manager

    static name: string

    // Constructors of Gdm-1.0.Gdm.Manager

    constructor(config?: Manager.ConstructorProperties) 
    _init(config?: Manager.ConstructorProperties): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

module RemoteGreeter {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-disconnect`
     */
    interface HandleDisconnectSignalCallback {
        (object: Gio.DBusMethodInvocation): boolean
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface RemoteGreeter {

    // Own properties of Gdm-1.0.Gdm.RemoteGreeter

    __gtype__: number

    // Owm methods of Gdm-1.0.Gdm.RemoteGreeter

    callDisconnect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callDisconnectFinish(res: Gio.AsyncResult): boolean
    callDisconnectSync(cancellable: Gio.Cancellable | null): boolean
    completeDisconnect(invocation: Gio.DBusMethodInvocation): void

    // Own virtual methods of Gdm-1.0.Gdm.RemoteGreeter

    handleDisconnect(invocation: Gio.DBusMethodInvocation): boolean

    // Own signals of Gdm-1.0.Gdm.RemoteGreeter

    connect(sigName: "handle-disconnect", callback: RemoteGreeter.HandleDisconnectSignalCallback): number
    on(sigName: "handle-disconnect", callback: RemoteGreeter.HandleDisconnectSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-disconnect", callback: RemoteGreeter.HandleDisconnectSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-disconnect", callback: RemoteGreeter.HandleDisconnectSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-disconnect", ...args: any[]): void

    // Class property signals of Gdm-1.0.Gdm.RemoteGreeter

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class RemoteGreeter extends GObject.Object {

    // Own properties of Gdm-1.0.Gdm.RemoteGreeter

    static name: string

    // Constructors of Gdm-1.0.Gdm.RemoteGreeter

    constructor(config?: RemoteGreeter.ConstructorProperties) 
    _init(config?: RemoteGreeter.ConstructorProperties): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

module UserVerifier {

    // Signal callback interfaces

    /**
     * Signal callback interface for `conversation-started`
     */
    interface ConversationStartedSignalCallback {
        (object: string | null): void
    }

    /**
     * Signal callback interface for `conversation-stopped`
     */
    interface ConversationStoppedSignalCallback {
        (object: string | null): void
    }

    /**
     * Signal callback interface for `handle-answer-query`
     */
    interface HandleAnswerQuerySignalCallback {
        (object: Gio.DBusMethodInvocation, p0: string | null, p1: string | null): boolean
    }

    /**
     * Signal callback interface for `handle-begin-verification`
     */
    interface HandleBeginVerificationSignalCallback {
        (object: Gio.DBusMethodInvocation, p0: string | null): boolean
    }

    /**
     * Signal callback interface for `handle-begin-verification-for-user`
     */
    interface HandleBeginVerificationForUserSignalCallback {
        (object: Gio.DBusMethodInvocation, p0: string | null, p1: string | null): boolean
    }

    /**
     * Signal callback interface for `handle-cancel`
     */
    interface HandleCancelSignalCallback {
        (object: Gio.DBusMethodInvocation): boolean
    }

    /**
     * Signal callback interface for `handle-enable-extensions`
     */
    interface HandleEnableExtensionsSignalCallback {
        (object: Gio.DBusMethodInvocation, p0: string[]): boolean
    }

    /**
     * Signal callback interface for `info`
     */
    interface InfoSignalCallback {
        (object: string | null, p0: string | null): void
    }

    /**
     * Signal callback interface for `info-query`
     */
    interface InfoQuerySignalCallback {
        (object: string | null, p0: string | null): void
    }

    /**
     * Signal callback interface for `problem`
     */
    interface ProblemSignalCallback {
        (object: string | null, p0: string | null): void
    }

    /**
     * Signal callback interface for `reauthentication-started`
     */
    interface ReauthenticationStartedSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `reset`
     */
    interface ResetSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `secret-info-query`
     */
    interface SecretInfoQuerySignalCallback {
        (object: string | null, p0: string | null): void
    }

    /**
     * Signal callback interface for `service-unavailable`
     */
    interface ServiceUnavailableSignalCallback {
        (object: string | null, p0: string | null): void
    }

    /**
     * Signal callback interface for `verification-complete`
     */
    interface VerificationCompleteSignalCallback {
        (object: string | null): void
    }

    /**
     * Signal callback interface for `verification-failed`
     */
    interface VerificationFailedSignalCallback {
        (object: string | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface UserVerifier {

    // Own properties of Gdm-1.0.Gdm.UserVerifier

    __gtype__: number

    // Owm methods of Gdm-1.0.Gdm.UserVerifier

    callAnswerQuery(argServiceName: string | null, argAnswer: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callAnswerQueryFinish(res: Gio.AsyncResult): boolean
    callAnswerQuerySync(argServiceName: string | null, argAnswer: string | null, cancellable: Gio.Cancellable | null): boolean
    callBeginVerification(argServiceName: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callBeginVerificationFinish(res: Gio.AsyncResult): boolean
    callBeginVerificationForUser(argServiceName: string | null, argUsername: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callBeginVerificationForUserFinish(res: Gio.AsyncResult): boolean
    callBeginVerificationForUserSync(argServiceName: string | null, argUsername: string | null, cancellable: Gio.Cancellable | null): boolean
    callBeginVerificationSync(argServiceName: string | null, cancellable: Gio.Cancellable | null): boolean
    callCancel(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callCancelFinish(res: Gio.AsyncResult): boolean
    callCancelSync(cancellable: Gio.Cancellable | null): boolean
    callEnableExtensions(argExtensions: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callEnableExtensionsFinish(res: Gio.AsyncResult): boolean
    callEnableExtensionsSync(argExtensions: string | null, cancellable: Gio.Cancellable | null): boolean
    completeAnswerQuery(invocation: Gio.DBusMethodInvocation): void
    completeBeginVerification(invocation: Gio.DBusMethodInvocation): void
    completeBeginVerificationForUser(invocation: Gio.DBusMethodInvocation): void
    completeCancel(invocation: Gio.DBusMethodInvocation): void
    completeEnableExtensions(invocation: Gio.DBusMethodInvocation): void
    emitConversationStarted(argServiceName: string | null): void
    emitConversationStopped(argServiceName: string | null): void
    emitInfo(argServiceName: string | null, argInfo: string | null): void
    emitInfoQuery(argServiceName: string | null, argQuery: string | null): void
    emitProblem(argServiceName: string | null, argProblem: string | null): void
    emitReauthenticationStarted(argPidOfCaller: number): void
    emitReset(): void
    emitSecretInfoQuery(argServiceName: string | null, argQuery: string | null): void
    emitServiceUnavailable(argServiceName: string | null, argMessage: string | null): void
    emitVerificationComplete(argServiceName: string | null): void
    emitVerificationFailed(argServiceName: string | null): void

    // Own virtual methods of Gdm-1.0.Gdm.UserVerifier

    conversationStarted(argServiceName: string | null): void
    conversationStopped(argServiceName: string | null): void
    handleAnswerQuery(invocation: Gio.DBusMethodInvocation, argServiceName: string | null, argAnswer: string | null): boolean
    handleBeginVerification(invocation: Gio.DBusMethodInvocation, argServiceName: string | null): boolean
    handleBeginVerificationForUser(invocation: Gio.DBusMethodInvocation, argServiceName: string | null, argUsername: string | null): boolean
    handleCancel(invocation: Gio.DBusMethodInvocation): boolean
    handleEnableExtensions(invocation: Gio.DBusMethodInvocation, argExtensions: string | null): boolean
    info(argServiceName: string | null, argInfo: string | null): void
    infoQuery(argServiceName: string | null, argQuery: string | null): void
    problem(argServiceName: string | null, argProblem: string | null): void
    reauthenticationStarted(argPidOfCaller: number): void
    reset(): void
    secretInfoQuery(argServiceName: string | null, argQuery: string | null): void
    serviceUnavailable(argServiceName: string | null, argMessage: string | null): void
    verificationComplete(argServiceName: string | null): void
    verificationFailed(argServiceName: string | null): void

    // Own signals of Gdm-1.0.Gdm.UserVerifier

    connect(sigName: "conversation-started", callback: UserVerifier.ConversationStartedSignalCallback): number
    on(sigName: "conversation-started", callback: UserVerifier.ConversationStartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "conversation-started", callback: UserVerifier.ConversationStartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "conversation-started", callback: UserVerifier.ConversationStartedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "conversation-started", ...args: any[]): void
    connect(sigName: "conversation-stopped", callback: UserVerifier.ConversationStoppedSignalCallback): number
    on(sigName: "conversation-stopped", callback: UserVerifier.ConversationStoppedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "conversation-stopped", callback: UserVerifier.ConversationStoppedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "conversation-stopped", callback: UserVerifier.ConversationStoppedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "conversation-stopped", ...args: any[]): void
    connect(sigName: "handle-answer-query", callback: UserVerifier.HandleAnswerQuerySignalCallback): number
    on(sigName: "handle-answer-query", callback: UserVerifier.HandleAnswerQuerySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-answer-query", callback: UserVerifier.HandleAnswerQuerySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-answer-query", callback: UserVerifier.HandleAnswerQuerySignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-answer-query", p0: string | null, p1: string | null, ...args: any[]): void
    connect(sigName: "handle-begin-verification", callback: UserVerifier.HandleBeginVerificationSignalCallback): number
    on(sigName: "handle-begin-verification", callback: UserVerifier.HandleBeginVerificationSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-begin-verification", callback: UserVerifier.HandleBeginVerificationSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-begin-verification", callback: UserVerifier.HandleBeginVerificationSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-begin-verification", p0: string | null, ...args: any[]): void
    connect(sigName: "handle-begin-verification-for-user", callback: UserVerifier.HandleBeginVerificationForUserSignalCallback): number
    on(sigName: "handle-begin-verification-for-user", callback: UserVerifier.HandleBeginVerificationForUserSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-begin-verification-for-user", callback: UserVerifier.HandleBeginVerificationForUserSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-begin-verification-for-user", callback: UserVerifier.HandleBeginVerificationForUserSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-begin-verification-for-user", p0: string | null, p1: string | null, ...args: any[]): void
    connect(sigName: "handle-cancel", callback: UserVerifier.HandleCancelSignalCallback): number
    on(sigName: "handle-cancel", callback: UserVerifier.HandleCancelSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-cancel", callback: UserVerifier.HandleCancelSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-cancel", callback: UserVerifier.HandleCancelSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-cancel", ...args: any[]): void
    connect(sigName: "handle-enable-extensions", callback: UserVerifier.HandleEnableExtensionsSignalCallback): number
    on(sigName: "handle-enable-extensions", callback: UserVerifier.HandleEnableExtensionsSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-enable-extensions", callback: UserVerifier.HandleEnableExtensionsSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-enable-extensions", callback: UserVerifier.HandleEnableExtensionsSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-enable-extensions", p0: string[], ...args: any[]): void
    connect(sigName: "info", callback: UserVerifier.InfoSignalCallback): number
    on(sigName: "info", callback: UserVerifier.InfoSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "info", callback: UserVerifier.InfoSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "info", callback: UserVerifier.InfoSignalCallback): NodeJS.EventEmitter
    emit(sigName: "info", p0: string | null, ...args: any[]): void
    connect(sigName: "info-query", callback: UserVerifier.InfoQuerySignalCallback): number
    on(sigName: "info-query", callback: UserVerifier.InfoQuerySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "info-query", callback: UserVerifier.InfoQuerySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "info-query", callback: UserVerifier.InfoQuerySignalCallback): NodeJS.EventEmitter
    emit(sigName: "info-query", p0: string | null, ...args: any[]): void
    connect(sigName: "problem", callback: UserVerifier.ProblemSignalCallback): number
    on(sigName: "problem", callback: UserVerifier.ProblemSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "problem", callback: UserVerifier.ProblemSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "problem", callback: UserVerifier.ProblemSignalCallback): NodeJS.EventEmitter
    emit(sigName: "problem", p0: string | null, ...args: any[]): void
    connect(sigName: "reauthentication-started", callback: UserVerifier.ReauthenticationStartedSignalCallback): number
    on(sigName: "reauthentication-started", callback: UserVerifier.ReauthenticationStartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reauthentication-started", callback: UserVerifier.ReauthenticationStartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reauthentication-started", callback: UserVerifier.ReauthenticationStartedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "reauthentication-started", ...args: any[]): void
    connect(sigName: "reset", callback: UserVerifier.ResetSignalCallback): number
    on(sigName: "reset", callback: UserVerifier.ResetSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "reset", callback: UserVerifier.ResetSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "reset", callback: UserVerifier.ResetSignalCallback): NodeJS.EventEmitter
    emit(sigName: "reset", ...args: any[]): void
    connect(sigName: "secret-info-query", callback: UserVerifier.SecretInfoQuerySignalCallback): number
    on(sigName: "secret-info-query", callback: UserVerifier.SecretInfoQuerySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "secret-info-query", callback: UserVerifier.SecretInfoQuerySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "secret-info-query", callback: UserVerifier.SecretInfoQuerySignalCallback): NodeJS.EventEmitter
    emit(sigName: "secret-info-query", p0: string | null, ...args: any[]): void
    connect(sigName: "service-unavailable", callback: UserVerifier.ServiceUnavailableSignalCallback): number
    on(sigName: "service-unavailable", callback: UserVerifier.ServiceUnavailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "service-unavailable", callback: UserVerifier.ServiceUnavailableSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "service-unavailable", callback: UserVerifier.ServiceUnavailableSignalCallback): NodeJS.EventEmitter
    emit(sigName: "service-unavailable", p0: string | null, ...args: any[]): void
    connect(sigName: "verification-complete", callback: UserVerifier.VerificationCompleteSignalCallback): number
    on(sigName: "verification-complete", callback: UserVerifier.VerificationCompleteSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "verification-complete", callback: UserVerifier.VerificationCompleteSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "verification-complete", callback: UserVerifier.VerificationCompleteSignalCallback): NodeJS.EventEmitter
    emit(sigName: "verification-complete", ...args: any[]): void
    connect(sigName: "verification-failed", callback: UserVerifier.VerificationFailedSignalCallback): number
    on(sigName: "verification-failed", callback: UserVerifier.VerificationFailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "verification-failed", callback: UserVerifier.VerificationFailedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "verification-failed", callback: UserVerifier.VerificationFailedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "verification-failed", ...args: any[]): void

    // Class property signals of Gdm-1.0.Gdm.UserVerifier

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class UserVerifier extends GObject.Object {

    // Own properties of Gdm-1.0.Gdm.UserVerifier

    static name: string

    // Constructors of Gdm-1.0.Gdm.UserVerifier

    constructor(config?: UserVerifier.ConstructorProperties) 
    _init(config?: UserVerifier.ConstructorProperties): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

module UserVerifierChoiceList {

    // Signal callback interfaces

    /**
     * Signal callback interface for `choice-query`
     */
    interface ChoiceQuerySignalCallback {
        (object: string | null, p0: string | null, p1: GLib.Variant): void
    }

    /**
     * Signal callback interface for `handle-select-choice`
     */
    interface HandleSelectChoiceSignalCallback {
        (object: Gio.DBusMethodInvocation, p0: string | null, p1: string | null): boolean
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface UserVerifierChoiceList {

    // Own properties of Gdm-1.0.Gdm.UserVerifierChoiceList

    __gtype__: number

    // Owm methods of Gdm-1.0.Gdm.UserVerifierChoiceList

    callSelectChoice(argServiceName: string | null, argChoice: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callSelectChoiceFinish(res: Gio.AsyncResult): boolean
    callSelectChoiceSync(argServiceName: string | null, argChoice: string | null, cancellable: Gio.Cancellable | null): boolean
    completeSelectChoice(invocation: Gio.DBusMethodInvocation): void
    emitChoiceQuery(argServiceName: string | null, argPromptMessage: string | null, argList: GLib.Variant): void

    // Own virtual methods of Gdm-1.0.Gdm.UserVerifierChoiceList

    choiceQuery(argServiceName: string | null, argPromptMessage: string | null, argList: GLib.Variant): void
    handleSelectChoice(invocation: Gio.DBusMethodInvocation, argServiceName: string | null, argChoice: string | null): boolean

    // Own signals of Gdm-1.0.Gdm.UserVerifierChoiceList

    connect(sigName: "choice-query", callback: UserVerifierChoiceList.ChoiceQuerySignalCallback): number
    on(sigName: "choice-query", callback: UserVerifierChoiceList.ChoiceQuerySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "choice-query", callback: UserVerifierChoiceList.ChoiceQuerySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "choice-query", callback: UserVerifierChoiceList.ChoiceQuerySignalCallback): NodeJS.EventEmitter
    emit(sigName: "choice-query", p0: string | null, p1: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-select-choice", callback: UserVerifierChoiceList.HandleSelectChoiceSignalCallback): number
    on(sigName: "handle-select-choice", callback: UserVerifierChoiceList.HandleSelectChoiceSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-select-choice", callback: UserVerifierChoiceList.HandleSelectChoiceSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-select-choice", callback: UserVerifierChoiceList.HandleSelectChoiceSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-select-choice", p0: string | null, p1: string | null, ...args: any[]): void

    // Class property signals of Gdm-1.0.Gdm.UserVerifierChoiceList

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class UserVerifierChoiceList extends GObject.Object {

    // Own properties of Gdm-1.0.Gdm.UserVerifierChoiceList

    static name: string

    // Constructors of Gdm-1.0.Gdm.UserVerifierChoiceList

    constructor(config?: UserVerifierChoiceList.ConstructorProperties) 
    _init(config?: UserVerifierChoiceList.ConstructorProperties): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

module WorkerManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-choice-list-query`
     */
    interface HandleChoiceListQuerySignalCallback {
        (object: Gio.DBusMethodInvocation, p0: string | null, p1: string | null, p2: GLib.Variant): boolean
    }

    /**
     * Signal callback interface for `handle-hello`
     */
    interface HandleHelloSignalCallback {
        (object: Gio.DBusMethodInvocation): boolean
    }

    /**
     * Signal callback interface for `handle-info`
     */
    interface HandleInfoSignalCallback {
        (object: Gio.DBusMethodInvocation, p0: string | null, p1: string | null): boolean
    }

    /**
     * Signal callback interface for `handle-info-query`
     */
    interface HandleInfoQuerySignalCallback {
        (object: Gio.DBusMethodInvocation, p0: string | null, p1: string | null): boolean
    }

    /**
     * Signal callback interface for `handle-problem`
     */
    interface HandleProblemSignalCallback {
        (object: Gio.DBusMethodInvocation, p0: string | null, p1: string | null): boolean
    }

    /**
     * Signal callback interface for `handle-secret-info-query`
     */
    interface HandleSecretInfoQuerySignalCallback {
        (object: Gio.DBusMethodInvocation, p0: string | null, p1: string | null): boolean
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface WorkerManager {

    // Own properties of Gdm-1.0.Gdm.WorkerManager

    __gtype__: number

    // Owm methods of Gdm-1.0.Gdm.WorkerManager

    callChoiceListQuery(argServiceName: string | null, argPromptMessage: string | null, argQuery: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callChoiceListQueryFinish(outAnswer: string | null, res: Gio.AsyncResult): boolean
    callChoiceListQuerySync(argServiceName: string | null, argPromptMessage: string | null, argQuery: GLib.Variant, outAnswer: string | null, cancellable: Gio.Cancellable | null): boolean
    callHello(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callHelloFinish(res: Gio.AsyncResult): boolean
    callHelloSync(cancellable: Gio.Cancellable | null): boolean
    callInfo(argServiceName: string | null, argInfo: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callInfoFinish(res: Gio.AsyncResult): boolean
    callInfoQuery(argServiceName: string | null, argQuery: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callInfoQueryFinish(outAnswer: string | null, res: Gio.AsyncResult): boolean
    callInfoQuerySync(argServiceName: string | null, argQuery: string | null, outAnswer: string | null, cancellable: Gio.Cancellable | null): boolean
    callInfoSync(argServiceName: string | null, argInfo: string | null, cancellable: Gio.Cancellable | null): boolean
    callProblem(argServiceName: string | null, argProblem: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callProblemFinish(res: Gio.AsyncResult): boolean
    callProblemSync(argServiceName: string | null, argProblem: string | null, cancellable: Gio.Cancellable | null): boolean
    callSecretInfoQuery(argServiceName: string | null, argQuery: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callSecretInfoQueryFinish(outAnswer: string | null, res: Gio.AsyncResult): boolean
    callSecretInfoQuerySync(argServiceName: string | null, argQuery: string | null, outAnswer: string | null, cancellable: Gio.Cancellable | null): boolean
    completeChoiceListQuery(invocation: Gio.DBusMethodInvocation, answer: string | null): void
    completeHello(invocation: Gio.DBusMethodInvocation): void
    completeInfo(invocation: Gio.DBusMethodInvocation): void
    completeInfoQuery(invocation: Gio.DBusMethodInvocation, answer: string | null): void
    completeProblem(invocation: Gio.DBusMethodInvocation): void
    completeSecretInfoQuery(invocation: Gio.DBusMethodInvocation, answer: string | null): void

    // Own virtual methods of Gdm-1.0.Gdm.WorkerManager

    handleChoiceListQuery(invocation: Gio.DBusMethodInvocation, argServiceName: string | null, argPromptMessage: string | null, argQuery: GLib.Variant): boolean
    handleHello(invocation: Gio.DBusMethodInvocation): boolean
    handleInfo(invocation: Gio.DBusMethodInvocation, argServiceName: string | null, argInfo: string | null): boolean
    handleInfoQuery(invocation: Gio.DBusMethodInvocation, argServiceName: string | null, argQuery: string | null): boolean
    handleProblem(invocation: Gio.DBusMethodInvocation, argServiceName: string | null, argProblem: string | null): boolean
    handleSecretInfoQuery(invocation: Gio.DBusMethodInvocation, argServiceName: string | null, argQuery: string | null): boolean

    // Own signals of Gdm-1.0.Gdm.WorkerManager

    connect(sigName: "handle-choice-list-query", callback: WorkerManager.HandleChoiceListQuerySignalCallback): number
    on(sigName: "handle-choice-list-query", callback: WorkerManager.HandleChoiceListQuerySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-choice-list-query", callback: WorkerManager.HandleChoiceListQuerySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-choice-list-query", callback: WorkerManager.HandleChoiceListQuerySignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-choice-list-query", p0: string | null, p1: string | null, p2: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-hello", callback: WorkerManager.HandleHelloSignalCallback): number
    on(sigName: "handle-hello", callback: WorkerManager.HandleHelloSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-hello", callback: WorkerManager.HandleHelloSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-hello", callback: WorkerManager.HandleHelloSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-hello", ...args: any[]): void
    connect(sigName: "handle-info", callback: WorkerManager.HandleInfoSignalCallback): number
    on(sigName: "handle-info", callback: WorkerManager.HandleInfoSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-info", callback: WorkerManager.HandleInfoSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-info", callback: WorkerManager.HandleInfoSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-info", p0: string | null, p1: string | null, ...args: any[]): void
    connect(sigName: "handle-info-query", callback: WorkerManager.HandleInfoQuerySignalCallback): number
    on(sigName: "handle-info-query", callback: WorkerManager.HandleInfoQuerySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-info-query", callback: WorkerManager.HandleInfoQuerySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-info-query", callback: WorkerManager.HandleInfoQuerySignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-info-query", p0: string | null, p1: string | null, ...args: any[]): void
    connect(sigName: "handle-problem", callback: WorkerManager.HandleProblemSignalCallback): number
    on(sigName: "handle-problem", callback: WorkerManager.HandleProblemSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-problem", callback: WorkerManager.HandleProblemSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-problem", callback: WorkerManager.HandleProblemSignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-problem", p0: string | null, p1: string | null, ...args: any[]): void
    connect(sigName: "handle-secret-info-query", callback: WorkerManager.HandleSecretInfoQuerySignalCallback): number
    on(sigName: "handle-secret-info-query", callback: WorkerManager.HandleSecretInfoQuerySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "handle-secret-info-query", callback: WorkerManager.HandleSecretInfoQuerySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "handle-secret-info-query", callback: WorkerManager.HandleSecretInfoQuerySignalCallback): NodeJS.EventEmitter
    emit(sigName: "handle-secret-info-query", p0: string | null, p1: string | null, ...args: any[]): void

    // Class property signals of Gdm-1.0.Gdm.WorkerManager

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class WorkerManager extends GObject.Object {

    // Own properties of Gdm-1.0.Gdm.WorkerManager

    static name: string

    // Constructors of Gdm-1.0.Gdm.WorkerManager

    constructor(config?: WorkerManager.ConstructorProperties) 
    _init(config?: WorkerManager.ConstructorProperties): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

module ChooserProxy {

    // Constructor properties interface

    interface ConstructorProperties extends Chooser.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface ChooserProxy extends Chooser, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Own properties of Gdm-1.0.Gdm.ChooserProxy

    __gtype__: number

    // Class property signals of Gdm-1.0.Gdm.ChooserProxy

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

    // Constructors of Gdm-1.0.Gdm.ChooserProxy

    constructor(config?: ChooserProxy.ConstructorProperties) 
    _init(config?: ChooserProxy.ConstructorProperties): void
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string | null, interfaceName: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

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
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string | null, interfaceName: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
}

module ChooserSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Chooser.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface ChooserSkeleton extends Chooser, Gio.DBusInterface {

    // Own properties of Gdm-1.0.Gdm.ChooserSkeleton

    __gtype__: number

    // Conflicting methods

    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    getInfo(): Gio.DBusInterfaceInfo
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     * @returns A #GDBusInterfaceInfo (never %NULL). Do not free.
     */
    getInfo(): Gio.DBusInterfaceInfo

    // Overloads of getInfo

    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    getInfo(): Gio.DBusInterfaceInfo

    // Class property signals of Gdm-1.0.Gdm.ChooserSkeleton

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

    // Own properties of Gdm-1.0.Gdm.Client

    __gtype__: number

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
     * @returns a #GdmChooser
     */
    getChooserFinish(result: Gio.AsyncResult): Chooser
    /**
     * Gets a #GdmChooser object that can be used
     * to do do various XDMCP chooser related tasks, such
     * as selecting a host or disconnecting.
     * @param cancellable a #GCancellable
     * @returns #GdmChooser or %NULL if caller is not a chooser
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
     * @returns a #GdmGreeter
     */
    getGreeterFinish(result: Gio.AsyncResult): Greeter
    /**
     * Gets a #GdmGreeter object that can be used
     * to do do various login screen related tasks, such
     * as selecting a users session, and starting that
     * session.
     * @param cancellable a #GCancellable
     * @returns #GdmGreeter or %NULL if caller is not a greeter
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
     * @returns a #GdmRemoteGreeter
     */
    getRemoteGreeterFinish(result: Gio.AsyncResult): RemoteGreeter
    /**
     * Gets a #GdmRemoteGreeter object that can be used
     * to do do various remote login screen related tasks,
     * such as disconnecting.
     * @param cancellable a #GCancellable
     * @returns #GdmRemoteGreeter or %NULL if caller is not remote
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
     * @returns #GdmUserVerifierChoiceList or %NULL if user verifier isn't yet fetched, or daemon doesn't support choice lists
     */
    getUserVerifierChoiceList(): UserVerifierChoiceList
    /**
     * Finishes an operation started with
     * gdm_client_get_user_verifier().
     * @param result The #GAsyncResult from the callback
     * @returns a #GdmUserVerifier
     */
    getUserVerifierFinish(result: Gio.AsyncResult): UserVerifier
    /**
     * Gets a #GdmUserVerifier object that can be used to
     * verify a user's local account.
     * @param cancellable a #GCancellable
     * @returns #GdmUserVerifier or %NULL if not connected
     */
    getUserVerifierSync(cancellable: Gio.Cancellable | null): UserVerifier
    /**
     * Gets a #GdmUserVerifier object that can be used to
     * reauthenticate an already logged in user.
     * @param username user to reauthenticate
     * @param cancellable a #GCancellable
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    openReauthenticationChannel(username: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with
     * gdm_client_open_reauthentication_channel().
     * @param result The #GAsyncResult from the callback
     * @returns a #GdmUserVerifier
     */
    openReauthenticationChannelFinish(result: Gio.AsyncResult): UserVerifier
    /**
     * Gets a #GdmUserVerifier object that can be used to
     * reauthenticate an already logged in user. Free with
     * g_object_unref to close reauthentication channel.
     * @param username user to reauthenticate
     * @param cancellable a #GCancellable
     * @returns #GdmUserVerifier or %NULL if @username is not already logged in.
     */
    openReauthenticationChannelSync(username: string | null, cancellable: Gio.Cancellable | null): UserVerifier
    /**
     * Enables GDM's pam extensions.  Currently, only
     * org.gnome.DisplayManager.UserVerifier.ChoiceList is supported.
     * @param extensions a list of extensions
     */
    setEnabledExtensions(extensions: string[]): void

    // Class property signals of Gdm-1.0.Gdm.Client

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Client extends GObject.Object {

    // Own properties of Gdm-1.0.Gdm.Client

    static name: string

    // Constructors of Gdm-1.0.Gdm.Client

    constructor(config?: Client.ConstructorProperties) 
    constructor() 
    static new(): Client
    _init(config?: Client.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

module GreeterProxy {

    // Constructor properties interface

    interface ConstructorProperties extends Greeter.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

interface GreeterProxy extends Greeter, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

    // Own properties of Gdm-1.0.Gdm.GreeterProxy

    __gtype__: number

    // Class property signals of Gdm-1.0.Gdm.GreeterProxy

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

    // Constructors of Gdm-1.0.Gdm.GreeterProxy

    constructor(config?: GreeterProxy.ConstructorProperties) 
    _init(config?: GreeterProxy.ConstructorProperties): void
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string | null, interfaceName: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

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
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string | null, interfaceName: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
}

module GreeterSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Greeter.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface GreeterSkeleton extends Greeter, Gio.DBusInterface {

    // Own properties of Gdm-1.0.Gdm.GreeterSkeleton

    __gtype__: number

    // Conflicting methods

    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    getInfo(): Gio.DBusInterfaceInfo
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     * @returns A #GDBusInterfaceInfo (never %NULL). Do not free.
     */
    getInfo(): Gio.DBusInterfaceInfo

    // Overloads of getInfo

    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    getInfo(): Gio.DBusInterfaceInfo

    // Class property signals of Gdm-1.0.Gdm.GreeterSkeleton

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

    // Own properties of Gdm-1.0.Gdm.ManagerProxy

    __gtype__: number

    // Class property signals of Gdm-1.0.Gdm.ManagerProxy

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

    // Constructors of Gdm-1.0.Gdm.ManagerProxy

    constructor(config?: ManagerProxy.ConstructorProperties) 
    _init(config?: ManagerProxy.ConstructorProperties): void
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string | null, interfaceName: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

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
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string | null, interfaceName: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
}

module ManagerSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends Manager.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface ManagerSkeleton extends Manager, Gio.DBusInterface {

    // Own properties of Gdm-1.0.Gdm.ManagerSkeleton

    __gtype__: number

    // Conflicting methods

    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    getInfo(): Gio.DBusInterfaceInfo
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     * @returns A #GDBusInterfaceInfo (never %NULL). Do not free.
     */
    getInfo(): Gio.DBusInterfaceInfo

    // Overloads of getInfo

    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    getInfo(): Gio.DBusInterfaceInfo

    // Class property signals of Gdm-1.0.Gdm.ManagerSkeleton

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

    // Own properties of Gdm-1.0.Gdm.RemoteGreeterProxy

    __gtype__: number

    // Class property signals of Gdm-1.0.Gdm.RemoteGreeterProxy

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

    // Constructors of Gdm-1.0.Gdm.RemoteGreeterProxy

    constructor(config?: RemoteGreeterProxy.ConstructorProperties) 
    _init(config?: RemoteGreeterProxy.ConstructorProperties): void
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string | null, interfaceName: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

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
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string | null, interfaceName: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
}

module RemoteGreeterSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends RemoteGreeter.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface RemoteGreeterSkeleton extends RemoteGreeter, Gio.DBusInterface {

    // Own properties of Gdm-1.0.Gdm.RemoteGreeterSkeleton

    __gtype__: number

    // Conflicting methods

    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    getInfo(): Gio.DBusInterfaceInfo
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     * @returns A #GDBusInterfaceInfo (never %NULL). Do not free.
     */
    getInfo(): Gio.DBusInterfaceInfo

    // Overloads of getInfo

    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    getInfo(): Gio.DBusInterfaceInfo

    // Class property signals of Gdm-1.0.Gdm.RemoteGreeterSkeleton

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

    // Own properties of Gdm-1.0.Gdm.UserVerifierChoiceListProxy

    __gtype__: number

    // Class property signals of Gdm-1.0.Gdm.UserVerifierChoiceListProxy

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

    // Constructors of Gdm-1.0.Gdm.UserVerifierChoiceListProxy

    constructor(config?: UserVerifierChoiceListProxy.ConstructorProperties) 
    _init(config?: UserVerifierChoiceListProxy.ConstructorProperties): void
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string | null, interfaceName: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

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
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string | null, interfaceName: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
}

module UserVerifierChoiceListSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends UserVerifierChoiceList.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface UserVerifierChoiceListSkeleton extends UserVerifierChoiceList, Gio.DBusInterface {

    // Own properties of Gdm-1.0.Gdm.UserVerifierChoiceListSkeleton

    __gtype__: number

    // Conflicting methods

    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    getInfo(): Gio.DBusInterfaceInfo
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     * @returns A #GDBusInterfaceInfo (never %NULL). Do not free.
     */
    getInfo(): Gio.DBusInterfaceInfo

    // Overloads of getInfo

    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    getInfo(): Gio.DBusInterfaceInfo

    // Class property signals of Gdm-1.0.Gdm.UserVerifierChoiceListSkeleton

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

    // Own properties of Gdm-1.0.Gdm.UserVerifierProxy

    __gtype__: number

    // Class property signals of Gdm-1.0.Gdm.UserVerifierProxy

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

    // Constructors of Gdm-1.0.Gdm.UserVerifierProxy

    constructor(config?: UserVerifierProxy.ConstructorProperties) 
    _init(config?: UserVerifierProxy.ConstructorProperties): void
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string | null, interfaceName: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

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
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string | null, interfaceName: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
}

module UserVerifierSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends UserVerifier.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface UserVerifierSkeleton extends UserVerifier, Gio.DBusInterface {

    // Own properties of Gdm-1.0.Gdm.UserVerifierSkeleton

    __gtype__: number

    // Conflicting methods

    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    getInfo(): Gio.DBusInterfaceInfo
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     * @returns A #GDBusInterfaceInfo (never %NULL). Do not free.
     */
    getInfo(): Gio.DBusInterfaceInfo

    // Overloads of getInfo

    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    getInfo(): Gio.DBusInterfaceInfo

    // Class property signals of Gdm-1.0.Gdm.UserVerifierSkeleton

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

    // Own properties of Gdm-1.0.Gdm.WorkerManagerProxy

    __gtype__: number

    // Class property signals of Gdm-1.0.Gdm.WorkerManagerProxy

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

    // Constructors of Gdm-1.0.Gdm.WorkerManagerProxy

    constructor(config?: WorkerManagerProxy.ConstructorProperties) 
    _init(config?: WorkerManagerProxy.ConstructorProperties): void
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string | null, interfaceName: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

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
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string | null, interfaceName: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
}

module WorkerManagerSkeleton {

    // Constructor properties interface

    interface ConstructorProperties extends WorkerManager.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

interface WorkerManagerSkeleton extends WorkerManager, Gio.DBusInterface {

    // Own properties of Gdm-1.0.Gdm.WorkerManagerSkeleton

    __gtype__: number

    // Conflicting methods

    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    getInfo(): Gio.DBusInterfaceInfo
    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     * @returns A #GDBusInterfaceInfo (never %NULL). Do not free.
     */
    getInfo(): Gio.DBusInterfaceInfo

    // Overloads of getInfo

    /**
     * Gets D-Bus introspection information for the D-Bus interface
     * implemented by `interface_`.
     * @virtual 
     * @returns A #GDBusInterfaceInfo. Do not free.
     */
    getInfo(): Gio.DBusInterfaceInfo

    // Class property signals of Gdm-1.0.Gdm.WorkerManagerSkeleton

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
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

    // Constructors of Gdm-1.0.Gdm.WorkerManagerSkeleton

    constructor(config?: WorkerManagerSkeleton.ConstructorProperties) 
    _init(config?: WorkerManagerSkeleton.ConstructorProperties): void
}

interface ChooserIface {

    // Own fields of Gdm-1.0.Gdm.ChooserIface

    parentIface: GObject.TypeInterface
    handleDisconnect: (object: Chooser, invocation: Gio.DBusMethodInvocation) => boolean
    handleSelectHostname: (object: Chooser, invocation: Gio.DBusMethodInvocation, argHostname: string | null) => boolean
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
    handleBeginAutoLogin: (object: Greeter, invocation: Gio.DBusMethodInvocation, argUsername: string | null) => boolean
    handleGetTimedLoginDetails: (object: Greeter, invocation: Gio.DBusMethodInvocation) => boolean
    handleSelectSession: (object: Greeter, invocation: Gio.DBusMethodInvocation, argSession: string | null) => boolean
    handleSelectUser: (object: Greeter, invocation: Gio.DBusMethodInvocation, argUsername: string | null) => boolean
    handleStartSessionWhenReady: (object: Greeter, invocation: Gio.DBusMethodInvocation, argServiceName: string | null, argShouldStartSession: boolean) => boolean
    defaultLanguageNameChanged: (object: Greeter, argLanguageName: string | null) => void
    defaultSessionNameChanged: (object: Greeter, argSessionName: string | null) => void
    reauthenticated: (object: Greeter, argServiceName: string | null) => void
    selectedUserChanged: (object: Greeter, argUsername: string | null) => void
    sessionOpened: (object: Greeter, argServiceName: string | null) => void
    timedLoginRequested: (object: Greeter, argUsername: string | null, argDelay: number) => void
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
    handleOpenReauthenticationChannel: (object: Manager, invocation: Gio.DBusMethodInvocation, argUsername: string | null) => boolean
    handleOpenSession: (object: Manager, invocation: Gio.DBusMethodInvocation) => boolean
    handleRegisterDisplay: (object: Manager, invocation: Gio.DBusMethodInvocation, argDetails: GLib.Variant) => boolean
    handleRegisterSession: (object: Manager, invocation: Gio.DBusMethodInvocation, argDetails: GLib.Variant) => boolean
    getVersion: (object: Manager) => string | null
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
    handleSelectChoice: (object: UserVerifierChoiceList, invocation: Gio.DBusMethodInvocation, argServiceName: string | null, argChoice: string | null) => boolean
    choiceQuery: (object: UserVerifierChoiceList, argServiceName: string | null, argPromptMessage: string | null, argList: GLib.Variant) => void
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
    handleAnswerQuery: (object: UserVerifier, invocation: Gio.DBusMethodInvocation, argServiceName: string | null, argAnswer: string | null) => boolean
    handleBeginVerification: (object: UserVerifier, invocation: Gio.DBusMethodInvocation, argServiceName: string | null) => boolean
    handleBeginVerificationForUser: (object: UserVerifier, invocation: Gio.DBusMethodInvocation, argServiceName: string | null, argUsername: string | null) => boolean
    handleCancel: (object: UserVerifier, invocation: Gio.DBusMethodInvocation) => boolean
    handleEnableExtensions: (object: UserVerifier, invocation: Gio.DBusMethodInvocation, argExtensions: string | null) => boolean
    conversationStarted: (object: UserVerifier, argServiceName: string | null) => void
    conversationStopped: (object: UserVerifier, argServiceName: string | null) => void
    info: (object: UserVerifier, argServiceName: string | null, argInfo: string | null) => void
    infoQuery: (object: UserVerifier, argServiceName: string | null, argQuery: string | null) => void
    problem: (object: UserVerifier, argServiceName: string | null, argProblem: string | null) => void
    reauthenticationStarted: (object: UserVerifier, argPidOfCaller: number) => void
    reset: (object: UserVerifier) => void
    secretInfoQuery: (object: UserVerifier, argServiceName: string | null, argQuery: string | null) => void
    serviceUnavailable: (object: UserVerifier, argServiceName: string | null, argMessage: string | null) => void
    verificationComplete: (object: UserVerifier, argServiceName: string | null) => void
    verificationFailed: (object: UserVerifier, argServiceName: string | null) => void
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
    handleChoiceListQuery: (object: WorkerManager, invocation: Gio.DBusMethodInvocation, argServiceName: string | null, argPromptMessage: string | null, argQuery: GLib.Variant) => boolean
    handleHello: (object: WorkerManager, invocation: Gio.DBusMethodInvocation) => boolean
    handleInfo: (object: WorkerManager, invocation: Gio.DBusMethodInvocation, argServiceName: string | null, argInfo: string | null) => boolean
    handleInfoQuery: (object: WorkerManager, invocation: Gio.DBusMethodInvocation, argServiceName: string | null, argQuery: string | null) => boolean
    handleProblem: (object: WorkerManager, invocation: Gio.DBusMethodInvocation, argServiceName: string | null, argProblem: string | null) => boolean
    handleSecretInfoQuery: (object: WorkerManager, invocation: Gio.DBusMethodInvocation, argServiceName: string | null, argQuery: string | null) => boolean
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