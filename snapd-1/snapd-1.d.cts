
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * Snapd-1
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

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
export function error_quark(): GLib.Quark
/**
 * Asynchronously get authorization to install/remove snaps.
 * See snapd_login_sync() for more information.
 * @param username username to log in with.
 * @param password password to log in with.
 * @param otp response to one-time password challenge.
 * @param cancellable a #GCancellable or %NULL.
 * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
 */
export function login_async<Z = unknown>(username: string | null, password: string | null, otp: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Z> | null): void

// Overloads of login_async

/**
 * Promisified version of {@link login_async}
 * 
 * Asynchronously get authorization to install/remove snaps.
 * See snapd_login_sync() for more information.
 * @param username username to log in with.
 * @param password password to log in with.
 * @param otp response to one-time password challenge.
 * @param cancellable a #GCancellable or %NULL.
 * @returns A Promise of: a #SnapdAuthData or %NULL on error.
 */
export function login_async<Z = unknown>(username: string | null, password: string | null, otp: string | null, cancellable: Gio.Cancellable | null): globalThis.Promise<AuthData>
/**
 * Complete login started with snapd_login_async().
 * See snapd_login_sync() for more information.
 * @param result a #GAsyncResult.
 * @returns a #SnapdAuthData or %NULL on error.
 */
export function login_finish(result: Gio.AsyncResult): AuthData
/**
 * This call used to contact a D-Bus service to perform snapd authentication using
 * Polkit. This now just creates a #SnapdClient and does the call directly.
 * @param username username to log in with.
 * @param password password to log in with.
 * @param otp response to one-time password challenge.
 * @param cancellable a #GCancellable or %NULL.
 * @returns a #SnapdAuthData or %NULL on error.
 */
export function login_sync(username: string | null, password: string | null, otp: string | null, cancellable: Gio.Cancellable | null): AuthData
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

        app_auto?: string | null
        app_manual?: string | null
        command?: string | null
        name?: string | null
        snap?: string | null
        status?: AliasStatus | null
    }

}

export interface Alias {

    // Own properties of Snapd-1.Snapd.Alias

    readonly app_auto: string | null
    readonly app_manual: string | null
    readonly command: string | null
    readonly name: string | null
    readonly snap: string | null
    readonly status: AliasStatus

    // Owm methods of Snapd-1.Snapd.Alias

    /**
     * Get the app this is an alias for.
     * @returns an app name or %NULL.
     */
    get_app(): string | null
    /**
     * Get the app this alias has been automatically set to (status is %SNAPD_ALIAS_STATUS_AUTO).
     * Can be overridden when status is %SNAPD_ALIAS_STATUS_MANUAL.
     * @returns an app name or %NULL.
     */
    get_app_auto(): string | null
    /**
     * Get the app this alias has been manually set to (status is %SNAPD_ALIAS_STATUS_MANUAL).
     * This overrides the app from snapd_alias_get_app_auto().
     * @returns an app name or %NULL.
     */
    get_app_manual(): string | null
    /**
     * Get the command this alias runs.
     * @returns a command.
     */
    get_command(): string | null
    /**
     * Get the name of this alias.
     * @returns an alias name.
     */
    get_name(): string | null
    /**
     * Get the snap this alias is for.
     * @returns a snap name.
     */
    get_snap(): string | null
    /**
     * Get the status of this alias.
     * @returns a #SnapdAliasStatus.
     */
    get_status(): AliasStatus

    // Class property signals of Snapd-1.Snapd.Alias

