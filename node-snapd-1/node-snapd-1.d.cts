
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-snapd-1-import.d.ts';
    
/**
 * Snapd-1
 */

import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

/**
 * Status of an alias.
 */
export enum AliasStatus {
    /**
     * the alias status is unknown.
     */
    UNKNOWN,
    /**
     * deprecated, do not use.
     */
    DEFAULT,
    /**
     * deprecated, do not use.
     */
    ENABLED,
    /**
     * the alias is disabled.
     */
    DISABLED,
    /**
     * the alias is automatically enabled.
     */
    AUTO,
    /**
     * the alias is manually enabled.
     */
    MANUAL,
}
/**
 * Filter to apply to changes.
 */
export enum ChangeFilter {
    /**
     * Return all changes.
     */
    ALL,
    /**
     * Return only changes that are in-progress.
     */
    IN_PROGRESS,
    /**
     * Return only changes that are ready.
     */
    READY,
}
/**
 * Confinement used by a snap.
 */
export enum Confinement {
    /**
     * the confinement of the snap is unknown.
     */
    UNKNOWN,
    /**
     * the snap is using confinement.
     */
    STRICT,
    /**
     * the snap is in dev mode (i.e. unconfined).
     */
    DEVMODE,
    /**
     * the snap is using classic confinement.
     */
    CLASSIC,
}
/**
 * Type of daemon.
 */
export enum DaemonType {
    /**
     * Not a daemon
     */
    NONE,
    /**
     * Unknown daemon type
     */
    UNKNOWN,
    /**
     * Simple daemon
     */
    SIMPLE,
    /**
     * Forking daemon
     */
    FORKING,
    /**
     * One-shot daemon
     */
    ONESHOT,
    /**
     * D-Bus daemon
     */
    DBUS,
    /**
     * Notify daemon
     */
    NOTIFY,
}
/**
 * Error codes returned by snapd operations.
 */
export enum Error {
    /**
     * not able to connect to snapd.
     */
    CONNECTION_FAILED,
    /**
     * an error occurred while writing to snapd.
     */
    WRITE_FAILED,
    /**
     * an error occurred while reading from snapd.
     */
    READ_FAILED,
    /**
     * snapd did not understand the request that was sent.
     */
    BAD_REQUEST,
    /**
     * the response received from snapd was not
     *     understood.
     */
    BAD_RESPONSE,
    /**
     * the requested operation requires
     *     authorization data.
     */
    AUTH_DATA_REQUIRED,
    /**
     * the provided authorization data is invalid.
     */
    AUTH_DATA_INVALID,
    /**
     * login requires a two factor code.
     */
    TWO_FACTOR_REQUIRED,
    /**
     * the two factor code provided at login is
     *     invalid.
     */
    TWO_FACTOR_INVALID,
    /**
     * this user account is not permitted to perform
     *     the requested operation.
     */
    PERMISSION_DENIED,
    /**
     * an unspecified error occurred while communicating
     *     with snapd.
     */
    FAILED,
    /**
     * this user has not accepted the store's terms
     *     of service.
     */
    TERMS_NOT_ACCEPTED,
    /**
     * this user has not configured a payment
     *     method.
     */
    PAYMENT_NOT_SETUP,
    /**
     * this user has had their payment method
     *     declined by the payment provider.
     */
    PAYMENT_DECLINED,
    /**
     * the requested snap is already installed.
     */
    ALREADY_INSTALLED,
    /**
     * the requested snap is not installed.
     */
    NOT_INSTALLED,
    /**
     * no update is available for this snap.
     */
    NO_UPDATE_AVAILABLE,
    /**
     * provided password is not valid.
     */
    PASSWORD_POLICY_ERROR,
    /**
     * this snap needs to be installed using devmode.
     */
    NEEDS_DEVMODE,
    /**
     * this snap needs to be installed using classic
     *     mode.
     */
    NEEDS_CLASSIC,
    /**
     * a classic system is required to install
     *    this snap.
     */
    NEEDS_CLASSIC_SYSTEM,
    /**
     * a bad query was provided.
     */
    BAD_QUERY,
    /**
     * A timeout occurred during the request.
     */
    NETWORK_TIMEOUT,
    /**
     * the requested snap couldn't be found.
     */
    NOT_FOUND,
    /**
     * the requested snap is not in the store.
     */
    NOT_IN_STORE,
    /**
     * authentication was cancelled by the user.
     */
    AUTH_CANCELLED,
    /**
     * snap not compatible with classic mode.
     */
    NOT_CLASSIC,
    /**
     * requested snap revision not available.
     */
    REVISION_NOT_AVAILABLE,
    /**
     * requested snap channel not available.
     */
    CHANNEL_NOT_AVAILABLE,
    /**
     * the given snap or directory does not look like a snap.
     */
    NOT_A_SNAP,
    /**
     * A hostname failed to resolve during the request.
     */
    DNS_FAILURE,
    /**
     * A requested configuration option is not set.
     */
    OPTION_NOT_FOUND,
}
/**
 * Type of snap.
 */
export enum MaintenanceKind {
    /**
     * an unknown maintenance kind is occurring.
     */
    UNKNOWN,
    /**
     * the daemon is restarting.
     */
    DAEMON_RESTART,
    /**
     * the system is restarting.
     */
    SYSTEM_RESTART,
}
/**
 * Type of markdown node.
 */
export enum MarkdownNodeType {
    /**
     * a piece of text.
     */
    TEXT,
    /**
     * a paragraph.
     */
    PARAGRAPH,
    /**
     * an unordered list.
     */
    UNORDERED_LIST,
    /**
     * a list item.
     */
    LIST_ITEM,
    /**
     * a code block.
     */
    CODE_BLOCK,
    /**
     * a code span.
     */
    CODE_SPAN,
    /**
     * emphasised text.
     */
    EMPHASIS,
    /**
     * strongly emphasised text.
     */
    STRONG_EMPHASIS,
    /**
     * a URL.
     */
    URL,
}
/**
 * Version of markdown to parse. Picking a version will ensure only nodes of the expected type are decoded.
 */
export enum MarkdownVersion {
    /**
     * the initial version of Snap markdown.
     */
    TODO_0,
}
/**
 * State of validation for a publisher.
 */
export enum PublisherValidation {
    /**
     * the validation state of the publisher is unknown.
     */
    UNKNOWN,
    /**
     * the publisher has not proven their identity.
     */
    UNPROVEN,
    /**
     * the publisher has had their identity verified.
     */
    VERIFIED,
}
/**
 * The current state of a snap.
 */
export enum SnapStatus {
    /**
     * the snap state is unknown.
     */
    UNKNOWN,
    /**
     * the snap is available for installation.
     */
    AVAILABLE,
    /**
     * the snap is available for purchase.
     */
    PRICED,
    /**
     * the snap is installed but not active.
     */
    INSTALLED,
    /**
     * the snap is installed and active.
     */
    ACTIVE,
}
/**
 * Type of snap.
 */
export enum SnapType {
    /**
     * the type of snap is unknown.
     */
    UNKNOWN,
    /**
     * the snap is an application.
     */
    APP,
    /**
     * the snap is a kernel.
     */
    KERNEL,
    /**
     * the snapd is a gadget.
     */
    GADGET,
    /**
     * the snap is an operating system.
     */
    OS,
    /**
     * the snap is a core snap.
     */
    CORE,
    /**
     * the snap is a base snap.
     */
    BASE,
    /**
     * the snap is the snap daemon.
     */
    SNAPD,
}
/**
 * Confinement used by a snap.
 */
export enum SystemConfinement {
    /**
     * the confinement of the system is unknown.
     */
    UNKNOWN,
    /**
     * the system supports strict confinement.
     */
    STRICT,
    /**
     * the system supports partial confinement.
     */
    PARTIAL,
}
/**
 * Flag to control when a user accounts is created.
 * @bitfield 
 */
export enum CreateUserFlags {
    /**
     * No flags, default behaviour.
     */
    NONE,
    /**
     * Gives sudo access to created user.
     */
    SUDO,
    /**
     * Use the local system-user assertions to create the user.
     */
    KNOWN,
}
/**
 * Flag to change how a find is performed.
 * @bitfield 
 */
export enum FindFlags {
    /**
     * No flags, default behaviour.
     */
    NONE,
    /**
     * Search for snaps whose name matches the given
     *     string. The match is exact unless the string ends in *.
     */
    MATCH_NAME,
    /**
     * Search private snaps.
     */
    SELECT_PRIVATE,
    /**
     * Deprecated, do not use.
     */
    SELECT_REFRESH,
    /**
     * Search for snaps from any architecture or branch.
     */
    SCOPE_WIDE,
    /**
     * Search for snaps whose common ID matches
     *     the given string.
     */
    MATCH_COMMON_ID,
}
/**
 * Flag to change which apps are returned.
 * @bitfield 
 */
export enum GetAppsFlags {
    /**
     * No flags, default behaviour.
     */
    NONE,
    /**
     * Select services only.
     */
    SELECT_SERVICES,
}
/**
 * Flag to change how connections are returned.
 * @bitfield 
 */
export enum GetConnectionsFlags {
    /**
     * No flags, default behaviour.
     */
    NONE,
    /**
     * Select all connections, not just connected ones.
     */
    SELECT_ALL,
}
/**
 * Flags to control how interface information is returned.
 * @bitfield 
 */
export enum GetInterfacesFlags {
    /**
     * No flags, default behaviour.
     */
    NONE,
    /**
     * Include interface documentation.
     */
    INCLUDE_DOCS,
    /**
     * Include associated plugs.
     */
    INCLUDE_PLUGS,
    /**
     * Include associated slots.
     */
    INCLUDE_SLOTS,
    /**
     * Only return connected interfaces.
     */
    ONLY_CONNECTED,
}
/**
 * Flag to change which snaps are returned.
 * @bitfield 
 */
export enum GetSnapsFlags {
    /**
     * No flags, default behaviour.
     */
    NONE,
    /**
     * Return snaps that are installed but not active.
     */
    INCLUDE_INACTIVE,
}
/**
 * Flags to control install options.
 * @bitfield 
 */
export enum InstallFlags {
    /**
     * No flags, default behaviour.
     */
    NONE,
    /**
     * Put snap in classic mode and disable security confinement.
     */
    CLASSIC,
    /**
     * Install the given snap file even if there are
     *    no pre-acknowledged signatures for it, meaning it was not verified and
     *    could be dangerous (implied by #SNAPD_INSTALL_FLAGS_DEVMODE).
     */
    DANGEROUS,
    /**
     * Put snap in development mode and disable security confinement.
     */
    DEVMODE,
    /**
     * Put snap in enforced confinement mode.
     */
    JAILMODE,
}
/**
 * Flags to control remove options.
 * @bitfield 
 */
export enum RemoveFlags {
    /**
     * No flags, default behaviour.
     */
    NONE,
    /**
     * Don't save a snapshot the snap's data when removing.
     */
    PURGE,
}
/**
 * Gets the Snapd Error Quark.
 * @returns a #GQuark.
 */
export function errorQuark(): GLib.Quark
/**
 * Asynchronously get authorization to install/remove snaps.
 * See snapd_login_sync() for more information.
 * @param username username to log in with.
 * @param password password to log in with.
 * @param otp response to one-time password challenge.
 * @param cancellable a #GCancellable or %NULL.
 * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
 */
export function loginAsync(username: string, password: string, otp: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
/**
 * Complete login started with snapd_login_async().
 * See snapd_login_sync() for more information.
 * @param result a #GAsyncResult.
 * @returns a #SnapdAuthData or %NULL on error.
 */
export function loginFinish(result: Gio.AsyncResult): AuthData
/**
 * This call used to contact a D-Bus service to perform snapd authentication using
 * Polkit. This now just creates a #SnapdClient and does the call directly.
 * @param username username to log in with.
 * @param password password to log in with.
 * @param otp response to one-time password challenge.
 * @param cancellable a #GCancellable or %NULL.
 * @returns a #SnapdAuthData or %NULL on error.
 */
export function loginSync(username: string, password: string, otp: string | null, cancellable: Gio.Cancellable | null): AuthData
/**
 * Signature for callback function used in
 * snapd_client_connect_interface_sync(),
 * snapd_client_disconnect_interface_async(),
 * snapd_client_install2_sync(),
 * snapd_client_refresh_sync(),
 * snapd_client_remove2_sync(),
 * snapd_client_enable_sync() and
 * snapd_client_disable_sync().
 * @callback 
 * @param client a #SnapdClient
 * @param change a #SnapdChange describing the change in progress
 * @param deprecated A deprecated field that is no longer used.
 */
export interface ProgressCallback {
    (client: Client, change: Change, deprecated: any | null): void
}
export module Alias {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Snapd-1.Snapd.Alias

        appAuto?: string | null
        appManual?: string | null
        command?: string | null
        name?: string | null
        snap?: string | null
        status?: AliasStatus | null
    }

}

export interface Alias {

    // Own properties of Snapd-1.Snapd.Alias

    readonly appAuto: string | null
    readonly appManual: string | null
    readonly command: string | null
    readonly name: string | null
    readonly snap: string | null
    readonly status: AliasStatus
    __gtype__: number

    // Owm methods of Snapd-1.Snapd.Alias

    /**
     * Get the app this is an alias for.
     * @returns an app name or %NULL.
     */
    getApp(): string | null
    /**
     * Get the app this alias has been automatically set to (status is %SNAPD_ALIAS_STATUS_AUTO).
     * Can be overridden when status is %SNAPD_ALIAS_STATUS_MANUAL.
     * @returns an app name or %NULL.
     */
    getAppAuto(): string | null
    /**
     * Get the app this alias has been manually set to (status is %SNAPD_ALIAS_STATUS_MANUAL).
     * This overrides the app from snapd_alias_get_app_auto().
     * @returns an app name or %NULL.
     */
    getAppManual(): string | null
    /**
     * Get the command this alias runs.
     * @returns a command.
     */
    getCommand(): string
    /**
     * Get the name of this alias.
     * @returns an alias name.
     */
    getName(): string
    /**
     * Get the snap this alias is for.
     * @returns a snap name.
     */
    getSnap(): string
    /**
     * Get the status of this alias.
     * @returns a #SnapdAliasStatus.
     */
    getStatus(): AliasStatus

    // Class property signals of Snapd-1.Snapd.Alias

    connect(sigName: "notify::app-auto", callback: (...args: any[]) => void): number
    on(sigName: "notify::app-auto", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::app-auto", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::app-auto", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::app-auto", ...args: any[]): void
    connect(sigName: "notify::app-manual", callback: (...args: any[]) => void): number
    on(sigName: "notify::app-manual", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::app-manual", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::app-manual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::app-manual", ...args: any[]): void
    connect(sigName: "notify::command", callback: (...args: any[]) => void): number
    on(sigName: "notify::command", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::command", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::command", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::command", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::snap", callback: (...args: any[]) => void): number
    on(sigName: "notify::snap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::snap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::snap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::snap", ...args: any[]): void
    connect(sigName: "notify::status", callback: (...args: any[]) => void): number
    on(sigName: "notify::status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::status", ...args: any[]): void
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

/**
 * #SnapdAlias contains alias information for a Snap.
 * 
 * Aliases are used to provide alternative binary names for Snap apps.
 * @class 
 */
export class Alias extends GObject.Object {

    // Own properties of Snapd-1.Snapd.Alias

    static name: string

    // Constructors of Snapd-1.Snapd.Alias

    constructor(config?: Alias.ConstructorProperties) 
    _init(config?: Alias.ConstructorProperties): void
}

export module App {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Snapd-1.Snapd.App

        active?: boolean | null
        aliases?: string[] | null
        commonId?: string | null
        daemonType?: DaemonType | null
        desktopFile?: string | null
        enabled?: boolean | null
        name?: string | null
        snap?: string | null
    }

}

export interface App {

