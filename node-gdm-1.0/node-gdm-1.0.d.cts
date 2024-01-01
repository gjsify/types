
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gdm-1.0-import.d.ts';
    
/**
 * Gdm-1.0
 */

import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

export enum ClientError {
    CLIENT_ERROR_GENERIC,
}
export function chooserInterfaceInfo(): Gio.DBusInterfaceInfo
export function chooserOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Reads /usr/share/xsessions and other relevant places for possible sessions
 * to log into and returns the complete list.
 * @returns a %NULL terminated list of session ids
 */
export function getSessionIds(): string[]
/**
 * Takes an xsession id and returns the name and comment about it.
 * @param id an id from gdm_get_session_ids()
 * @returns The session name if found, or %NULL otherwise
 */
export function getSessionNameAndDescription(id: string): [ /* returnType */ string | null, /* description */ string | null ]
export function gotoLoginSessionSync(cancellable: Gio.Cancellable | null): boolean
export function greeterInterfaceInfo(): Gio.DBusInterfaceInfo
export function greeterOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function managerInterfaceInfo(): Gio.DBusInterfaceInfo
export function managerOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function remoteGreeterInterfaceInfo(): Gio.DBusInterfaceInfo
export function remoteGreeterOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function userVerifierChoiceListInterfaceInfo(): Gio.DBusInterfaceInfo
export function userVerifierChoiceListOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function userVerifierInterfaceInfo(): Gio.DBusInterfaceInfo
export function userVerifierOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function workerManagerInterfaceInfo(): Gio.DBusInterfaceInfo
export function workerManagerOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export module Chooser {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-disconnect`
     */
    export interface HandleDisconnectSignalCallback {
        (object: Gio.DBusMethodInvocation): boolean
    }

    /**
     * Signal callback interface for `handle-select-hostname`
     */
    export interface HandleSelectHostnameSignalCallback {
        (object: Gio.DBusMethodInvocation, p0: string | null): boolean
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Chooser {

    // Own properties of Gdm-1.0.Gdm.Chooser

    __gtype__: number

    // Owm methods of Gdm-1.0.Gdm.Chooser

    callDisconnect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callDisconnectFinish(res: Gio.AsyncResult): boolean
    callDisconnectSync(cancellable: Gio.Cancellable | null): boolean
    callSelectHostname(argHostname: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callSelectHostnameFinish(res: Gio.AsyncResult): boolean
    callSelectHostnameSync(argHostname: string, cancellable: Gio.Cancellable | null): boolean
    completeDisconnect(invocation: Gio.DBusMethodInvocation): void
    completeSelectHostname(invocation: Gio.DBusMethodInvocation): void

    // Own virtual methods of Gdm-1.0.Gdm.Chooser

    handleDisconnect(invocation: Gio.DBusMethodInvocation): boolean
    handleSelectHostname(invocation: Gio.DBusMethodInvocation, argHostname: string): boolean

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
    disconnect(id: number): void
}

export class Chooser extends GObject.Object {

    // Own properties of Gdm-1.0.Gdm.Chooser

    static name: string

    // Constructors of Gdm-1.0.Gdm.Chooser

    constructor(config?: Chooser.ConstructorProperties) 
    _init(config?: Chooser.ConstructorProperties): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

export module Greeter {

    // Signal callback interfaces

    /**
     * Signal callback interface for `default-language-name-changed`
     */
    export interface DefaultLanguageNameChangedSignalCallback {
        (object: string | null): void
    }

    /**
     * Signal callback interface for `default-session-name-changed`
     */
    export interface DefaultSessionNameChangedSignalCallback {
        (object: string | null): void
    }

    /**
     * Signal callback interface for `handle-begin-auto-login`
     */
    export interface HandleBeginAutoLoginSignalCallback {
        (object: Gio.DBusMethodInvocation, p0: string | null): boolean
    }

    /**
     * Signal callback interface for `handle-get-timed-login-details`
     */
    export interface HandleGetTimedLoginDetailsSignalCallback {
        (object: Gio.DBusMethodInvocation): boolean
    }

    /**
     * Signal callback interface for `handle-select-session`
     */
    export interface HandleSelectSessionSignalCallback {
        (object: Gio.DBusMethodInvocation, p0: string | null): boolean
    }

    /**
     * Signal callback interface for `handle-select-user`
     */
    export interface HandleSelectUserSignalCallback {
        (object: Gio.DBusMethodInvocation, p0: string | null): boolean
    }

    /**
     * Signal callback interface for `handle-start-session-when-ready`
     */
    export interface HandleStartSessionWhenReadySignalCallback {
        (object: Gio.DBusMethodInvocation, p0: string | null, p1: boolean): boolean
    }

    /**
     * Signal callback interface for `reauthenticated`
     */
    export interface ReauthenticatedSignalCallback {
        (object: string | null): void
    }

    /**
     * Signal callback interface for `selected-user-changed`
     */
    export interface SelectedUserChangedSignalCallback {
        (object: string | null): void
    }

    /**
     * Signal callback interface for `session-opened`
     */
    export interface SessionOpenedSignalCallback {
        (object: string | null): void
    }

    /**
     * Signal callback interface for `timed-login-requested`
     */
    export interface TimedLoginRequestedSignalCallback {
        (object: string | null, p0: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Greeter {

    // Own properties of Gdm-1.0.Gdm.Greeter

    __gtype__: number

    // Owm methods of Gdm-1.0.Gdm.Greeter

    callBeginAutoLogin(argUsername: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callBeginAutoLoginFinish(res: Gio.AsyncResult): boolean
    callBeginAutoLoginSync(argUsername: string, cancellable: Gio.Cancellable | null): boolean
    callGetTimedLoginDetails(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callGetTimedLoginDetailsFinish(outEnabled: boolean, outUsername: string | null, outDelay: number, res: Gio.AsyncResult): boolean
    callGetTimedLoginDetailsSync(outEnabled: boolean, outUsername: string | null, outDelay: number, cancellable: Gio.Cancellable | null): boolean
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

    // Own virtual methods of Gdm-1.0.Gdm.Greeter

    defaultLanguageNameChanged(argLanguageName: string): void
    defaultSessionNameChanged(argSessionName: string): void
    handleBeginAutoLogin(invocation: Gio.DBusMethodInvocation, argUsername: string): boolean
    handleGetTimedLoginDetails(invocation: Gio.DBusMethodInvocation): boolean
    handleSelectSession(invocation: Gio.DBusMethodInvocation, argSession: string): boolean
    handleSelectUser(invocation: Gio.DBusMethodInvocation, argUsername: string): boolean
    handleStartSessionWhenReady(invocation: Gio.DBusMethodInvocation, argServiceName: string, argShouldStartSession: boolean): boolean
    reauthenticated(argServiceName: string): void
    selectedUserChanged(argUsername: string): void
    sessionOpened(argServiceName: string): void
    timedLoginRequested(argUsername: string, argDelay: number): void

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
    disconnect(id: number): void
}

export class Greeter extends GObject.Object {

    // Own properties of Gdm-1.0.Gdm.Greeter

    static name: string

    // Constructors of Gdm-1.0.Gdm.Greeter

    constructor(config?: Greeter.ConstructorProperties) 
    _init(config?: Greeter.ConstructorProperties): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

export module Manager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-open-reauthentication-channel`
     */
    export interface HandleOpenReauthenticationChannelSignalCallback {
        (object: Gio.DBusMethodInvocation, p0: string | null): boolean
    }

    /**
     * Signal callback interface for `handle-open-session`
     */
    export interface HandleOpenSessionSignalCallback {
        (object: Gio.DBusMethodInvocation): boolean
    }

    /**
     * Signal callback interface for `handle-register-display`
     */
    export interface HandleRegisterDisplaySignalCallback {
        (object: Gio.DBusMethodInvocation, p0: GLib.Variant): boolean
    }

    /**
     * Signal callback interface for `handle-register-session`
     */
    export interface HandleRegisterSessionSignalCallback {
        (object: Gio.DBusMethodInvocation, p0: GLib.Variant): boolean
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gdm-1.0.Gdm.Manager

        version?: string | null
    }

}