    connect(sigName: "notify::app-auto", callback: (($obj: Alias, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-auto", callback: (($obj: Alias, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-auto", ...args: any[]): void
    connect(sigName: "notify::app-manual", callback: (($obj: Alias, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-manual", callback: (($obj: Alias, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-manual", ...args: any[]): void
    connect(sigName: "notify::command", callback: (($obj: Alias, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::command", callback: (($obj: Alias, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::command", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Alias, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Alias, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::snap", callback: (($obj: Alias, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::snap", callback: (($obj: Alias, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::snap", ...args: any[]): void
    connect(sigName: "notify::status", callback: (($obj: Alias, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: Alias, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
    static $gtype: GObject.GType<Alias>

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
        common_id?: string | null
        daemon_type?: DaemonType | null
        desktop_file?: string | null
        enabled?: boolean | null
        name?: string | null
        snap?: string | null
    }

}

export interface App {

    // Own properties of Snapd-1.Snapd.App

    readonly active: boolean
    readonly aliases: string[]
    readonly common_id: string | null
    readonly daemon_type: DaemonType
    readonly desktop_file: string | null
    readonly enabled: boolean
    readonly name: string | null
    readonly snap: string | null

    // Owm methods of Snapd-1.Snapd.App

    /**
     * Get if this service is active.
     * @returns %TRUE if active.
     */
    get_active(): boolean
    /**
     * Get the aliases for this app.
     * @returns the alias names.
     */
    get_aliases(): string[]
    /**
     * Get the common ID associated with this app.
     * @returns an ID or %NULL.
     */
    get_common_id(): string | null
    /**
     * Get the daemon type for this app.
     * @returns the daemon type or %NULL.
     */
    get_daemon_type(): DaemonType | null
    /**
     * Get the path to the desktop file for this app.
     * @returns a path or %NULL.
     */
    get_desktop_file(): string | null
    /**
     * Get if this service is enabled.
     * @returns %TRUE if enabled.
     */
    get_enabled(): boolean
    /**
     * Get the name of this app.
     * @returns a name.
     */
    get_name(): string | null
    /**
     * Get the snap this app is associated with.
     * @returns a snap name.
     */
    get_snap(): string | null

    // Class property signals of Snapd-1.Snapd.App

    connect(sigName: "notify::active", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::aliases", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::aliases", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::aliases", ...args: any[]): void
    connect(sigName: "notify::common-id", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::common-id", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::common-id", ...args: any[]): void
    connect(sigName: "notify::daemon-type", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::daemon-type", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::daemon-type", ...args: any[]): void
    connect(sigName: "notify::desktop-file", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::desktop-file", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::desktop-file", ...args: any[]): void
    connect(sigName: "notify::enabled", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enabled", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::enabled", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::snap", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::snap", callback: (($obj: App, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::snap", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
    static $gtype: GObject.GType<App>

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

    // Owm methods of Snapd-1.Snapd.Assertion

    /**
     * Get the body of the assertion.
     * @returns assertion body or %NULL.
     */
    get_body(): string | null
    /**
     * Get a header from an assertion.
     * @param name name of the header.
     * @returns header value or %NULL if undefined.
     */
    get_header(name: string | null): string | null
    /**
     * Get the headers provided by this assertion.
     * @returns array of header names.
     */
    get_headers(): string[]
    /**
     * Get the signature of the assertion.
     * @returns assertion signature.
     */
    get_signature(): string | null

    // Class property signals of Snapd-1.Snapd.Assertion

    connect(sigName: "notify::content", callback: (($obj: Assertion, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Assertion, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
    static $gtype: GObject.GType<Assertion>

    // Constructors of Snapd-1.Snapd.Assertion

    constructor(config?: Assertion.ConstructorProperties) 
    /**
     * Create a new assertion.
     * @constructor 
     * @param content the text content of the assertion.
     * @returns a new #SnapdAssertion
     */
    constructor(content: string | null) 
    /**
     * Create a new assertion.
     * @constructor 
     * @param content the text content of the assertion.
     * @returns a new #SnapdAssertion
     */
    static new(content: string | null): Assertion
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

    // Owm methods of Snapd-1.Snapd.AuthData

    /**
     * Get the discharges that this authorization uses.
     * @returns the discharges as serialized strings.
     */
    get_discharges(): string[]
    /**
     * Get the Macaroon that this authorization uses.
     * @returns the serialized Macaroon used to authorize access to snapd.
     */
    get_macaroon(): string | null

    // Class property signals of Snapd-1.Snapd.AuthData

    connect(sigName: "notify::discharges", callback: (($obj: AuthData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::discharges", callback: (($obj: AuthData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::discharges", ...args: any[]): void
    connect(sigName: "notify::macaroon", callback: (($obj: AuthData, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::macaroon", callback: (($obj: AuthData, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::macaroon", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
    static $gtype: GObject.GType<AuthData>

    // Constructors of Snapd-1.Snapd.AuthData

    constructor(config?: AuthData.ConstructorProperties) 
    /**
     * Create some authorization data.
     * @constructor 
     * @param macaroon serialized macaroon used to authorize access to snapd.
     * @param discharges serialized discharges.
     * @returns a new #SnapdAuthData
     */
    constructor(macaroon: string | null, discharges: string[]) 
    /**
     * Create some authorization data.
     * @constructor 
     * @param macaroon serialized macaroon used to authorize access to snapd.
     * @param discharges serialized discharges.
     * @returns a new #SnapdAuthData
     */
    static new(macaroon: string | null, discharges: string[]): AuthData
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
        ready_time?: GLib.DateTime | null
        spawn_time?: GLib.DateTime | null
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
    readonly ready_time: GLib.DateTime
    readonly spawn_time: GLib.DateTime
    readonly status: string | null
    readonly summary: string | null
    readonly tasks: any[]

    // Owm methods of Snapd-1.Snapd.Change

    /**
     * Gets the error string associated with this change.
     * @returns an error string or %NULL.
     */
    get_error(): string | null
    /**
     * Get the unique ID for this change.
     * @returns an ID.
     */
    get_id(): string | null
    /**
     * Gets the kind of change this is.
     * @returns the kind of change.
     */
    get_kind(): string | null
    /**
     * Get if this change is completed.
     * @returns %TRUE if this change is complete.
     */
    get_ready(): boolean
    /**
     * Get the time this task completed or %NULL if not yet completed.
     * @returns a #GDateTime or %NULL.
     */
    get_ready_time(): GLib.DateTime | null
    /**
     * Get the time this change started.
     * @returns a #GDateTime.
     */
    get_spawn_time(): GLib.DateTime
    /**
     * Get the status of the change.
     * @returns a status string.
     */
    get_status(): string | null
    /**
     * Get a human readable description of the change.
     * @returns a string describing the change.
     */
    get_summary(): string | null
    /**
     * Get the tasks that are in this change.
     * @returns an array of #SnapdTask.
     */
    get_tasks(): Task[]

    // Class property signals of Snapd-1.Snapd.Change

    connect(sigName: "notify::error", callback: (($obj: Change, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::error", callback: (($obj: Change, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::error", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Change, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Change, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::kind", callback: (($obj: Change, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: (($obj: Change, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::kind", ...args: any[]): void
    connect(sigName: "notify::ready", callback: (($obj: Change, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ready", callback: (($obj: Change, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ready", ...args: any[]): void
    connect(sigName: "notify::ready-time", callback: (($obj: Change, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ready-time", callback: (($obj: Change, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ready-time", ...args: any[]): void
    connect(sigName: "notify::spawn-time", callback: (($obj: Change, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spawn-time", callback: (($obj: Change, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spawn-time", ...args: any[]): void
    connect(sigName: "notify::status", callback: (($obj: Change, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: Change, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: Change, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: Change, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::tasks", callback: (($obj: Change, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tasks", callback: (($obj: Change, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tasks", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
    static $gtype: GObject.GType<Change>

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
        released_at?: GLib.DateTime | null
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
    readonly released_at: GLib.DateTime
    readonly revision: string | null
    readonly size: number
    readonly version: string | null

    // Owm methods of Snapd-1.Snapd.Channel

    /**
     * Get the branch this channel is tracking.
     * @returns a branch name or %NULL if not a branch.
     */
    get_branch(): string | null
    /**
     * Get the confinement this snap is using, e.g. %SNAPD_CONFINEMENT_STRICT.
     * @returns a #SnapdConfinement.
     */
    get_confinement(): Confinement
    /**
     * Get the epoch used on this channel, e.g. "1".
     * @returns an epoch.
     */
    get_epoch(): string | null
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
    get_name(): string | null
    /**
     * Get the date this revision was released into the channel or %NULL if unknown.
     * @returns a #GDateTime.
     */
    get_released_at(): GLib.DateTime | null
    /**
     * Get the revision for this snap. The format of the string is undefined.
     * See also snapd_channel_get_version().
     * @returns a revision string.
     */
    get_revision(): string | null
    /**
     * Get the risk this channel is on, one of `stable`, `candidate`, `beta` or `edge`.
     * @returns a risk name.
     */
    get_risk(): string | null
    /**
     * Get the download size of this snap.
     * @returns a byte count.
     */
    get_size(): number
    /**
     * Get the track this channel is on.
     * @returns a track name.
     */
    get_track(): string | null
    /**
     * Get the version for this snap. The format of the string is undefined.
     * See also snapd_channel_get_revision().
     * @returns a version string.
     */
    get_version(): string | null

    // Class property signals of Snapd-1.Snapd.Channel

    connect(sigName: "notify::confinement", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::confinement", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::confinement", ...args: any[]): void
    connect(sigName: "notify::epoch", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::epoch", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::epoch", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::released-at", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::released-at", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::released-at", ...args: any[]): void
    connect(sigName: "notify::revision", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::revision", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::revision", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::version", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: Channel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
    static $gtype: GObject.GType<Channel>

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

    // Own fields of Snapd-1.Snapd.Client

    parent_instance: GObject.Object

    // Owm methods of Snapd-1.Snapd.Client

    /**
     * Asynchronously abort a change.
     * See snapd_client_abort_change_sync() for more information.
     * @param id a change ID to abort.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    abort_change_async(id: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of abort_change_async

    /**
     * Promisified version of {@link abort_change_async}
     * 
     * Asynchronously abort a change.
     * See snapd_client_abort_change_sync() for more information.
     * @param id a change ID to abort.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: a #SnapdChange or %NULL on error.
     */
    abort_change_async(id: string | null, cancellable: Gio.Cancellable | null): globalThis.Promise<Change>
    /**
     * Complete request started with snapd_client_abort_change_async().
     * See snapd_client_abort_change_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns a #SnapdChange or %NULL on error.
     */
    abort_change_finish(result: Gio.AsyncResult): Change
    /**
     * Get information on a change.
     * @param id a change ID to abort.
     * @param cancellable a #GCancellable or %NULL.
     * @returns a #SnapdChange or %NULL on error.
     */
    abort_change_sync(id: string | null, cancellable: Gio.Cancellable | null): Change
    /**
     * Asynchronously add an assertion.
     * See snapd_client_add_assertions_sync() for more information.
     * @param assertions assertions to add.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    add_assertions_async(assertions: string[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of add_assertions_async

    /**
     * Promisified version of {@link add_assertions_async}
     * 
     * Asynchronously add an assertion.
     * See snapd_client_add_assertions_sync() for more information.
     * @param assertions assertions to add.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: %TRUE on success or %FALSE on error.
     */
    add_assertions_async(assertions: string[], cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Complete request started with snapd_client_add_assertions_async().
     * See snapd_client_add_assertions_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    add_assertions_finish(result: Gio.AsyncResult): boolean
    /**
     * Add an assertion.
     * @param assertions assertions to add.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    add_assertions_sync(assertions: string[], cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously create an alias to an app.
     * See snapd_client_alias_sync() for more information.
     * @param snap the name of the snap to modify.
     * @param app an app in the snap to make the alias to.
     * @param alias the name of the alias (i.e. the command that will run this app).
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    alias_async(snap: string | null, app: string | null, alias: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of alias_async

    /**
     * Promisified version of {@link alias_async}
     * 
     * Asynchronously create an alias to an app.
     * See snapd_client_alias_sync() for more information.
     * @param snap the name of the snap to modify.
     * @param app an app in the snap to make the alias to.
     * @param alias the name of the alias (i.e. the command that will run this app).
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: %TRUE on success or %FALSE on error.
     */
    alias_async(snap: string | null, app: string | null, alias: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Complete request started with snapd_client_alias_async().
     * See snapd_client_alias_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    alias_finish(result: Gio.AsyncResult): boolean
    /**
     * Create an alias to an app.
     * @param snap the name of the snap to modify.
     * @param app an app in the snap to make the alias to.
     * @param alias the name of the alias (i.e. the command that will run this app).
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     */
    alias_sync(snap: string | null, app: string | null, alias: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously buy a snap from the store.
     * See snapd_client_buy_sync() for more information.
     * @param id id of snap to buy.
     * @param amount amount of currency to spend, e.g. 0.99.
     * @param currency the currency to buy with as an ISO 4217 currency code, e.g. "NZD".
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    buy_async(id: string | null, amount: number, currency: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of buy_async

    /**
     * Promisified version of {@link buy_async}
     * 
     * Asynchronously buy a snap from the store.
     * See snapd_client_buy_sync() for more information.
     * @param id id of snap to buy.
     * @param amount amount of currency to spend, e.g. 0.99.
     * @param currency the currency to buy with as an ISO 4217 currency code, e.g. "NZD".
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: %TRUE on success or %FALSE on error.
     */
    buy_async(id: string | null, amount: number, currency: string | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Complete request started with snapd_client_buy_async().
     * See snapd_client_buy_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    buy_finish(result: Gio.AsyncResult): boolean
    /**
     * Buy a snap from the store. Once purchased, this snap can be installed with
     * snapd_client_install2_sync().
     * @param id id of snap to buy.
     * @param amount amount of currency to spend, e.g. 0.99.
     * @param currency the currency to buy with as an ISO 4217 currency code, e.g. "NZD".
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    buy_sync(id: string | null, amount: number, currency: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously check if able to buy snaps.
     * See snapd_client_check_buy_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    check_buy_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of check_buy_async

    /**
     * Promisified version of {@link check_buy_async}
     * 
     * Asynchronously check if able to buy snaps.
     * See snapd_client_check_buy_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: %TRUE on success or %FALSE on error.
     */
    check_buy_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Complete request started with snapd_client_check_buy_async().
     * See snapd_client_check_buy_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    check_buy_finish(result: Gio.AsyncResult): boolean
    /**
     * Check if able to buy snaps.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE if able to buy snaps or %FALSE on error.
     */
    check_buy_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * This method is no longer required and does nothing, snapd-glib now connects on demand.
     * @param cancellable a #GCancellable or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    connect_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of connect_async

    /**
     * Promisified version of {@link connect_async}
     * 
     * This method is no longer required and does nothing, snapd-glib now connects on demand.
     * @param cancellable a #GCancellable or %NULL
     * @returns A Promise of: %TRUE if successfully connected to snapd.
     */
    connect_async(cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Complete request started with snapd_client_connect_async().
     * See snapd_client_connect_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE if successfully connected to snapd.
     */
    connect_finish(result: Gio.AsyncResult): boolean
    /**
     * Asynchronously connect two interfaces together.
     * See snapd_client_connect_interface_sync() for more information.
     * @param plug_snap name of snap containing plug.
     * @param plug_name name of plug to connect.
     * @param slot_snap name of snap containing socket.
     * @param slot_name name of slot to connect.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    connect_interface_async(plug_snap: string | null, plug_name: string | null, slot_snap: string | null, slot_name: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of connect_interface_async

    /**
     * Promisified version of {@link connect_interface_async}
     * 
     * Asynchronously connect two interfaces together.
     * See snapd_client_connect_interface_sync() for more information.
     * @param plug_snap name of snap containing plug.
     * @param plug_name name of plug to connect.
     * @param slot_snap name of snap containing socket.
     * @param slot_name name of slot to connect.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: %TRUE on success or %FALSE on error.
     */
    connect_interface_async(plug_snap: string | null, plug_name: string | null, slot_snap: string | null, slot_name: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Complete request started with snapd_client_connect_interface_async().
     * See snapd_client_connect_interface_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    connect_interface_finish(result: Gio.AsyncResult): boolean
    /**
     * Connect two interfaces together.
     * An asynchronous version of this function is snapd_client_connect_interface_async().
     * @param plug_snap name of snap containing plug.
     * @param plug_name name of plug to connect.
     * @param slot_snap name of snap containing socket.
     * @param slot_name name of slot to connect.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    connect_interface_sync(plug_snap: string | null, plug_name: string | null, slot_snap: string | null, slot_name: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * This method is no longer required and does nothing, snapd-glib now connects on demand.
     * @param cancellable a #GCancellable or %NULL
     * @returns %TRUE if successfully connected to snapd.
     */
    connect_sync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously create a local user account.
     * See snapd_client_create_user_sync() for more information.
     * @param email the email of the user to create.
     * @param flags a set of #SnapdCreateUserFlags to control how the user account is created.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    create_user_async(email: string | null, flags: CreateUserFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of create_user_async

    /**
     * Promisified version of {@link create_user_async}
     * 
     * Asynchronously create a local user account.
     * See snapd_client_create_user_sync() for more information.
     * @param email the email of the user to create.
     * @param flags a set of #SnapdCreateUserFlags to control how the user account is created.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: a #SnapdUserInformation or %NULL on error.
     */
    create_user_async(email: string | null, flags: CreateUserFlags, cancellable: Gio.Cancellable | null): globalThis.Promise<UserInformation>
    /**
     * Complete request started with snapd_client_create_user_async().
     * See snapd_client_create_user_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns a #SnapdUserInformation or %NULL on error.
     */
    create_user_finish(result: Gio.AsyncResult): UserInformation
    /**
     * Create a local user account for the given user.
     * @param email the email of the user to create.
     * @param flags a set of #SnapdCreateUserFlags to control how the user account is created.
     * @param cancellable a #GCancellable or %NULL.
     * @returns a #SnapdUserInformation or %NULL on error.
     */
    create_user_sync(email: string | null, flags: CreateUserFlags, cancellable: Gio.Cancellable | null): UserInformation
    /**
     * Asynchronously create local user accounts using the system-user assertions that are valid for this device.
     * See snapd_client_create_users_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    create_users_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of create_users_async

    /**
     * Promisified version of {@link create_users_async}
     * 
     * Asynchronously create local user accounts using the system-user assertions that are valid for this device.
     * See snapd_client_create_users_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: an array of #SnapdUserInformation or %NULL on error.
     */
    create_users_async(cancellable: Gio.Cancellable | null): globalThis.Promise<UserInformation[]>
    /**
     * Complete request started with snapd_client_create_users_async().
     * See snapd_client_create_users_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns an array of #SnapdUserInformation or %NULL on error.
     */
    create_users_finish(result: Gio.AsyncResult): UserInformation[]
    /**
     * Create local user accounts using the system-user assertions that are valid for this device.
     * @param cancellable a #GCancellable or %NULL.
     * @returns an array of #SnapdUserInformation or %NULL on error.
     */
    create_users_sync(cancellable: Gio.Cancellable | null): UserInformation[]
    /**
     * Asynchronously change the state of aliases.
     * See snapd_client_disable_aliases_sync() for more information.
     * @param snap the name of the snap to modify.
     * @param aliases the aliases to modify.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    disable_aliases_async(snap: string | null, aliases: string[], progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of disable_aliases_async

    /**
     * Promisified version of {@link disable_aliases_async}
     * 
     * Asynchronously change the state of aliases.
     * See snapd_client_disable_aliases_sync() for more information.
     * @param snap the name of the snap to modify.
     * @param aliases the aliases to modify.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: %TRUE on success or %FALSE on error.
     */
    disable_aliases_async(snap: string | null, aliases: string[], progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Complete request started with snapd_client_disable_aliases_async().
     * See snapd_client_disable_aliases_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    disable_aliases_finish(result: Gio.AsyncResult): boolean
    /**
     * Change the state of aliases.
     * @param snap the name of the snap to modify.
     * @param aliases the aliases to modify.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    disable_aliases_sync(snap: string | null, aliases: string[], progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously disable an installed snap.
     * See snapd_client_disable_sync() for more information.
     * @param name name of snap to disable.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    disable_async(name: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of disable_async

    /**
     * Promisified version of {@link disable_async}
     * 
     * Asynchronously disable an installed snap.
     * See snapd_client_disable_sync() for more information.
     * @param name name of snap to disable.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: %TRUE on success or %FALSE on error.
     */
    disable_async(name: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Complete request started with snapd_client_disable_async().
     * See snapd_client_disable_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    disable_finish(result: Gio.AsyncResult): boolean
    /**
     * Disable an installed snap.
     * @param name name of snap to disable.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    disable_sync(name: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously disconnect two interfaces.
     * See snapd_client_disconnect_interface_sync() for more information.
     * @param plug_snap name of snap containing plug.
     * @param plug_name name of plug to disconnect.
     * @param slot_snap name of snap containing socket.
     * @param slot_name name of slot to disconnect.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    disconnect_interface_async(plug_snap: string | null, plug_name: string | null, slot_snap: string | null, slot_name: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of disconnect_interface_async

    /**
     * Promisified version of {@link disconnect_interface_async}
     * 
     * Asynchronously disconnect two interfaces.
     * See snapd_client_disconnect_interface_sync() for more information.
     * @param plug_snap name of snap containing plug.
     * @param plug_name name of plug to disconnect.
     * @param slot_snap name of snap containing socket.
     * @param slot_name name of slot to disconnect.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: %TRUE on success or %FALSE on error.
     */
    disconnect_interface_async(plug_snap: string | null, plug_name: string | null, slot_snap: string | null, slot_name: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Complete request started with snapd_client_disconnect_interface_async().
     * See snapd_client_disconnect_interface_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    disconnect_interface_finish(result: Gio.AsyncResult): boolean
    /**
     * Disconnect two interfaces.
     * @param plug_snap name of snap containing plug.
     * @param plug_name name of plug to disconnect.
     * @param slot_snap name of snap containing socket.
     * @param slot_name name of slot to disconnect.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    disconnect_interface_sync(plug_snap: string | null, plug_name: string | null, slot_snap: string | null, slot_name: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously download a snap.
     * See snapd_client_download_sync() for more information.
     * @param name name of snap to download.
     * @param channel channel to download from.
     * @param revision revision to download.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    download_async(name: string | null, channel: string | null, revision: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of download_async

    /**
     * Promisified version of {@link download_async}
     * 
     * Asynchronously download a snap.
     * See snapd_client_download_sync() for more information.
     * @param name name of snap to download.
     * @param channel channel to download from.
     * @param revision revision to download.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: the snap contents or %NULL on error.
     */
    download_async(name: string | null, channel: string | null, revision: string | null, cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.Bytes>
    /**
     * Complete request started with snapd_client_download_async().
     * See snapd_client_download_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns the snap contents or %NULL on error.
     */
    download_finish(result: Gio.AsyncResult): GLib.Bytes
    /**
     * Download the given snap.
     * @param name name of snap to download.
     * @param channel channel to download from.
     * @param revision revision to download.
     * @param cancellable a #GCancellable or %NULL.
     * @returns the snap contents or %NULL on error.
     */
    download_sync(name: string | null, channel: string | null, revision: string | null, cancellable: Gio.Cancellable | null): GLib.Bytes
    /**
     * Asynchronously change the state of aliases.
     * See snapd_client_enable_aliases_sync() for more information.
     * @param snap the name of the snap to modify.
     * @param aliases the aliases to modify.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    enable_aliases_async(snap: string | null, aliases: string[], progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of enable_aliases_async

    /**
     * Promisified version of {@link enable_aliases_async}
     * 
     * Asynchronously change the state of aliases.
     * See snapd_client_enable_aliases_sync() for more information.
     * @param snap the name of the snap to modify.
     * @param aliases the aliases to modify.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: %TRUE on success or %FALSE on error.
     */
    enable_aliases_async(snap: string | null, aliases: string[], progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Complete request started with snapd_client_enable_aliases_async().
     * See snapd_client_enable_aliases_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    enable_aliases_finish(result: Gio.AsyncResult): boolean
    /**
     * Change the state of aliases.
     * @param snap the name of the snap to modify.
     * @param aliases the aliases to modify.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    enable_aliases_sync(snap: string | null, aliases: string[], progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously enable an installed snap.
     * See snapd_client_enable_sync() for more information.
     * @param name name of snap to enable.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    enable_async(name: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of enable_async

    /**
     * Promisified version of {@link enable_async}
     * 
     * Asynchronously enable an installed snap.
     * See snapd_client_enable_sync() for more information.
     * @param name name of snap to enable.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: %TRUE on success or %FALSE on error.
     */
    enable_async(name: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Complete request started with snapd_client_enable_async().
     * See snapd_client_enable_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    enable_finish(result: Gio.AsyncResult): boolean
    /**
     * Enable an installed snap.
     * @param name name of snap to enable.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    enable_sync(name: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously find snaps in the store.
     * See snapd_client_find_sync() for more information.
     * @param flags a set of #SnapdFindFlags to control how the find is performed.
     * @param query query string to send.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    find_async(flags: FindFlags, query: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of find_async

    /**
     * Promisified version of {@link find_async}
     * 
     * Asynchronously find snaps in the store.
     * See snapd_client_find_sync() for more information.
     * @param flags a set of #SnapdFindFlags to control how the find is performed.
     * @param query query string to send.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: an array of #SnapdSnap or %NULL on error.
     */
    find_async(flags: FindFlags, query: string | null, cancellable: Gio.Cancellable | null): globalThis.Promise</* suggested_currency */ string | null>
    /**
     * Complete request started with snapd_client_find_async().
     * See snapd_client_find_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns an array of #SnapdSnap or %NULL on error.
     */
    find_finish(result: Gio.AsyncResult): [ /* returnType */ Snap[], /* suggested_currency */ string | null ]
    /**
     * Asynchronously find snaps in store that are newer revisions than locally installed versions.
     * See snapd_client_find_refreshable_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    find_refreshable_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of find_refreshable_async

    /**
     * Promisified version of {@link find_refreshable_async}
     * 
     * Asynchronously find snaps in store that are newer revisions than locally installed versions.
     * See snapd_client_find_refreshable_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: an array of #SnapdSnap or %NULL on error.
     */
    find_refreshable_async(cancellable: Gio.Cancellable | null): globalThis.Promise<Snap[]>
    /**
     * Complete request started with snapd_client_find_refreshable_async().
     * See snapd_client_find_refreshable_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns an array of #SnapdSnap or %NULL on error.
     */
    find_refreshable_finish(result: Gio.AsyncResult): Snap[]
    /**
     * Find snaps in store that are newer revisions than locally installed versions.
     * @param cancellable a #GCancellable or %NULL.
     * @returns an array of #SnapdSnap or %NULL on error.
     */
    find_refreshable_sync(cancellable: Gio.Cancellable | null): Snap[]
    /**
     * Asynchronously find snaps in the store.
     * See snapd_client_find_section_sync() for more information.
     * @param flags a set of #SnapdFindFlags to control how the find is performed.
     * @param section store section to search in or %NULL to search in all sections.
     * @param query query string to send or %NULL to get all snaps from the given section.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    find_section_async(flags: FindFlags, section: string | null, query: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of find_section_async

    /**
     * Promisified version of {@link find_section_async}
     * 
     * Asynchronously find snaps in the store.
     * See snapd_client_find_section_sync() for more information.
     * @param flags a set of #SnapdFindFlags to control how the find is performed.
     * @param section store section to search in or %NULL to search in all sections.
     * @param query query string to send or %NULL to get all snaps from the given section.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: an array of #SnapdSnap or %NULL on error.
     */
    find_section_async(flags: FindFlags, section: string | null, query: string | null, cancellable: Gio.Cancellable | null): globalThis.Promise</* suggested_currency */ string | null>
    /**
     * Complete request started with snapd_client_find_async().
     * See snapd_client_find_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns an array of #SnapdSnap or %NULL on error.
     */
    find_section_finish(result: Gio.AsyncResult): [ /* returnType */ Snap[], /* suggested_currency */ string | null ]
    /**
     * Find snaps in the store.
     * @param flags a set of #SnapdFindFlags to control how the find is performed.
     * @param section store section to search in or %NULL to search in all sections.
     * @param query query string to send or %NULL to get all snaps from the given section.
     * @param cancellable a #GCancellable or %NULL.
     * @returns an array of #SnapdSnap or %NULL on error.
     */
    find_section_sync(flags: FindFlags, section: string | null, query: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ Snap[], /* suggested_currency */ string | null ]
    /**
     * Find snaps in the store.
     * @param flags a set of #SnapdFindFlags to control how the find is performed.
     * @param query query string to send.
     * @param cancellable a #GCancellable or %NULL.
     * @returns an array of #SnapdSnap or %NULL on error.
     */
    find_sync(flags: FindFlags, query: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ Snap[], /* suggested_currency */ string | null ]
    /**
     * Asynchronously get the available aliases.
     * See snapd_client_get_aliases_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    get_aliases_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of get_aliases_async

    /**
     * Promisified version of {@link get_aliases_async}
     * 
     * Asynchronously get the available aliases.
     * See snapd_client_get_aliases_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: an array of #SnapdAlias or %NULL on error.
     */
    get_aliases_async(cancellable: Gio.Cancellable | null): globalThis.Promise<Alias[]>
    /**
     * Complete request started with snapd_client_get_aliases_async().
     * See snapd_client_get_aliases_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns an array of #SnapdAlias or %NULL on error.
     */
    get_aliases_finish(result: Gio.AsyncResult): Alias[]
    /**
     * Get the available aliases.
     * @param cancellable a #GCancellable or %NULL.
     * @returns an array of #SnapdAlias or %NULL on error.
     */
    get_aliases_sync(cancellable: Gio.Cancellable | null): Alias[]
    /**
     * Get whether snapd operations are allowed to interact with the user.
     * @returns %TRUE if interaction is allowed.
     */
    get_allow_interaction(): boolean
    /**
     * Asynchronously get information on installed apps.
     * See snapd_client_get_apps2_sync() for more information.
     * @param flags a set of #SnapdGetAppsFlags to control what results are returned.
     * @param snaps A list of snap names to return results for. If %NULL or empty then apps for all installed snaps are returned.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    get_apps2_async(flags: GetAppsFlags, snaps: string[] | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of get_apps2_async

    /**
     * Promisified version of {@link get_apps2_async}
     * 
     * Asynchronously get information on installed apps.
     * See snapd_client_get_apps2_sync() for more information.
     * @param flags a set of #SnapdGetAppsFlags to control what results are returned.
     * @param snaps A list of snap names to return results for. If %NULL or empty then apps for all installed snaps are returned.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: an array of #SnapdApp or %NULL on error.
     */
    get_apps2_async(flags: GetAppsFlags, snaps: string[] | null, cancellable: Gio.Cancellable | null): globalThis.Promise<App[]>
    /**
     * Complete request started with snapd_client_get_apps2_async().
     * See snapd_client_get_apps2_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns an array of #SnapdApp or %NULL on error.
     */
    get_apps2_finish(result: Gio.AsyncResult): App[]
    /**
     * Get information on installed apps.
     * @param flags a set of #SnapdGetAppsFlags to control what results are returned.
     * @param snaps A list of snap names to return results for. If %NULL or empty then apps for all installed snaps are returned.
     * @param cancellable a #GCancellable or %NULL.
     * @returns an array of #SnapdApp or %NULL on error.
     */
    get_apps2_sync(flags: GetAppsFlags, snaps: string[] | null, cancellable: Gio.Cancellable | null): App[]
    /**
     * Asynchronously get information on installed apps.
     * See snapd_client_get_apps_sync() for more information.
     * @param flags a set of #SnapdGetAppsFlags to control what results are returned.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    get_apps_async(flags: GetAppsFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of get_apps_async

    /**
     * Promisified version of {@link get_apps_async}
     * 
     * Asynchronously get information on installed apps.
     * See snapd_client_get_apps_sync() for more information.
     * @param flags a set of #SnapdGetAppsFlags to control what results are returned.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: an array of #SnapdApp or %NULL on error.
     */
    get_apps_async(flags: GetAppsFlags, cancellable: Gio.Cancellable | null): globalThis.Promise<App[]>
    /**
     * Complete request started with snapd_client_get_apps_async().
     * See snapd_client_get_apps_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns an array of #SnapdApp or %NULL on error.
     */
    get_apps_finish(result: Gio.AsyncResult): App[]
    /**
     * Get information on installed apps.
     * @param flags a set of #SnapdGetAppsFlags to control what results are returned.
     * @param cancellable a #GCancellable or %NULL.
     * @returns an array of #SnapdApp or %NULL on error.
     */
    get_apps_sync(flags: GetAppsFlags, cancellable: Gio.Cancellable | null): App[]
    /**
     * Asynchronously get assertions.
     * See snapd_client_get_assertions_sync() for more information.
     * @param type assertion type to get.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    get_assertions_async(type: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of get_assertions_async

    /**
     * Promisified version of {@link get_assertions_async}
     * 
     * Asynchronously get assertions.
     * See snapd_client_get_assertions_sync() for more information.
     * @param type assertion type to get.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: an array of assertions or %NULL on error.
     */
    get_assertions_async(type: string | null, cancellable: Gio.Cancellable | null): globalThis.Promise<string[]>
    /**
     * Complete request started with snapd_client_get_assertions_async().
     * See snapd_client_get_assertions_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns an array of assertions or %NULL on error.
     */
    get_assertions_finish(result: Gio.AsyncResult): string[]
    /**
     * Get assertions.
     * @param type assertion type to get.
     * @param cancellable a #GCancellable or %NULL.
     * @returns an array of assertions or %NULL on error.
     */
    get_assertions_sync(type: string | null, cancellable: Gio.Cancellable | null): string[]
    /**
     * Get the authorization data that is used for requests.
     * @returns a #SnapdAuthData or %NULL.
     */
    get_auth_data(): AuthData | null
    /**
     * Asynchronously get information on a change.
     * See snapd_client_get_change_sync() for more information.
     * @param id a change ID to get information on.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    get_change_async(id: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of get_change_async

    /**
     * Promisified version of {@link get_change_async}
     * 
     * Asynchronously get information on a change.
     * See snapd_client_get_change_sync() for more information.
     * @param id a change ID to get information on.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: a #SnapdChange or %NULL on error.
     */
    get_change_async(id: string | null, cancellable: Gio.Cancellable | null): globalThis.Promise<Change>
    /**
     * Complete request started with snapd_client_get_change_async().
     * See snapd_client_get_change_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns a #SnapdChange or %NULL on error.
     */
    get_change_finish(result: Gio.AsyncResult): Change
    /**
     * Get information on a change.
     * @param id a change ID to get information on.
     * @param cancellable a #GCancellable or %NULL.
     * @returns a #SnapdChange or %NULL on error.
     */
    get_change_sync(id: string | null, cancellable: Gio.Cancellable | null): Change
    /**
     * Asynchronously get changes that have occurred / are occurring on the snap daemon.
     * See snapd_client_get_changes_sync() for more information.
     * @param filter changes to filter on.
     * @param snap_name name of snap to filter on or %NULL for changes for any snap.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    get_changes_async(filter: ChangeFilter, snap_name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of get_changes_async

    /**
     * Promisified version of {@link get_changes_async}
     * 
     * Asynchronously get changes that have occurred / are occurring on the snap daemon.
     * See snapd_client_get_changes_sync() for more information.
     * @param filter changes to filter on.
     * @param snap_name name of snap to filter on or %NULL for changes for any snap.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: an array of #SnapdChange or %NULL on error.
     */
    get_changes_async(filter: ChangeFilter, snap_name: string | null, cancellable: Gio.Cancellable | null): globalThis.Promise<Change[]>
    /**
     * Complete request started with snapd_client_get_changes_async().
     * See snapd_client_get_changes_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns an array of #SnapdChange or %NULL on error.
     */
    get_changes_finish(result: Gio.AsyncResult): Change[]
    /**
     * Get changes that have occurred / are occurring on the snap daemon.
     * @param filter changes to filter on.
     * @param snap_name name of snap to filter on or %NULL for changes for any snap.
     * @param cancellable a #GCancellable or %NULL.
     * @returns an array of #SnapdChange or %NULL on error.
     */
    get_changes_sync(filter: ChangeFilter, snap_name: string | null, cancellable: Gio.Cancellable | null): Change[]
    /**
     * Asynchronously get the installed snap connections.
     * See snapd_client_get_connections_sync() for more information.
     * @param flags a set of #SnapdGetConnectionsFlags to control what results are returned.
     * @param snap the name of the snap to get connections for or %NULL for all snaps.
     * @param interface the name of the interface to get connections for or %NULL for all interfaces.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    get_connections2_async(flags: GetConnectionsFlags, snap: string | null, interface: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of get_connections2_async

    /**
     * Promisified version of {@link get_connections2_async}
     * 
     * Asynchronously get the installed snap connections.
     * See snapd_client_get_connections_sync() for more information.
     * @param flags a set of #SnapdGetConnectionsFlags to control what results are returned.
     * @param snap the name of the snap to get connections for or %NULL for all snaps.
     * @param interface the name of the interface to get connections for or %NULL for all interfaces.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: %TRUE on success or %FALSE on error.
     */
    get_connections2_async(flags: GetConnectionsFlags, snap: string | null, interface: string | null, cancellable: Gio.Cancellable | null): globalThis.Promise<[ /* established */ Connection[], /* undesired */ Connection[], /* plugs */ Plug[], /* slots */ Slot[] ]>
    /**
     * Complete request started with snapd_client_get_connections_async().
     * See snapd_client_get_connections_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    get_connections2_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* established */ Connection[], /* undesired */ Connection[], /* plugs */ Plug[], /* slots */ Slot[] ]
    /**
     * Get the installed snap connections.
     * @param flags a set of #SnapdGetConnectionsFlags to control what results are returned.
     * @param snap the name of the snap to get connections for or %NULL for all snaps.
     * @param interface the name of the interface to get connections for or %NULL for all interfaces.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    get_connections2_sync(flags: GetConnectionsFlags, snap: string | null, interface: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* established */ Connection[], /* undesired */ Connection[], /* plugs */ Plug[], /* slots */ Slot[] ]
    /**
     * Asynchronously get the installed snap connections.
     * See snapd_client_get_connections_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    get_connections_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of get_connections_async

    /**
     * Promisified version of {@link get_connections_async}
     * 
     * Asynchronously get the installed snap connections.
     * See snapd_client_get_connections_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: %TRUE on success or %FALSE on error.
     */
    get_connections_async(cancellable: Gio.Cancellable | null): globalThis.Promise<[ /* established */ Connection[], /* undesired */ Connection[], /* plugs */ Plug[], /* slots */ Slot[] ]>
    /**
     * Complete request started with snapd_client_get_connections_async().
     * See snapd_client_get_connections_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    get_connections_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* established */ Connection[], /* undesired */ Connection[], /* plugs */ Plug[], /* slots */ Slot[] ]
    /**
     * Get the installed snap connections.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    get_connections_sync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* established */ Connection[], /* undesired */ Connection[], /* plugs */ Plug[], /* slots */ Slot[] ]
    /**
     * Asynchronously get the icon for an installed snap.
     * See snapd_client_get_icon_sync() for more information.
     * @param name name of snap to get icon for.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    get_icon_async(name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of get_icon_async

    /**
     * Promisified version of {@link get_icon_async}
     * 
     * Asynchronously get the icon for an installed snap.
     * See snapd_client_get_icon_sync() for more information.
     * @param name name of snap to get icon for.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: a #SnapdIcon or %NULL on error.
     */
    get_icon_async(name: string | null, cancellable: Gio.Cancellable | null): globalThis.Promise<Icon>
    /**
     * Complete request started with snapd_client_get_icon_async().
     * See snapd_client_get_icon_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns a #SnapdIcon or %NULL on error.
     */
    get_icon_finish(result: Gio.AsyncResult): Icon
    /**
     * Get the icon for an installed snap.
     * @param name name of snap to get icon for.
     * @param cancellable a #GCancellable or %NULL.
     * @returns a #SnapdIcon or %NULL on error.
     */
    get_icon_sync(name: string | null, cancellable: Gio.Cancellable | null): Icon
    /**
     * Asynchronously get the installed snap interfaces.
     * See snapd_client_get_interfaces2_sync() for more information.
     * @param flags a set of #SnapdGetInterfacesFlags to control what information is returned about the interfaces.
     * @param names a null-terminated array of interface names or %NULL.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    get_interfaces2_async(flags: GetInterfacesFlags, names: string[] | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of get_interfaces2_async

    /**
     * Promisified version of {@link get_interfaces2_async}
     * 
     * Asynchronously get the installed snap interfaces.
     * See snapd_client_get_interfaces2_sync() for more information.
     * @param flags a set of #SnapdGetInterfacesFlags to control what information is returned about the interfaces.
     * @param names a null-terminated array of interface names or %NULL.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: an array of #SnapdInterface or %NULL on error.
     */
    get_interfaces2_async(flags: GetInterfacesFlags, names: string[] | null, cancellable: Gio.Cancellable | null): globalThis.Promise<Interface[]>
    /**
     * Complete request started with snapd_client_get_interfaces2_async().
     * See snapd_client_get_interfaces2_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns an array of #SnapdInterface or %NULL on error.
     */
    get_interfaces2_finish(result: Gio.AsyncResult): Interface[]
    /**
     * Get information about the available snap interfaces.
     * @param flags a set of #SnapdGetInterfacesFlags to control what information is returned about the interfaces.
     * @param names a null-terminated array of interface names or %NULL.
     * @param cancellable a #GCancellable or %NULL.
     * @returns the available interfaces.
     */
    get_interfaces2_sync(flags: GetInterfacesFlags, names: string[] | null, cancellable: Gio.Cancellable | null): Interface[]
    /**
     * Asynchronously get the installed snap interfaces.
     * See snapd_client_get_interfaces_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    get_interfaces_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of get_interfaces_async

    /**
     * Promisified version of {@link get_interfaces_async}
     * 
     * Asynchronously get the installed snap interfaces.
     * See snapd_client_get_interfaces_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: %TRUE on success or %FALSE on error.
     */
    get_interfaces_async(cancellable: Gio.Cancellable | null): globalThis.Promise<[ /* plugs */ Plug[], /* slots */ Slot[] ]>
    /**
     * Complete request started with snapd_client_get_interfaces_async().
     * See snapd_client_get_interfaces_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    get_interfaces_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* plugs */ Plug[], /* slots */ Slot[] ]
    /**
     * Get the installed snap interfaces.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    get_interfaces_sync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* plugs */ Plug[], /* slots */ Slot[] ]
    /**
     * Get the maintenance information reported by snapd or %NULL if no maintenance is in progress.
     * This information is updated after every request.
     * @returns a #SnapdMaintenance or %NULL.
     */
    get_maintenance(): Maintenance | null
    /**
     * Asynchronously get the store sections.
     * See snapd_client_get_sections_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    get_sections_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of get_sections_async

    /**
     * Promisified version of {@link get_sections_async}
     * 
     * Asynchronously get the store sections.
     * See snapd_client_get_sections_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: an array of section names or %NULL on error.
     */
    get_sections_async(cancellable: Gio.Cancellable | null): globalThis.Promise<string[]>
    /**
     * Complete request started with snapd_client_get_sections_async().
     * See snapd_client_get_sections_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns an array of section names or %NULL on error.
     */
    get_sections_finish(result: Gio.AsyncResult): string[]
    /**
     * Get the store sections.
     * @param cancellable a #GCancellable or %NULL.
     * @returns an array of section names or %NULL on error.
     */
    get_sections_sync(cancellable: Gio.Cancellable | null): string[]
    /**
     * Asynchronously get information of a single installed snap.
     * See snapd_client_get_snap_sync() for more information.
     * @param name name of snap to get.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    get_snap_async(name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of get_snap_async

    /**
     * Promisified version of {@link get_snap_async}
     * 
     * Asynchronously get information of a single installed snap.
     * See snapd_client_get_snap_sync() for more information.
     * @param name name of snap to get.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: a #SnapdSnap or %NULL on error.
     */
    get_snap_async(name: string | null, cancellable: Gio.Cancellable | null): globalThis.Promise<Snap>
    /**
     * Asynchronously get configuration for a snap.
     * See snapd_client_get_snap_conf_sync() for more information.
     * @param name name of snap to get configuration from.
     * @param keys keys to returns or %NULL to return all.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    get_snap_conf_async(name: string | null, keys: string[] | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of get_snap_conf_async

    /**
     * Promisified version of {@link get_snap_conf_async}
     * 
     * Asynchronously get configuration for a snap.
     * See snapd_client_get_snap_conf_sync() for more information.
     * @param name name of snap to get configuration from.
     * @param keys keys to returns or %NULL to return all.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: a table of configuration values or %NULL on error.
     */
    get_snap_conf_async(name: string | null, keys: string[] | null, cancellable: Gio.Cancellable | null): globalThis.Promise<GLib.HashTable>
    /**
     * Complete request started with snapd_client_get_snap_conf_async().
     * See snapd_client_get_snap_conf_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns a table of configuration values or %NULL on error.
     */
    get_snap_conf_finish(result: Gio.AsyncResult): GLib.HashTable
    /**
     * Get configuration for a snap. System configuration is stored using the name "system".
     * @param name name of snap to get configuration from.
     * @param keys keys to returns or %NULL to return all.
     * @param cancellable a #GCancellable or %NULL.
     * @returns a table of configuration values or %NULL on error.
     */
    get_snap_conf_sync(name: string | null, keys: string[] | null, cancellable: Gio.Cancellable | null): GLib.HashTable
    /**
     * Complete request started with snapd_client_get_snap_async().
     * See snapd_client_get_snap_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns a #SnapdSnap or %NULL on error.
     */
    get_snap_finish(result: Gio.AsyncResult): Snap
    /**
     * Get information of a single installed snap. If the snap does not exist an error occurs.
     * @param name name of snap to get.
     * @param cancellable a #GCancellable or %NULL.
     * @returns a #SnapdSnap or %NULL on error.
     */
    get_snap_sync(name: string | null, cancellable: Gio.Cancellable | null): Snap
    /**
     * Asynchronously get information on installed snaps.
     * See snapd_client_get_snaps_sync() for more information.
     * @param flags a set of #SnapdGetSnapsFlags to control what results are returned.
     * @param names A list of snap names to return results for. If %NULL or empty then all installed snaps are returned.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    get_snaps_async(flags: GetSnapsFlags, names: string[] | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of get_snaps_async

    /**
     * Promisified version of {@link get_snaps_async}
     * 
     * Asynchronously get information on installed snaps.
     * See snapd_client_get_snaps_sync() for more information.
     * @param flags a set of #SnapdGetSnapsFlags to control what results are returned.
     * @param names A list of snap names to return results for. If %NULL or empty then all installed snaps are returned.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: an array of #SnapdSnap or %NULL on error.
     */
    get_snaps_async(flags: GetSnapsFlags, names: string[] | null, cancellable: Gio.Cancellable | null): globalThis.Promise<Snap[]>
    /**
     * Complete request started with snapd_client_get_snaps_async().
     * See snapd_client_get_snaps_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns an array of #SnapdSnap or %NULL on error.
     */
    get_snaps_finish(result: Gio.AsyncResult): Snap[]
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
    get_snaps_sync(flags: GetSnapsFlags, names: string[] | null, cancellable: Gio.Cancellable | null): Snap[]
    /**
     * Get the unix socket path to connect to snapd with.
     * @returns socket path.
     */
    get_socket_path(): string | null
    /**
     * Request system information asynchronously from snapd.
     * See snapd_client_get_system_information_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    get_system_information_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of get_system_information_async

    /**
     * Promisified version of {@link get_system_information_async}
     * 
     * Request system information asynchronously from snapd.
     * See snapd_client_get_system_information_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: a #SnapdSystemInformation or %NULL on error.
     */
    get_system_information_async(cancellable: Gio.Cancellable | null): globalThis.Promise<SystemInformation>
    /**
     * Complete request started with snapd_client_get_system_information_async().
     * See snapd_client_get_system_information_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns a #SnapdSystemInformation or %NULL on error.
     */
    get_system_information_finish(result: Gio.AsyncResult): SystemInformation
    /**
     * Request system information from snapd.
     * While this blocks, snapd is expected to return the information quickly.
     * @param cancellable a #GCancellable or %NULL.
     * @returns a #SnapdSystemInformation or %NULL on error.
     */
    get_system_information_sync(cancellable: Gio.Cancellable | null): SystemInformation
    /**
     * Get the HTTP user-agent that is sent with each request to snapd.
     * @returns user agent or %NULL if none set.
     */
    get_user_agent(): string | null
    /**
     * Asynchronously get user accounts that are valid for this device.
     * See snapd_client_get_users_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    get_users_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of get_users_async

    /**
     * Promisified version of {@link get_users_async}
     * 
     * Asynchronously get user accounts that are valid for this device.
     * See snapd_client_get_users_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: an array of #SnapdUserInformation or %NULL on error.
     */
    get_users_async(cancellable: Gio.Cancellable | null): globalThis.Promise<UserInformation[]>
    /**
     * Complete request started with snapd_client_get_users_async().
     * See snapd_client_get_users_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns an array of #SnapdUserInformation or %NULL on error.
     */
    get_users_finish(result: Gio.AsyncResult): UserInformation[]
    /**
     * Get user accounts that are valid for this device.
     * @param cancellable a #GCancellable or %NULL.
     * @returns an array of #SnapdUserInformation or %NULL on error.
     */
    get_users_sync(cancellable: Gio.Cancellable | null): UserInformation[]
    /**
     * Asynchronously install a snap from the store.
     * See snapd_client_install2_sync() for more information.
     * @param flags a set of #SnapdInstallFlags to control install options.
     * @param name name of snap to install.
     * @param channel channel to install from or %NULL for default.
     * @param revision revision to install or %NULL for default.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    install2_async(flags: InstallFlags, name: string | null, channel: string | null, revision: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of install2_async

    /**
     * Promisified version of {@link install2_async}
     * 
     * Asynchronously install a snap from the store.
     * See snapd_client_install2_sync() for more information.
     * @param flags a set of #SnapdInstallFlags to control install options.
     * @param name name of snap to install.
     * @param channel channel to install from or %NULL for default.
     * @param revision revision to install or %NULL for default.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: %TRUE on success or %FALSE on error.
     */
    install2_async(flags: InstallFlags, name: string | null, channel: string | null, revision: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Complete request started with snapd_client_install2_async().
     * See snapd_client_install2_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    install2_finish(result: Gio.AsyncResult): boolean
    /**
     * Install a snap from the store.
     * @param flags a set of #SnapdInstallFlags to control install options.
     * @param name name of snap to install.
     * @param channel channel to install from or %NULL for default.
     * @param revision revision to install or %NULL for default.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    install2_sync(flags: InstallFlags, name: string | null, channel: string | null, revision: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously install a snap from the store.
     * See snapd_client_install_sync() for more information.
     * @param name name of snap to install.
     * @param channel channel to install from or %NULL for default.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    install_async(name: string | null, channel: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of install_async

    /**
     * Promisified version of {@link install_async}
     * 
     * Asynchronously install a snap from the store.
     * See snapd_client_install_sync() for more information.
     * @param name name of snap to install.
     * @param channel channel to install from or %NULL for default.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: %TRUE on success or %FALSE on error.
     */
    install_async(name: string | null, channel: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Complete request started with snapd_client_install_async().
     * See snapd_client_install_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    install_finish(result: Gio.AsyncResult): boolean
    /**
     * Asynchronously install a snap.
     * See snapd_client_install_stream_sync() for more information.
     * @param flags a set of #SnapdInstallFlags to control install options.
     * @param stream a #GInputStream containing the snap file contents to install.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    install_stream_async(flags: InstallFlags, stream: Gio.InputStream, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of install_stream_async

    /**
     * Promisified version of {@link install_stream_async}
     * 
     * Asynchronously install a snap.
     * See snapd_client_install_stream_sync() for more information.
     * @param flags a set of #SnapdInstallFlags to control install options.
     * @param stream a #GInputStream containing the snap file contents to install.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: %TRUE on success or %FALSE on error.
     */
    install_stream_async(flags: InstallFlags, stream: Gio.InputStream, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Complete request started with snapd_client_install_stream_async().
     * See snapd_client_install_stream_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    install_stream_finish(result: Gio.AsyncResult): boolean
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
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    install_stream_sync(flags: InstallFlags, stream: Gio.InputStream, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Install a snap from the store.
     * @param name name of snap to install.
     * @param channel channel to install from or %NULL for default.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    install_sync(name: string | null, channel: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously get information on all installed snaps.
     * See snapd_client_list_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    list_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of list_async

    /**
     * Promisified version of {@link list_async}
     * 
     * Asynchronously get information on all installed snaps.
     * See snapd_client_list_sync() for more information.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: an array of #SnapdSnap or %NULL on error.
     */
    list_async(cancellable: Gio.Cancellable | null): globalThis.Promise<Snap[]>
    /**
     * Complete request started with snapd_client_list_async().
     * See snapd_client_list_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns an array of #SnapdSnap or %NULL on error.
     */
    list_finish(result: Gio.AsyncResult): Snap[]
    /**
     * Asynchronously get information of a single installed snap.
     * See snapd_client_list_one_sync() for more information.
     * @param name name of snap to get.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    list_one_async(name: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of list_one_async

    /**
     * Promisified version of {@link list_one_async}
     * 
     * Asynchronously get information of a single installed snap.
     * See snapd_client_list_one_sync() for more information.
     * @param name name of snap to get.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: a #SnapdSnap or %NULL on error.
     */
    list_one_async(name: string | null, cancellable: Gio.Cancellable | null): globalThis.Promise<Snap>
    /**
     * Complete request started with snapd_client_list_one_async().
     * See snapd_client_list_one_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns a #SnapdSnap or %NULL on error.
     */
    list_one_finish(result: Gio.AsyncResult): Snap
    /**
     * Get information of a single installed snap.
     * @param name name of snap to get.
     * @param cancellable a #GCancellable or %NULL.
     * @returns a #SnapdSnap or %NULL on error.
     */
    list_one_sync(name: string | null, cancellable: Gio.Cancellable | null): Snap
    /**
     * Get information on all installed snaps.
     * @param cancellable a #GCancellable or %NULL.
     * @returns an array of #SnapdSnap or %NULL on error.
     */
    list_sync(cancellable: Gio.Cancellable | null): Snap[]
    /**
     * Asynchronously get authorization to install/remove snaps.
     * See snapd_client_login2_sync() for more information.
     * @param email email address to log in with.
     * @param password password to log in with.
     * @param otp response to one-time password challenge.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    login2_async(email: string | null, password: string | null, otp: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of login2_async

    /**
     * Promisified version of {@link login2_async}
     * 
     * Asynchronously get authorization to install/remove snaps.
     * See snapd_client_login2_sync() for more information.
     * @param email email address to log in with.
     * @param password password to log in with.
     * @param otp response to one-time password challenge.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: a #SnapdUserInformation or %NULL on error.
     */
    login2_async(email: string | null, password: string | null, otp: string | null, cancellable: Gio.Cancellable | null): globalThis.Promise<UserInformation>
    /**
     * Complete request started with snapd_client_login2_async().
     * See snapd_client_login2_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns a #SnapdUserInformation or %NULL on error.
     */
    login2_finish(result: Gio.AsyncResult): UserInformation
    /**
     * Log in to snapd and get authorization to install/remove snaps.
     * @param email email address to log in with.
     * @param password password to log in with.
     * @param otp response to one-time password challenge.
     * @param cancellable a #GCancellable or %NULL.
     * @returns a #SnapdUserInformation or %NULL on error.
     */
    login2_sync(email: string | null, password: string | null, otp: string | null, cancellable: Gio.Cancellable | null): UserInformation
    /**
     * Asynchronously get authorization to install/remove snaps.
     * See snapd_client_login_sync() for more information.
     * @param email email address to log in with.
     * @param password password to log in with.
     * @param otp response to one-time password challenge.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    login_async(email: string | null, password: string | null, otp: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of login_async

    /**
     * Promisified version of {@link login_async}
     * 
     * Asynchronously get authorization to install/remove snaps.
     * See snapd_client_login_sync() for more information.
     * @param email email address to log in with.
     * @param password password to log in with.
     * @param otp response to one-time password challenge.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: a #SnapdAuthData or %NULL on error.
     */
    login_async(email: string | null, password: string | null, otp: string | null, cancellable: Gio.Cancellable | null): globalThis.Promise<AuthData>
    /**
     * Complete request started with snapd_client_login_async().
     * See snapd_client_login_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns a #SnapdAuthData or %NULL on error.
     */
    login_finish(result: Gio.AsyncResult): AuthData
    /**
     * Log in to snapd and get authorization to install/remove snaps.
     * @param email email address to log in with.
     * @param password password to log in with.
     * @param otp response to one-time password challenge.
     * @param cancellable a #GCancellable or %NULL.
     * @returns a #SnapdAuthData or %NULL on error.
     */
    login_sync(email: string | null, password: string | null, otp: string | null, cancellable: Gio.Cancellable | null): AuthData
    /**
     * Asynchronously log out from the snap store.
     * See snapd_client_logout_sync() for more information.
     * @param id login ID to use.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    logout_async(id: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of logout_async

    /**
     * Promisified version of {@link logout_async}
     * 
     * Asynchronously log out from the snap store.
     * See snapd_client_logout_sync() for more information.
     * @param id login ID to use.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: %TRUE on success or %FALSE on error.
     */
    logout_async(id: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Complete request started with snapd_client_logout_async().
     * See snapd_client_logout_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    logout_finish(result: Gio.AsyncResult): boolean
    /**
     * Log out from snapd.
     * @param id login ID to use.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    logout_sync(id: number, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously ???.
     * See snapd_client_prefer_sync() for more information.
     * @param snap the name of the snap to modify.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    prefer_async(snap: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of prefer_async

    /**
     * Promisified version of {@link prefer_async}
     * 
     * Asynchronously ???.
     * See snapd_client_prefer_sync() for more information.
     * @param snap the name of the snap to modify.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: %TRUE on success or %FALSE on error.
     */
    prefer_async(snap: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Complete request started with snapd_client_prefer_async().
     * See snapd_client_prefer_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    prefer_finish(result: Gio.AsyncResult): boolean
    /**
     * ???
     * @param snap the name of the snap to modify.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     */
    prefer_sync(snap: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously ensure all snaps are updated to their latest versions.
     * See snapd_client_refresh_all_sync() for more information.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    refresh_all_async(progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of refresh_all_async

    /**
     * Promisified version of {@link refresh_all_async}
     * 
     * Asynchronously ensure all snaps are updated to their latest versions.
     * See snapd_client_refresh_all_sync() for more information.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: a %NULL-terminated array of the snap names refreshed or %NULL on error.
     */
    refresh_all_async(progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): globalThis.Promise<string[]>
    /**
     * Complete request started with snapd_client_refresh_all_async().
     * See snapd_client_refresh_all_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns a %NULL-terminated array of the snap names refreshed or %NULL on error.
     */
    refresh_all_finish(result: Gio.AsyncResult): string[]
    /**
     * Update all installed snaps to their latest version.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns a %NULL-terminated array of the snap names refreshed or %NULL on error.
     */
    refresh_all_sync(progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): string[]
    /**
     * Asynchronously ensure an installed snap is at the latest version.
     * See snapd_client_refresh_sync() for more information.
     * @param name name of snap to refresh.
     * @param channel channel to refresh from or %NULL for default.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    refresh_async(name: string | null, channel: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of refresh_async

    /**
     * Promisified version of {@link refresh_async}
     * 
     * Asynchronously ensure an installed snap is at the latest version.
     * See snapd_client_refresh_sync() for more information.
     * @param name name of snap to refresh.
     * @param channel channel to refresh from or %NULL for default.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: %TRUE on success or %FALSE on error.
     */
    refresh_async(name: string | null, channel: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Complete request started with snapd_client_refresh_async().
     * See snapd_client_refresh_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    refresh_finish(result: Gio.AsyncResult): boolean
    /**
     * Ensure an installed snap is at the latest version.
     * @param name name of snap to refresh.
     * @param channel channel to refresh from or %NULL for default.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    refresh_sync(name: string | null, channel: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously uninstall a snap.
     * See snapd_client_remove2_sync() for more information.
     * @param flags a set of #SnapdRemoveFlags to control remove options.
     * @param name name of snap to remove.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    remove2_async(flags: RemoveFlags, name: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of remove2_async

    /**
     * Promisified version of {@link remove2_async}
     * 
     * Asynchronously uninstall a snap.
     * See snapd_client_remove2_sync() for more information.
     * @param flags a set of #SnapdRemoveFlags to control remove options.
     * @param name name of snap to remove.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: %TRUE on success or %FALSE on error.
     */
    remove2_async(flags: RemoveFlags, name: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Complete request started with snapd_client_remove2_async().
     * See snapd_client_remove2_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    remove2_finish(result: Gio.AsyncResult): boolean
    /**
     * Uninstall a snap.
     * @param flags a set of #SnapdRemoveFlags to control remove options.
     * @param name name of snap to remove.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    remove2_sync(flags: RemoveFlags, name: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously uninstall a snap.
     * See snapd_client_remove_sync() for more information.
     * @param name name of snap to remove.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    remove_async(name: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of remove_async

    /**
     * Promisified version of {@link remove_async}
     * 
     * Asynchronously uninstall a snap.
     * See snapd_client_remove_sync() for more information.
     * @param name name of snap to remove.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: %TRUE on success or %FALSE on error.
     */
    remove_async(name: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Complete request started with snapd_client_remove_async().
     * See snapd_client_remove_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    remove_finish(result: Gio.AsyncResult): boolean
    /**
     * Uninstall a snap.
     * @param name name of snap to remove.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    remove_sync(name: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously change the state of aliases.
     * See snapd_client_reset_aliases_sync() for more information.
     * @param snap the name of the snap to modify.
     * @param aliases the aliases to modify.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    reset_aliases_async(snap: string | null, aliases: string[], progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of reset_aliases_async

    /**
     * Promisified version of {@link reset_aliases_async}
     * 
     * Asynchronously change the state of aliases.
     * See snapd_client_reset_aliases_sync() for more information.
     * @param snap the name of the snap to modify.
     * @param aliases the aliases to modify.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: %TRUE on success or %FALSE on error.
     */
    reset_aliases_async(snap: string | null, aliases: string[], progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Complete request started with snapd_client_reset_aliases_async().
     * See snapd_client_reset_aliases_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    reset_aliases_finish(result: Gio.AsyncResult): boolean
    /**
     * Change the state of aliases.
     * @param snap the name of the snap to modify.
     * @param aliases the aliases to modify.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    reset_aliases_sync(snap: string | null, aliases: string[], progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously run a snapctl command.
     * See snapd_client_run_snapctl_sync() for more information.
     * @param context_id context for this call.
     * @param args the arguments to pass to snapctl.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    run_snapctl_async(context_id: string | null, args: string[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of run_snapctl_async

    /**
     * Promisified version of {@link run_snapctl_async}
     * 
     * Asynchronously run a snapctl command.
     * See snapd_client_run_snapctl_sync() for more information.
     * @param context_id context for this call.
     * @param args the arguments to pass to snapctl.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: %TRUE on success or %FALSE on error.
     */
    run_snapctl_async(context_id: string | null, args: string[], cancellable: Gio.Cancellable | null): globalThis.Promise<[ /* stdout_output */ string | null, /* stderr_output */ string | null ]>
    /**
     * Complete request started with snapd_client_run_snapctl_async().
     * See snapd_client_run_snapctl_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    run_snapctl_finish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* stdout_output */ string | null, /* stderr_output */ string | null ]
    /**
     * Run a snapctl command.
     * @param context_id context for this call.
     * @param args the arguments to pass to snapctl.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    run_snapctl_sync(context_id: string | null, args: string[], cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* stdout_output */ string[], /* stderr_output */ string[] ]
    /**
     * Set whether snapd operations are allowed to interact with the user.
     * This affects operations that use polkit authorisation.
     * Defaults to TRUE.
     * @param allow_interaction whether to allow interaction.
     */
    set_allow_interaction(allow_interaction: boolean): void
    /**
     * Set the authorization data to use for requests. Authorization data can be
     * obtained by:
     * 
     * - Logging into snapd using snapd_client_login_sync()
     * 
     * - Using an existing authorization with snapd_auth_data_new().
     * @param auth_data a #SnapdAuthData or %NULL.
     */
    set_auth_data(auth_data: AuthData | null): void
    /**
     * Asynchronously set configuration for a snap.
     * See snapd_client_set_snap_conf_sync() for more information.
     * @param name name of snap to set configuration for.
     * @param key_values Keys to set.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    set_snap_conf_async(name: string | null, key_values: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of set_snap_conf_async

    /**
     * Promisified version of {@link set_snap_conf_async}
     * 
     * Asynchronously set configuration for a snap.
     * See snapd_client_set_snap_conf_sync() for more information.
     * @param name name of snap to set configuration for.
     * @param key_values Keys to set.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: %TRUE if configuration successfully applied.
     */
    set_snap_conf_async(name: string | null, key_values: GLib.HashTable, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Complete request started with snapd_client_set_snap_conf_async().
     * See snapd_client_set_snap_conf_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE if configuration successfully applied.
     */
    set_snap_conf_finish(result: Gio.AsyncResult): boolean
    /**
     * Set configuration for a snap. System configuration is stored using the name "system".
     * @param name name of snap to set configuration for.
     * @param key_values Keys to set.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE if configuration successfully applied.
     */
    set_snap_conf_sync(name: string | null, key_values: GLib.HashTable, cancellable: Gio.Cancellable | null): boolean
    /**
     * Set the Unix socket path to connect to snapd with.
     * Defaults to the system socket.
     * @param socket_path a socket path or %NULL to reset to the default.
     */
    set_socket_path(socket_path: string | null): void
    /**
     * Set the HTTP user-agent that is sent with each request to snapd.
     * Defaults to "snapd-glib/VERSION".
     * @param user_agent a user agent or %NULL.
     */
    set_user_agent(user_agent: string | null): void
    /**
     * Asynchronously set the tracking channel on an installed snap.
     * See snapd_client_switch_sync() for more information.
     * @param name name of snap to switch channel.
     * @param channel channel to track.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    switch_async(name: string | null, channel: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of switch_async

    /**
     * Promisified version of {@link switch_async}
     * 
     * Asynchronously set the tracking channel on an installed snap.
     * See snapd_client_switch_sync() for more information.
     * @param name name of snap to switch channel.
     * @param channel channel to track.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: %TRUE on success or %FALSE on error.
     */
    switch_async(name: string | null, channel: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Complete request started with snapd_client_switch_async().
     * See snapd_client_switch_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    switch_finish(result: Gio.AsyncResult): boolean
    /**
     * Set the tracking channel on an installed snap.
     * @param name name of snap to switch channel.
     * @param channel channel to track.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    switch_sync(name: string | null, channel: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously try a snap.
     * See snapd_client_try_sync() for more information.
     * @param path path to snap directory to try.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    try_async(path: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of try_async

    /**
     * Promisified version of {@link try_async}
     * 
     * Asynchronously try a snap.
     * See snapd_client_try_sync() for more information.
     * @param path path to snap directory to try.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: %TRUE on success or %FALSE on error.
     */
    try_async(path: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Complete request started with snapd_client_try_async().
     * See snapd_client_try_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    try_finish(result: Gio.AsyncResult): boolean
    /**
     * Try a snap.
     * @param path path to snap directory to try.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns %TRUE on success or %FALSE on error.
     */
    try_sync(path: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously remove an alias from an app.
     * See snapd_client_unalias_sync() for more information.
     * @param snap the name of the snap to modify or %NULL.
     * @param alias the name of the alias to remove or %NULL to remove all aliases for the given snap.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    unalias_async(snap: string | null, alias: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of unalias_async

    /**
     * Promisified version of {@link unalias_async}
     * 
     * Asynchronously remove an alias from an app.
     * See snapd_client_unalias_sync() for more information.
     * @param snap the name of the snap to modify or %NULL.
     * @param alias the name of the alias to remove or %NULL to remove all aliases for the given snap.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     * @returns A Promise of: %TRUE on success or %FALSE on error.
     */
    unalias_async(snap: string | null, alias: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Complete request started with snapd_client_unalias_async().
     * See snapd_client_unalias_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns %TRUE on success or %FALSE on error.
     */
    unalias_finish(result: Gio.AsyncResult): boolean
    /**
     * Remove an alias from an app.
     * @param snap the name of the snap to modify or %NULL.
     * @param alias the name of the alias to remove or %NULL to remove all aliases for the given snap.
     * @param progress_callback function to callback with progress.
     * @param cancellable a #GCancellable or %NULL.
     */
    unalias_sync(snap: string | null, alias: string | null, progress_callback: ProgressCallback | null, cancellable: Gio.Cancellable | null): boolean

    // Class property signals of Snapd-1.Snapd.Client

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
    static $gtype: GObject.GType<Client>

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
    static new_from_socket(socket: Gio.Socket): Client
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
        plug_attrs?: GLib.HashTable | null
        slot?: SlotRef | null
        slot_attrs?: GLib.HashTable | null
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
    readonly plug_attrs: GLib.HashTable
    readonly slot: SlotRef
    readonly slot_attrs: GLib.HashTable
    readonly snap: string | null

    // Owm methods of Snapd-1.Snapd.Connection

    /**
     * Get if this connection was made by the gadget snap.
     * @returns %TRUE if connection was made by the gadget snap.
     */
    get_gadget(): boolean
    /**
     * Get the interface this connections uses.
     * @returns an interface name.
     */
    get_interface(): string | null
    /**
     * Get if this connection was made manually.
     * @returns %TRUE if connection was made manually.
     */
    get_manual(): boolean
    /**
     * Get the name of this connection (i.e. a slot or plug name).
     * @returns a name.
     */
    get_name(): string | null
    /**
     * Get the plug this connection is made with.
     * @returns a reference to a plug.
     */
    get_plug(): PlugRef
    /**
     * Get an attribute for connected plug.
     * @param name an attribute name.
     * @returns an attribute value or %NULL if not set.
     */
    get_plug_attribute(name: string | null): GLib.Variant | null
    /**
     * Get the names of the attributes the connected plug has.
     * @returns a string array of attribute names. Free with g_strfreev().
     */
    get_plug_attribute_names(): [ /* returnType */ string[], /* length */ number ]
    /**
     * Get the slot this connection is made with.
     * @returns a reference to a slot.
     */
    get_slot(): SlotRef
    /**
     * Get an attribute for connected slot.
     * @param name an attribute name.
     * @returns an attribute value or %NULL if not set.
     */
    get_slot_attribute(name: string | null): GLib.Variant | null
    /**
     * Get the names of the attributes the connected slot has.
     * @returns a string array of attribute names. Free with g_strfreev().
     */
    get_slot_attribute_names(): [ /* returnType */ string[], /* length */ number ]
    /**
     * Get the snap this connection is on.
     * @returns a snap name.
     */
    get_snap(): string | null
    /**
     * Check if the connected plug has an attribute.
     * @param name an attribute name.
     * @returns %TRUE if this attribute exists.
     */
    has_plug_attribute(name: string | null): boolean
    /**
     * Check if the connected slot has an attribute.
     * @param name an attribute name.
     * @returns %TRUE if this attribute exists.
     */
    has_slot_attribute(name: string | null): boolean

    // Class property signals of Snapd-1.Snapd.Connection

    connect(sigName: "notify::gadget", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gadget", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gadget", ...args: any[]): void
    connect(sigName: "notify::interface", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::interface", ...args: any[]): void
    connect(sigName: "notify::manual", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manual", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::manual", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::plug", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plug", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::plug", ...args: any[]): void
    connect(sigName: "notify::plug-attrs", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plug-attrs", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::plug-attrs", ...args: any[]): void
    connect(sigName: "notify::slot", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slot", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::slot", ...args: any[]): void
    connect(sigName: "notify::slot-attrs", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slot-attrs", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::slot-attrs", ...args: any[]): void
    connect(sigName: "notify::snap", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::snap", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::snap", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
    static $gtype: GObject.GType<Connection>

    // Constructors of Snapd-1.Snapd.Connection

    constructor(config?: Connection.ConstructorProperties) 
    _init(config?: Connection.ConstructorProperties): void
}

export module Icon {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Snapd-1.Snapd.Icon

        data?: GLib.Bytes | null
        mime_type?: string | null
    }

}

export interface Icon {

    // Own properties of Snapd-1.Snapd.Icon

    readonly data: GLib.Bytes
    readonly mime_type: string | null

    // Owm methods of Snapd-1.Snapd.Icon

    /**
     * Get the binary data for this icon.
     * @returns the binary data.
     */
    get_data(): GLib.Bytes

    // Overloads of get_data

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     * @returns the data if found,          or %NULL if no such data exists.
     */
    get_data(key: string | null): any | null
    /**
     * Get the mime-type for this icon, e.g. "image/png".
     * @returns a MIME type.
     */
    get_mime_type(): string | null

    // Class property signals of Snapd-1.Snapd.Icon

    connect(sigName: "notify::data", callback: (($obj: Icon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::data", callback: (($obj: Icon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::mime-type", callback: (($obj: Icon, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: Icon, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mime-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
    static $gtype: GObject.GType<Icon>

    // Constructors of Snapd-1.Snapd.Icon

    constructor(config?: Icon.ConstructorProperties) 
    _init(config?: Icon.ConstructorProperties): void
}

export module Interface {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Snapd-1.Snapd.Interface

        doc_url?: string | null
        name?: string | null
        plugs?: any[] | null
        slots?: any[] | null
        summary?: string | null
    }

}

export interface Interface {

    // Own properties of Snapd-1.Snapd.Interface

    readonly doc_url: string | null
    readonly name: string | null
    readonly plugs: any[]
    readonly slots: any[]
    readonly summary: string | null

    // Owm methods of Snapd-1.Snapd.Interface

    /**
     * Get the documentation URL of this interface.
     * @returns a URL.
     */
    get_doc_url(): string | null
    /**
     * Get the name of this interface.
     * @returns a name.
     */
    get_name(): string | null
    /**
     * Get the plugs matching this interface type.
     * @returns an array of #SnapdPlug.
     */
    get_plugs(): Plug[]
    /**
     * Get the slots matching this interface type.
     * @returns an array of #SnapdSlot.
     */
    get_slots(): Slot[]
    /**
     * Get the summary of this interface.
     * @returns a summary.
     */
    get_summary(): string | null
    /**
     * Make a label for this interface suitable for a user interface.
     * @returns a newly allocated label string.
     */
    make_label(): string | null

    // Class property signals of Snapd-1.Snapd.Interface

    connect(sigName: "notify::doc-url", callback: (($obj: Interface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::doc-url", callback: (($obj: Interface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::doc-url", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Interface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Interface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::plugs", callback: (($obj: Interface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plugs", callback: (($obj: Interface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::plugs", ...args: any[]): void
    connect(sigName: "notify::slots", callback: (($obj: Interface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slots", callback: (($obj: Interface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::slots", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: Interface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: Interface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
    static $gtype: GObject.GType<Interface>

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

    // Owm methods of Snapd-1.Snapd.Maintenance

    /**
     * Get the kind of maintenance kind, e.g. %SNAPD_MAINTENANCE_KIND_DAEMON_RESTART.
     * @returns a #SnapdMaintenanceKind.
     */
    get_kind(): MaintenanceKind
    /**
     * Get the user readable message associate with the maintenance state.
     * @returns message text.
     */
    get_message(): string | null

    // Class property signals of Snapd-1.Snapd.Maintenance

    connect(sigName: "notify::kind", callback: (($obj: Maintenance, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: (($obj: Maintenance, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::kind", ...args: any[]): void
    connect(sigName: "notify::message", callback: (($obj: Maintenance, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::message", callback: (($obj: Maintenance, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::message", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
    static $gtype: GObject.GType<Maintenance>

    // Constructors of Snapd-1.Snapd.Maintenance

    constructor(config?: Maintenance.ConstructorProperties) 
    _init(config?: Maintenance.ConstructorProperties): void
}

export module MarkdownNode {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Snapd-1.Snapd.MarkdownNode

        children?: any[] | null
        node_type?: MarkdownNodeType | null
        text?: string | null
    }

}

export interface MarkdownNode {

    // Own properties of Snapd-1.Snapd.MarkdownNode

    readonly children: any[]
    readonly node_type: MarkdownNodeType
    readonly text: string | null

    // Owm methods of Snapd-1.Snapd.MarkdownNode

    /**
     * Get the child nodes of this node.
     * @returns child nodes or %NULL if none.
     */
    get_children(): MarkdownNode[]
    /**
     * Get the type of node this is.
     * @returns a #SnapdMarkdownNodeType
     */
    get_node_type(): MarkdownNodeType
    /**
     * Gets the text associated with this node. This is only present for nodes of type
     * %SNAPD_MARKDOWN_NODE_TYPE_TEXT.
     * @returns a UTF-8 string or %NULL if none in this node.
     */
    get_text(): string | null

    // Class property signals of Snapd-1.Snapd.MarkdownNode

    connect(sigName: "notify::children", callback: (($obj: MarkdownNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::children", callback: (($obj: MarkdownNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: (($obj: MarkdownNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::node-type", callback: (($obj: MarkdownNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::text", callback: (($obj: MarkdownNode, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: MarkdownNode, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
    static $gtype: GObject.GType<MarkdownNode>

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

    // Owm methods of Snapd-1.Snapd.MarkdownParser

    /**
     * Check if paragraph whitespace will be kept intact.
     * @returns %TRUE if paragraph whitespace is preserved.
     */
    get_preserve_whitespace(): boolean
    /**
     * Convert text in snapd markdown format to markup.
     * @param text text to parse.
     * @returns Text split into blocks.
     */
    parse(text: string | null): MarkdownNode[]
    /**
     * Consecutive paragraph whitespace (space, tabs, newlines) is automatically
     * combined into a single space character. This renders the paragraphs in the
     * form that HTML uses. If you need the original whitespace that the markdown
     * author wrote then set this to %FALSE.
     * @param preserve_whitespace %TRUE if the parse should keep paragraph whitespace intact.
     */
    set_preserve_whitespace(preserve_whitespace: boolean): void

    // Class property signals of Snapd-1.Snapd.MarkdownParser

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
    static $gtype: GObject.GType<MarkdownParser>

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

    // Owm methods of Snapd-1.Snapd.Media

    /**
     * Get the height of the media in pixels or 0 if unknown.
     * @returns a height
     */
    get_height(): number
    /**
     * Get the type for this media, e.g. "icon" or "screenshot".
     * @returns a type name
     */
    get_media_type(): string | null
    /**
     * Get the URL for this media, e.g. "http://example.com/media.png"
     * @returns a URL
     */
    get_url(): string | null
    /**
     * Get the width of the media in pixels or 0 if unknown.
     * @returns a width
     */
    get_width(): number

    // Class property signals of Snapd-1.Snapd.Media

    connect(sigName: "notify::height", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::type", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::type", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::url", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Media, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
    static $gtype: GObject.GType<Media>

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

    // Owm methods of Snapd-1.Snapd.Plug

    /**
     * Get an attribute for this interface.
     * @param name an attribute name.
     * @returns an attribute value or %NULL if not set.
     */
    get_attribute(name: string | null): GLib.Variant | null
    /**
     * Get the names of the attributes this plug has.
     * @returns a string array of attribute names. Free with g_strfreev().
     */
    get_attribute_names(): [ /* returnType */ string[], /* length */ number ]
    /**
     * Get the slots connected to this plug.
     * @returns an array of #SnapdSlotRef.
     */
    get_connected_slots(): SlotRef[]
    /**
     * Get the connections being made with this plug.
     * @returns an array of #SnapdConnection.
     */
    get_connections(): Connection[]
    /**
     * Get the name of the interface this plug provides.
     * @returns an interface name.
     */
    get_interface(): string | null
    /**
     * Get a human readable label for this plug.
     * @returns a label.
     */
    get_label(): string | null
    /**
     * Get the name of this plug.
     * @returns a name.
     */
    get_name(): string | null
    /**
     * Get the snap this plug is on.
     * @returns a snap name.
     */
    get_snap(): string | null
    /**
     * Check if this plug has an attribute.
     * @param name an attribute name.
     * @returns %TRUE if this attribute exists.
     */
    has_attribute(name: string | null): boolean

    // Class property signals of Snapd-1.Snapd.Plug

    connect(sigName: "notify::attributes", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::connections", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connections", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connections", ...args: any[]): void
    connect(sigName: "notify::interface", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::interface", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::snap", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::snap", callback: (($obj: Plug, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::snap", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
    static $gtype: GObject.GType<Plug>

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

    // Owm methods of Snapd-1.Snapd.PlugRef

    /**
     * Get the name of the plug.
     * @returns a name.
     */
    get_plug(): string | null
    /**
     * Get the snap this plug is on.
     * @returns a snap name.
     */
    get_snap(): string | null

    // Class property signals of Snapd-1.Snapd.PlugRef

    connect(sigName: "notify::plug", callback: (($obj: PlugRef, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::plug", callback: (($obj: PlugRef, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::plug", ...args: any[]): void
    connect(sigName: "notify::snap", callback: (($obj: PlugRef, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::snap", callback: (($obj: PlugRef, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::snap", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
    static $gtype: GObject.GType<PlugRef>

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

    // Owm methods of Snapd-1.Snapd.Price

    /**
     * Get the currency amount for this price, e.g. 0.99.
     * @returns a currency amount.
     */
    get_amount(): number
    /**
     * Get the currency this price is in, e.g. "NZD".
     * @returns an ISO 4217 currency code.
     */
    get_currency(): string | null

    // Class property signals of Snapd-1.Snapd.Price

    connect(sigName: "notify::amount", callback: (($obj: Price, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::amount", callback: (($obj: Price, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::amount", ...args: any[]): void
    connect(sigName: "notify::currency", callback: (($obj: Price, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::currency", callback: (($obj: Price, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::currency", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
    static $gtype: GObject.GType<Price>

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

    // Owm methods of Snapd-1.Snapd.Screenshot

    /**
     * Get the height of the screenshot in pixels or 0 if unknown.
     * @returns a height
     */
    get_height(): number
    /**
     * Get the URL for this screenshot, e.g. "http://example.com/screenshot.png"
     * @returns a URL
     */
    get_url(): string | null
    /**
     * Get the width of the screenshot in pixels or 0 if unknown.
     * @returns a width
     */
    get_width(): number

    // Class property signals of Snapd-1.Snapd.Screenshot

    connect(sigName: "notify::height", callback: (($obj: Screenshot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Screenshot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::url", callback: (($obj: Screenshot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::url", callback: (($obj: Screenshot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::url", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: Screenshot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Screenshot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
    static $gtype: GObject.GType<Screenshot>

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

    // Owm methods of Snapd-1.Snapd.Slot

    /**
     * Get an attribute for this interface.
     * @param name an attribute name.
     * @returns an attribute value or %NULL if not set.
     */
    get_attribute(name: string | null): GLib.Variant | null
    /**
     * Get the names of the attributes this slot has.
     * @returns a string array of attribute names. Free with g_strfreev().
     */
    get_attribute_names(): [ /* returnType */ string[], /* length */ number ]
    /**
     * Get the plugs connected to this slot.
     * @returns an array of #SnapdPlugRef.
     */
    get_connected_plugs(): PlugRef[]
    /**
     * Get the connections being made with this slot.
     * @returns an array of #SnapdConnection.
     */
    get_connections(): Connection[]
    /**
     * Get the name of the interface this slot accepts.
     * @returns an interface name.
     */
    get_interface(): string | null
    /**
     * Get a human readable label for this slot.
     * @returns a label.
     */
    get_label(): string | null
    /**
     * Get the name of this slot.
     * @returns a name
     */
    get_name(): string | null
    /**
     * Get the snap this slot is on.
     * @returns a snap name.
     */
    get_snap(): string | null
    /**
     * Check if this slot has an attribute.
     * @param name an attribute name.
     * @returns %TRUE if this attribute exists.
     */
    has_attribute(name: string | null): boolean

    // Class property signals of Snapd-1.Snapd.Slot

    connect(sigName: "notify::attributes", callback: (($obj: Slot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attributes", callback: (($obj: Slot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::connections", callback: (($obj: Slot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connections", callback: (($obj: Slot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connections", ...args: any[]): void
    connect(sigName: "notify::interface", callback: (($obj: Slot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::interface", callback: (($obj: Slot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::interface", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: Slot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: Slot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Slot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Slot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::snap", callback: (($obj: Slot, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::snap", callback: (($obj: Slot, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::snap", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
    static $gtype: GObject.GType<Slot>

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

    // Owm methods of Snapd-1.Snapd.SlotRef

    /**
     * Get the name of the slot.
     * @returns a name.
     */
    get_slot(): string | null
    /**
     * Get the snap this slot is on.
     * @returns a snap name.
     */
    get_snap(): string | null

    // Class property signals of Snapd-1.Snapd.SlotRef

    connect(sigName: "notify::slot", callback: (($obj: SlotRef, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::slot", callback: (($obj: SlotRef, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::slot", ...args: any[]): void
    connect(sigName: "notify::snap", callback: (($obj: SlotRef, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::snap", callback: (($obj: SlotRef, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::snap", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
    static $gtype: GObject.GType<SlotRef>

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
        common_ids?: string[] | null
        confinement?: Confinement | null
        contact?: string | null
        description?: string | null
        developer?: string | null
        devmode?: boolean | null
        download_size?: number | null
        icon?: string | null
        id?: string | null
        install_date?: GLib.DateTime | null
        installed_size?: number | null
        jailmode?: boolean | null
        license?: string | null
        media?: any[] | null
        mounted_from?: string | null
        name?: string | null
        prices?: any[] | null
        private?: boolean | null
        publisher_display_name?: string | null
        publisher_id?: string | null
        publisher_username?: string | null
        publisher_validation?: PublisherValidation | null
        revision?: string | null
        screenshots?: any[] | null
        snap_type?: SnapType | null
        status?: SnapStatus | null
        summary?: string | null
        title?: string | null
        tracking_channel?: string | null
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
    readonly common_ids: string[]
    readonly confinement: Confinement
    readonly contact: string | null
    readonly description: string | null
    readonly developer: string | null
    readonly devmode: boolean
    readonly download_size: number
    readonly icon: string | null
    readonly id: string | null
    readonly install_date: GLib.DateTime
    readonly installed_size: number
    readonly jailmode: boolean
    readonly license: string | null
    readonly media: any[]
    readonly mounted_from: string | null
    readonly name: string | null
    readonly prices: any[]
    readonly private: boolean
    readonly publisher_display_name: string | null
    readonly publisher_id: string | null
    readonly publisher_username: string | null
    readonly publisher_validation: PublisherValidation
    readonly revision: string | null
    readonly screenshots: any[]
    readonly snap_type: SnapType
    readonly status: SnapStatus
    readonly summary: string | null
    readonly title: string | null
    readonly tracking_channel: string | null
    readonly tracks: string[]
    readonly trymode: boolean
    readonly version: string | null
    readonly website: string | null

    // Owm methods of Snapd-1.Snapd.Snap

    /**
     * Get the apps this snap provides.
     * @returns an array of #SnapdApp.
     */
    get_apps(): App[]
    /**
     * Get the base snap this snap uses.
     * @returns a snap name or %NULL if not set.
     */
    get_base(): string | null
    /**
     * Get the reason this snap is broken.
     * @returns an error string or %NULL if not broken.
     */
    get_broken(): string | null
    /**
     * Get the channel this snap is from, e.g. "stable".
     * @returns a channel name.
     */
    get_channel(): string | null
    /**
     * Gets the available channels for this snap.
     * @returns an array of #SnapdChannel.
     */
    get_channels(): Channel[]
    /**
     * Get common IDs associated with this snap.
     * @returns an array of common ids.
     */
    get_common_ids(): string[]
    /**
     * Get the confinement this snap is using, e.g. %SNAPD_CONFINEMENT_STRICT.
     * @returns a #SnapdConfinement.
     */
    get_confinement(): Confinement
    /**
     * Get the means of contacting the snap developer, e.g. "mailto:developer`example`.com".
     * @returns a contact URL.
     */
    get_contact(): string | null
    /**
     * Get a multi-line description of this snap. The description is formatted using
     * a subset of Markdown. To parse this use a #SnapdMarkdownParser.
     * @returns description text.
     */
    get_description(): string | null
    /**
     * Get the developer who created this snap.
     * @returns a developer name.
     */
    get_developer(): string | null
    /**
     * Get if this snap is running in developer mode.
     * @returns %TRUE if this snap is running in devmode.
     */
    get_devmode(): boolean
    /**
     * Get the download size of this snap or 0 if unknown.
     * @returns a byte count.
     */
    get_download_size(): number
    /**
     * Get the icon for this Snap, either a URL or an absolute path to retrieve it
     * from snapd directly.
     * @returns a URL or path.
     */
    get_icon(): string | null
    /**
     * Gets the unique ID for this snap.
     * @returns an ID.
     */
    get_id(): string | null
    /**
     * Get the date this snap was installed or %NULL if unknown.
     * @returns a #GDateTime or %NULL.
     */
    get_install_date(): GLib.DateTime | null
    /**
     * Get the installed size of this snap or 0 if unknown.
     * @returns a byte count.
     */
    get_installed_size(): number
    /**
     * Get if this snap is running in enforced confinement (jail) mode.
     * @returns %TRUE if this snap is running in jailmode.
     */
    get_jailmode(): boolean
    /**
     * Gets the SPDX license expression for this snap, e.g. "GPL-3.0+".
     * @returns an SPDX license expression or %NULL.
     */
    get_license(): string | null
    /**
     * Get media that is associated with this snap.
     * @returns an array of #SnapdMedia.
     */
    get_media(): Media[]
    /**
     * Gets the path this snap is mounted from, which is a .snap file for installed
     * snaps and a directory for snaps in try mode.
     * @returns a file path or %NULL.
     */
    get_mounted_from(): string | null
    /**
     * Get the name of this snap. This is used to reference this snap, e.g. for
     * installing / removing.
     * @returns a name.
     */
    get_name(): string | null
    /**
     * Get the prices that this snap can be purchased at.
     * @returns an array of #SnapdPrice.
     */
    get_prices(): Price[]
    /**
     * Get if this snap is only available to the developer.
     * @returns %TRUE if this is a private snap.
     */
    get_private(): boolean
    /**
     * Get the display name of the publisher who created this snap.
     * @returns a publisher display name.
     */
    get_publisher_display_name(): string | null
    /**
     * Get the ID of the publisher who created this snap.
     * @returns a publisher ID.
     */
    get_publisher_id(): string | null
    /**
     * Get the username of the publisher who created this snap.
     * @returns a publisher username.
     */
    get_publisher_username(): string | null
    /**
     * Get the validation for the snap publisher, e.g. %SNAPD_PUBLISHER_VALIDATION_VERIFIED
     * @returns a #SnapdPublisherValidation.
     */
    get_publisher_validation(): PublisherValidation
    /**
     * Get the revision for this snap. The format of the string is undefined.
     * See also snapd_snap_get_version().
     * @returns a revision string.
     */
    get_revision(): string | null
    /**
     * Get the screenshots that are available for this snap.
     * @returns an array of #SnapdScreenshot.
     */
    get_screenshots(): Screenshot[]
    /**
     * Get the type of snap, e.g. %SNAPD_SNAP_TYPE_APP
     * @returns a #SnapdSnapType.
     */
    get_snap_type(): SnapType
    /**
     * Get the current status of this snap, e.g. SNAPD_SNAP_STATUS_INSTALLED.
     * @returns a #SnapdSnapStatus.
     */
    get_status(): SnapStatus
    /**
     * Get a single line summary for this snap, e.g. "Best app ever!".
     * @returns a summary string.
     */
    get_summary(): string | null
    /**
     * Get the title for this snap. If not available use the snap name instead.
     * @returns a title or %NULL.
     */
    get_title(): string | null
    /**
     * Get the channel that updates will be installed from, e.g. "stable".
     * @returns a channel name.
     */
    get_tracking_channel(): string | null
    /**
     * Get the tracks that are available.
     * @returns an ordered array of track names.
     */
    get_tracks(): string[]
    /**
     * Get if this snap is running in try mode (installed locally and able to be
     * directly modified).
     * @returns %TRUE if using trymode.
     */
    get_trymode(): boolean
    /**
     * Get the version for this snap. The format of the string is undefined.
     * See also snapd_snap_get_revision().
     * @returns a version string.
     */
    get_version(): string | null
    /**
     * Get the website of the snap developer, e.g. "http://example.com".
     * @returns a website URL.
     */
    get_website(): string | null
    /**
     * Finds the available channel that best matches the given name.
     * If none matches %NULL is returned.
     * @param name a channel name.
     * @returns an #SnapdChannel or %NULL.
     */
    match_channel(name: string | null): Channel | null

    // Class property signals of Snapd-1.Snapd.Snap

    connect(sigName: "notify::apps", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::apps", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::apps", ...args: any[]): void
    connect(sigName: "notify::base", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::base", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::base", ...args: any[]): void
    connect(sigName: "notify::broken", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::broken", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::broken", ...args: any[]): void
    connect(sigName: "notify::channel", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channel", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::channel", ...args: any[]): void
    connect(sigName: "notify::channels", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::channels", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::channels", ...args: any[]): void
    connect(sigName: "notify::common-ids", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::common-ids", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::common-ids", ...args: any[]): void
    connect(sigName: "notify::confinement", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::confinement", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::confinement", ...args: any[]): void
    connect(sigName: "notify::contact", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::contact", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::contact", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::developer", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::developer", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::developer", ...args: any[]): void
    connect(sigName: "notify::devmode", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::devmode", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::devmode", ...args: any[]): void
    connect(sigName: "notify::download-size", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::download-size", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::download-size", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::install-date", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::install-date", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::install-date", ...args: any[]): void
    connect(sigName: "notify::installed-size", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::installed-size", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::installed-size", ...args: any[]): void
    connect(sigName: "notify::jailmode", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::jailmode", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::jailmode", ...args: any[]): void
    connect(sigName: "notify::license", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::license", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::media", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::media", ...args: any[]): void
    connect(sigName: "notify::mounted-from", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mounted-from", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mounted-from", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::prices", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::prices", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::prices", ...args: any[]): void
    connect(sigName: "notify::private", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::private", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::private", ...args: any[]): void
    connect(sigName: "notify::publisher-display-name", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::publisher-display-name", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::publisher-display-name", ...args: any[]): void
    connect(sigName: "notify::publisher-id", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::publisher-id", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::publisher-id", ...args: any[]): void
    connect(sigName: "notify::publisher-username", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::publisher-username", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::publisher-username", ...args: any[]): void
    connect(sigName: "notify::publisher-validation", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::publisher-validation", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::publisher-validation", ...args: any[]): void
    connect(sigName: "notify::revision", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::revision", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::revision", ...args: any[]): void
    connect(sigName: "notify::screenshots", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screenshots", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screenshots", ...args: any[]): void
    connect(sigName: "notify::snap-type", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::snap-type", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::snap-type", ...args: any[]): void
    connect(sigName: "notify::status", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tracking-channel", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tracking-channel", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tracking-channel", ...args: any[]): void
    connect(sigName: "notify::tracks", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tracks", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tracks", ...args: any[]): void
    connect(sigName: "notify::trymode", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::trymode", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::trymode", ...args: any[]): void
    connect(sigName: "notify::version", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: "notify::website", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::website", callback: (($obj: Snap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::website", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
    static $gtype: GObject.GType<Snap>

    // Constructors of Snapd-1.Snapd.Snap

    constructor(config?: Snap.ConstructorProperties) 
    _init(config?: Snap.ConstructorProperties): void
}

export module SystemInformation {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Snapd-1.Snapd.SystemInformation

        binaries_directory?: string | null
        build_id?: string | null
        confinement?: SystemConfinement | null
        kernel_version?: string | null
        managed?: boolean | null
        mount_directory?: string | null
        on_classic?: boolean | null
        os_id?: string | null
        os_version?: string | null
        refresh_hold?: GLib.DateTime | null
        refresh_last?: GLib.DateTime | null
        refresh_next?: GLib.DateTime | null
        refresh_schedule?: string | null
        refresh_timer?: string | null
        sandbox_features?: any | null
        series?: string | null
        store?: string | null
        version?: string | null
    }

}

export interface SystemInformation {

    // Own properties of Snapd-1.Snapd.SystemInformation

    readonly binaries_directory: string | null
    readonly build_id: string | null
    readonly confinement: SystemConfinement
    readonly kernel_version: string | null
    readonly managed: boolean
    readonly mount_directory: string | null
    readonly on_classic: boolean
    readonly os_id: string | null
    readonly os_version: string | null
    readonly refresh_hold: GLib.DateTime
    readonly refresh_last: GLib.DateTime
    readonly refresh_next: GLib.DateTime
    readonly refresh_schedule: string | null
    readonly refresh_timer: string | null
    readonly sandbox_features: any
    readonly series: string | null
    readonly store: string | null
    readonly version: string | null

    // Owm methods of Snapd-1.Snapd.SystemInformation

    /**
     * Get the directory snap binaries are stored, e.g. "/snap/bin".
     * @returns a directory.
     */
    get_binaries_directory(): string | null
    /**
     * Gets the unique build ID for the snap build, e.g. "efdd0b5e69b0742fa5e5bad0771df4d1df2459d1"
     * @returns a build ID.
     */
    get_build_id(): string | null
    /**
     * Get the level of confinement the system supports, e.g. %SNAPD_SYSTEM_CONFINEMENT_STRICT.
     * @returns a #SnapdSystemConfinement.
     */
    get_confinement(): SystemConfinement
    /**
     * Get the version of the kernel snapd is running on, e.g. "4.10.0-15-generic".
     * @returns a version string.
     */
    get_kernel_version(): string | null
    /**
     * Get if snapd is running on a managed system.
     * @returns %TRUE if running on a managed system.
     */
    get_managed(): boolean
    /**
     * Get the directory snaps are mounted, e.g. "/snap".
     * @returns a directory.
     */
    get_mount_directory(): string | null
    /**
     * Get if this system is a classic system.
     * @returns %TRUE if running on a classic system.
     */
    get_on_classic(): boolean
    /**
     * Get the operating system ID, e.g. "ubuntu".
     * @returns an operating system ID.
     */
    get_os_id(): string | null
    /**
     * Get the operating system version, e.g. "16.04".
     * @returns a version string.
     */
    get_os_version(): string | null
    /**
     * Get the time refreshes will be applied at, or %NULL if they are applied immediately.
     * @returns a #GDateTime.
     */
    get_refresh_hold(): GLib.DateTime | null
    /**
     * Get the time the last refresh occurred, or %NULL if has not occurred.
     * @returns a #GDateTime.
     */
    get_refresh_last(): GLib.DateTime | null
    /**
     * Get the time the next refresh is scheduled for, or %NULL if none has been scheduled.
     * @returns a #GDateTime.
     */
    get_refresh_next(): GLib.DateTime | null
    /**
     * Get the schedule when snap refreshes will occur.
     * @returns a Snap refresh schedule string.
     */
    get_refresh_schedule(): string | null
    /**
     * Get the timer that refreshes are running to.
     * @returns a Snap refresh timer string.
     */
    get_refresh_timer(): string | null
    /**
     * Gets the sandbox features that snapd provides. Each backend in snapd provides
     * a list of features that it supports. For example, the "confinement-options"
     * backend may provide "classic", "devmode" and "strict".
     * @returns a hash table of string arrays keyed by backend name.
     */
    get_sandbox_features(): GLib.HashTable
    /**
     * Get the series of snapd running, e.g. "16".
     * @returns a series string.
     */
    get_series(): string | null
    /**
     * Get the store being used by snapd, e.g. "Ubuntu"
     * @returns a store id or %NULL.
     */
    get_store(): string | null
    /**
     * Get the version of snapd running, e.g. "2.11+ppa174-1".
     * @returns a version string.
     */
    get_version(): string | null

    // Class property signals of Snapd-1.Snapd.SystemInformation

    connect(sigName: "notify::binaries-directory", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::binaries-directory", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::binaries-directory", ...args: any[]): void
    connect(sigName: "notify::build-id", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::build-id", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::build-id", ...args: any[]): void
    connect(sigName: "notify::confinement", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::confinement", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::confinement", ...args: any[]): void
    connect(sigName: "notify::kernel-version", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kernel-version", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::kernel-version", ...args: any[]): void
    connect(sigName: "notify::managed", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::managed", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::managed", ...args: any[]): void
    connect(sigName: "notify::mount-directory", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mount-directory", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mount-directory", ...args: any[]): void
    connect(sigName: "notify::on-classic", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::on-classic", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::on-classic", ...args: any[]): void
    connect(sigName: "notify::os-id", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::os-id", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::os-id", ...args: any[]): void
    connect(sigName: "notify::os-version", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::os-version", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::os-version", ...args: any[]): void
    connect(sigName: "notify::refresh-hold", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refresh-hold", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::refresh-hold", ...args: any[]): void
    connect(sigName: "notify::refresh-last", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refresh-last", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::refresh-last", ...args: any[]): void
    connect(sigName: "notify::refresh-next", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refresh-next", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::refresh-next", ...args: any[]): void
    connect(sigName: "notify::refresh-schedule", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refresh-schedule", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::refresh-schedule", ...args: any[]): void
    connect(sigName: "notify::refresh-timer", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refresh-timer", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::refresh-timer", ...args: any[]): void
    connect(sigName: "notify::sandbox-features", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sandbox-features", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sandbox-features", ...args: any[]): void
    connect(sigName: "notify::series", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::series", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::series", ...args: any[]): void
    connect(sigName: "notify::store", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::store", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::store", ...args: any[]): void
    connect(sigName: "notify::version", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::version", callback: (($obj: SystemInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
    static $gtype: GObject.GType<SystemInformation>

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
        progress_done?: number | null
        progress_label?: string | null
        progress_total?: number | null
        ready?: boolean | null
        ready_time?: GLib.DateTime | null
        spawn_time?: GLib.DateTime | null
        status?: string | null
        summary?: string | null
    }

}

export interface Task {

    // Own properties of Snapd-1.Snapd.Task

    readonly id: string | null
    readonly kind: string | null
    readonly progress_done: number
    readonly progress_label: string | null
    readonly progress_total: number
    readonly ready: boolean
    readonly ready_time: GLib.DateTime
    readonly spawn_time: GLib.DateTime
    readonly status: string | null
    readonly summary: string | null

    // Owm methods of Snapd-1.Snapd.Task

    /**
     * Get the unique ID for this task.
     * @returns an ID.
     */
    get_id(): string | null
    /**
     * Gets the kind of task this is.
     * @returns the kind of task.
     */
    get_kind(): string | null
    /**
     * Get the the number of items completed in this task.
     * @returns a count.
     */
    get_progress_done(): number
    /**
     * Get the the label associated with the progress.
     * @returns a label string.
     */
    get_progress_label(): string | null
    /**
     * Get the the total number of items to be completed in this task.
     * @returns a count.
     */
    get_progress_total(): number
    /**
     * Get if this task is completed.
     * @returns %TRUE if this task is complete.
     */
    get_ready(): boolean
    /**
     * Get the time this task completed or %NULL if not yet completed.
     * @returns a #GDateTime or %NULL.
     */
    get_ready_time(): GLib.DateTime | null
    /**
     * Get the time this task started.
     * @returns a #GDateTime.
     */
    get_spawn_time(): GLib.DateTime
    /**
     * Get the status of the task.
     * @returns a status string.
     */
    get_status(): string | null
    /**
     * Get a human readable description of the task.
     * @returns a string describing the task.
     */
    get_summary(): string | null

    // Class property signals of Snapd-1.Snapd.Task

    connect(sigName: "notify::id", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::kind", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::kind", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::kind", ...args: any[]): void
    connect(sigName: "notify::progress-done", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-done", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-done", ...args: any[]): void
    connect(sigName: "notify::progress-label", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-label", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-label", ...args: any[]): void
    connect(sigName: "notify::progress-total", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::progress-total", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::progress-total", ...args: any[]): void
    connect(sigName: "notify::ready", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ready", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ready", ...args: any[]): void
    connect(sigName: "notify::ready-time", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ready-time", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ready-time", ...args: any[]): void
    connect(sigName: "notify::spawn-time", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::spawn-time", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::spawn-time", ...args: any[]): void
    connect(sigName: "notify::status", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::summary", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::summary", callback: (($obj: Task, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
    static $gtype: GObject.GType<Task>

    // Constructors of Snapd-1.Snapd.Task

    constructor(config?: Task.ConstructorProperties) 
    _init(config?: Task.ConstructorProperties): void
}

export module UserInformation {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Snapd-1.Snapd.UserInformation

        auth_data?: AuthData | null
        email?: string | null
        id?: number | null
        ssh_keys?: string[] | null
        username?: string | null
    }

}

export interface UserInformation {

    // Own properties of Snapd-1.Snapd.UserInformation

    readonly auth_data: AuthData
    readonly email: string | null
    readonly id: number
    readonly ssh_keys: string[]
    readonly username: string | null

    // Owm methods of Snapd-1.Snapd.UserInformation

    /**
     * Get the email address for this account.
     * @returns a #SnapdAuthData or %NULL if not set.
     */
    get_auth_data(): AuthData | null
    /**
     * Get the email address for this account.
     * @returns a email address.
     */
    get_email(): string | null
    /**
     * Get the id for this account.
     * @returns a user id.
     */
    get_id(): number
    /**
     * Get the SSH keys added to this account.
     * @returns the names of the SSH keys.
     */
    get_ssh_keys(): string[]
    /**
     * Get the local username for this account.
     * @returns a username.
     */
    get_username(): string | null

    // Class property signals of Snapd-1.Snapd.UserInformation

    connect(sigName: "notify::auth-data", callback: (($obj: UserInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auth-data", callback: (($obj: UserInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::auth-data", ...args: any[]): void
    connect(sigName: "notify::email", callback: (($obj: UserInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::email", callback: (($obj: UserInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::email", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: UserInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: UserInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::ssh-keys", callback: (($obj: UserInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::ssh-keys", callback: (($obj: UserInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::ssh-keys", ...args: any[]): void
    connect(sigName: "notify::username", callback: (($obj: UserInformation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::username", callback: (($obj: UserInformation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::username", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
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
    static $gtype: GObject.GType<UserInformation>

    // Constructors of Snapd-1.Snapd.UserInformation

    constructor(config?: UserInformation.ConstructorProperties) 
    _init(config?: UserInformation.ConstructorProperties): void
}

export interface AliasClass {

    // Own fields of Snapd-1.Snapd.AliasClass

    parent_class: GObject.ObjectClass
}

export abstract class AliasClass {

    // Own properties of Snapd-1.Snapd.AliasClass

    static name: string
}

export interface AppClass {

    // Own fields of Snapd-1.Snapd.AppClass

    parent_class: GObject.ObjectClass
}

export abstract class AppClass {

    // Own properties of Snapd-1.Snapd.AppClass

    static name: string
}

export interface AssertionClass {

    // Own fields of Snapd-1.Snapd.AssertionClass

    parent_class: GObject.ObjectClass
}

export abstract class AssertionClass {

    // Own properties of Snapd-1.Snapd.AssertionClass

    static name: string
}

export interface AuthDataClass {

    // Own fields of Snapd-1.Snapd.AuthDataClass

    parent_class: GObject.ObjectClass
}

export abstract class AuthDataClass {

    // Own properties of Snapd-1.Snapd.AuthDataClass

    static name: string
}

export interface ChangeClass {

    // Own fields of Snapd-1.Snapd.ChangeClass

    parent_class: GObject.ObjectClass
}

export abstract class ChangeClass {

    // Own properties of Snapd-1.Snapd.ChangeClass

    static name: string
}

export interface ChannelClass {

    // Own fields of Snapd-1.Snapd.ChannelClass

    parent_class: GObject.ObjectClass
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

    parent_class: GObject.ObjectClass
}

export abstract class ConnectionClass {

    // Own properties of Snapd-1.Snapd.ConnectionClass

    static name: string
}

export interface IconClass {

    // Own fields of Snapd-1.Snapd.IconClass

    parent_class: GObject.ObjectClass
}

export abstract class IconClass {

    // Own properties of Snapd-1.Snapd.IconClass

    static name: string
}

export interface InterfaceClass {

    // Own fields of Snapd-1.Snapd.InterfaceClass

    parent_class: GObject.ObjectClass
}

export abstract class InterfaceClass {

    // Own properties of Snapd-1.Snapd.InterfaceClass

    static name: string
}

export interface MaintenanceClass {

    // Own fields of Snapd-1.Snapd.MaintenanceClass

    parent_class: GObject.ObjectClass
}

export abstract class MaintenanceClass {

    // Own properties of Snapd-1.Snapd.MaintenanceClass

    static name: string
}

export interface MarkdownNodeClass {

    // Own fields of Snapd-1.Snapd.MarkdownNodeClass

    parent_class: GObject.ObjectClass
}

export abstract class MarkdownNodeClass {

    // Own properties of Snapd-1.Snapd.MarkdownNodeClass

    static name: string
}

export interface MarkdownParserClass {

    // Own fields of Snapd-1.Snapd.MarkdownParserClass

    parent_class: GObject.ObjectClass
}

export abstract class MarkdownParserClass {

    // Own properties of Snapd-1.Snapd.MarkdownParserClass

    static name: string
}

export interface MediaClass {

    // Own fields of Snapd-1.Snapd.MediaClass

    parent_class: GObject.ObjectClass
}

export abstract class MediaClass {

    // Own properties of Snapd-1.Snapd.MediaClass

    static name: string
}

export interface PlugClass {

    // Own fields of Snapd-1.Snapd.PlugClass

    parent_class: GObject.ObjectClass
}

export abstract class PlugClass {

    // Own properties of Snapd-1.Snapd.PlugClass

    static name: string
}

export interface PlugRefClass {

    // Own fields of Snapd-1.Snapd.PlugRefClass

    parent_class: GObject.ObjectClass
}

export abstract class PlugRefClass {

    // Own properties of Snapd-1.Snapd.PlugRefClass

    static name: string
}

export interface PriceClass {

    // Own fields of Snapd-1.Snapd.PriceClass

    parent_class: GObject.ObjectClass
}

export abstract class PriceClass {

    // Own properties of Snapd-1.Snapd.PriceClass

    static name: string
}

export interface ScreenshotClass {

    // Own fields of Snapd-1.Snapd.ScreenshotClass

    parent_class: GObject.ObjectClass
}

export abstract class ScreenshotClass {

    // Own properties of Snapd-1.Snapd.ScreenshotClass

    static name: string
}

export interface SlotClass {

    // Own fields of Snapd-1.Snapd.SlotClass

    parent_class: GObject.ObjectClass
}

export abstract class SlotClass {

    // Own properties of Snapd-1.Snapd.SlotClass

    static name: string
}

export interface SlotRefClass {

    // Own fields of Snapd-1.Snapd.SlotRefClass

    parent_class: GObject.ObjectClass
}

export abstract class SlotRefClass {

    // Own properties of Snapd-1.Snapd.SlotRefClass

    static name: string
}

export interface SnapClass {

    // Own fields of Snapd-1.Snapd.SnapClass

    parent_class: GObject.ObjectClass
}

export abstract class SnapClass {

    // Own properties of Snapd-1.Snapd.SnapClass

    static name: string
}

export interface SystemInformationClass {

    // Own fields of Snapd-1.Snapd.SystemInformationClass

    parent_class: GObject.ObjectClass
}

export abstract class SystemInformationClass {

    // Own properties of Snapd-1.Snapd.SystemInformationClass

    static name: string
}

export interface TaskClass {

    // Own fields of Snapd-1.Snapd.TaskClass

    parent_class: GObject.ObjectClass
}

export abstract class TaskClass {

    // Own properties of Snapd-1.Snapd.TaskClass

    static name: string
}

export interface UserInformationClass {

    // Own fields of Snapd-1.Snapd.UserInformationClass

    parent_class: GObject.ObjectClass
}

export abstract class UserInformationClass {

    // Own properties of Snapd-1.Snapd.UserInformationClass

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END