    // Own properties of Snapd-1.Snapd.App

    readonly active: boolean
    readonly aliases: string[]
    readonly commonId: string | null
    readonly daemonType: DaemonType
    readonly desktopFile: string | null
    readonly enabled: boolean
    readonly name: string | null
    readonly snap: string | null
    __gtype__: number

    // Owm methods of Snapd-1.Snapd.App

    /**
     * Get if this service is active.
     * @returns %TRUE if active.
     */
    getActive(): boolean
    /**
     * Get the aliases for this app.
     * @returns the alias names.
     */
    getAliases(): string[]
    /**
     * Get the common ID associated with this app.
     * @returns an ID or %NULL.
     */
    getCommonId(): string | null
    /**
     * Get the daemon type for this app.
     * @returns the daemon type or %NULL.
     */
    getDaemonType(): DaemonType | null
    /**
     * Get the path to the desktop file for this app.
     * @returns a path or %NULL.
     */
    getDesktopFile(): string | null
    /**
     * Get if this service is enabled.
     * @returns %TRUE if enabled.
     */
    getEnabled(): boolean
    /**
     * Get the name of this app.
     * @returns a name.
     */
    getName(): string
    /**
     * Get the snap this app is associated with.
     * @returns a snap name.
     */
    getSnap(): string