export interface Manager {

    // Own properties of Gdm-1.0.Gdm.Manager

    version: string | null
    __gtype__: number

    // Owm methods of Gdm-1.0.Gdm.Manager

    callOpenReauthenticationChannel(argUsername: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callOpenReauthenticationChannelFinish(outAddress: string | null, res: Gio.AsyncResult): boolean
    callOpenReauthenticationChannelSync(argUsername: string, outAddress: string | null, cancellable: Gio.Cancellable | null): boolean
    callOpenSession(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callOpenSessionFinish(outAddress: string | null, res: Gio.AsyncResult): boolean
    callOpenSessionSync(outAddress: string | null, cancellable: Gio.Cancellable | null): boolean
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
    dupVersion(): string | null
    // Has conflict: getVersion(): string
    setVersion(value: string): void

    // Own virtual methods of Gdm-1.0.Gdm.Manager

    getVersion(): string
    handleOpenReauthenticationChannel(invocation: Gio.DBusMethodInvocation, argUsername: string): boolean
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
    disconnect(id: number): void
}

export class Manager extends GObject.Object {

    // Own properties of Gdm-1.0.Gdm.Manager

    static name: string

    // Constructors of Gdm-1.0.Gdm.Manager

    constructor(config?: Manager.ConstructorProperties) 
    _init(config?: Manager.ConstructorProperties): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

export module RemoteGreeter {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-disconnect`
     */
    export interface HandleDisconnectSignalCallback {
        (object: Gio.DBusMethodInvocation): boolean
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface RemoteGreeter {

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
    disconnect(id: number): void
}

export class RemoteGreeter extends GObject.Object {

    // Own properties of Gdm-1.0.Gdm.RemoteGreeter

    static name: string

    // Constructors of Gdm-1.0.Gdm.RemoteGreeter

    constructor(config?: RemoteGreeter.ConstructorProperties) 
    _init(config?: RemoteGreeter.ConstructorProperties): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

export module UserVerifier {

    // Signal callback interfaces

    /**
     * Signal callback interface for `conversation-started`
     */
    export interface ConversationStartedSignalCallback {
        (object: string | null): void
    }

    /**
     * Signal callback interface for `conversation-stopped`
     */
    export interface ConversationStoppedSignalCallback {
        (object: string | null): void
    }

    /**
     * Signal callback interface for `handle-answer-query`
     */
    export interface HandleAnswerQuerySignalCallback {
        (object: Gio.DBusMethodInvocation, p0: string | null, p1: string | null): boolean
    }

    /**
     * Signal callback interface for `handle-begin-verification`
     */
    export interface HandleBeginVerificationSignalCallback {
        (object: Gio.DBusMethodInvocation, p0: string | null): boolean
    }

    /**
     * Signal callback interface for `handle-begin-verification-for-user`
     */
    export interface HandleBeginVerificationForUserSignalCallback {
        (object: Gio.DBusMethodInvocation, p0: string | null, p1: string | null): boolean
    }

    /**
     * Signal callback interface for `handle-cancel`
     */
    export interface HandleCancelSignalCallback {
        (object: Gio.DBusMethodInvocation): boolean
    }

    /**
     * Signal callback interface for `handle-enable-extensions`
     */
    export interface HandleEnableExtensionsSignalCallback {
        (object: Gio.DBusMethodInvocation, p0: string[]): boolean
    }

    /**
     * Signal callback interface for `info`
     */
    export interface InfoSignalCallback {
        (object: string | null, p0: string | null): void
    }

    /**
     * Signal callback interface for `info-query`
     */
    export interface InfoQuerySignalCallback {
        (object: string | null, p0: string | null): void
    }

    /**
     * Signal callback interface for `problem`
     */
    export interface ProblemSignalCallback {
        (object: string | null, p0: string | null): void
    }

    /**
     * Signal callback interface for `reauthentication-started`
     */
    export interface ReauthenticationStartedSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `reset`
     */
    export interface ResetSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `secret-info-query`
     */
    export interface SecretInfoQuerySignalCallback {
        (object: string | null, p0: string | null): void
    }

    /**
     * Signal callback interface for `service-unavailable`
     */
    export interface ServiceUnavailableSignalCallback {
        (object: string | null, p0: string | null): void
    }

    /**
     * Signal callback interface for `verification-complete`
     */
    export interface VerificationCompleteSignalCallback {
        (object: string | null): void
    }

    /**
     * Signal callback interface for `verification-failed`
     */
    export interface VerificationFailedSignalCallback {
        (object: string | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface UserVerifier {

    // Own properties of Gdm-1.0.Gdm.UserVerifier

    __gtype__: number

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

    // Own virtual methods of Gdm-1.0.Gdm.UserVerifier

    conversationStarted(argServiceName: string): void
    conversationStopped(argServiceName: string): void
    handleAnswerQuery(invocation: Gio.DBusMethodInvocation, argServiceName: string, argAnswer: string): boolean
    handleBeginVerification(invocation: Gio.DBusMethodInvocation, argServiceName: string): boolean
    handleBeginVerificationForUser(invocation: Gio.DBusMethodInvocation, argServiceName: string, argUsername: string): boolean
    handleCancel(invocation: Gio.DBusMethodInvocation): boolean
    handleEnableExtensions(invocation: Gio.DBusMethodInvocation, argExtensions: string): boolean
    info(argServiceName: string, argInfo: string): void
    infoQuery(argServiceName: string, argQuery: string): void
    problem(argServiceName: string, argProblem: string): void
    reauthenticationStarted(argPidOfCaller: number): void
    reset(): void
    secretInfoQuery(argServiceName: string, argQuery: string): void
    serviceUnavailable(argServiceName: string, argMessage: string): void
    verificationComplete(argServiceName: string): void
    verificationFailed(argServiceName: string): void

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
    disconnect(id: number): void
}

export class UserVerifier extends GObject.Object {

    // Own properties of Gdm-1.0.Gdm.UserVerifier

    static name: string

    // Constructors of Gdm-1.0.Gdm.UserVerifier

    constructor(config?: UserVerifier.ConstructorProperties) 
    _init(config?: UserVerifier.ConstructorProperties): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

export module UserVerifierChoiceList {

    // Signal callback interfaces

    /**
     * Signal callback interface for `choice-query`
     */
    export interface ChoiceQuerySignalCallback {
        (object: string | null, p0: string | null, p1: GLib.Variant): void
    }

    /**
     * Signal callback interface for `handle-select-choice`
     */
    export interface HandleSelectChoiceSignalCallback {
        (object: Gio.DBusMethodInvocation, p0: string | null, p1: string | null): boolean
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface UserVerifierChoiceList {

    // Own properties of Gdm-1.0.Gdm.UserVerifierChoiceList

    __gtype__: number

    // Owm methods of Gdm-1.0.Gdm.UserVerifierChoiceList

    callSelectChoice(argServiceName: string, argChoice: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callSelectChoiceFinish(res: Gio.AsyncResult): boolean
    callSelectChoiceSync(argServiceName: string, argChoice: string, cancellable: Gio.Cancellable | null): boolean
    completeSelectChoice(invocation: Gio.DBusMethodInvocation): void
    emitChoiceQuery(argServiceName: string, argPromptMessage: string, argList: GLib.Variant): void

    // Own virtual methods of Gdm-1.0.Gdm.UserVerifierChoiceList

    choiceQuery(argServiceName: string, argPromptMessage: string, argList: GLib.Variant): void
    handleSelectChoice(invocation: Gio.DBusMethodInvocation, argServiceName: string, argChoice: string): boolean

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
    disconnect(id: number): void
}

export class UserVerifierChoiceList extends GObject.Object {

    // Own properties of Gdm-1.0.Gdm.UserVerifierChoiceList

    static name: string

    // Constructors of Gdm-1.0.Gdm.UserVerifierChoiceList

    constructor(config?: UserVerifierChoiceList.ConstructorProperties) 
    _init(config?: UserVerifierChoiceList.ConstructorProperties): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

export module WorkerManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-choice-list-query`
     */
    export interface HandleChoiceListQuerySignalCallback {
        (object: Gio.DBusMethodInvocation, p0: string | null, p1: string | null, p2: GLib.Variant): boolean
    }

    /**
     * Signal callback interface for `handle-hello`
     */
    export interface HandleHelloSignalCallback {
        (object: Gio.DBusMethodInvocation): boolean
    }

    /**
     * Signal callback interface for `handle-info`
     */
    export interface HandleInfoSignalCallback {
        (object: Gio.DBusMethodInvocation, p0: string | null, p1: string | null): boolean
    }

    /**
     * Signal callback interface for `handle-info-query`
     */
    export interface HandleInfoQuerySignalCallback {
        (object: Gio.DBusMethodInvocation, p0: string | null, p1: string | null): boolean
    }

    /**
     * Signal callback interface for `handle-problem`
     */
    export interface HandleProblemSignalCallback {
        (object: Gio.DBusMethodInvocation, p0: string | null, p1: string | null): boolean
    }

    /**
     * Signal callback interface for `handle-secret-info-query`
     */
    export interface HandleSecretInfoQuerySignalCallback {
        (object: Gio.DBusMethodInvocation, p0: string | null, p1: string | null): boolean
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface WorkerManager {

    // Own properties of Gdm-1.0.Gdm.WorkerManager

    __gtype__: number

    // Owm methods of Gdm-1.0.Gdm.WorkerManager

    callChoiceListQuery(argServiceName: string, argPromptMessage: string, argQuery: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callChoiceListQueryFinish(outAnswer: string | null, res: Gio.AsyncResult): boolean
    callChoiceListQuerySync(argServiceName: string, argPromptMessage: string, argQuery: GLib.Variant, outAnswer: string | null, cancellable: Gio.Cancellable | null): boolean
    callHello(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callHelloFinish(res: Gio.AsyncResult): boolean
    callHelloSync(cancellable: Gio.Cancellable | null): boolean
    callInfo(argServiceName: string, argInfo: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callInfoFinish(res: Gio.AsyncResult): boolean
    callInfoQuery(argServiceName: string, argQuery: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callInfoQueryFinish(outAnswer: string | null, res: Gio.AsyncResult): boolean
    callInfoQuerySync(argServiceName: string, argQuery: string, outAnswer: string | null, cancellable: Gio.Cancellable | null): boolean
    callInfoSync(argServiceName: string, argInfo: string, cancellable: Gio.Cancellable | null): boolean
    callProblem(argServiceName: string, argProblem: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callProblemFinish(res: Gio.AsyncResult): boolean
    callProblemSync(argServiceName: string, argProblem: string, cancellable: Gio.Cancellable | null): boolean
    callSecretInfoQuery(argServiceName: string, argQuery: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    callSecretInfoQueryFinish(outAnswer: string | null, res: Gio.AsyncResult): boolean
    callSecretInfoQuerySync(argServiceName: string, argQuery: string, outAnswer: string | null, cancellable: Gio.Cancellable | null): boolean
    completeChoiceListQuery(invocation: Gio.DBusMethodInvocation, answer: string): void
    completeHello(invocation: Gio.DBusMethodInvocation): void
    completeInfo(invocation: Gio.DBusMethodInvocation): void
    completeInfoQuery(invocation: Gio.DBusMethodInvocation, answer: string): void
    completeProblem(invocation: Gio.DBusMethodInvocation): void
    completeSecretInfoQuery(invocation: Gio.DBusMethodInvocation, answer: string): void

    // Own virtual methods of Gdm-1.0.Gdm.WorkerManager

    handleChoiceListQuery(invocation: Gio.DBusMethodInvocation, argServiceName: string, argPromptMessage: string, argQuery: GLib.Variant): boolean
    handleHello(invocation: Gio.DBusMethodInvocation): boolean
    handleInfo(invocation: Gio.DBusMethodInvocation, argServiceName: string, argInfo: string): boolean
    handleInfoQuery(invocation: Gio.DBusMethodInvocation, argServiceName: string, argQuery: string): boolean
    handleProblem(invocation: Gio.DBusMethodInvocation, argServiceName: string, argProblem: string): boolean
    handleSecretInfoQuery(invocation: Gio.DBusMethodInvocation, argServiceName: string, argQuery: string): boolean

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
    disconnect(id: number): void
}

export class WorkerManager extends GObject.Object {

    // Own properties of Gdm-1.0.Gdm.WorkerManager

    static name: string

    // Constructors of Gdm-1.0.Gdm.WorkerManager

    constructor(config?: WorkerManager.ConstructorProperties) 
    _init(config?: WorkerManager.ConstructorProperties): void
    static interfaceInfo(): Gio.DBusInterfaceInfo
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

export module ChooserProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Chooser.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface ChooserProxy extends Chooser, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

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
    disconnect(id: number): void
}

export class ChooserProxy extends Gio.DBusProxy {

    // Own properties of Gdm-1.0.Gdm.ChooserProxy

    static name: string

    // Constructors of Gdm-1.0.Gdm.ChooserProxy

    constructor(config?: ChooserProxy.ConstructorProperties) 
    _init(config?: ChooserProxy.ConstructorProperties): void
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

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
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
}

export module ChooserSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends Chooser.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

export interface ChooserSkeleton extends Chooser, Gio.DBusInterface {

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
    disconnect(id: number): void
}

export class ChooserSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Gdm-1.0.Gdm.ChooserSkeleton

    static name: string

    // Constructors of Gdm-1.0.Gdm.ChooserSkeleton

    constructor(config?: ChooserSkeleton.ConstructorProperties) 
    _init(config?: ChooserSkeleton.ConstructorProperties): void
}

export module Client {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Client {

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
    openReauthenticationChannel(username: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
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
    openReauthenticationChannelSync(username: string, cancellable: Gio.Cancellable | null): UserVerifier
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
    disconnect(id: number): void
}

export class Client extends GObject.Object {

    // Own properties of Gdm-1.0.Gdm.Client

    static name: string

    // Constructors of Gdm-1.0.Gdm.Client

    constructor(config?: Client.ConstructorProperties) 
    constructor() 
    static new(): Client
    _init(config?: Client.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module GreeterProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Greeter.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface GreeterProxy extends Greeter, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

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
    disconnect(id: number): void
}

export class GreeterProxy extends Gio.DBusProxy {

    // Own properties of Gdm-1.0.Gdm.GreeterProxy

    static name: string

    // Constructors of Gdm-1.0.Gdm.GreeterProxy

    constructor(config?: GreeterProxy.ConstructorProperties) 
    _init(config?: GreeterProxy.ConstructorProperties): void
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

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
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
}

export module GreeterSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends Greeter.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

export interface GreeterSkeleton extends Greeter, Gio.DBusInterface {

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
    disconnect(id: number): void
}

export class GreeterSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Gdm-1.0.Gdm.GreeterSkeleton

    static name: string

    // Constructors of Gdm-1.0.Gdm.GreeterSkeleton

    constructor(config?: GreeterSkeleton.ConstructorProperties) 
    _init(config?: GreeterSkeleton.ConstructorProperties): void
}

export module ManagerProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Manager.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface ManagerProxy extends Manager, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

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
    disconnect(id: number): void
}

export class ManagerProxy extends Gio.DBusProxy {

    // Own properties of Gdm-1.0.Gdm.ManagerProxy

    static name: string

    // Constructors of Gdm-1.0.Gdm.ManagerProxy

    constructor(config?: ManagerProxy.ConstructorProperties) 
    _init(config?: ManagerProxy.ConstructorProperties): void
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

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
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
}

export module ManagerSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends Manager.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

export interface ManagerSkeleton extends Manager, Gio.DBusInterface {

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
    disconnect(id: number): void
}

export class ManagerSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Gdm-1.0.Gdm.ManagerSkeleton

    static name: string

    // Constructors of Gdm-1.0.Gdm.ManagerSkeleton

    constructor(config?: ManagerSkeleton.ConstructorProperties) 
    _init(config?: ManagerSkeleton.ConstructorProperties): void
}

export module RemoteGreeterProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends RemoteGreeter.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface RemoteGreeterProxy extends RemoteGreeter, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

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
    disconnect(id: number): void
}

export class RemoteGreeterProxy extends Gio.DBusProxy {

    // Own properties of Gdm-1.0.Gdm.RemoteGreeterProxy

    static name: string

    // Constructors of Gdm-1.0.Gdm.RemoteGreeterProxy

    constructor(config?: RemoteGreeterProxy.ConstructorProperties) 
    _init(config?: RemoteGreeterProxy.ConstructorProperties): void
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

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
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
}

export module RemoteGreeterSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends RemoteGreeter.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

export interface RemoteGreeterSkeleton extends RemoteGreeter, Gio.DBusInterface {

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
    disconnect(id: number): void
}

export class RemoteGreeterSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Gdm-1.0.Gdm.RemoteGreeterSkeleton

    static name: string

    // Constructors of Gdm-1.0.Gdm.RemoteGreeterSkeleton

    constructor(config?: RemoteGreeterSkeleton.ConstructorProperties) 
    _init(config?: RemoteGreeterSkeleton.ConstructorProperties): void
}

export module UserVerifierChoiceListProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends UserVerifierChoiceList.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface UserVerifierChoiceListProxy extends UserVerifierChoiceList, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

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
    disconnect(id: number): void
}

export class UserVerifierChoiceListProxy extends Gio.DBusProxy {

    // Own properties of Gdm-1.0.Gdm.UserVerifierChoiceListProxy

    static name: string

    // Constructors of Gdm-1.0.Gdm.UserVerifierChoiceListProxy

    constructor(config?: UserVerifierChoiceListProxy.ConstructorProperties) 
    _init(config?: UserVerifierChoiceListProxy.ConstructorProperties): void
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

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
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
}

export module UserVerifierChoiceListSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends UserVerifierChoiceList.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

export interface UserVerifierChoiceListSkeleton extends UserVerifierChoiceList, Gio.DBusInterface {

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
    disconnect(id: number): void
}

export class UserVerifierChoiceListSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Gdm-1.0.Gdm.UserVerifierChoiceListSkeleton

    static name: string

    // Constructors of Gdm-1.0.Gdm.UserVerifierChoiceListSkeleton

    constructor(config?: UserVerifierChoiceListSkeleton.ConstructorProperties) 
    _init(config?: UserVerifierChoiceListSkeleton.ConstructorProperties): void
}

export module UserVerifierProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends UserVerifier.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface UserVerifierProxy extends UserVerifier, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

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
    disconnect(id: number): void
}

export class UserVerifierProxy extends Gio.DBusProxy {

    // Own properties of Gdm-1.0.Gdm.UserVerifierProxy

    static name: string

    // Constructors of Gdm-1.0.Gdm.UserVerifierProxy

    constructor(config?: UserVerifierProxy.ConstructorProperties) 
    _init(config?: UserVerifierProxy.ConstructorProperties): void
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

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
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
}

export module UserVerifierSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends UserVerifier.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

export interface UserVerifierSkeleton extends UserVerifier, Gio.DBusInterface {

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
    disconnect(id: number): void
}

export class UserVerifierSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Gdm-1.0.Gdm.UserVerifierSkeleton

    static name: string

    // Constructors of Gdm-1.0.Gdm.UserVerifierSkeleton

    constructor(config?: UserVerifierSkeleton.ConstructorProperties) 
    _init(config?: UserVerifierSkeleton.ConstructorProperties): void
}

export module WorkerManagerProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends WorkerManager.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface WorkerManagerProxy extends WorkerManager, Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable {

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
    disconnect(id: number): void
}

export class WorkerManagerProxy extends Gio.DBusProxy {

    // Own properties of Gdm-1.0.Gdm.WorkerManagerProxy

    static name: string

    // Constructors of Gdm-1.0.Gdm.WorkerManagerProxy

    constructor(config?: WorkerManagerProxy.ConstructorProperties) 
    _init(config?: WorkerManagerProxy.ConstructorProperties): void
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

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
    static new(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string | null, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

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
    static newForBus(busType: Gio.BusType, flags: Gio.DBusProxyFlags, info: Gio.DBusInterfaceInfo | null, name: string, objectPath: string, interfaceName: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
}

export module WorkerManagerSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends WorkerManager.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

export interface WorkerManagerSkeleton extends WorkerManager, Gio.DBusInterface {

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
    disconnect(id: number): void
}

export class WorkerManagerSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Gdm-1.0.Gdm.WorkerManagerSkeleton

    static name: string

    // Constructors of Gdm-1.0.Gdm.WorkerManagerSkeleton

    constructor(config?: WorkerManagerSkeleton.ConstructorProperties) 
    _init(config?: WorkerManagerSkeleton.ConstructorProperties): void
}

export interface ChooserIface {

    // Own fields of Gdm-1.0.Gdm.ChooserIface

    parentIface: GObject.TypeInterface
    handleDisconnect: (object: Chooser, invocation: Gio.DBusMethodInvocation) => boolean
    handleSelectHostname: (object: Chooser, invocation: Gio.DBusMethodInvocation, argHostname: string) => boolean
}

export abstract class ChooserIface {

    // Own properties of Gdm-1.0.Gdm.ChooserIface

    static name: string
}

export interface ChooserProxyClass {

    // Own fields of Gdm-1.0.Gdm.ChooserProxyClass

    parentClass: Gio.DBusProxyClass
}

export abstract class ChooserProxyClass {

    // Own properties of Gdm-1.0.Gdm.ChooserProxyClass

    static name: string
}

export interface ChooserProxyPrivate {
}

export class ChooserProxyPrivate {

    // Own properties of Gdm-1.0.Gdm.ChooserProxyPrivate

    static name: string
}

export interface ChooserSkeletonClass {

    // Own fields of Gdm-1.0.Gdm.ChooserSkeletonClass

    parentClass: Gio.DBusInterfaceSkeletonClass
}

export abstract class ChooserSkeletonClass {

    // Own properties of Gdm-1.0.Gdm.ChooserSkeletonClass

    static name: string
}

export interface ChooserSkeletonPrivate {
}

export class ChooserSkeletonPrivate {

    // Own properties of Gdm-1.0.Gdm.ChooserSkeletonPrivate

    static name: string
}

export interface ClientClass {

    // Own fields of Gdm-1.0.Gdm.ClientClass

    parentClass: GObject.ObjectClass
}

export abstract class ClientClass {

    // Own properties of Gdm-1.0.Gdm.ClientClass

    static name: string
}

export interface GreeterIface {

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

export abstract class GreeterIface {

    // Own properties of Gdm-1.0.Gdm.GreeterIface

    static name: string
}

export interface GreeterProxyClass {

    // Own fields of Gdm-1.0.Gdm.GreeterProxyClass

    parentClass: Gio.DBusProxyClass
}

export abstract class GreeterProxyClass {

    // Own properties of Gdm-1.0.Gdm.GreeterProxyClass

    static name: string
}

export interface GreeterProxyPrivate {
}

export class GreeterProxyPrivate {

    // Own properties of Gdm-1.0.Gdm.GreeterProxyPrivate

    static name: string
}

export interface GreeterSkeletonClass {

    // Own fields of Gdm-1.0.Gdm.GreeterSkeletonClass

    parentClass: Gio.DBusInterfaceSkeletonClass
}

export abstract class GreeterSkeletonClass {

    // Own properties of Gdm-1.0.Gdm.GreeterSkeletonClass

    static name: string
}

export interface GreeterSkeletonPrivate {
}

export class GreeterSkeletonPrivate {

    // Own properties of Gdm-1.0.Gdm.GreeterSkeletonPrivate

    static name: string
}

export interface ManagerIface {

    // Own fields of Gdm-1.0.Gdm.ManagerIface

    parentIface: GObject.TypeInterface
    handleOpenReauthenticationChannel: (object: Manager, invocation: Gio.DBusMethodInvocation, argUsername: string) => boolean
    handleOpenSession: (object: Manager, invocation: Gio.DBusMethodInvocation) => boolean
    handleRegisterDisplay: (object: Manager, invocation: Gio.DBusMethodInvocation, argDetails: GLib.Variant) => boolean
    handleRegisterSession: (object: Manager, invocation: Gio.DBusMethodInvocation, argDetails: GLib.Variant) => boolean
    getVersion: (object: Manager) => string
}

export abstract class ManagerIface {

    // Own properties of Gdm-1.0.Gdm.ManagerIface

    static name: string
}

export interface ManagerProxyClass {

    // Own fields of Gdm-1.0.Gdm.ManagerProxyClass

    parentClass: Gio.DBusProxyClass
}

export abstract class ManagerProxyClass {

    // Own properties of Gdm-1.0.Gdm.ManagerProxyClass

    static name: string
}

export interface ManagerProxyPrivate {
}

export class ManagerProxyPrivate {

    // Own properties of Gdm-1.0.Gdm.ManagerProxyPrivate

    static name: string
}

export interface ManagerSkeletonClass {

    // Own fields of Gdm-1.0.Gdm.ManagerSkeletonClass

    parentClass: Gio.DBusInterfaceSkeletonClass
}

export abstract class ManagerSkeletonClass {

    // Own properties of Gdm-1.0.Gdm.ManagerSkeletonClass

    static name: string
}

export interface ManagerSkeletonPrivate {
}

export class ManagerSkeletonPrivate {

    // Own properties of Gdm-1.0.Gdm.ManagerSkeletonPrivate

    static name: string
}

export interface RemoteGreeterIface {

    // Own fields of Gdm-1.0.Gdm.RemoteGreeterIface

    parentIface: GObject.TypeInterface
    handleDisconnect: (object: RemoteGreeter, invocation: Gio.DBusMethodInvocation) => boolean
}

export abstract class RemoteGreeterIface {

    // Own properties of Gdm-1.0.Gdm.RemoteGreeterIface

    static name: string
}

export interface RemoteGreeterProxyClass {

    // Own fields of Gdm-1.0.Gdm.RemoteGreeterProxyClass

    parentClass: Gio.DBusProxyClass
}

export abstract class RemoteGreeterProxyClass {

    // Own properties of Gdm-1.0.Gdm.RemoteGreeterProxyClass

    static name: string
}

export interface RemoteGreeterProxyPrivate {
}

export class RemoteGreeterProxyPrivate {

    // Own properties of Gdm-1.0.Gdm.RemoteGreeterProxyPrivate

    static name: string
}

export interface RemoteGreeterSkeletonClass {

    // Own fields of Gdm-1.0.Gdm.RemoteGreeterSkeletonClass

    parentClass: Gio.DBusInterfaceSkeletonClass
}

export abstract class RemoteGreeterSkeletonClass {

    // Own properties of Gdm-1.0.Gdm.RemoteGreeterSkeletonClass

    static name: string
}

export interface RemoteGreeterSkeletonPrivate {
}

export class RemoteGreeterSkeletonPrivate {

    // Own properties of Gdm-1.0.Gdm.RemoteGreeterSkeletonPrivate

    static name: string
}

export interface UserVerifierChoiceListIface {

    // Own fields of Gdm-1.0.Gdm.UserVerifierChoiceListIface

    parentIface: GObject.TypeInterface
    handleSelectChoice: (object: UserVerifierChoiceList, invocation: Gio.DBusMethodInvocation, argServiceName: string, argChoice: string) => boolean
    choiceQuery: (object: UserVerifierChoiceList, argServiceName: string, argPromptMessage: string, argList: GLib.Variant) => void
}

export abstract class UserVerifierChoiceListIface {

    // Own properties of Gdm-1.0.Gdm.UserVerifierChoiceListIface

    static name: string
}

export interface UserVerifierChoiceListProxyClass {

    // Own fields of Gdm-1.0.Gdm.UserVerifierChoiceListProxyClass

    parentClass: Gio.DBusProxyClass
}

export abstract class UserVerifierChoiceListProxyClass {

    // Own properties of Gdm-1.0.Gdm.UserVerifierChoiceListProxyClass

    static name: string
}

export interface UserVerifierChoiceListProxyPrivate {
}

export class UserVerifierChoiceListProxyPrivate {

    // Own properties of Gdm-1.0.Gdm.UserVerifierChoiceListProxyPrivate

    static name: string
}

export interface UserVerifierChoiceListSkeletonClass {

    // Own fields of Gdm-1.0.Gdm.UserVerifierChoiceListSkeletonClass

    parentClass: Gio.DBusInterfaceSkeletonClass
}

export abstract class UserVerifierChoiceListSkeletonClass {

    // Own properties of Gdm-1.0.Gdm.UserVerifierChoiceListSkeletonClass

    static name: string
}

export interface UserVerifierChoiceListSkeletonPrivate {
}

export class UserVerifierChoiceListSkeletonPrivate {

    // Own properties of Gdm-1.0.Gdm.UserVerifierChoiceListSkeletonPrivate

    static name: string
}

export interface UserVerifierIface {

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

export abstract class UserVerifierIface {

    // Own properties of Gdm-1.0.Gdm.UserVerifierIface

    static name: string
}

export interface UserVerifierProxyClass {

    // Own fields of Gdm-1.0.Gdm.UserVerifierProxyClass

    parentClass: Gio.DBusProxyClass
}

export abstract class UserVerifierProxyClass {

    // Own properties of Gdm-1.0.Gdm.UserVerifierProxyClass

    static name: string
}

export interface UserVerifierProxyPrivate {
}

export class UserVerifierProxyPrivate {

    // Own properties of Gdm-1.0.Gdm.UserVerifierProxyPrivate

    static name: string
}

export interface UserVerifierSkeletonClass {

    // Own fields of Gdm-1.0.Gdm.UserVerifierSkeletonClass

    parentClass: Gio.DBusInterfaceSkeletonClass
}

export abstract class UserVerifierSkeletonClass {

    // Own properties of Gdm-1.0.Gdm.UserVerifierSkeletonClass

    static name: string
}

export interface UserVerifierSkeletonPrivate {
}

export class UserVerifierSkeletonPrivate {

    // Own properties of Gdm-1.0.Gdm.UserVerifierSkeletonPrivate

    static name: string
}

export interface WorkerManagerIface {

    // Own fields of Gdm-1.0.Gdm.WorkerManagerIface

    parentIface: GObject.TypeInterface
    handleChoiceListQuery: (object: WorkerManager, invocation: Gio.DBusMethodInvocation, argServiceName: string, argPromptMessage: string, argQuery: GLib.Variant) => boolean
    handleHello: (object: WorkerManager, invocation: Gio.DBusMethodInvocation) => boolean
    handleInfo: (object: WorkerManager, invocation: Gio.DBusMethodInvocation, argServiceName: string, argInfo: string) => boolean
    handleInfoQuery: (object: WorkerManager, invocation: Gio.DBusMethodInvocation, argServiceName: string, argQuery: string) => boolean
    handleProblem: (object: WorkerManager, invocation: Gio.DBusMethodInvocation, argServiceName: string, argProblem: string) => boolean
    handleSecretInfoQuery: (object: WorkerManager, invocation: Gio.DBusMethodInvocation, argServiceName: string, argQuery: string) => boolean
}

export abstract class WorkerManagerIface {

    // Own properties of Gdm-1.0.Gdm.WorkerManagerIface

    static name: string
}

export interface WorkerManagerProxyClass {

    // Own fields of Gdm-1.0.Gdm.WorkerManagerProxyClass

    parentClass: Gio.DBusProxyClass
}

export abstract class WorkerManagerProxyClass {

    // Own properties of Gdm-1.0.Gdm.WorkerManagerProxyClass

    static name: string
}

export interface WorkerManagerProxyPrivate {
}

export class WorkerManagerProxyPrivate {

    // Own properties of Gdm-1.0.Gdm.WorkerManagerProxyPrivate

    static name: string
}

export interface WorkerManagerSkeletonClass {

    // Own fields of Gdm-1.0.Gdm.WorkerManagerSkeletonClass

    parentClass: Gio.DBusInterfaceSkeletonClass
}

export abstract class WorkerManagerSkeletonClass {

    // Own properties of Gdm-1.0.Gdm.WorkerManagerSkeletonClass

    static name: string
}

export interface WorkerManagerSkeletonPrivate {
}

export class WorkerManagerSkeletonPrivate {

    // Own properties of Gdm-1.0.Gdm.WorkerManagerSkeletonPrivate

    static name: string
}

// END