    // Class property signals of Snapd-1.Snapd.App

    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::aliases", callback: (...args: any[]) => void): number
    on(sigName: "notify::aliases", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::aliases", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::aliases", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::aliases", ...args: any[]): void
    connect(sigName: "notify::common-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::common-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::common-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::common-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::common-id", ...args: any[]): void
    connect(sigName: "notify::daemon-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::daemon-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::daemon-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::daemon-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::daemon-type", ...args: any[]): void
    connect(sigName: "notify::desktop-file", callback: (...args: any[]) => void): number
    on(sigName: "notify::desktop-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::desktop-file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::desktop-file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::desktop-file", ...args: any[]): void
    connect(sigName: "notify::enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::enabled", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::snap", callback: (...args: any[]) => void): number
    on(sigName: "notify::snap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::snap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::snap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::snap", ...args: any[]): void
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

/**
 * #SnapdApp contains information about an app in a Snap.
 * 
 * Snaps can contain apps which is a single binary executable.
 * @class 
 */
export class App extends GObject.Object {

    // Own properties of Snapd-1.Snapd.App

    static name: string

    // Constructors of Snapd-1.Snapd.App

    constructor(config?: App.ConstructorProperties) 
    _init(config?: App.ConstructorProperties): void
}

export module Assertion {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Snapd-1.Snapd.Assertion

        content?: string | null
    }

}

export interface Assertion {

    // Own properties of Snapd-1.Snapd.Assertion

    readonly content: string | null
    __gtype__: number

    // Owm methods of Snapd-1.Snapd.Assertion

    /**
     * Get the body of the assertion.
     * @returns assertion body or %NULL.
     */
    getBody(): string | null
    /**
     * Get a header from an assertion.
     * @param name name of the header.
     * @returns header value or %NULL if undefined.
     */
    getHeader(name: string): string | null
    /**
     * Get the headers provided by this assertion.
     * @returns array of header names.
     */
    getHeaders(): string[]
    /**
     * Get the signature of the assertion.
     * @returns assertion signature.
     */
    getSignature(): string | null

    // Class property signals of Snapd-1.Snapd.Assertion

    connect(sigName: "notify::content", callback: (...args: any[]) => void): number
    on(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content", ...args: any[]): void
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

/**
 * #SnapdAssertion contains information about a Snap assertion.
 * 
 * Assertions are digitally signed documents that allow Snaps to have secure
 * trust and control features.
 * @class 
 */
export class Assertion extends GObject.Object {

    // Own properties of Snapd-1.Snapd.Assertion

    static name: string

    // Constructors of Snapd-1.Snapd.Assertion

    constructor(config?: Assertion.ConstructorProperties) 
    /**
     * Create a new assertion.
     * @constructor 
     * @param content the text content of the assertion.
     * @returns a new #SnapdAssertion
     */
    constructor(content: string) 
    /**
     * Create a new assertion.
     * @constructor 
     * @param content the text content of the assertion.
     * @returns a new #SnapdAssertion
     */
    static new(content: string): Assertion
    _init(config?: Assertion.ConstructorProperties): void
}

export module AuthData {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Snapd-1.Snapd.AuthData

        discharges?: string[] | null
        macaroon?: string | null
    }

}

export interface AuthData {

    // Own properties of Snapd-1.Snapd.AuthData

    discharges: string[]
    macaroon: string | null
    __gtype__: number

    // Owm methods of Snapd-1.Snapd.AuthData

    /**
     * Get the discharges that this authorization uses.
     * @returns the discharges as serialized strings.
     */
    getDischarges(): string[]
    /**
     * Get the Macaroon that this authorization uses.
     * @returns the serialized Macaroon used to authorize access to snapd.
     */
    getMacaroon(): string

    // Class property signals of Snapd-1.Snapd.AuthData

    connect(sigName: "notify::discharges", callback: (...args: any[]) => void): number
    on(sigName: "notify::discharges", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::discharges", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::discharges", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::discharges", ...args: any[]): void
    connect(sigName: "notify::macaroon", callback: (...args: any[]) => void): number
    on(sigName: "notify::macaroon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::macaroon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::macaroon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::macaroon", ...args: any[]): void
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

/**
 * #SnapdAuthData contains authorization data used to communicate with snapd.
 * 
 * The authorization data is in the form of a [Macaroon](https://research.google.com/pubs/pub41892.html).
 * @class 
 */
export class AuthData extends GObject.Object {

    // Own properties of Snapd-1.Snapd.AuthData

    static name: string

    // Constructors of Snapd-1.Snapd.AuthData

    constructor(config?: AuthData.ConstructorProperties) 
    /**
     * Create some authorization data.
     * @constructor 
     * @param macaroon serialized macaroon used to authorize access to snapd.
     * @param discharges serialized discharges.
     * @returns a new #SnapdAuthData
     */
    constructor(macaroon: string, discharges: string[]) 
    /**
     * Create some authorization data.
     * @constructor 
     * @param macaroon serialized macaroon used to authorize access to snapd.
     * @param discharges serialized discharges.
     * @returns a new #SnapdAuthData
     */
    static new(macaroon: string, discharges: string[]): AuthData
    _init(config?: AuthData.ConstructorProperties): void
}

export module Change {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Snapd-1.Snapd.Change

        error?: string | null
        id?: string | null
        kind?: string | null
        ready?: boolean | null
        readyTime?: GLib.DateTime | null
        spawnTime?: GLib.DateTime | null
        status?: string | null
        summary?: string | null
        tasks?: any[] | null
    }

}

export interface Change {

    // Own properties of Snapd-1.Snapd.Change

    readonly error: string | null
    readonly id: string | null
    readonly kind: string | null
    readonly ready: boolean
    readonly readyTime: GLib.DateTime
    readonly spawnTime: GLib.DateTime
    readonly status: string | null
    readonly summary: string | null
    readonly tasks: any[]
    __gtype__: number

    // Owm methods of Snapd-1.Snapd.Change

    /**
     * Gets the error string associated with this change.
     * @returns an error string or %NULL.
     */
    getError(): string | null
    /**
     * Get the unique ID for this change.
     * @returns an ID.
     */
    getId(): string
    /**
     * Gets the kind of change this is.
     * @returns the kind of change.
     */
    getKind(): string
    /**
     * Get if this change is completed.
     * @returns %TRUE if this change is complete.
     */
    getReady(): boolean
    /**
     * Get the time this task completed or %NULL if not yet completed.
     * @returns a #GDateTime or %NULL.
     */
    getReadyTime(): GLib.DateTime | null
    /**
     * Get the time this change started.
     * @returns a #GDateTime.
     */
    getSpawnTime(): GLib.DateTime
    /**
     * Get the status of the change.
     * @returns a status string.
     */
    getStatus(): string
    /**
     * Get a human readable description of the change.
     * @returns a string describing the change.
     */
    getSummary(): string
    /**
     * Get the tasks that are in this change.
     * @returns an array of #SnapdTask.
     */
    getTasks(): Task[]

    // Class property signals of Snapd-1.Snapd.Change

    connect(sigName: "notify::error", callback: (...args: any[]) => void): number
    on(sigName: "notify::error", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::error", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::error", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::error", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::kind", callback: (...args: any[]) => void): number
    on(sigName: "notify::kind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::kind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::kind", ...args: any[]): void
    connect(sigName: "notify::ready", callback: (...args: any[]) => void): number
    on(sigName: "notify::ready", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ready", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ready", ...args: any[]): void
    connect(sigName: "notify::ready-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::ready-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ready-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ready-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ready-time", ...args: any[]): void
    connect(sigName: "notify::spawn-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::spawn-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::spawn-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::spawn-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::spawn-time", ...args: any[]): void
    connect(sigName: "notify::status", callback: (...args: any[]) => void): number
    on(sigName: "notify::status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (...args: any[]) => void): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::tasks", callback: (...args: any[]) => void): number
    on(sigName: "notify::tasks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tasks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tasks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tasks", ...args: any[]): void
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

/**
 * #SnapdChange contains information on a current Snap transaction.
 * @class 
 */
export class Change extends GObject.Object {

    // Own properties of Snapd-1.Snapd.Change

    static name: string

    // Constructors of Snapd-1.Snapd.Change

    constructor(config?: Change.ConstructorProperties) 
    _init(config?: Change.ConstructorProperties): void
}

export module Channel {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Snapd-1.Snapd.Channel

        confinement?: Confinement | null
        epoch?: string | null
        name?: string | null
        releasedAt?: GLib.DateTime | null
        revision?: string | null
        size?: number | null
        version?: string | null
    }

}

export interface Channel {

    // Own properties of Snapd-1.Snapd.Channel

    readonly confinement: Confinement
    readonly epoch: string | null
    readonly name: string | null
    readonly releasedAt: GLib.DateTime
    readonly revision: string | null
    readonly size: number
    readonly version: string | null
    __gtype__: number

    // Owm methods of Snapd-1.Snapd.Channel

    /**
     * Get the branch this channel is tracking.
     * @returns a branch name or %NULL if not a branch.
     */
    getBranch(): string | null
    /**
     * Get the confinement this snap is using, e.g. %SNAPD_CONFINEMENT_STRICT.
     * @returns a #SnapdConfinement.
     */
    getConfinement(): Confinement
    /**
     * Get the epoch used on this channel, e.g. "1".
     * @returns an epoch.
     */
    getEpoch(): string
    /**
     * Get the name of this channel, e.g. "stable".
     * 
     * Channel names are in the form `track/risk/branch`
     * 
     * `track` is the name of the feature track. Defaults to `latest` and is implied
     *         if the track is not present.
     * `risk` is the risk of the channel, one of `stable`, `candidate`, `beta` or `edge`.
     * `branch` is an optional branch name.
     * 
     * Example names:
     * `beta` (alias to `latest/beta`)
     * `xenial/stable` (stable release on xenial track)
     * `latest/stable/red-button` (red button feature branch)
     * @returns a name.
     */
    getName(): string
    /**
     * Get the date this revision was released into the channel or %NULL if unknown.
     * @returns a #GDateTime.
     */
    getReleasedAt(): GLib.DateTime | null
    /**
     * Get the revision for this snap. The format of the string is undefined.
     * See also snapd_channel_get_version().
     * @returns a revision string.
     */
    getRevision(): string
    /**
     * Get the risk this channel is on, one of `stable`, `candidate`, `beta` or `edge`.
     * @returns a risk name.
     */
    getRisk(): string
    /**
     * Get the download size of this snap.
     * @returns a byte count.
     */
    getSize(): number
    /**
     * Get the track this channel is on.
     * @returns a track name.
     */
    getTrack(): string
    /**
     * Get the version for this snap. The format of the string is undefined.
     * See also snapd_channel_get_revision().
     * @returns a version string.
     */
    getVersion(): string

    // Class property signals of Snapd-1.Snapd.Channel

    connect(sigName: "notify::confinement", callback: (...args: any[]) => void): number
    on(sigName: "notify::confinement", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::confinement", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::confinement", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::confinement", ...args: any[]): void
    connect(sigName: "notify::epoch", callback: (...args: any[]) => void): number
    on(sigName: "notify::epoch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::epoch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::epoch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::epoch", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::released-at", callback: (...args: any[]) => void): number
    on(sigName: "notify::released-at", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::released-at", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::released-at", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::released-at", ...args: any[]): void
    connect(sigName: "notify::revision", callback: (...args: any[]) => void): number
    on(sigName: "notify::revision", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::revision", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::revision", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::revision", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
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

/**
 * #SnapdChannel is an opaque data structure and can only be accessed
 * using the provided functions.
 * @class 
 */
export class Channel extends GObject.Object {

    // Own properties of Snapd-1.Snapd.Channel

    static name: string

    // Constructors of Snapd-1.Snapd.Channel

    constructor(config?: Channel.ConstructorProperties) 
    _init(config?: Channel.ConstructorProperties): void
}

export module Client {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Client {

    // Own properties of Snapd-1.Snapd.Client

    __gtype__: number

    // Own fields of Snapd-1.Snapd.Client

    parentInstance: GObject.Object

    // Owm methods of Snapd-1.Snapd.Client

    /**
     * Asynchronously abort a change.
     * See snapd_client_abort_change_sync() for more information.
     * @param id a change ID to abort.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    abortChangeAsync(id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_abort_change_async().
     * See snapd_client_abort_change_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns a #SnapdChange or %NULL on error.
     */
    abortChangeFinish(result: Gio.AsyncResult): Change
    /**
     * Get information on a change.
     * @param id a change ID to abort.
     * @param cancellable a #GCancellable or %NULL.
     * @returns a #SnapdChange or %NULL on error.
     */
    abortChangeSync(id: string, cancellable: Gio.Cancellable | null): Change
    /**
     * Asynchronously add an assertion.
     * See snapd_client_add_assertions_sync() for more information.
     * @param assertions assertions to add.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    addAssertionsAsync(assertions: string[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_add_assertions_async().
     * See snapd_client_add_assertions_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    addAssertionsFinish(result: Gio.AsyncResult): boolean
    /**
     * Add an assertion.
     * @param assertions assertions to add.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    addAssertionsSync(assertions: string[], cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously create an alias to an app.
     * See snapd_client_alias_sync() for more information.
     * @param snap the name of the snap to modify.
     * @param app an app in the snap to make the alias to.
     * @param alias the name of the alias (i.e. the command that will run this app).
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    aliasAsync(snap: string, app: string, alias: string, progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_alias_async().
     * See snapd_client_alias_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    aliasFinish(result: Gio.AsyncResult): boolean
    /**
     * Create an alias to an app.
     * @param snap the name of the snap to modify.
     * @param app an app in the snap to make the alias to.
     * @param alias the name of the alias (i.e. the command that will run this app).
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     */
    aliasSync(snap: string, app: string, alias: string, progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously buy a snap from the store.
     * See snapd_client_buy_sync() for more information.
     * @param id id of snap to buy.
     * @param amount amount of currency to spend, e.g. 0.99.
     * @param currency the currency to buy with as an ISO 4217 currency code, e.g. "NZD".
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    buyAsync(id: string, amount: number, currency: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_buy_async().
     * See snapd_client_buy_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    buyFinish(result: Gio.AsyncResult): boolean
    /**
     * Buy a snap from the store. Once purchased, this snap can be installed with
     * snapd_client_install2_sync().
     * @param id id of snap to buy.
     * @param amount amount of currency to spend, e.g. 0.99.
     * @param currency the currency to buy with as an ISO 4217 currency code, e.g. "NZD".
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    buySync(id: string, amount: number, currency: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously check if able to buy snaps.
     * See snapd_client_check_buy_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    checkBuyAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_check_buy_async().
     * See snapd_client_check_buy_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    checkBuyFinish(result: Gio.AsyncResult): boolean
    /**
     * Check if able to buy snaps.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE if able to buy snaps or %FALSE on error.
     */
    checkBuySync(cancellable: Gio.Cancellable | null): boolean
    /**
     * This method is no longer required and does nothing, snapd-glib now connects on demand.
     * @param cancellable a #GCancellable or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    connectAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_connect_async().
     * See snapd_client_connect_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE if successfully connected to snapd.
     */
    connectFinish(result: Gio.AsyncResult): boolean
    /**
     * Asynchronously connect two interfaces together.
     * See snapd_client_connect_interface_sync() for more information.
     * @param plugSnap name of snap containing plug.
     * @param plugName name of plug to connect.
     * @param slotSnap name of snap containing socket.
     * @param slotName name of slot to connect.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    connectInterfaceAsync(plugSnap: string, plugName: string, slotSnap: string, slotName: string, progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_connect_interface_async().
     * See snapd_client_connect_interface_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    connectInterfaceFinish(result: Gio.AsyncResult): boolean
    /**
     * Connect two interfaces together.
     * An asynchronous version of this function is snapd_client_connect_interface_async().
     * @param plugSnap name of snap containing plug.
     * @param plugName name of plug to connect.
     * @param slotSnap name of snap containing socket.
     * @param slotName name of slot to connect.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    connectInterfaceSync(plugSnap: string, plugName: string, slotSnap: string, slotName: string, progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * This method is no longer required and does nothing, snapd-glib now connects on demand.
     * @param cancellable a #GCancellable or %NULL
     * @returns %TRUE if successfully connected to snapd.
     */
    connectSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously create a local user account.
     * See snapd_client_create_user_sync() for more information.
     * @param email the email of the user to create.
     * @param flags a set of #SnapdCreateUserFlags to control how the user account is created.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    createUserAsync(email: string, flags: CreateUserFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_create_user_async().
     * See snapd_client_create_user_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns a #SnapdUserInformation or %NULL on error.
     */
    createUserFinish(result: Gio.AsyncResult): UserInformation
    /**
     * Create a local user account for the given user.
     * @param email the email of the user to create.
     * @param flags a set of #SnapdCreateUserFlags to control how the user account is created.
     * @param cancellable a #GCancellable or %NULL.
     * @returns a #SnapdUserInformation or %NULL on error.
     */
    createUserSync(email: string, flags: CreateUserFlags, cancellable: Gio.Cancellable | null): UserInformation
    /**
     * Asynchronously create local user accounts using the system-user assertions that are valid for this device.
     * See snapd_client_create_users_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    createUsersAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_create_users_async().
     * See snapd_client_create_users_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns an array of #SnapdUserInformation or %NULL on error.
     */
    createUsersFinish(result: Gio.AsyncResult): UserInformation[]
    /**
     * Create local user accounts using the system-user assertions that are valid for this device.
     * @param cancellable a #GCancellable or %NULL.
     * @returns an array of #SnapdUserInformation or %NULL on error.
     */
    createUsersSync(cancellable: Gio.Cancellable | null): UserInformation[]
    /**
     * Asynchronously change the state of aliases.
     * See snapd_client_disable_aliases_sync() for more information.
     * @param snap the name of the snap to modify.
     * @param aliases the aliases to modify.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    disableAliasesAsync(snap: string, aliases: string[], progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_disable_aliases_async().
     * See snapd_client_disable_aliases_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    disableAliasesFinish(result: Gio.AsyncResult): boolean
    /**
     * Change the state of aliases.
     * @param snap the name of the snap to modify.
     * @param aliases the aliases to modify.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    disableAliasesSync(snap: string, aliases: string[], progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously disable an installed snap.
     * See snapd_client_disable_sync() for more information.
     * @param name name of snap to disable.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    disableAsync(name: string, progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_disable_async().
     * See snapd_client_disable_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    disableFinish(result: Gio.AsyncResult): boolean
    /**
     * Disable an installed snap.
     * @param name name of snap to disable.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    disableSync(name: string, progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously disconnect two interfaces.
     * See snapd_client_disconnect_interface_sync() for more information.
     * @param plugSnap name of snap containing plug.
     * @param plugName name of plug to disconnect.
     * @param slotSnap name of snap containing socket.
     * @param slotName name of slot to disconnect.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    disconnectInterfaceAsync(plugSnap: string, plugName: string, slotSnap: string, slotName: string, progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_disconnect_interface_async().
     * See snapd_client_disconnect_interface_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    disconnectInterfaceFinish(result: Gio.AsyncResult): boolean
    /**
     * Disconnect two interfaces.
     * @param plugSnap name of snap containing plug.
     * @param plugName name of plug to disconnect.
     * @param slotSnap name of snap containing socket.
     * @param slotName name of slot to disconnect.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    disconnectInterfaceSync(plugSnap: string, plugName: string, slotSnap: string, slotName: string, progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously download a snap.
     * See snapd_client_download_sync() for more information.
     * @param name name of snap to download.
     * @param channel channel to download from.
     * @param revision revision to download.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    downloadAsync(name: string, channel: string | null, revision: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_download_async().
     * See snapd_client_download_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns the snap contents or %NULL on error.
     */
    downloadFinish(result: Gio.AsyncResult): any
    /**
     * Download the given snap.
     * @param name name of snap to download.
     * @param channel channel to download from.
     * @param revision revision to download.
     * @param cancellable a #GCancellable or %NULL.
     * @returns the snap contents or %NULL on error.
     */
    downloadSync(name: string, channel: string | null, revision: string | null, cancellable: Gio.Cancellable | null): any
    /**
     * Asynchronously change the state of aliases.
     * See snapd_client_enable_aliases_sync() for more information.
     * @param snap the name of the snap to modify.
     * @param aliases the aliases to modify.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    enableAliasesAsync(snap: string, aliases: string[], progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_enable_aliases_async().
     * See snapd_client_enable_aliases_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    enableAliasesFinish(result: Gio.AsyncResult): boolean
    /**
     * Change the state of aliases.
     * @param snap the name of the snap to modify.
     * @param aliases the aliases to modify.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    enableAliasesSync(snap: string, aliases: string[], progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously enable an installed snap.
     * See snapd_client_enable_sync() for more information.
     * @param name name of snap to enable.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    enableAsync(name: string, progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_enable_async().
     * See snapd_client_enable_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    enableFinish(result: Gio.AsyncResult): boolean
    /**
     * Enable an installed snap.
     * @param name name of snap to enable.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    enableSync(name: string, progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously find snaps in the store.
     * See snapd_client_find_sync() for more information.
     * @param flags a set of #SnapdFindFlags to control how the find is performed.
     * @param query query string to send.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    findAsync(flags: FindFlags, query: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_find_async().
     * See snapd_client_find_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns an array of #SnapdSnap or %NULL on error.
     */
    findFinish(result: Gio.AsyncResult): [ /* returnType */ Snap[], /* suggestedCurrency */ string ]
    /**
     * Asynchronously find snaps in store that are newer revisions than locally installed versions.
     * See snapd_client_find_refreshable_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    findRefreshableAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_find_refreshable_async().
     * See snapd_client_find_refreshable_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns an array of #SnapdSnap or %NULL on error.
     */
    findRefreshableFinish(result: Gio.AsyncResult): Snap[]
    /**
     * Find snaps in store that are newer revisions than locally installed versions.
     * @param cancellable a #GCancellable or %NULL.
     * @returns an array of #SnapdSnap or %NULL on error.
     */
    findRefreshableSync(cancellable: Gio.Cancellable | null): Snap[]
    /**
     * Asynchronously find snaps in the store.
     * See snapd_client_find_section_sync() for more information.
     * @param flags a set of #SnapdFindFlags to control how the find is performed.
     * @param section store section to search in or %NULL to search in all sections.
     * @param query query string to send or %NULL to get all snaps from the given section.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    findSectionAsync(flags: FindFlags, section: string | null, query: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_find_async().
     * See snapd_client_find_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns an array of #SnapdSnap or %NULL on error.
     */
    findSectionFinish(result: Gio.AsyncResult): [ /* returnType */ Snap[], /* suggestedCurrency */ string ]
    /**
     * Find snaps in the store.
     * @param flags a set of #SnapdFindFlags to control how the find is performed.
     * @param section store section to search in or %NULL to search in all sections.
     * @param query query string to send or %NULL to get all snaps from the given section.
     * @param cancellable a #GCancellable or %NULL.
     * @returns an array of #SnapdSnap or %NULL on error.
     */
    findSectionSync(flags: FindFlags, section: string | null, query: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ Snap[], /* suggestedCurrency */ string ]
    /**
     * Find snaps in the store.
     * @param flags a set of #SnapdFindFlags to control how the find is performed.
     * @param query query string to send.
     * @param cancellable a #GCancellable or %NULL.
     * @returns an array of #SnapdSnap or %NULL on error.
     */
    findSync(flags: FindFlags, query: string, cancellable: Gio.Cancellable | null): [ /* returnType */ Snap[], /* suggestedCurrency */ string ]
    /**
     * Asynchronously get the available aliases.
     * See snapd_client_get_aliases_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    getAliasesAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_get_aliases_async().
     * See snapd_client_get_aliases_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns an array of #SnapdAlias or %NULL on error.
     */
    getAliasesFinish(result: Gio.AsyncResult): Alias[]
    /**
     * Get the available aliases.
     * @param cancellable a #GCancellable or %NULL.
     * @returns an array of #SnapdAlias or %NULL on error.
     */
    getAliasesSync(cancellable: Gio.Cancellable | null): Alias[]
    /**
     * Get whether snapd operations are allowed to interact with the user.
     * @returns %TRUE if interaction is allowed.
     */
    getAllowInteraction(): boolean
    /**
     * Asynchronously get information on installed apps.
     * See snapd_client_get_apps2_sync() for more information.
     * @param flags a set of #SnapdGetAppsFlags to control what results are returned.
     * @param snaps A list of snap names to return results for. If %NULL or empty then apps for all installed snaps are returned.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    getApps2Async(flags: GetAppsFlags, snaps: string[] | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_get_apps2_async().
     * See snapd_client_get_apps2_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns an array of #SnapdApp or %NULL on error.
     */
    getApps2Finish(result: Gio.AsyncResult): App[]
    /**
     * Get information on installed apps.
     * @param flags a set of #SnapdGetAppsFlags to control what results are returned.
     * @param snaps A list of snap names to return results for. If %NULL or empty then apps for all installed snaps are returned.
     * @param cancellable a #GCancellable or %NULL.
     * @returns an array of #SnapdApp or %NULL on error.
     */
    getApps2Sync(flags: GetAppsFlags, snaps: string[] | null, cancellable: Gio.Cancellable | null): App[]
    /**
     * Asynchronously get information on installed apps.
     * See snapd_client_get_apps_sync() for more information.
     * @param flags a set of #SnapdGetAppsFlags to control what results are returned.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    getAppsAsync(flags: GetAppsFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_get_apps_async().
     * See snapd_client_get_apps_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns an array of #SnapdApp or %NULL on error.
     */
    getAppsFinish(result: Gio.AsyncResult): App[]
    /**
     * Get information on installed apps.
     * @param flags a set of #SnapdGetAppsFlags to control what results are returned.
     * @param cancellable a #GCancellable or %NULL.
     * @returns an array of #SnapdApp or %NULL on error.
     */
    getAppsSync(flags: GetAppsFlags, cancellable: Gio.Cancellable | null): App[]
    /**
     * Asynchronously get assertions.
     * See snapd_client_get_assertions_sync() for more information.
     * @param type assertion type to get.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    getAssertionsAsync(type: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_get_assertions_async().
     * See snapd_client_get_assertions_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns an array of assertions or %NULL on error.
     */
    getAssertionsFinish(result: Gio.AsyncResult): string[]
    /**
     * Get assertions.
     * @param type assertion type to get.
     * @param cancellable a #GCancellable or %NULL.
     * @returns an array of assertions or %NULL on error.
     */
    getAssertionsSync(type: string, cancellable: Gio.Cancellable | null): string[]
    /**
     * Get the authorization data that is used for requests.
     * @returns a #SnapdAuthData or %NULL.
     */
    getAuthData(): AuthData | null
    /**
     * Asynchronously get information on a change.
     * See snapd_client_get_change_sync() for more information.
     * @param id a change ID to get information on.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    getChangeAsync(id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_get_change_async().
     * See snapd_client_get_change_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns a #SnapdChange or %NULL on error.
     */
    getChangeFinish(result: Gio.AsyncResult): Change
    /**
     * Get information on a change.
     * @param id a change ID to get information on.
     * @param cancellable a #GCancellable or %NULL.
     * @returns a #SnapdChange or %NULL on error.
     */
    getChangeSync(id: string, cancellable: Gio.Cancellable | null): Change
    /**
     * Asynchronously get changes that have occurred / are occurring on the snap daemon.
     * See snapd_client_get_changes_sync() for more information.
     * @param filter changes to filter on.
     * @param snapName name of snap to filter on or %NULL for changes for any snap.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    getChangesAsync(filter: ChangeFilter, snapName: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_get_changes_async().
     * See snapd_client_get_changes_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns an array of #SnapdChange or %NULL on error.
     */
    getChangesFinish(result: Gio.AsyncResult): Change[]
    /**
     * Get changes that have occurred / are occurring on the snap daemon.
     * @param filter changes to filter on.
     * @param snapName name of snap to filter on or %NULL for changes for any snap.
     * @param cancellable a #GCancellable or %NULL.
     * @returns an array of #SnapdChange or %NULL on error.
     */
    getChangesSync(filter: ChangeFilter, snapName: string | null, cancellable: Gio.Cancellable | null): Change[]
    /**
     * Asynchronously get the installed snap connections.
     * See snapd_client_get_connections_sync() for more information.
     * @param flags a set of #SnapdGetConnectionsFlags to control what results are returned.
     * @param snap the name of the snap to get connections for or %NULL for all snaps.
     * @param interface the name of the interface to get connections for or %NULL for all interfaces.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    getConnections2Async(flags: GetConnectionsFlags, snap: string | null, interface: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_get_connections_async().
     * See snapd_client_get_connections_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    getConnections2Finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* established */ Connection[], /* undesired */ Connection[], /* plugs */ Plug[], /* slots */ Slot[] ]
    /**
     * Get the installed snap connections.
     * @param flags a set of #SnapdGetConnectionsFlags to control what results are returned.
     * @param snap the name of the snap to get connections for or %NULL for all snaps.
     * @param interface the name of the interface to get connections for or %NULL for all interfaces.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    getConnections2Sync(flags: GetConnectionsFlags, snap: string | null, interface: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* established */ Connection[], /* undesired */ Connection[], /* plugs */ Plug[], /* slots */ Slot[] ]
    /**
     * Asynchronously get the installed snap connections.
     * See snapd_client_get_connections_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    getConnectionsAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_get_connections_async().
     * See snapd_client_get_connections_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    getConnectionsFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* established */ Connection[], /* undesired */ Connection[], /* plugs */ Plug[], /* slots */ Slot[] ]
    /**
     * Get the installed snap connections.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    getConnectionsSync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* established */ Connection[], /* undesired */ Connection[], /* plugs */ Plug[], /* slots */ Slot[] ]
    /**
     * Asynchronously get the icon for an installed snap.
     * See snapd_client_get_icon_sync() for more information.
     * @param name name of snap to get icon for.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    getIconAsync(name: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_get_icon_async().
     * See snapd_client_get_icon_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns a #SnapdIcon or %NULL on error.
     */
    getIconFinish(result: Gio.AsyncResult): Icon
    /**
     * Get the icon for an installed snap.
     * @param name name of snap to get icon for.
     * @param cancellable a #GCancellable or %NULL.
     * @returns a #SnapdIcon or %NULL on error.
     */
    getIconSync(name: string, cancellable: Gio.Cancellable | null): Icon
    /**
     * Asynchronously get the installed snap interfaces.
     * See snapd_client_get_interfaces2_sync() for more information.
     * @param flags a set of #SnapdGetInterfacesFlags to control what information is returned about the interfaces.
     * @param names a null-terminated array of interface names or %NULL.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    getInterfaces2Async(flags: GetInterfacesFlags, names: string[] | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_get_interfaces2_async().
     * See snapd_client_get_interfaces2_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns an array of #SnapdInterface or %NULL on error.
     */
    getInterfaces2Finish(result: Gio.AsyncResult): Interface[]
    /**
     * Get information about the available snap interfaces.
     * @param flags a set of #SnapdGetInterfacesFlags to control what information is returned about the interfaces.
     * @param names a null-terminated array of interface names or %NULL.
     * @param cancellable a #GCancellable or %NULL.
     * @returns the available interfaces.
     */
    getInterfaces2Sync(flags: GetInterfacesFlags, names: string[] | null, cancellable: Gio.Cancellable | null): Interface[]
    /**
     * Asynchronously get the installed snap interfaces.
     * See snapd_client_get_interfaces_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    getInterfacesAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_get_interfaces_async().
     * See snapd_client_get_interfaces_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    getInterfacesFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* plugs */ Plug[], /* slots */ Slot[] ]
    /**
     * Get the installed snap interfaces.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    getInterfacesSync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* plugs */ Plug[], /* slots */ Slot[] ]
    /**
     * Get the maintenance information reported by snapd or %NULL if no maintenance is in progress.
     * This information is updated after every request.
     * @returns a #SnapdMaintenance or %NULL.
     */
    getMaintenance(): Maintenance | null
    /**
     * Asynchronously get the store sections.
     * See snapd_client_get_sections_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    getSectionsAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_get_sections_async().
     * See snapd_client_get_sections_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns an array of section names or %NULL on error.
     */
    getSectionsFinish(result: Gio.AsyncResult): string[]
    /**
     * Get the store sections.
     * @param cancellable a #GCancellable or %NULL.
     * @returns an array of section names or %NULL on error.
     */
    getSectionsSync(cancellable: Gio.Cancellable | null): string[]
    /**
     * Asynchronously get information of a single installed snap.
     * See snapd_client_get_snap_sync() for more information.
     * @param name name of snap to get.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    getSnapAsync(name: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Asynchronously get configuration for a snap.
     * See snapd_client_get_snap_conf_sync() for more information.
     * @param name name of snap to get configuration from.
     * @param keys keys to returns or %NULL to return all.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    getSnapConfAsync(name: string, keys: string[] | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_get_snap_conf_async().
     * See snapd_client_get_snap_conf_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns a table of configuration values or %NULL on error.
     */
    getSnapConfFinish(result: Gio.AsyncResult): GLib.HashTable
    /**
     * Get configuration for a snap. System configuration is stored using the name "system".
     * @param name name of snap to get configuration from.
     * @param keys keys to returns or %NULL to return all.
     * @param cancellable a #GCancellable or %NULL.
     * @returns a table of configuration values or %NULL on error.
     */
    getSnapConfSync(name: string, keys: string[] | null, cancellable: Gio.Cancellable | null): GLib.HashTable
    /**
     * Complete request started with snapd_client_get_snap_async().
     * See snapd_client_get_snap_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns a #SnapdSnap or %NULL on error.
     */
    getSnapFinish(result: Gio.AsyncResult): Snap
    /**
     * Get information of a single installed snap. If the snap does not exist an error occurs.
     * @param name name of snap to get.
     * @param cancellable a #GCancellable or %NULL.
     * @returns a #SnapdSnap or %NULL on error.
     */
    getSnapSync(name: string, cancellable: Gio.Cancellable | null): Snap
    /**
     * Asynchronously get information on installed snaps.
     * See snapd_client_get_snaps_sync() for more information.
     * @param flags a set of #SnapdGetSnapsFlags to control what results are returned.
     * @param names A list of snap names to return results for. If %NULL or empty then all installed snaps are returned.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    getSnapsAsync(flags: GetSnapsFlags, names: string[] | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_get_snaps_async().
     * See snapd_client_get_snaps_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns an array of #SnapdSnap or %NULL on error.
     */
    getSnapsFinish(result: Gio.AsyncResult): Snap[]
    /**
     * Get information on installed snaps (snaps with status %SNAPD_SNAP_STATUS_ACTIVE).
     * If `flags` contains %SNAPD_GET_SNAPS_FLAGS_INCLUDE_INACTIVE then also return snaps
     * with status %SNAPD_SNAP_STATUS_INSTALLED.
     * 
     * If `names` is not %NULL and contains at least one name only snaps that match these names are
     * returned. If a snap is not installed it is not returned (no error is generated).
     * @param flags a set of #SnapdGetSnapsFlags to control what results are returned.
     * @param names A list of snap names or %NULL.
     * @param cancellable a #GCancellable or %NULL.
     * @returns an array of #SnapdSnap or %NULL on error.
     */
    getSnapsSync(flags: GetSnapsFlags, names: string[] | null, cancellable: Gio.Cancellable | null): Snap[]
    /**
     * Get the unix socket path to connect to snapd with.
     * @returns socket path.
     */
    getSocketPath(): string
    /**
     * Request system information asynchronously from snapd.
     * See snapd_client_get_system_information_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    getSystemInformationAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_get_system_information_async().
     * See snapd_client_get_system_information_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns a #SnapdSystemInformation or %NULL on error.
     */
    getSystemInformationFinish(result: Gio.AsyncResult): SystemInformation
    /**
     * Request system information from snapd.
     * While this blocks, snapd is expected to return the information quickly.
     * @param cancellable a #GCancellable or %NULL.
     * @returns a #SnapdSystemInformation or %NULL on error.
     */
    getSystemInformationSync(cancellable: Gio.Cancellable | null): SystemInformation
    /**
     * Get the HTTP user-agent that is sent with each request to snapd.
     * @returns user agent or %NULL if none set.
     */
    getUserAgent(): string | null
    /**
     * Asynchronously get user accounts that are valid for this device.
     * See snapd_client_get_users_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    getUsersAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_get_users_async().
     * See snapd_client_get_users_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns an array of #SnapdUserInformation or %NULL on error.
     */
    getUsersFinish(result: Gio.AsyncResult): UserInformation[]
    /**
     * Get user accounts that are valid for this device.
     * @param cancellable a #GCancellable or %NULL.
     * @returns an array of #SnapdUserInformation or %NULL on error.
     */
    getUsersSync(cancellable: Gio.Cancellable | null): UserInformation[]
    /**
     * Asynchronously install a snap from the store.
     * See snapd_client_install2_sync() for more information.
     * @param flags a set of #SnapdInstallFlags to control install options.
     * @param name name of snap to install.
     * @param channel channel to install from or %NULL for default.
     * @param revision revision to install or %NULL for default.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    install2Async(flags: InstallFlags, name: string, channel: string | null, revision: string | null, progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_install2_async().
     * See snapd_client_install2_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    install2Finish(result: Gio.AsyncResult): boolean
    /**
     * Install a snap from the store.
     * @param flags a set of #SnapdInstallFlags to control install options.
     * @param name name of snap to install.
     * @param channel channel to install from or %NULL for default.
     * @param revision revision to install or %NULL for default.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    install2Sync(flags: InstallFlags, name: string, channel: string | null, revision: string | null, progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously install a snap from the store.
     * See snapd_client_install_sync() for more information.
     * @param name name of snap to install.
     * @param channel channel to install from or %NULL for default.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    installAsync(name: string, channel: string | null, progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_install_async().
     * See snapd_client_install_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    installFinish(result: Gio.AsyncResult): boolean
    /**
     * Asynchronously install a snap.
     * See snapd_client_install_stream_sync() for more information.
     * @param flags a set of #SnapdInstallFlags to control install options.
     * @param stream a #GInputStream containing the snap file contents to install.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    installStreamAsync(flags: InstallFlags, stream: Gio.InputStream, progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_install_stream_async().
     * See snapd_client_install_stream_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    installStreamFinish(result: Gio.AsyncResult): boolean
    /**
     * Install a snap. The snap contents are provided in the form of an input stream.
     * To install from a local file, do the following:
     * 
     * 
     * ```
     * g_autoptr(GFile) file = g_file_new_for_path (path_to_snap_file);
     * g_autoptr(GInputStream) stream = g_file_read (file, cancellable, &error);
     * snapd_client_install_stream_sync (self, stream, progress_cb, NULL, cancellable, &error);
     * \]
     * 
     * Or if you have the file in memory you can use:
     * 
     * 
     * ```
     * g_autoptr(GInputStream) stream = g_memory_input_stream_new_from_data (data, data_length, free_data);
     * snapd_client_install_stream_sync (self, stream, progress_cb, NULL, cancellable, &error);
     * \]
     * @param flags a set of #SnapdInstallFlags to control install options.
     * @param stream a #GInputStream containing the snap file contents to install.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    installStreamSync(flags: InstallFlags, stream: Gio.InputStream, progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Install a snap from the store.
     * @param name name of snap to install.
     * @param channel channel to install from or %NULL for default.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    installSync(name: string, channel: string | null, progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously get information on all installed snaps.
     * See snapd_client_list_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    listAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_list_async().
     * See snapd_client_list_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns an array of #SnapdSnap or %NULL on error.
     */
    listFinish(result: Gio.AsyncResult): Snap[]
    /**
     * Asynchronously get information of a single installed snap.
     * See snapd_client_list_one_sync() for more information.
     * @param name name of snap to get.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    listOneAsync(name: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_list_one_async().
     * See snapd_client_list_one_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns a #SnapdSnap or %NULL on error.
     */
    listOneFinish(result: Gio.AsyncResult): Snap
    /**
     * Get information of a single installed snap.
     * @param name name of snap to get.
     * @param cancellable a #GCancellable or %NULL.
     * @returns a #SnapdSnap or %NULL on error.
     */
    listOneSync(name: string, cancellable: Gio.Cancellable | null): Snap
    /**
     * Get information on all installed snaps.
     * @param cancellable a #GCancellable or %NULL.
     * @returns an array of #SnapdSnap or %NULL on error.
     */
    listSync(cancellable: Gio.Cancellable | null): Snap[]
    /**
     * Asynchronously get authorization to install/remove snaps.
     * See snapd_client_login2_sync() for more information.
     * @param email email address to log in with.
     * @param password password to log in with.
     * @param otp response to one-time password challenge.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    login2Async(email: string, password: string, otp: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_login2_async().
     * See snapd_client_login2_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns a #SnapdUserInformation or %NULL on error.
     */
    login2Finish(result: Gio.AsyncResult): UserInformation
    /**
     * Log in to snapd and get authorization to install/remove snaps.
     * @param email email address to log in with.
     * @param password password to log in with.
     * @param otp response to one-time password challenge.
     * @param cancellable a #GCancellable or %NULL.
     * @returns a #SnapdUserInformation or %NULL on error.
     */
    login2Sync(email: string, password: string, otp: string | null, cancellable: Gio.Cancellable | null): UserInformation
    /**
     * Asynchronously get authorization to install/remove snaps.
     * See snapd_client_login_sync() for more information.
     * @param email email address to log in with.
     * @param password password to log in with.
     * @param otp response to one-time password challenge.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    loginAsync(email: string, password: string, otp: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_login_async().
     * See snapd_client_login_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns a #SnapdAuthData or %NULL on error.
     */
    loginFinish(result: Gio.AsyncResult): AuthData
    /**
     * Log in to snapd and get authorization to install/remove snaps.
     * @param email email address to log in with.
     * @param password password to log in with.
     * @param otp response to one-time password challenge.
     * @param cancellable a #GCancellable or %NULL.
     * @returns a #SnapdAuthData or %NULL on error.
     */
    loginSync(email: string, password: string, otp: string | null, cancellable: Gio.Cancellable | null): AuthData
    /**
     * Asynchronously log out from the snap store.
     * See snapd_client_logout_sync() for more information.
     * @param id login ID to use.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    logoutAsync(id: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_logout_async().
     * See snapd_client_logout_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    logoutFinish(result: Gio.AsyncResult): boolean
    /**
     * Log out from snapd.
     * @param id login ID to use.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    logoutSync(id: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously ???.
     * See snapd_client_prefer_sync() for more information.
     * @param snap the name of the snap to modify.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    preferAsync(snap: string, progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_prefer_async().
     * See snapd_client_prefer_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    preferFinish(result: Gio.AsyncResult): boolean
    /**
     * ???
     * @param snap the name of the snap to modify.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     */
    preferSync(snap: string, progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously ensure all snaps are updated to their latest versions.
     * See snapd_client_refresh_all_sync() for more information.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    refreshAllAsync(progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_refresh_all_async().
     * See snapd_client_refresh_all_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns a %NULL-terminated array of the snap names refreshed or %NULL on error.
     */
    refreshAllFinish(result: Gio.AsyncResult): string[]
    /**
     * Update all installed snaps to their latest version.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns a %NULL-terminated array of the snap names refreshed or %NULL on error.
     */
    refreshAllSync(progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null): string[]
    /**
     * Asynchronously ensure an installed snap is at the latest version.
     * See snapd_client_refresh_sync() for more information.
     * @param name name of snap to refresh.
     * @param channel channel to refresh from or %NULL for default.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    refreshAsync(name: string, channel: string | null, progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_refresh_async().
     * See snapd_client_refresh_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    refreshFinish(result: Gio.AsyncResult): boolean
    /**
     * Ensure an installed snap is at the latest version.
     * @param name name of snap to refresh.
     * @param channel channel to refresh from or %NULL for default.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    refreshSync(name: string, channel: string | null, progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously uninstall a snap.
     * See snapd_client_remove2_sync() for more information.
     * @param flags a set of #SnapdRemoveFlags to control remove options.
     * @param name name of snap to remove.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    remove2Async(flags: RemoveFlags, name: string, progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_remove2_async().
     * See snapd_client_remove2_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    remove2Finish(result: Gio.AsyncResult): boolean
    /**
     * Uninstall a snap.
     * @param flags a set of #SnapdRemoveFlags to control remove options.
     * @param name name of snap to remove.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    remove2Sync(flags: RemoveFlags, name: string, progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously uninstall a snap.
     * See snapd_client_remove_sync() for more information.
     * @param name name of snap to remove.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    removeAsync(name: string, progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_remove_async().
     * See snapd_client_remove_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    removeFinish(result: Gio.AsyncResult): boolean
    /**
     * Uninstall a snap.
     * @param name name of snap to remove.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    removeSync(name: string, progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously change the state of aliases.
     * See snapd_client_reset_aliases_sync() for more information.
     * @param snap the name of the snap to modify.
     * @param aliases the aliases to modify.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    resetAliasesAsync(snap: string, aliases: string[], progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_reset_aliases_async().
     * See snapd_client_reset_aliases_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    resetAliasesFinish(result: Gio.AsyncResult): boolean
    /**
     * Change the state of aliases.
     * @param snap the name of the snap to modify.
     * @param aliases the aliases to modify.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    resetAliasesSync(snap: string, aliases: string[], progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously run a snapctl command.
     * See snapd_client_run_snapctl_sync() for more information.
     * @param contextId context for this call.
     * @param args the arguments to pass to snapctl.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    runSnapctlAsync(contextId: string, args: string[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_run_snapctl_async().
     * See snapd_client_run_snapctl_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    runSnapctlFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* stdoutOutput */ string, /* stderrOutput */ string ]
    /**
     * Run a snapctl command.
     * @param contextId context for this call.
     * @param args the arguments to pass to snapctl.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    runSnapctlSync(contextId: string, args: string[], cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* stdoutOutput */ string[], /* stderrOutput */ string[] ]
    /**
     * Set whether snapd operations are allowed to interact with the user.
     * This affects operations that use polkit authorisation.
     * Defaults to TRUE.
     * @param allowInteraction whether to allow interaction.
     */
    setAllowInteraction(allowInteraction: boolean): void
    /**
     * Set the authorization data to use for requests. Authorization data can be
     * obtained by:
     * 
     * - Logging into snapd using snapd_client_login_sync()
     * 
     * - Using an existing authorization with snapd_auth_data_new().
     * @param authData a #SnapdAuthData or %NULL.
     */
    setAuthData(authData: AuthData | null): void
    /**
     * Asynchronously set configuration for a snap.
     * See snapd_client_set_snap_conf_sync() for more information.
     * @param name name of snap to set configuration for.
     * @param keyValues Keys to set.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    setSnapConfAsync(name: string, keyValues: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_set_snap_conf_async().
     * See snapd_client_set_snap_conf_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE if configuration successfully applied.
     */
    setSnapConfFinish(result: Gio.AsyncResult): boolean
    /**
     * Set configuration for a snap. System configuration is stored using the name "system".
     * @param name name of snap to set configuration for.
     * @param keyValues Keys to set.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE if configuration successfully applied.
     */
    setSnapConfSync(name: string, keyValues: GLib.HashTable, cancellable: Gio.Cancellable | null): boolean
    /**
     * Set the Unix socket path to connect to snapd with.
     * Defaults to the system socket.
     * @param socketPath a socket path or %NULL to reset to the default.
     */
    setSocketPath(socketPath: string | null): void
    /**
     * Set the HTTP user-agent that is sent with each request to snapd.
     * Defaults to "snapd-glib/VERSION".
     * @param userAgent a user agent or %NULL.
     */
    setUserAgent(userAgent: string | null): void
    /**
     * Asynchronously set the tracking channel on an installed snap.
     * See snapd_client_switch_sync() for more information.
     * @param name name of snap to switch channel.
     * @param channel channel to track.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    switchAsync(name: string, channel: string, progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_switch_async().
     * See snapd_client_switch_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    switchFinish(result: Gio.AsyncResult): boolean
    /**
     * Set the tracking channel on an installed snap.
     * @param name name of snap to switch channel.
     * @param channel channel to track.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    switchSync(name: string, channel: string, progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously try a snap.
     * See snapd_client_try_sync() for more information.
     * @param path path to snap directory to try.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    tryAsync(path: string, progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_try_async().
     * See snapd_client_try_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    tryFinish(result: Gio.AsyncResult): boolean
    /**
     * Try a snap.
     * @param path path to snap directory to try.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    trySync(path: string, progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously remove an alias from an app.
     * See snapd_client_unalias_sync() for more information.
     * @param snap the name of the snap to modify or %NULL.
     * @param alias the name of the alias to remove or %NULL to remove all aliases for the given snap.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    unaliasAsync(snap: string | null, alias: string | null, progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete request started with snapd_client_unalias_async().
     * See snapd_client_unalias_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    unaliasFinish(result: Gio.AsyncResult): boolean
    /**
     * Remove an alias from an app.
     * @param snap the name of the snap to modify or %NULL.
     * @param alias the name of the alias to remove or %NULL to remove all aliases for the given snap.
     * @param progressCallback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     */
    unaliasSync(snap: string | null, alias: string | null, progressCallback: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean

    // Class property signals of Snapd-1.Snapd.Client

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

/**
 * #SnapdClient contains connection state with snapd.
 * @class 
 */
export class Client extends GObject.Object {

    // Own properties of Snapd-1.Snapd.Client

    static name: string

    // Constructors of Snapd-1.Snapd.Client

    constructor(config?: Client.ConstructorProperties) 
    /**
     * Create a new client to talk to snapd.
     * @constructor 
     * @returns a new #SnapdClient
     */
    constructor() 
    /**
     * Create a new client to talk to snapd.
     * @constructor 
     * @returns a new #SnapdClient
     */
    static new(): Client
    /**
     * Create a new client to talk on an existing socket.
     * @constructor 
     * @param socket A #GSocket that is connected to snapd.
     * @returns a new #SnapdClient
     */
    static newFromSocket(socket: Gio.Socket): Client
    _init(config?: Client.ConstructorProperties): void
}

export module Connection {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Snapd-1.Snapd.Connection

        gadget?: boolean | null
        interface?: string | null
        manual?: boolean | null
        name?: string | null
        plug?: PlugRef | null
        plugAttrs?: GLib.HashTable | null
        slot?: SlotRef | null
        slotAttrs?: GLib.HashTable | null
        snap?: string | null
    }

}

export interface Connection {

    // Own properties of Snapd-1.Snapd.Connection

    readonly gadget: boolean
    readonly interface: string | null
    readonly manual: boolean
    readonly name: string | null
    readonly plug: PlugRef
    readonly plugAttrs: GLib.HashTable
    readonly slot: SlotRef
    readonly slotAttrs: GLib.HashTable
    readonly snap: string | null
    __gtype__: number

    // Owm methods of Snapd-1.Snapd.Connection

    /**
     * Get if this connection was made by the gadget snap.
     * @returns %TRUE if connection was made by the gadget snap.
     */
    getGadget(): boolean
    /**
     * Get the interface this connections uses.
     * @returns an interface name.
     */
    getInterface(): string
    /**
     * Get if this connection was made manually.
     * @returns %TRUE if connection was made manually.
     */
    getManual(): boolean
    /**
     * Get the name of this connection (i.e. a slot or plug name).
     * @returns a name.
     */
    getName(): string
    /**
     * Get the plug this connection is made with.
     * @returns a reference to a plug.
     */
    getPlug(): PlugRef
    /**
     * Get an attribute for connected plug.
     * @param name an attribute name.
     * @returns an attribute value or %NULL if not set.
     */
    getPlugAttribute(name: string): GLib.Variant | null
    /**
     * Get the names of the attributes the connected plug has.
     * @returns a string array of attribute names. Free with g_strfreev().
     */
    getPlugAttributeNames(): [ /* returnType */ string[], /* length */ number ]
    /**
     * Get the slot this connection is made with.
     * @returns a reference to a slot.
     */
    getSlot(): SlotRef
    /**
     * Get an attribute for connected slot.
     * @param name an attribute name.
     * @returns an attribute value or %NULL if not set.
     */
    getSlotAttribute(name: string): GLib.Variant | null
    /**
     * Get the names of the attributes the connected slot has.
     * @returns a string array of attribute names. Free with g_strfreev().
     */
    getSlotAttributeNames(): [ /* returnType */ string[], /* length */ number ]
    /**
     * Get the snap this connection is on.
     * @returns a snap name.
     */
    getSnap(): string
    /**
     * Check if the connected plug has an attribute.
     * @param name an attribute name.
     * @returns %TRUE if this attribute exists.
     */
    hasPlugAttribute(name: string): boolean
    /**
     * Check if the connected slot has an attribute.
     * @param name an attribute name.
     * @returns %TRUE if this attribute exists.
     */
    hasSlotAttribute(name: string): boolean

    // Class property signals of Snapd-1.Snapd.Connection

    connect(sigName: "notify::gadget", callback: (...args: any[]) => void): number
    on(sigName: "notify::gadget", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::gadget", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::gadget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::gadget", ...args: any[]): void
    connect(sigName: "notify::interface", callback: (...args: any[]) => void): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::interface", ...args: any[]): void
    connect(sigName: "notify::manual", callback: (...args: any[]) => void): number
    on(sigName: "notify::manual", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::manual", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::manual", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::manual", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::plug", callback: (...args: any[]) => void): number
    on(sigName: "notify::plug", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::plug", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::plug", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::plug", ...args: any[]): void
    connect(sigName: "notify::plug-attrs", callback: (...args: any[]) => void): number
    on(sigName: "notify::plug-attrs", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::plug-attrs", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::plug-attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::plug-attrs", ...args: any[]): void
    connect(sigName: "notify::slot", callback: (...args: any[]) => void): number
    on(sigName: "notify::slot", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::slot", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::slot", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::slot", ...args: any[]): void
    connect(sigName: "notify::slot-attrs", callback: (...args: any[]) => void): number
    on(sigName: "notify::slot-attrs", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::slot-attrs", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::slot-attrs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::slot-attrs", ...args: any[]): void
    connect(sigName: "notify::snap", callback: (...args: any[]) => void): number
    on(sigName: "notify::snap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::snap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::snap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::snap", ...args: any[]): void
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

/**
 * #SnapdConnection contains the state of Snap a interface connection.
 * @class 
 */
export class Connection extends GObject.Object {

    // Own properties of Snapd-1.Snapd.Connection

    static name: string

    // Constructors of Snapd-1.Snapd.Connection

    constructor(config?: Connection.ConstructorProperties) 
    _init(config?: Connection.ConstructorProperties): void
}

export module Icon {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Snapd-1.Snapd.Icon

        data?: any | null
        mimeType?: string | null
    }

}

export interface Icon {

    // Own properties of Snapd-1.Snapd.Icon

    readonly data: any
    readonly mimeType: string | null
    __gtype__: number

    // Owm methods of Snapd-1.Snapd.Icon

    /**
     * Get the binary data for this icon.
     * @returns the binary data.
     */
    getData(): any

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    getData(key: string): any | null
    /**
     * Get the mime-type for this icon, e.g. "image/png".
     * @returns a MIME type.
     */
    getMimeType(): string

    // Class property signals of Snapd-1.Snapd.Icon

    connect(sigName: "notify::data", callback: (...args: any[]) => void): number
    on(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::mime-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::mime-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mime-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mime-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mime-type", ...args: any[]): void
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

/**
 * #SnapdIcon contains icon data.
 * @class 
 */
export class Icon extends GObject.Object {

    // Own properties of Snapd-1.Snapd.Icon

    static name: string

    // Constructors of Snapd-1.Snapd.Icon

    constructor(config?: Icon.ConstructorProperties) 
    _init(config?: Icon.ConstructorProperties): void
}

export module Interface {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Snapd-1.Snapd.Interface

        docUrl?: string | null
        name?: string | null
        plugs?: any[] | null
        slots?: any[] | null
        summary?: string | null
    }

}

export interface Interface {

    // Own properties of Snapd-1.Snapd.Interface

    readonly docUrl: string | null
    readonly name: string | null
    readonly plugs: any[]
    readonly slots: any[]
    readonly summary: string | null
    __gtype__: number

    // Owm methods of Snapd-1.Snapd.Interface

    /**
     * Get the documentation URL of this interface.
     * @returns a URL.
     */
    getDocUrl(): string
    /**
     * Get the name of this interface.
     * @returns a name.
     */
    getName(): string
    /**
     * Get the plugs matching this interface type.
     * @returns an array of #SnapdPlug.
     */
    getPlugs(): Plug[]
    /**
     * Get the slots matching this interface type.
     * @returns an array of #SnapdSlot.
     */
    getSlots(): Slot[]
    /**
     * Get the summary of this interface.
     * @returns a summary.
     */
    getSummary(): string
    /**
     * Make a label for this interface suitable for a user interface.
     * @returns a newly allocated label string.
     */
    makeLabel(): string | null

    // Class property signals of Snapd-1.Snapd.Interface

    connect(sigName: "notify::doc-url", callback: (...args: any[]) => void): number
    on(sigName: "notify::doc-url", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::doc-url", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::doc-url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::doc-url", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::plugs", callback: (...args: any[]) => void): number
    on(sigName: "notify::plugs", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::plugs", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::plugs", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::plugs", ...args: any[]): void
    connect(sigName: "notify::slots", callback: (...args: any[]) => void): number
    on(sigName: "notify::slots", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::slots", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::slots", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::slots", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (...args: any[]) => void): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::summary", ...args: any[]): void
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

/**
 * #SnapdInterface contains information about a Snap interface.
 * @class 
 */
export class Interface extends GObject.Object {

    // Own properties of Snapd-1.Snapd.Interface

    static name: string

    // Constructors of Snapd-1.Snapd.Interface

    constructor(config?: Interface.ConstructorProperties) 
    _init(config?: Interface.ConstructorProperties): void
}

export module Maintenance {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Snapd-1.Snapd.Maintenance

        kind?: MaintenanceKind | null
        message?: string | null
    }

}

export interface Maintenance {

    // Own properties of Snapd-1.Snapd.Maintenance

    readonly kind: MaintenanceKind
    readonly message: string | null
    __gtype__: number

    // Owm methods of Snapd-1.Snapd.Maintenance

    /**
     * Get the kind of maintenance kind, e.g. %SNAPD_MAINTENANCE_KIND_DAEMON_RESTART.
     * @returns a #SnapdMaintenanceKind.
     */
    getKind(): MaintenanceKind
    /**
     * Get the user readable message associate with the maintenance state.
     * @returns message text.
     */
    getMessage(): string

    // Class property signals of Snapd-1.Snapd.Maintenance

    connect(sigName: "notify::kind", callback: (...args: any[]) => void): number
    on(sigName: "notify::kind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::kind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::kind", ...args: any[]): void
    connect(sigName: "notify::message", callback: (...args: any[]) => void): number
    on(sigName: "notify::message", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::message", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::message", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::message", ...args: any[]): void
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

/**
 * #SnapdMaintenance contains maintenance information.
 * @class 
 */
export class Maintenance extends GObject.Object {

    // Own properties of Snapd-1.Snapd.Maintenance

    static name: string

    // Constructors of Snapd-1.Snapd.Maintenance

    constructor(config?: Maintenance.ConstructorProperties) 
    _init(config?: Maintenance.ConstructorProperties): void
}

export module MarkdownNode {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Snapd-1.Snapd.MarkdownNode

        children?: any[] | null
        nodeType?: MarkdownNodeType | null
        text?: string | null
    }

}

export interface MarkdownNode {

    // Own properties of Snapd-1.Snapd.MarkdownNode

    readonly children: any[]
    readonly nodeType: MarkdownNodeType
    readonly text: string | null
    __gtype__: number

    // Owm methods of Snapd-1.Snapd.MarkdownNode

    /**
     * Get the child nodes of this node.
     * @returns child nodes or %NULL if none.
     */
    getChildren(): MarkdownNode[]
    /**
     * Get the type of node this is.
     * @returns a #SnapdMarkdownNodeType
     */
    getNodeType(): MarkdownNodeType
    /**
     * Gets the text associated with this node. This is only present for nodes of type
     * %SNAPD_MARKDOWN_NODE_TYPE_TEXT.
     * @returns a UTF-8 string or %NULL if none in this node.
     */
    getText(): string

    // Class property signals of Snapd-1.Snapd.MarkdownNode

    connect(sigName: "notify::children", callback: (...args: any[]) => void): number
    on(sigName: "notify::children", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::children", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::children", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::node-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::node-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::node-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::text", callback: (...args: any[]) => void): number
    on(sigName: "notify::text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text", ...args: any[]): void
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

/**
 * #SnapdMarkdownNode is an opaque data structure and can only be accessed
 * using the provided functions.
 * @class 
 */
export class MarkdownNode extends GObject.Object {

    // Own properties of Snapd-1.Snapd.MarkdownNode

    static name: string

    // Constructors of Snapd-1.Snapd.MarkdownNode

    constructor(config?: MarkdownNode.ConstructorProperties) 
    _init(config?: MarkdownNode.ConstructorProperties): void
}

export module MarkdownParser {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface MarkdownParser {

    // Own properties of Snapd-1.Snapd.MarkdownParser

    __gtype__: number

    // Owm methods of Snapd-1.Snapd.MarkdownParser

    /**
     * Check if paragraph whitespace will be kept intact.
     * @returns %TRUE if paragraph whitespace is preserved.
     */
    getPreserveWhitespace(): boolean
    /**
     * Convert text in snapd markdown format to markup.
     * @param text text to parse.
     * @returns Text split into blocks.
     */
    parse(text: string): MarkdownNode[]
    /**
     * Consecutive paragraph whitespace (space, tabs, newlines) is automatically
     * combined into a single space character. This renders the paragraphs in the
     * form that HTML uses. If you need the original whitespace that the markdown
     * author wrote then set this to %FALSE.
     * @param preserveWhitespace %TRUE if the parse should keep paragraph whitespace intact.
     */
    setPreserveWhitespace(preserveWhitespace: boolean): void

    // Class property signals of Snapd-1.Snapd.MarkdownParser

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

/**
 * #SnapdMarkdownParser is an opaque data structure and can only be accessed
 * using the provided functions.
 * @class 
 */
export class MarkdownParser extends GObject.Object {

    // Own properties of Snapd-1.Snapd.MarkdownParser

    static name: string

    // Constructors of Snapd-1.Snapd.MarkdownParser

    constructor(config?: MarkdownParser.ConstructorProperties) 
    /**
     * Create an object to parse markdown text.
     * @constructor 
     * @param version version supported by the client.
     * @returns a new #SnapdMarkdownParser
     */
    constructor(version: MarkdownVersion) 
    /**
     * Create an object to parse markdown text.
     * @constructor 
     * @param version version supported by the client.
     * @returns a new #SnapdMarkdownParser
     */
    static new(version: MarkdownVersion): MarkdownParser
    _init(config?: MarkdownParser.ConstructorProperties): void
}

export module Media {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Snapd-1.Snapd.Media

        height?: number | null
        type?: string | null
        url?: string | null
        width?: number | null
    }

}

export interface Media {

    // Own properties of Snapd-1.Snapd.Media

    readonly height: number
    readonly type: string | null
    readonly url: string | null
    readonly width: number
    __gtype__: number

    // Owm methods of Snapd-1.Snapd.Media

    /**
     * Get the height of the media in pixels or 0 if unknown.
     * @returns a height
     */
    getHeight(): number
    /**
     * Get the type for this media, e.g. "icon" or "screenshot".
     * @returns a type name
     */
    getMediaType(): string
    /**
     * Get the URL for this media, e.g. "http://example.com/media.png"
     * @returns a URL
     */
    getUrl(): string
    /**
     * Get the width of the media in pixels or 0 if unknown.
     * @returns a width
     */
    getWidth(): number

    // Class property signals of Snapd-1.Snapd.Media

    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::type", callback: (...args: any[]) => void): number
    on(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::url", callback: (...args: any[]) => void): number
    on(sigName: "notify::url", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::url", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::url", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
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

/**
 * #SnapdMedia contains media information.
 * @class 
 */
export class Media extends GObject.Object {

    // Own properties of Snapd-1.Snapd.Media

    static name: string

    // Constructors of Snapd-1.Snapd.Media

    constructor(config?: Media.ConstructorProperties) 
    _init(config?: Media.ConstructorProperties): void
}

export module Plug {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Snapd-1.Snapd.Plug

        attributes?: GLib.HashTable | null
        connections?: any[] | null
        interface?: string | null
        label?: string | null
        name?: string | null
        snap?: string | null
    }

}

export interface Plug {

    // Own properties of Snapd-1.Snapd.Plug

    readonly attributes: GLib.HashTable
    readonly connections: any[]
    readonly interface: string | null
    readonly label: string | null
    readonly name: string | null
    readonly snap: string | null
    __gtype__: number

    // Owm methods of Snapd-1.Snapd.Plug

    /**
     * Get an attribute for this interface.
     * @param name an attribute name.
     * @returns an attribute value or %NULL if not set.
     */
    getAttribute(name: string): GLib.Variant | null
    /**
     * Get the names of the attributes this plug has.
     * @returns a string array of attribute names. Free with g_strfreev().
     */
    getAttributeNames(): [ /* returnType */ string[], /* length */ number ]
    /**
     * Get the slots connected to this plug.
     * @returns an array of #SnapdSlotRef.
     */
    getConnectedSlots(): SlotRef[]
    /**
     * Get the connections being made with this plug.
     * @returns an array of #SnapdConnection.
     */
    getConnections(): Connection[]
    /**
     * Get the name of the interface this plug provides.
     * @returns an interface name.
     */
    getInterface(): string
    /**
     * Get a human readable label for this plug.
     * @returns a label.
     */
    getLabel(): string
    /**
     * Get the name of this plug.
     * @returns a name.
     */
    getName(): string
    /**
     * Get the snap this plug is on.
     * @returns a snap name.
     */
    getSnap(): string
    /**
     * Check if this plug has an attribute.
     * @param name an attribute name.
     * @returns %TRUE if this attribute exists.
     */
    hasAttribute(name: string): boolean

    // Class property signals of Snapd-1.Snapd.Plug

    connect(sigName: "notify::attributes", callback: (...args: any[]) => void): number
    on(sigName: "notify::attributes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::attributes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::connections", callback: (...args: any[]) => void): number
    on(sigName: "notify::connections", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connections", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connections", ...args: any[]): void
    connect(sigName: "notify::interface", callback: (...args: any[]) => void): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::interface", ...args: any[]): void
    connect(sigName: "notify::label", callback: (...args: any[]) => void): number
    on(sigName: "notify::label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::snap", callback: (...args: any[]) => void): number
    on(sigName: "notify::snap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::snap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::snap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::snap", ...args: any[]): void
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

/**
 * #SnapdPlug contains information about a Snap plug.
 * @class 
 */
export class Plug extends GObject.Object {

    // Own properties of Snapd-1.Snapd.Plug

    static name: string

    // Constructors of Snapd-1.Snapd.Plug

    constructor(config?: Plug.ConstructorProperties) 
    _init(config?: Plug.ConstructorProperties): void
}

export module PlugRef {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Snapd-1.Snapd.PlugRef

        plug?: string | null
        snap?: string | null
    }

}

export interface PlugRef {

    // Own properties of Snapd-1.Snapd.PlugRef

    readonly plug: string | null
    readonly snap: string | null
    __gtype__: number

    // Owm methods of Snapd-1.Snapd.PlugRef

    /**
     * Get the name of the plug.
     * @returns a name.
     */
    getPlug(): string
    /**
     * Get the snap this plug is on.
     * @returns a snap name.
     */
    getSnap(): string

    // Class property signals of Snapd-1.Snapd.PlugRef

    connect(sigName: "notify::plug", callback: (...args: any[]) => void): number
    on(sigName: "notify::plug", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::plug", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::plug", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::plug", ...args: any[]): void
    connect(sigName: "notify::snap", callback: (...args: any[]) => void): number
    on(sigName: "notify::snap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::snap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::snap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::snap", ...args: any[]): void
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

/**
 * #SnapdPlugRef contains the state of Snap a interface plug_ref.
 * @class 
 */
export class PlugRef extends GObject.Object {

    // Own properties of Snapd-1.Snapd.PlugRef

    static name: string

    // Constructors of Snapd-1.Snapd.PlugRef

    constructor(config?: PlugRef.ConstructorProperties) 
    _init(config?: PlugRef.ConstructorProperties): void
}

export module Price {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Snapd-1.Snapd.Price

        amount?: number | null
        currency?: string | null
    }

}

export interface Price {

    // Own properties of Snapd-1.Snapd.Price

    readonly amount: number
    readonly currency: string | null
    __gtype__: number

    // Owm methods of Snapd-1.Snapd.Price

    /**
     * Get the currency amount for this price, e.g. 0.99.
     * @returns a currency amount.
     */
    getAmount(): number
    /**
     * Get the currency this price is in, e.g. "NZD".
     * @returns an ISO 4217 currency code.
     */
    getCurrency(): string

    // Class property signals of Snapd-1.Snapd.Price

    connect(sigName: "notify::amount", callback: (...args: any[]) => void): number
    on(sigName: "notify::amount", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::amount", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::amount", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::amount", ...args: any[]): void
    connect(sigName: "notify::currency", callback: (...args: any[]) => void): number
    on(sigName: "notify::currency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::currency", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::currency", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::currency", ...args: any[]): void
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

/**
 * #SnapdPrice contains pricing information.
 * @class 
 */
export class Price extends GObject.Object {

    // Own properties of Snapd-1.Snapd.Price

    static name: string

    // Constructors of Snapd-1.Snapd.Price

    constructor(config?: Price.ConstructorProperties) 
    _init(config?: Price.ConstructorProperties): void
}

export module Screenshot {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Snapd-1.Snapd.Screenshot

        height?: number | null
        url?: string | null
        width?: number | null
    }

}

export interface Screenshot {

    // Own properties of Snapd-1.Snapd.Screenshot

    readonly height: number
    readonly url: string | null
    readonly width: number
    __gtype__: number

    // Owm methods of Snapd-1.Snapd.Screenshot

    /**
     * Get the height of the screenshot in pixels or 0 if unknown.
     * @returns a height
     */
    getHeight(): number
    /**
     * Get the URL for this screenshot, e.g. "http://example.com/screenshot.png"
     * @returns a URL
     */
    getUrl(): string
    /**
     * Get the width of the screenshot in pixels or 0 if unknown.
     * @returns a width
     */
    getWidth(): number

    // Class property signals of Snapd-1.Snapd.Screenshot

    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::url", callback: (...args: any[]) => void): number
    on(sigName: "notify::url", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::url", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::url", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::url", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
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

/**
 * #SnapdScreenshot contains screenshot information.
 * @class 
 */
export class Screenshot extends GObject.Object {

    // Own properties of Snapd-1.Snapd.Screenshot

    static name: string

    // Constructors of Snapd-1.Snapd.Screenshot

    constructor(config?: Screenshot.ConstructorProperties) 
    _init(config?: Screenshot.ConstructorProperties): void
}

export module Slot {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Snapd-1.Snapd.Slot

        attributes?: GLib.HashTable | null
        connections?: any[] | null
        interface?: string | null
        label?: string | null
        name?: string | null
        snap?: string | null
    }

}

export interface Slot {

    // Own properties of Snapd-1.Snapd.Slot

    readonly attributes: GLib.HashTable
    readonly connections: any[]
    readonly interface: string | null
    readonly label: string | null
    readonly name: string | null
    readonly snap: string | null
    __gtype__: number

    // Owm methods of Snapd-1.Snapd.Slot

    /**
     * Get an attribute for this interface.
     * @param name an attribute name.
     * @returns an attribute value or %NULL if not set.
     */
    getAttribute(name: string): GLib.Variant | null
    /**
     * Get the names of the attributes this slot has.
     * @returns a string array of attribute names. Free with g_strfreev().
     */
    getAttributeNames(): [ /* returnType */ string[], /* length */ number ]
    /**
     * Get the plugs connected to this slot.
     * @returns an array of #SnapdPlugRef.
     */
    getConnectedPlugs(): PlugRef[]
    /**
     * Get the connections being made with this slot.
     * @returns an array of #SnapdConnection.
     */
    getConnections(): Connection[]
    /**
     * Get the name of the interface this slot accepts.
     * @returns an interface name.
     */
    getInterface(): string
    /**
     * Get a human readable label for this slot.
     * @returns a label.
     */
    getLabel(): string
    /**
     * Get the name of this slot.
     * @returns a name
     */
    getName(): string
    /**
     * Get the snap this slot is on.
     * @returns a snap name.
     */
    getSnap(): string
    /**
     * Check if this slot has an attribute.
     * @param name an attribute name.
     * @returns %TRUE if this attribute exists.
     */
    hasAttribute(name: string): boolean

    // Class property signals of Snapd-1.Snapd.Slot

    connect(sigName: "notify::attributes", callback: (...args: any[]) => void): number
    on(sigName: "notify::attributes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::attributes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::attributes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::connections", callback: (...args: any[]) => void): number
    on(sigName: "notify::connections", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connections", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connections", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connections", ...args: any[]): void
    connect(sigName: "notify::interface", callback: (...args: any[]) => void): number
    on(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::interface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::interface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::interface", ...args: any[]): void
    connect(sigName: "notify::label", callback: (...args: any[]) => void): number
    on(sigName: "notify::label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::snap", callback: (...args: any[]) => void): number
    on(sigName: "notify::snap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::snap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::snap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::snap", ...args: any[]): void
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

/**
 * #SnapdSlot contains information about a Snap slot.
 * @class 
 */
export class Slot extends GObject.Object {

    // Own properties of Snapd-1.Snapd.Slot

    static name: string

    // Constructors of Snapd-1.Snapd.Slot

    constructor(config?: Slot.ConstructorProperties) 
    _init(config?: Slot.ConstructorProperties): void
}

export module SlotRef {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Snapd-1.Snapd.SlotRef

        slot?: string | null
        snap?: string | null
    }

}

export interface SlotRef {

    // Own properties of Snapd-1.Snapd.SlotRef

    readonly slot: string | null
    readonly snap: string | null
    __gtype__: number

    // Owm methods of Snapd-1.Snapd.SlotRef

    /**
     * Get the name of the slot.
     * @returns a name.
     */
    getSlot(): string
    /**
     * Get the snap this slot is on.
     * @returns a snap name.
     */
    getSnap(): string

    // Class property signals of Snapd-1.Snapd.SlotRef

    connect(sigName: "notify::slot", callback: (...args: any[]) => void): number
    on(sigName: "notify::slot", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::slot", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::slot", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::slot", ...args: any[]): void
    connect(sigName: "notify::snap", callback: (...args: any[]) => void): number
    on(sigName: "notify::snap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::snap", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::snap", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::snap", ...args: any[]): void
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

/**
 * #SnapdSlotRef contains the state of Snap a interface slot_ref.
 * @class 
 */
export class SlotRef extends GObject.Object {

    // Own properties of Snapd-1.Snapd.SlotRef

    static name: string

    // Constructors of Snapd-1.Snapd.SlotRef

    constructor(config?: SlotRef.ConstructorProperties) 
    _init(config?: SlotRef.ConstructorProperties): void
}

export module Snap {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Snapd-1.Snapd.Snap

        apps?: any[] | null
        base?: string | null
        broken?: string | null
        channel?: string | null
        channels?: any[] | null
        commonIds?: string[] | null
        confinement?: Confinement | null
        contact?: string | null
        description?: string | null
        developer?: string | null
        devmode?: boolean | null
        downloadSize?: number | null
        icon?: string | null
        id?: string | null
        installDate?: GLib.DateTime | null
        installedSize?: number | null
        jailmode?: boolean | null
        license?: string | null
        media?: any[] | null
        mountedFrom?: string | null
        name?: string | null
        prices?: any[] | null
        private?: boolean | null
        publisherDisplayName?: string | null
        publisherId?: string | null
        publisherUsername?: string | null
        publisherValidation?: PublisherValidation | null
        revision?: string | null
        screenshots?: any[] | null
        snapType?: SnapType | null
        status?: SnapStatus | null
        summary?: string | null
        title?: string | null
        trackingChannel?: string | null
        tracks?: string[] | null
        trymode?: boolean | null
        version?: string | null
        website?: string | null
    }

}

export interface Snap {

    // Own properties of Snapd-1.Snapd.Snap

    readonly apps: any[]
    readonly base: string | null
    readonly broken: string | null
    readonly channel: string | null
    readonly channels: any[]
    readonly commonIds: string[]
    readonly confinement: Confinement
    readonly contact: string | null
    readonly description: string | null
    readonly developer: string | null
    readonly devmode: boolean
    readonly downloadSize: number
    readonly icon: string | null
    readonly id: string | null
    readonly installDate: GLib.DateTime
    readonly installedSize: number
    readonly jailmode: boolean
    readonly license: string | null
    readonly media: any[]
    readonly mountedFrom: string | null
    readonly name: string | null
    readonly prices: any[]
    readonly private: boolean
    readonly publisherDisplayName: string | null
    readonly publisherId: string | null
    readonly publisherUsername: string | null
    readonly publisherValidation: PublisherValidation
    readonly revision: string | null
    readonly screenshots: any[]
    readonly snapType: SnapType
    readonly status: SnapStatus
    readonly summary: string | null
    readonly title: string | null
    readonly trackingChannel: string | null
    readonly tracks: string[]
    readonly trymode: boolean
    readonly version: string | null
    readonly website: string | null
    __gtype__: number

    // Owm methods of Snapd-1.Snapd.Snap

    /**
     * Get the apps this snap provides.
     * @returns an array of #SnapdApp.
     */
    getApps(): App[]
    /**
     * Get the base snap this snap uses.
     * @returns a snap name or %NULL if not set.
     */
    getBase(): string | null
    /**
     * Get the reason this snap is broken.
     * @returns an error string or %NULL if not broken.
     */
    getBroken(): string | null
    /**
     * Get the channel this snap is from, e.g. "stable".
     * @returns a channel name.
     */
    getChannel(): string
    /**
     * Gets the available channels for this snap.
     * @returns an array of #SnapdChannel.
     */
    getChannels(): Channel[]
    /**
     * Get common IDs associated with this snap.
     * @returns an array of common ids.
     */
    getCommonIds(): string[]
    /**
     * Get the confinement this snap is using, e.g. %SNAPD_CONFINEMENT_STRICT.
     * @returns a #SnapdConfinement.
     */
    getConfinement(): Confinement
    /**
     * Get the means of contacting the snap developer, e.g. "mailto:developer`example`.com".
     * @returns a contact URL.
     */
    getContact(): string
    /**
     * Get a multi-line description of this snap. The description is formatted using
     * a subset of Markdown. To parse this use a #SnapdMarkdownParser.
     * @returns description text.
     */
    getDescription(): string
    /**
     * Get the developer who created this snap.
     * @returns a developer name.
     */
    getDeveloper(): string
    /**
     * Get if this snap is running in developer mode.
     * @returns %TRUE if this snap is running in devmode.
     */
    getDevmode(): boolean
    /**
     * Get the download size of this snap or 0 if unknown.
     * @returns a byte count.
     */
    getDownloadSize(): number
    /**
     * Get the icon for this Snap, either a URL or an absolute path to retrieve it
     * from snapd directly.
     * @returns a URL or path.
     */
    getIcon(): string
    /**
     * Gets the unique ID for this snap.
     * @returns an ID.
     */
    getId(): string
    /**
     * Get the date this snap was installed or %NULL if unknown.
     * @returns a #GDateTime or %NULL.
     */
    getInstallDate(): GLib.DateTime | null
    /**
     * Get the installed size of this snap or 0 if unknown.
     * @returns a byte count.
     */
    getInstalledSize(): number
    /**
     * Get if this snap is running in enforced confinement (jail) mode.
     * @returns %TRUE if this snap is running in jailmode.
     */
    getJailmode(): boolean
    /**
     * Gets the SPDX license expression for this snap, e.g. "GPL-3.0+".
     * @returns an SPDX license expression or %NULL.
     */
    getLicense(): string | null
    /**
     * Get media that is associated with this snap.
     * @returns an array of #SnapdMedia.
     */
    getMedia(): Media[]
    /**
     * Gets the path this snap is mounted from, which is a .snap file for installed
     * snaps and a directory for snaps in try mode.
     * @returns a file path or %NULL.
     */
    getMountedFrom(): string | null
    /**
     * Get the name of this snap. This is used to reference this snap, e.g. for
     * installing / removing.
     * @returns a name.
     */
    getName(): string
    /**
     * Get the prices that this snap can be purchased at.
     * @returns an array of #SnapdPrice.
     */
    getPrices(): Price[]
    /**
     * Get if this snap is only available to the developer.
     * @returns %TRUE if this is a private snap.
     */
    getPrivate(): boolean
    /**
     * Get the display name of the publisher who created this snap.
     * @returns a publisher display name.
     */
    getPublisherDisplayName(): string
    /**
     * Get the ID of the publisher who created this snap.
     * @returns a publisher ID.
     */
    getPublisherId(): string
    /**
     * Get the username of the publisher who created this snap.
     * @returns a publisher username.
     */
    getPublisherUsername(): string
    /**
     * Get the validation for the snap publisher, e.g. %SNAPD_PUBLISHER_VALIDATION_VERIFIED
     * @returns a #SnapdPublisherValidation.
     */
    getPublisherValidation(): PublisherValidation
    /**
     * Get the revision for this snap. The format of the string is undefined.
     * See also snapd_snap_get_version().
     * @returns a revision string.
     */
    getRevision(): string
    /**
     * Get the screenshots that are available for this snap.
     * @returns an array of #SnapdScreenshot.
     */
    getScreenshots(): Screenshot[]
    /**
     * Get the type of snap, e.g. %SNAPD_SNAP_TYPE_APP
     * @returns a #SnapdSnapType.
     */
    getSnapType(): SnapType
    /**
     * Get the current status of this snap, e.g. SNAPD_SNAP_STATUS_INSTALLED.
     * @returns a #SnapdSnapStatus.
     */
    getStatus(): SnapStatus
    /**
     * Get a single line summary for this snap, e.g. "Best app ever!".
     * @returns a summary string.
     */
    getSummary(): string
    /**
     * Get the title for this snap. If not available use the snap name instead.
     * @returns a title or %NULL.
     */
    getTitle(): string | null
    /**
     * Get the channel that updates will be installed from, e.g. "stable".
     * @returns a channel name.
     */
    getTrackingChannel(): string
    /**
     * Get the tracks that are available.
     * @returns an ordered array of track names.
     */
    getTracks(): string[]
    /**
     * Get if this snap is running in try mode (installed locally and able to be
     * directly modified).
     * @returns %TRUE if using trymode.
     */
    getTrymode(): boolean
    /**
     * Get the version for this snap. The format of the string is undefined.
     * See also snapd_snap_get_revision().
     * @returns a version string.
     */
    getVersion(): string
    /**
     * Get the website of the snap developer, e.g. "http://example.com".
     * @returns a website URL.
     */
    getWebsite(): string
    /**
     * Finds the available channel that best matches the given name.
     * If none matches %NULL is returned.
     * @param name a channel name.
     * @returns an #SnapdChannel or %NULL.
     */
    matchChannel(name: string): Channel | null

    // Class property signals of Snapd-1.Snapd.Snap

    connect(sigName: "notify::apps", callback: (...args: any[]) => void): number
    on(sigName: "notify::apps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::apps", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::apps", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::apps", ...args: any[]): void
    connect(sigName: "notify::base", callback: (...args: any[]) => void): number
    on(sigName: "notify::base", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::base", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::base", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::base", ...args: any[]): void
    connect(sigName: "notify::broken", callback: (...args: any[]) => void): number
    on(sigName: "notify::broken", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::broken", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::broken", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::broken", ...args: any[]): void
    connect(sigName: "notify::channel", callback: (...args: any[]) => void): number
    on(sigName: "notify::channel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channel", ...args: any[]): void
    connect(sigName: "notify::channels", callback: (...args: any[]) => void): number
    on(sigName: "notify::channels", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::channels", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::channels", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::channels", ...args: any[]): void
    connect(sigName: "notify::common-ids", callback: (...args: any[]) => void): number
    on(sigName: "notify::common-ids", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::common-ids", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::common-ids", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::common-ids", ...args: any[]): void
    connect(sigName: "notify::confinement", callback: (...args: any[]) => void): number
    on(sigName: "notify::confinement", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::confinement", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::confinement", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::confinement", ...args: any[]): void
    connect(sigName: "notify::contact", callback: (...args: any[]) => void): number
    on(sigName: "notify::contact", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::contact", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::contact", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::contact", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::developer", callback: (...args: any[]) => void): number
    on(sigName: "notify::developer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::developer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::developer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::developer", ...args: any[]): void
    connect(sigName: "notify::devmode", callback: (...args: any[]) => void): number
    on(sigName: "notify::devmode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::devmode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::devmode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::devmode", ...args: any[]): void
    connect(sigName: "notify::download-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::download-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::download-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::download-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::download-size", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::install-date", callback: (...args: any[]) => void): number
    on(sigName: "notify::install-date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::install-date", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::install-date", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::install-date", ...args: any[]): void
    connect(sigName: "notify::installed-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::installed-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::installed-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::installed-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::installed-size", ...args: any[]): void
    connect(sigName: "notify::jailmode", callback: (...args: any[]) => void): number
    on(sigName: "notify::jailmode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::jailmode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::jailmode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::jailmode", ...args: any[]): void
    connect(sigName: "notify::license", callback: (...args: any[]) => void): number
    on(sigName: "notify::license", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::license", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::media", callback: (...args: any[]) => void): number
    on(sigName: "notify::media", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::media", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::media", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::media", ...args: any[]): void
    connect(sigName: "notify::mounted-from", callback: (...args: any[]) => void): number
    on(sigName: "notify::mounted-from", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mounted-from", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mounted-from", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mounted-from", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::prices", callback: (...args: any[]) => void): number
    on(sigName: "notify::prices", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::prices", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::prices", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::prices", ...args: any[]): void
    connect(sigName: "notify::private", callback: (...args: any[]) => void): number
    on(sigName: "notify::private", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::private", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::private", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::private", ...args: any[]): void
    connect(sigName: "notify::publisher-display-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::publisher-display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::publisher-display-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::publisher-display-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::publisher-display-name", ...args: any[]): void
    connect(sigName: "notify::publisher-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::publisher-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::publisher-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::publisher-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::publisher-id", ...args: any[]): void
    connect(sigName: "notify::publisher-username", callback: (...args: any[]) => void): number
    on(sigName: "notify::publisher-username", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::publisher-username", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::publisher-username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::publisher-username", ...args: any[]): void
    connect(sigName: "notify::publisher-validation", callback: (...args: any[]) => void): number
    on(sigName: "notify::publisher-validation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::publisher-validation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::publisher-validation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::publisher-validation", ...args: any[]): void
    connect(sigName: "notify::revision", callback: (...args: any[]) => void): number
    on(sigName: "notify::revision", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::revision", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::revision", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::revision", ...args: any[]): void
    connect(sigName: "notify::screenshots", callback: (...args: any[]) => void): number
    on(sigName: "notify::screenshots", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::screenshots", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::screenshots", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::screenshots", ...args: any[]): void
    connect(sigName: "notify::snap-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::snap-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::snap-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::snap-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::snap-type", ...args: any[]): void
    connect(sigName: "notify::status", callback: (...args: any[]) => void): number
    on(sigName: "notify::status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (...args: any[]) => void): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tracking-channel", callback: (...args: any[]) => void): number
    on(sigName: "notify::tracking-channel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tracking-channel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tracking-channel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tracking-channel", ...args: any[]): void
    connect(sigName: "notify::tracks", callback: (...args: any[]) => void): number
    on(sigName: "notify::tracks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tracks", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tracks", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tracks", ...args: any[]): void
    connect(sigName: "notify::trymode", callback: (...args: any[]) => void): number
    on(sigName: "notify::trymode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::trymode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::trymode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::trymode", ...args: any[]): void
    connect(sigName: "notify::version", callback: (...args: any[]) => void): number
    on(sigName: "notify::version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: "notify::website", callback: (...args: any[]) => void): number
    on(sigName: "notify::website", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::website", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::website", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::website", ...args: any[]): void
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

/**
 * #SnapdSnap contains Snap metadata.
 * @class 
 */
export class Snap extends GObject.Object {

    // Own properties of Snapd-1.Snapd.Snap

    static name: string

    // Constructors of Snapd-1.Snapd.Snap

    constructor(config?: Snap.ConstructorProperties) 
    _init(config?: Snap.ConstructorProperties): void
}

export module SystemInformation {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Snapd-1.Snapd.SystemInformation

        binariesDirectory?: string | null
        buildId?: string | null
        confinement?: SystemConfinement | null
        kernelVersion?: string | null
        managed?: boolean | null
        mountDirectory?: string | null
        onClassic?: boolean | null
        osId?: string | null
        osVersion?: string | null
        refreshHold?: GLib.DateTime | null
        refreshLast?: GLib.DateTime | null
        refreshNext?: GLib.DateTime | null
        refreshSchedule?: string | null
        refreshTimer?: string | null
        sandboxFeatures?: any | null
        series?: string | null
        store?: string | null
        version?: string | null
    }

}

export interface SystemInformation {

    // Own properties of Snapd-1.Snapd.SystemInformation

    readonly binariesDirectory: string | null
    readonly buildId: string | null
    readonly confinement: SystemConfinement
    readonly kernelVersion: string | null
    readonly managed: boolean
    readonly mountDirectory: string | null
    readonly onClassic: boolean
    readonly osId: string | null
    readonly osVersion: string | null
    readonly refreshHold: GLib.DateTime
    readonly refreshLast: GLib.DateTime
    readonly refreshNext: GLib.DateTime
    readonly refreshSchedule: string | null
    readonly refreshTimer: string | null
    readonly sandboxFeatures: any
    readonly series: string | null
    readonly store: string | null
    readonly version: string | null
    __gtype__: number

    // Owm methods of Snapd-1.Snapd.SystemInformation

    /**
     * Get the directory snap binaries are stored, e.g. "/snap/bin".
     * @returns a directory.
     */
    getBinariesDirectory(): string
    /**
     * Gets the unique build ID for the snap build, e.g. "efdd0b5e69b0742fa5e5bad0771df4d1df2459d1"
     * @returns a build ID.
     */
    getBuildId(): string
    /**
     * Get the level of confinement the system supports, e.g. %SNAPD_SYSTEM_CONFINEMENT_STRICT.
     * @returns a #SnapdSystemConfinement.
     */
    getConfinement(): SystemConfinement
    /**
     * Get the version of the kernel snapd is running on, e.g. "4.10.0-15-generic".
     * @returns a version string.
     */
    getKernelVersion(): string
    /**
     * Get if snapd is running on a managed system.
     * @returns %TRUE if running on a managed system.
     */
    getManaged(): boolean
    /**
     * Get the directory snaps are mounted, e.g. "/snap".
     * @returns a directory.
     */
    getMountDirectory(): string
    /**
     * Get if this system is a classic system.
     * @returns %TRUE if running on a classic system.
     */
    getOnClassic(): boolean
    /**
     * Get the operating system ID, e.g. "ubuntu".
     * @returns an operating system ID.
     */
    getOsId(): string
    /**
     * Get the operating system version, e.g. "16.04".
     * @returns a version string.
     */
    getOsVersion(): string
    /**
     * Get the time refreshes will be applied at, or %NULL if they are applied immediately.
     * @returns a #GDateTime.
     */
    getRefreshHold(): GLib.DateTime | null
    /**
     * Get the time the last refresh occurred, or %NULL if has not occurred.
     * @returns a #GDateTime.
     */
    getRefreshLast(): GLib.DateTime | null
    /**
     * Get the time the next refresh is scheduled for, or %NULL if none has been scheduled.
     * @returns a #GDateTime.
     */
    getRefreshNext(): GLib.DateTime | null
    /**
     * Get the schedule when snap refreshes will occur.
     * @returns a Snap refresh schedule string.
     */
    getRefreshSchedule(): string | null
    /**
     * Get the timer that refreshes are running to.
     * @returns a Snap refresh timer string.
     */
    getRefreshTimer(): string | null
    /**
     * Gets the sandbox features that snapd provides. Each backend in snapd provides
     * a list of features that it supports. For example, the "confinement-options"
     * backend may provide "classic", "devmode" and "strict".
     * @returns a hash table of string arrays keyed by backend name.
     */
    getSandboxFeatures(): GLib.HashTable
    /**
     * Get the series of snapd running, e.g. "16".
     * @returns a series string.
     */
    getSeries(): string
    /**
     * Get the store being used by snapd, e.g. "Ubuntu"
     * @returns a store id or %NULL.
     */
    getStore(): string | null
    /**
     * Get the version of snapd running, e.g. "2.11+ppa174-1".
     * @returns a version string.
     */
    getVersion(): string

    // Class property signals of Snapd-1.Snapd.SystemInformation

    connect(sigName: "notify::binaries-directory", callback: (...args: any[]) => void): number
    on(sigName: "notify::binaries-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::binaries-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::binaries-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::binaries-directory", ...args: any[]): void
    connect(sigName: "notify::build-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::build-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::build-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::build-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::build-id", ...args: any[]): void
    connect(sigName: "notify::confinement", callback: (...args: any[]) => void): number
    on(sigName: "notify::confinement", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::confinement", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::confinement", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::confinement", ...args: any[]): void
    connect(sigName: "notify::kernel-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::kernel-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::kernel-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::kernel-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::kernel-version", ...args: any[]): void
    connect(sigName: "notify::managed", callback: (...args: any[]) => void): number
    on(sigName: "notify::managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::managed", ...args: any[]): void
    connect(sigName: "notify::mount-directory", callback: (...args: any[]) => void): number
    on(sigName: "notify::mount-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mount-directory", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mount-directory", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mount-directory", ...args: any[]): void
    connect(sigName: "notify::on-classic", callback: (...args: any[]) => void): number
    on(sigName: "notify::on-classic", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::on-classic", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::on-classic", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::on-classic", ...args: any[]): void
    connect(sigName: "notify::os-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::os-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::os-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::os-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::os-id", ...args: any[]): void
    connect(sigName: "notify::os-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::os-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::os-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::os-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::os-version", ...args: any[]): void
    connect(sigName: "notify::refresh-hold", callback: (...args: any[]) => void): number
    on(sigName: "notify::refresh-hold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::refresh-hold", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::refresh-hold", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::refresh-hold", ...args: any[]): void
    connect(sigName: "notify::refresh-last", callback: (...args: any[]) => void): number
    on(sigName: "notify::refresh-last", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::refresh-last", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::refresh-last", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::refresh-last", ...args: any[]): void
    connect(sigName: "notify::refresh-next", callback: (...args: any[]) => void): number
    on(sigName: "notify::refresh-next", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::refresh-next", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::refresh-next", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::refresh-next", ...args: any[]): void
    connect(sigName: "notify::refresh-schedule", callback: (...args: any[]) => void): number
    on(sigName: "notify::refresh-schedule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::refresh-schedule", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::refresh-schedule", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::refresh-schedule", ...args: any[]): void
    connect(sigName: "notify::refresh-timer", callback: (...args: any[]) => void): number
    on(sigName: "notify::refresh-timer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::refresh-timer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::refresh-timer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::refresh-timer", ...args: any[]): void
    connect(sigName: "notify::sandbox-features", callback: (...args: any[]) => void): number
    on(sigName: "notify::sandbox-features", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sandbox-features", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sandbox-features", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sandbox-features", ...args: any[]): void
    connect(sigName: "notify::series", callback: (...args: any[]) => void): number
    on(sigName: "notify::series", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::series", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::series", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::series", ...args: any[]): void
    connect(sigName: "notify::store", callback: (...args: any[]) => void): number
    on(sigName: "notify::store", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::store", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::store", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::store", ...args: any[]): void
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

/**
 * #SnapdSystemInformation contains information about the system snapd is running on.
 * @class 
 */
export class SystemInformation extends GObject.Object {

    // Own properties of Snapd-1.Snapd.SystemInformation

    static name: string

    // Constructors of Snapd-1.Snapd.SystemInformation

    constructor(config?: SystemInformation.ConstructorProperties) 
    _init(config?: SystemInformation.ConstructorProperties): void
}

export module Task {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Snapd-1.Snapd.Task

        id?: string | null
        kind?: string | null
        progressDone?: number | null
        progressLabel?: string | null
        progressTotal?: number | null
        ready?: boolean | null
        readyTime?: GLib.DateTime | null
        spawnTime?: GLib.DateTime | null
        status?: string | null
        summary?: string | null
    }

}

export interface Task {

    // Own properties of Snapd-1.Snapd.Task

    readonly id: string | null
    readonly kind: string | null
    readonly progressDone: number
    readonly progressLabel: string | null
    readonly progressTotal: number
    readonly ready: boolean
    readonly readyTime: GLib.DateTime
    readonly spawnTime: GLib.DateTime
    readonly status: string | null
    readonly summary: string | null
    __gtype__: number

    // Owm methods of Snapd-1.Snapd.Task

    /**
     * Get the unique ID for this task.
     * @returns an ID.
     */
    getId(): string
    /**
     * Gets the kind of task this is.
     * @returns the kind of task.
     */
    getKind(): string
    /**
     * Get the the number of items completed in this task.
     * @returns a count.
     */
    getProgressDone(): number
    /**
     * Get the the label associated with the progress.
     * @returns a label string.
     */
    getProgressLabel(): string
    /**
     * Get the the total number of items to be completed in this task.
     * @returns a count.
     */
    getProgressTotal(): number
    /**
     * Get if this task is completed.
     * @returns %TRUE if this task is complete.
     */
    getReady(): boolean
    /**
     * Get the time this task completed or %NULL if not yet completed.
     * @returns a #GDateTime or %NULL.
     */
    getReadyTime(): GLib.DateTime | null
    /**
     * Get the time this task started.
     * @returns a #GDateTime.
     */
    getSpawnTime(): GLib.DateTime
    /**
     * Get the status of the task.
     * @returns a status string.
     */
    getStatus(): string
    /**
     * Get a human readable description of the task.
     * @returns a string describing the task.
     */
    getSummary(): string

    // Class property signals of Snapd-1.Snapd.Task

    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::kind", callback: (...args: any[]) => void): number
    on(sigName: "notify::kind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::kind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::kind", ...args: any[]): void
    connect(sigName: "notify::progress-done", callback: (...args: any[]) => void): number
    on(sigName: "notify::progress-done", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::progress-done", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::progress-done", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::progress-done", ...args: any[]): void
    connect(sigName: "notify::progress-label", callback: (...args: any[]) => void): number
    on(sigName: "notify::progress-label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::progress-label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::progress-label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::progress-label", ...args: any[]): void
    connect(sigName: "notify::progress-total", callback: (...args: any[]) => void): number
    on(sigName: "notify::progress-total", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::progress-total", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::progress-total", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::progress-total", ...args: any[]): void
    connect(sigName: "notify::ready", callback: (...args: any[]) => void): number
    on(sigName: "notify::ready", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ready", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ready", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ready", ...args: any[]): void
    connect(sigName: "notify::ready-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::ready-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ready-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ready-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ready-time", ...args: any[]): void
    connect(sigName: "notify::spawn-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::spawn-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::spawn-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::spawn-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::spawn-time", ...args: any[]): void
    connect(sigName: "notify::status", callback: (...args: any[]) => void): number
    on(sigName: "notify::status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::status", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::status", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (...args: any[]) => void): number
    on(sigName: "notify::summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::summary", ...args: any[]): void
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

/**
 * #SnapdTask contains progress information for a task in a Snap transaction.
 * @class 
 */
export class Task extends GObject.Object {

    // Own properties of Snapd-1.Snapd.Task

    static name: string

    // Constructors of Snapd-1.Snapd.Task

    constructor(config?: Task.ConstructorProperties) 
    _init(config?: Task.ConstructorProperties): void
}

export module UserInformation {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Snapd-1.Snapd.UserInformation

        authData?: AuthData | null
        email?: string | null
        id?: number | null
        sshKeys?: string[] | null
        username?: string | null
    }

}

export interface UserInformation {

    // Own properties of Snapd-1.Snapd.UserInformation

    readonly authData: AuthData
    readonly email: string | null
    readonly id: number
    readonly sshKeys: string[]
    readonly username: string | null
    __gtype__: number

    // Owm methods of Snapd-1.Snapd.UserInformation

    /**
     * Get the email address for this account.
     * @returns a #SnapdAuthData or %NULL if not set.
     */
    getAuthData(): AuthData | null
    /**
     * Get the email address for this account.
     * @returns a email address.
     */
    getEmail(): string
    /**
     * Get the id for this account.
     * @returns a user id.
     */
    getId(): number
    /**
     * Get the SSH keys added to this account.
     * @returns the names of the SSH keys.
     */
    getSshKeys(): string[]
    /**
     * Get the local username for this account.
     * @returns a username.
     */
    getUsername(): string

    // Class property signals of Snapd-1.Snapd.UserInformation

    connect(sigName: "notify::auth-data", callback: (...args: any[]) => void): number
    on(sigName: "notify::auth-data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::auth-data", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::auth-data", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::auth-data", ...args: any[]): void
    connect(sigName: "notify::email", callback: (...args: any[]) => void): number
    on(sigName: "notify::email", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::email", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::email", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::email", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::ssh-keys", callback: (...args: any[]) => void): number
    on(sigName: "notify::ssh-keys", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::ssh-keys", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::ssh-keys", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::ssh-keys", ...args: any[]): void
    connect(sigName: "notify::username", callback: (...args: any[]) => void): number
    on(sigName: "notify::username", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::username", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::username", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::username", ...args: any[]): void
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

/**
 * #SnapdUserInformation contains information about a user account on the system
 * snapd is running on.
 * @class 
 */
export class UserInformation extends GObject.Object {

    // Own properties of Snapd-1.Snapd.UserInformation

    static name: string

    // Constructors of Snapd-1.Snapd.UserInformation

    constructor(config?: UserInformation.ConstructorProperties) 
    _init(config?: UserInformation.ConstructorProperties): void
}

export interface AliasClass {

    // Own fields of Snapd-1.Snapd.AliasClass

    parentClass: GObject.ObjectClass
}

export abstract class AliasClass {

    // Own properties of Snapd-1.Snapd.AliasClass

    static name: string
}

export interface AppClass {

    // Own fields of Snapd-1.Snapd.AppClass

    parentClass: GObject.ObjectClass
}

export abstract class AppClass {

    // Own properties of Snapd-1.Snapd.AppClass

    static name: string
}

export interface AssertionClass {

    // Own fields of Snapd-1.Snapd.AssertionClass

    parentClass: GObject.ObjectClass
}

export abstract class AssertionClass {

    // Own properties of Snapd-1.Snapd.AssertionClass

    static name: string
}

export interface AuthDataClass {

    // Own fields of Snapd-1.Snapd.AuthDataClass

    parentClass: GObject.ObjectClass
}

export abstract class AuthDataClass {

    // Own properties of Snapd-1.Snapd.AuthDataClass

    static name: string
}

export interface ChangeClass {

    // Own fields of Snapd-1.Snapd.ChangeClass

    parentClass: GObject.ObjectClass
}

export abstract class ChangeClass {

    // Own properties of Snapd-1.Snapd.ChangeClass

    static name: string
}

export interface ChannelClass {

    // Own fields of Snapd-1.Snapd.ChannelClass

    parentClass: GObject.ObjectClass
}

export abstract class ChannelClass {

    // Own properties of Snapd-1.Snapd.ChannelClass

    static name: string
}

export interface ClientClass {
}

/**
 * Class structure for #SnapdClient.
 * @record 
 */
export abstract class ClientClass {

    // Own properties of Snapd-1.Snapd.ClientClass

    static name: string
}

export interface ConnectionClass {

    // Own fields of Snapd-1.Snapd.ConnectionClass

    parentClass: GObject.ObjectClass
}

export abstract class ConnectionClass {

    // Own properties of Snapd-1.Snapd.ConnectionClass

    static name: string
}

export interface IconClass {

    // Own fields of Snapd-1.Snapd.IconClass

    parentClass: GObject.ObjectClass
}

export abstract class IconClass {

    // Own properties of Snapd-1.Snapd.IconClass

    static name: string
}

export interface InterfaceClass {

    // Own fields of Snapd-1.Snapd.InterfaceClass

    parentClass: GObject.ObjectClass
}

export abstract class InterfaceClass {

    // Own properties of Snapd-1.Snapd.InterfaceClass

    static name: string
}

export interface MaintenanceClass {

    // Own fields of Snapd-1.Snapd.MaintenanceClass

    parentClass: GObject.ObjectClass
}

export abstract class MaintenanceClass {

    // Own properties of Snapd-1.Snapd.MaintenanceClass

    static name: string
}

export interface MarkdownNodeClass {

    // Own fields of Snapd-1.Snapd.MarkdownNodeClass

    parentClass: GObject.ObjectClass
}

export abstract class MarkdownNodeClass {

    // Own properties of Snapd-1.Snapd.MarkdownNodeClass

    static name: string
}

export interface MarkdownParserClass {

    // Own fields of Snapd-1.Snapd.MarkdownParserClass

    parentClass: GObject.ObjectClass
}

export abstract class MarkdownParserClass {

    // Own properties of Snapd-1.Snapd.MarkdownParserClass

    static name: string
}

export interface MediaClass {

    // Own fields of Snapd-1.Snapd.MediaClass

    parentClass: GObject.ObjectClass
}

export abstract class MediaClass {

    // Own properties of Snapd-1.Snapd.MediaClass

    static name: string
}

export interface PlugClass {

    // Own fields of Snapd-1.Snapd.PlugClass

    parentClass: GObject.ObjectClass
}

export abstract class PlugClass {

    // Own properties of Snapd-1.Snapd.PlugClass

    static name: string
}

export interface PlugRefClass {

    // Own fields of Snapd-1.Snapd.PlugRefClass

    parentClass: GObject.ObjectClass
}

export abstract class PlugRefClass {

    // Own properties of Snapd-1.Snapd.PlugRefClass

    static name: string
}

export interface PriceClass {

    // Own fields of Snapd-1.Snapd.PriceClass

    parentClass: GObject.ObjectClass
}

export abstract class PriceClass {

    // Own properties of Snapd-1.Snapd.PriceClass

    static name: string
}

export interface ScreenshotClass {

    // Own fields of Snapd-1.Snapd.ScreenshotClass

    parentClass: GObject.ObjectClass
}

export abstract class ScreenshotClass {

    // Own properties of Snapd-1.Snapd.ScreenshotClass

    static name: string
}

export interface SlotClass {

    // Own fields of Snapd-1.Snapd.SlotClass

    parentClass: GObject.ObjectClass
}

export abstract class SlotClass {

    // Own properties of Snapd-1.Snapd.SlotClass

    static name: string
}

export interface SlotRefClass {

    // Own fields of Snapd-1.Snapd.SlotRefClass

    parentClass: GObject.ObjectClass
}

export abstract class SlotRefClass {

    // Own properties of Snapd-1.Snapd.SlotRefClass

    static name: string
}

export interface SnapClass {

    // Own fields of Snapd-1.Snapd.SnapClass

    parentClass: GObject.ObjectClass
}

export abstract class SnapClass {

    // Own properties of Snapd-1.Snapd.SnapClass

    static name: string
}

export interface SystemInformationClass {

    // Own fields of Snapd-1.Snapd.SystemInformationClass

    parentClass: GObject.ObjectClass
}

export abstract class SystemInformationClass {

    // Own properties of Snapd-1.Snapd.SystemInformationClass

    static name: string
}

export interface TaskClass {

    // Own fields of Snapd-1.Snapd.TaskClass

    parentClass: GObject.ObjectClass
}

export abstract class TaskClass {

    // Own properties of Snapd-1.Snapd.TaskClass

    static name: string
}

export interface UserInformationClass {

    // Own fields of Snapd-1.Snapd.UserInformationClass

    parentClass: GObject.ObjectClass
}

export abstract class UserInformationClass {

    // Own properties of Snapd-1.Snapd.UserInformationClass

    static name: string
}

// END