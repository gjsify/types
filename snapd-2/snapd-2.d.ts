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

export namespace Snapd {
    /**
     * Snapd-2
     */

    /**
     * Status of an alias.
     */

    /**
     * Status of an alias.
     */
    export namespace AliasStatus {
        export const $gtype: GObject.GType<AliasStatus>;
    }

    enum AliasStatus {
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

    /**
     * Filter to apply to changes.
     */
    export namespace ChangeFilter {
        export const $gtype: GObject.GType<ChangeFilter>;
    }

    enum ChangeFilter {
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

    /**
     * Confinement used by a snap.
     */
    export namespace Confinement {
        export const $gtype: GObject.GType<Confinement>;
    }

    enum Confinement {
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

    /**
     * Type of daemon.
     */
    export namespace DaemonType {
        export const $gtype: GObject.GType<DaemonType>;
    }

    enum DaemonType {
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
    class Error extends GLib.Error {
        static $gtype: GObject.GType<Error>;

        // Static fields

        /**
         * not able to connect to snapd.
         */
        static CONNECTION_FAILED: number;
        /**
         * an error occurred while writing to snapd.
         */
        static WRITE_FAILED: number;
        /**
         * an error occurred while reading from snapd.
         */
        static READ_FAILED: number;
        /**
         * snapd did not understand the request that was sent.
         */
        static BAD_REQUEST: number;
        /**
         * the response received from snapd was not
         *     understood.
         */
        static BAD_RESPONSE: number;
        /**
         * the requested operation requires
         *     authorization data.
         */
        static AUTH_DATA_REQUIRED: number;
        /**
         * the provided authorization data is invalid.
         */
        static AUTH_DATA_INVALID: number;
        /**
         * login requires a two factor code.
         */
        static TWO_FACTOR_REQUIRED: number;
        /**
         * the two factor code provided at login is
         *     invalid.
         */
        static TWO_FACTOR_INVALID: number;
        /**
         * this user account is not permitted to perform
         *     the requested operation.
         */
        static PERMISSION_DENIED: number;
        /**
         * an unspecified error occurred while communicating
         *     with snapd.
         */
        static FAILED: number;
        /**
         * this user has not accepted the store's terms
         *     of service.
         */
        static TERMS_NOT_ACCEPTED: number;
        /**
         * this user has not configured a payment
         *     method.
         */
        static PAYMENT_NOT_SETUP: number;
        /**
         * this user has had their payment method
         *     declined by the payment provider.
         */
        static PAYMENT_DECLINED: number;
        /**
         * the requested snap is already installed.
         */
        static ALREADY_INSTALLED: number;
        /**
         * the requested snap is not installed.
         */
        static NOT_INSTALLED: number;
        /**
         * no update is available for this snap.
         */
        static NO_UPDATE_AVAILABLE: number;
        /**
         * provided password is not valid.
         */
        static PASSWORD_POLICY_ERROR: number;
        /**
         * this snap needs to be installed using devmode.
         */
        static NEEDS_DEVMODE: number;
        /**
         * this snap needs to be installed using classic
         *     mode.
         */
        static NEEDS_CLASSIC: number;
        /**
         * a classic system is required to install
         *    this snap.
         */
        static NEEDS_CLASSIC_SYSTEM: number;
        /**
         * a bad query was provided.
         */
        static BAD_QUERY: number;
        /**
         * A timeout occurred during the request.
         */
        static NETWORK_TIMEOUT: number;
        /**
         * the requested snap couldn't be found.
         */
        static NOT_FOUND: number;
        /**
         * the requested snap is not in the store.
         */
        static NOT_IN_STORE: number;
        /**
         * authentication was cancelled by the user.
         */
        static AUTH_CANCELLED: number;
        /**
         * snap not compatible with classic mode.
         */
        static NOT_CLASSIC: number;
        /**
         * requested snap revision not available.
         */
        static REVISION_NOT_AVAILABLE: number;
        /**
         * requested snap channel not available.
         */
        static CHANNEL_NOT_AVAILABLE: number;
        /**
         * the given snap or directory does not look like a snap.
         */
        static NOT_A_SNAP: number;
        /**
         * A hostname failed to resolve during the request.
         */
        static DNS_FAILURE: number;
        /**
         * A requested configuration option is not set.
         */
        static OPTION_NOT_FOUND: number;
        /**
         * A snapctl command was unsuccessful.
         */
        static UNSUCCESSFUL: number;
        /**
         * The requested app coundn't be found.
         */
        static APP_NOT_FOUND: number;
        /**
         * No snap revision on specified architecture.
         */
        static ARCHITECTURE_NOT_AVAILABLE: number;
        /**
         * The requested operation would conflict with currently ongoing change.
         */
        static CHANGE_CONFLICT: number;
        /**
         * The requested interfaces' operation would have no effect.
         */
        static INTERFACES_UNCHANGED: number;

        // Constructors

        constructor(options: { message: string; code: number });
        _init(...args: any[]): void;

        // Static methods

        /**
         * Gets the Snapd Error Quark.
         */
        static quark(): GLib.Quark;
    }

    /**
     * Type of snap.
     */

    /**
     * Type of snap.
     */
    export namespace MaintenanceKind {
        export const $gtype: GObject.GType<MaintenanceKind>;
    }

    enum MaintenanceKind {
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

    /**
     * Type of markdown node.
     */
    export namespace MarkdownNodeType {
        export const $gtype: GObject.GType<MarkdownNodeType>;
    }

    enum MarkdownNodeType {
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
    /**
     * Version of markdown to parse. Picking a version will ensure only nodes of the expected type are decoded.
     */
    class MarkdownVersion {
        static $gtype: GObject.GType<MarkdownVersion>;

        // Static fields

        /**
         * the initial version of Snap markdown.
         */
        static '0': number;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * State of validation for a publisher.
     */

    /**
     * State of validation for a publisher.
     */
    export namespace PublisherValidation {
        export const $gtype: GObject.GType<PublisherValidation>;
    }

    enum PublisherValidation {
        /**
         * the validation state of the publisher is unknown.
         */
        UNKNOWN,
        /**
         * the publisher has not proven their identity.
         */
        UNPROVEN,
        /**
         * the publisher is a star developer.
         */
        VERIFIED,
        /**
         * the publisher has had their identity verified.
         */
        STARRED,
    }
    /**
     * The current state of a snap.
     */

    /**
     * The current state of a snap.
     */
    export namespace SnapStatus {
        export const $gtype: GObject.GType<SnapStatus>;
    }

    enum SnapStatus {
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

    /**
     * Type of snap.
     */
    export namespace SnapType {
        export const $gtype: GObject.GType<SnapType>;
    }

    enum SnapType {
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

    /**
     * Confinement used by a snap.
     */
    export namespace SystemConfinement {
        export const $gtype: GObject.GType<SystemConfinement>;
    }

    enum SystemConfinement {
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
     * The status of a snap-packaged desktop theme.
     */

    /**
     * The status of a snap-packaged desktop theme.
     */
    export namespace ThemeStatus {
        export const $gtype: GObject.GType<ThemeStatus>;
    }

    enum ThemeStatus {
        /**
         * the theme is installed.
         */
        INSTALLED,
        /**
         * the theme is not installed but a package is available.
         */
        AVAILABLE,
        /**
         * the theme is not available.
         */
        UNAVAILABLE,
    }
    /**
     * Gets the Snapd Error Quark.
     * @returns a #GQuark.
     */
    function error_quark(): GLib.Quark;
    /**
     * Asynchronously get authorization to install/remove snaps.
     * See snapd_login_sync() for more information.
     * @param username username to log in with.
     * @param password password to log in with.
     * @param otp response to one-time password challenge.
     * @param cancellable a #GCancellable or %NULL.
     */
    function login_async(
        username: string,
        password: string,
        otp?: string | null,
        cancellable?: Gio.Cancellable | null,
    ): globalThis.Promise<AuthData>;
    /**
     * Asynchronously get authorization to install/remove snaps.
     * See snapd_login_sync() for more information.
     * @param username username to log in with.
     * @param password password to log in with.
     * @param otp response to one-time password challenge.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    function login_async(
        username: string,
        password: string,
        otp: string | null,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<string> | null,
    ): void;
    /**
     * Asynchronously get authorization to install/remove snaps.
     * See snapd_login_sync() for more information.
     * @param username username to log in with.
     * @param password password to log in with.
     * @param otp response to one-time password challenge.
     * @param cancellable a #GCancellable or %NULL.
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
     */
    function login_async(
        username: string,
        password: string,
        otp?: string | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<string> | null,
    ): globalThis.Promise<AuthData> | void;
    /**
     * Complete login started with snapd_login_async().
     * See snapd_login_sync() for more information.
     * @param result a #GAsyncResult.
     * @returns a #SnapdAuthData or %NULL on error.
     */
    function login_finish(result: Gio.AsyncResult): AuthData;
    /**
     * This call used to contact a D-Bus service to perform snapd authentication using
     * Polkit. This now just creates a #SnapdClient and does the call directly.
     * @param username username to log in with.
     * @param password password to log in with.
     * @param otp response to one-time password challenge.
     * @param cancellable a #GCancellable or %NULL.
     * @returns a #SnapdAuthData or %NULL on error.
     */
    function login_sync(
        username: string,
        password: string,
        otp?: string | null,
        cancellable?: Gio.Cancellable | null,
    ): AuthData;
    interface LogCallback {
        (client: Client, log: Log): void;
    }
    interface ProgressCallback {
        (client: Client, change: Change, deprecated?: any | null): void;
    }
    /**
     * Flag to control when a user accounts is created.
     */

    /**
     * Flag to control when a user accounts is created.
     */
    export namespace CreateUserFlags {
        export const $gtype: GObject.GType<CreateUserFlags>;
    }

    enum CreateUserFlags {
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
     */

    /**
     * Flag to change how a find is performed.
     */
    export namespace FindFlags {
        export const $gtype: GObject.GType<FindFlags>;
    }

    enum FindFlags {
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
     */

    /**
     * Flag to change which apps are returned.
     */
    export namespace GetAppsFlags {
        export const $gtype: GObject.GType<GetAppsFlags>;
    }

    enum GetAppsFlags {
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
     */

    /**
     * Flag to change how connections are returned.
     */
    export namespace GetConnectionsFlags {
        export const $gtype: GObject.GType<GetConnectionsFlags>;
    }

    enum GetConnectionsFlags {
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
     */

    /**
     * Flags to control how interface information is returned.
     */
    export namespace GetInterfacesFlags {
        export const $gtype: GObject.GType<GetInterfacesFlags>;
    }

    enum GetInterfacesFlags {
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
     */

    /**
     * Flag to change which snaps are returned.
     */
    export namespace GetSnapsFlags {
        export const $gtype: GObject.GType<GetSnapsFlags>;
    }

    enum GetSnapsFlags {
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
     */

    /**
     * Flags to control install options.
     */
    export namespace InstallFlags {
        export const $gtype: GObject.GType<InstallFlags>;
    }

    enum InstallFlags {
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
     */

    /**
     * Flags to control remove options.
     */
    export namespace RemoveFlags {
        export const $gtype: GObject.GType<RemoveFlags>;
    }

    enum RemoveFlags {
        /**
         * No flags, default behaviour.
         */
        NONE,
        /**
         * Don't save a snapshot the snap's data when removing.
         */
        PURGE,
    }
    namespace Alias {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::app-auto': (pspec: GObject.ParamSpec) => void;
            'notify::app-manual': (pspec: GObject.ParamSpec) => void;
            'notify::command': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::snap': (pspec: GObject.ParamSpec) => void;
            'notify::status': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            app_auto: string;
            appAuto: string;
            app_manual: string;
            appManual: string;
            command: string;
            name: string;
            snap: string;
            status: AliasStatus;
        }
    }

    /**
     * #SnapdAlias contains alias information for a Snap.
     *
     * Aliases are used to provide alternative binary names for Snap apps.
     */
    class Alias extends GObject.Object {
        static $gtype: GObject.GType<Alias>;

        // Properties

        get app_auto(): string;
        get appAuto(): string;
        get app_manual(): string;
        get appManual(): string;
        get command(): string;
        get name(): string;
        get snap(): string;
        get status(): AliasStatus;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Alias.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Alias.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Alias.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Alias.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Alias.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Alias.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Alias.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Alias.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the app this is an alias for.
         * @returns an app name or %NULL.
         */
        get_app(): string | null;
        /**
         * Get the app this alias has been automatically set to (status is %SNAPD_ALIAS_STATUS_AUTO).
         * Can be overridden when status is %SNAPD_ALIAS_STATUS_MANUAL.
         * @returns an app name or %NULL.
         */
        get_app_auto(): string | null;
        /**
         * Get the app this alias has been manually set to (status is %SNAPD_ALIAS_STATUS_MANUAL).
         * This overrides the app from snapd_alias_get_app_auto().
         * @returns an app name or %NULL.
         */
        get_app_manual(): string | null;
        /**
         * Get the command this alias runs.
         * @returns a command.
         */
        get_command(): string;
        /**
         * Get the name of this alias.
         * @returns an alias name.
         */
        get_name(): string;
        /**
         * Get the snap this alias is for.
         * @returns a snap name.
         */
        get_snap(): string;
        /**
         * Get the status of this alias.
         * @returns a #SnapdAliasStatus.
         */
        get_status(): AliasStatus;
    }

    namespace App {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::active': (pspec: GObject.ParamSpec) => void;
            'notify::aliases': (pspec: GObject.ParamSpec) => void;
            'notify::common-id': (pspec: GObject.ParamSpec) => void;
            'notify::daemon-type': (pspec: GObject.ParamSpec) => void;
            'notify::desktop-file': (pspec: GObject.ParamSpec) => void;
            'notify::enabled': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::snap': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            active: boolean;
            aliases: string[];
            common_id: string;
            commonId: string;
            daemon_type: DaemonType;
            daemonType: DaemonType;
            desktop_file: string;
            desktopFile: string;
            enabled: boolean;
            name: string;
            snap: string;
        }
    }

    /**
     * #SnapdApp contains information about an app in a Snap.
     *
     * Snaps can contain apps which is a single binary executable.
     */
    class App extends GObject.Object {
        static $gtype: GObject.GType<App>;

        // Properties

        get active(): boolean;
        get aliases(): string[];
        get common_id(): string;
        get commonId(): string;
        get daemon_type(): DaemonType;
        get daemonType(): DaemonType;
        get desktop_file(): string;
        get desktopFile(): string;
        get enabled(): boolean;
        get name(): string;
        get snap(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: App.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<App.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof App.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, App.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof App.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, App.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof App.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<App.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get if this service is active.
         * @returns %TRUE if active.
         */
        get_active(): boolean;
        /**
         * Get the aliases for this app.
         * @returns the alias names.
         */
        get_aliases(): string[];
        /**
         * Get the common ID associated with this app.
         * @returns an ID or %NULL.
         */
        get_common_id(): string | null;
        /**
         * Get the daemon type for this app.
         * @returns the daemon type or %NULL.
         */
        get_daemon_type(): DaemonType | null;
        /**
         * Get the path to the desktop file for this app.
         * @returns a path or %NULL.
         */
        get_desktop_file(): string | null;
        /**
         * Get if this service is enabled.
         * @returns %TRUE if enabled.
         */
        get_enabled(): boolean;
        /**
         * Get the name of this app.
         * @returns a name.
         */
        get_name(): string;
        /**
         * Get the snap this app is associated with.
         * @returns a snap name.
         */
        get_snap(): string;
    }

    namespace Assertion {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::content': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            content: string;
        }
    }

    /**
     * #SnapdAssertion contains information about a Snap assertion.
     *
     * Assertions are digitally signed documents that allow Snaps to have secure
     * trust and control features.
     */
    class Assertion extends GObject.Object {
        static $gtype: GObject.GType<Assertion>;

        // Properties

        get content(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Assertion.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Assertion.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](content: string): Assertion;

        // Signals

        connect<K extends keyof Assertion.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Assertion.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Assertion.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Assertion.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Assertion.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Assertion.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the body of the assertion.
         * @returns assertion body or %NULL.
         */
        get_body(): string | null;
        /**
         * Get a header from an assertion.
         * @param name name of the header.
         * @returns header value or %NULL if undefined.
         */
        get_header(name: string): string | null;
        /**
         * Get the headers provided by this assertion.
         * @returns array of header names.
         */
        get_headers(): string[];
        /**
         * Get the signature of the assertion.
         * @returns assertion signature.
         */
        get_signature(): string;
    }

    namespace AuthData {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::discharges': (pspec: GObject.ParamSpec) => void;
            'notify::macaroon': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            discharges: string[];
            macaroon: string;
        }
    }

    /**
     * #SnapdAuthData contains authorization data used to communicate with snapd.
     *
     * The authorization data is in the form of a [Macaroon](https://research.google.com/pubs/pub41892.html).
     */
    class AuthData extends GObject.Object {
        static $gtype: GObject.GType<AuthData>;

        // Properties

        get discharges(): string[];
        set discharges(val: string[]);
        get macaroon(): string;
        set macaroon(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AuthData.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<AuthData.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](macaroon: string, discharges: string[]): AuthData;

        // Signals

        connect<K extends keyof AuthData.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AuthData.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof AuthData.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, AuthData.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof AuthData.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<AuthData.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the discharges that this authorization uses.
         * @returns the discharges as serialized strings.
         */
        get_discharges(): string[];
        /**
         * Get the Macaroon that this authorization uses.
         * @returns the serialized Macaroon used to authorize access to snapd.
         */
        get_macaroon(): string;
    }

    namespace Category {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::featured': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            featured: boolean;
            name: string;
        }
    }

    /**
     * #SnapdCategory is an opaque data structure and can only be accessed
     * using the provided functions.
     */
    class Category extends GObject.Object {
        static $gtype: GObject.GType<Category>;

        // Properties

        get featured(): boolean;
        get name(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Category.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Category.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Category.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Category.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Category.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Category.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Category.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Category.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get if this snap is featured in this category.
         * @returns %TRUE if this snap is featured in this category.
         */
        get_featured(): boolean;
        /**
         * Get the name of this category, e.g. "social".
         * @returns a name.
         */
        get_name(): string;
    }

    namespace CategoryDetails {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
        }
    }

    /**
     * #SnapdCategoryDetails is an opaque data structure and can only be accessed
     * using the provided functions.
     */
    class CategoryDetails extends GObject.Object {
        static $gtype: GObject.GType<CategoryDetails>;

        // Properties

        get name(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CategoryDetails.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CategoryDetails.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof CategoryDetails.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CategoryDetails.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CategoryDetails.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CategoryDetails.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CategoryDetails.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CategoryDetails.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the name of this category, e.g. "social".
         * @returns a name.
         */
        get_name(): string;
    }

    namespace Change {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::error': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::kind': (pspec: GObject.ParamSpec) => void;
            'notify::ready': (pspec: GObject.ParamSpec) => void;
            'notify::ready-time': (pspec: GObject.ParamSpec) => void;
            'notify::spawn-time': (pspec: GObject.ParamSpec) => void;
            'notify::status': (pspec: GObject.ParamSpec) => void;
            'notify::summary': (pspec: GObject.ParamSpec) => void;
            'notify::tasks': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            error: string;
            id: string;
            kind: string;
            ready: boolean;
            ready_time: GLib.DateTime;
            readyTime: GLib.DateTime;
            spawn_time: GLib.DateTime;
            spawnTime: GLib.DateTime;
            status: string;
            summary: string;
            tasks: any[];
        }
    }

    /**
     * #SnapdChange contains information on a current Snap transaction.
     */
    class Change extends GObject.Object {
        static $gtype: GObject.GType<Change>;

        // Properties

        get error(): string;
        get id(): string;
        get kind(): string;
        get ready(): boolean;
        get ready_time(): GLib.DateTime;
        get readyTime(): GLib.DateTime;
        get spawn_time(): GLib.DateTime;
        get spawnTime(): GLib.DateTime;
        get status(): string;
        get summary(): string;
        get tasks(): any[];

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Change.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Change.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Change.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Change.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Change.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Change.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Change.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Change.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Gets the error string associated with this change.
         * @returns an error string or %NULL.
         */
        get_error(): string | null;
        /**
         * Get the unique ID for this change.
         * @returns an ID.
         */
        get_id(): string;
        /**
         * Gets the kind of change this is.
         * @returns the kind of change.
         */
        get_kind(): string;
        /**
         * Get if this change is completed.
         * @returns %TRUE if this change is complete.
         */
        get_ready(): boolean;
        /**
         * Get the time this task completed or %NULL if not yet completed.
         * @returns a #GDateTime or %NULL.
         */
        get_ready_time(): GLib.DateTime | null;
        /**
         * Get the time this change started.
         * @returns a #GDateTime.
         */
        get_spawn_time(): GLib.DateTime;
        /**
         * Get the status of the change.
         * @returns a status string.
         */
        get_status(): string;
        /**
         * Get a human readable description of the change.
         * @returns a string describing the change.
         */
        get_summary(): string;
        /**
         * Get the tasks that are in this change.
         * @returns an array of #SnapdTask.
         */
        get_tasks(): Task[];
    }

    namespace Channel {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::confinement': (pspec: GObject.ParamSpec) => void;
            'notify::epoch': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::released-at': (pspec: GObject.ParamSpec) => void;
            'notify::revision': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::version': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            confinement: Confinement;
            epoch: string;
            name: string;
            released_at: GLib.DateTime;
            releasedAt: GLib.DateTime;
            revision: string;
            size: number;
            version: string;
        }
    }

    /**
     * #SnapdChannel is an opaque data structure and can only be accessed
     * using the provided functions.
     */
    class Channel extends GObject.Object {
        static $gtype: GObject.GType<Channel>;

        // Properties

        get confinement(): Confinement;
        get epoch(): string;
        get name(): string;
        get released_at(): GLib.DateTime;
        get releasedAt(): GLib.DateTime;
        get revision(): string;
        get size(): number;
        get version(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Channel.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Channel.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Channel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Channel.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Channel.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Channel.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Channel.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Channel.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the branch this channel is tracking.
         * @returns a branch name or %NULL if not a branch.
         */
        get_branch(): string | null;
        /**
         * Get the confinement this snap is using, e.g. %SNAPD_CONFINEMENT_STRICT.
         * @returns a #SnapdConfinement.
         */
        get_confinement(): Confinement;
        /**
         * Get the epoch used on this channel, e.g. "1".
         * @returns an epoch.
         */
        get_epoch(): string;
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
        get_name(): string;
        /**
         * Get the date this revision was released into the channel or %NULL if unknown.
         * @returns a #GDateTime.
         */
        get_released_at(): GLib.DateTime | null;
        /**
         * Get the revision for this snap. The format of the string is undefined.
         * See also snapd_channel_get_version().
         * @returns a revision string.
         */
        get_revision(): string;
        /**
         * Get the risk this channel is on, one of `stable`, `candidate`, `beta` or `edge`.
         * @returns a risk name.
         */
        get_risk(): string;
        /**
         * Get the download size of this snap.
         * @returns a byte count.
         */
        get_size(): number;
        /**
         * Get the track this channel is on.
         * @returns a track name.
         */
        get_track(): string;
        /**
         * Get the version for this snap. The format of the string is undefined.
         * See also snapd_channel_get_revision().
         * @returns a version string.
         */
        get_version(): string;
    }

    namespace Client {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * #SnapdClient contains connection state with snapd.
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

        static new_from_socket(socket: Gio.Socket): Client;

        // Signals

        connect<K extends keyof Client.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Client.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Client.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Client.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Client.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Asynchronously abort a change.
         * See snapd_client_abort_change_sync() for more information.
         * @param id a change ID to abort.
         * @param cancellable a #GCancellable or %NULL.
         */
        abort_change_async(id: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<Change>;
        /**
         * Asynchronously abort a change.
         * See snapd_client_abort_change_sync() for more information.
         * @param id a change ID to abort.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        abort_change_async(
            id: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously abort a change.
         * See snapd_client_abort_change_sync() for more information.
         * @param id a change ID to abort.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        abort_change_async(
            id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Change> | void;
        /**
         * Complete request started with snapd_client_abort_change_async().
         * See snapd_client_abort_change_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns a #SnapdChange or %NULL on error.
         */
        abort_change_finish(result: Gio.AsyncResult): Change;
        /**
         * Get information on a change.
         * @param id a change ID to abort.
         * @param cancellable a #GCancellable or %NULL.
         * @returns a #SnapdChange or %NULL on error.
         */
        abort_change_sync(id: string, cancellable?: Gio.Cancellable | null): Change;
        /**
         * Asynchronously add an assertion.
         * See snapd_client_add_assertions_sync() for more information.
         * @param assertions assertions to add.
         * @param cancellable a #GCancellable or %NULL.
         */
        add_assertions_async(assertions: string[], cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously add an assertion.
         * See snapd_client_add_assertions_sync() for more information.
         * @param assertions assertions to add.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        add_assertions_async(
            assertions: string[],
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously add an assertion.
         * See snapd_client_add_assertions_sync() for more information.
         * @param assertions assertions to add.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        add_assertions_async(
            assertions: string[],
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Complete request started with snapd_client_add_assertions_async().
         * See snapd_client_add_assertions_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns %TRUE on success or %FALSE on error.
         */
        add_assertions_finish(result: Gio.AsyncResult): boolean;
        /**
         * Add an assertion.
         * @param assertions assertions to add.
         * @param cancellable a #GCancellable or %NULL.
         * @returns %TRUE on success or %FALSE on error.
         */
        add_assertions_sync(assertions: string[], cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously create an alias to an app.
         * See snapd_client_alias_sync() for more information.
         * @param snap the name of the snap to modify.
         * @param app an app in the snap to make the alias to.
         * @param alias the name of the alias (i.e. the command that will run this app).
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         */
        alias_async(
            snap: string,
            app: string,
            alias: string,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
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
        alias_async(
            snap: string,
            app: string,
            alias: string,
            progress_callback: ProgressCallback | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        alias_async(
            snap: string,
            app: string,
            alias: string,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Complete request started with snapd_client_alias_async().
         * See snapd_client_alias_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns %TRUE on success or %FALSE on error.
         */
        alias_finish(result: Gio.AsyncResult): boolean;
        /**
         * Create an alias to an app.
         * @param snap the name of the snap to modify.
         * @param app an app in the snap to make the alias to.
         * @param alias the name of the alias (i.e. the command that will run this app).
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         */
        alias_sync(
            snap: string,
            app: string,
            alias: string,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously buy a snap from the store.
         * See snapd_client_buy_sync() for more information.
         * @param id id of snap to buy.
         * @param amount amount of currency to spend, e.g. 0.99.
         * @param currency the currency to buy with as an ISO 4217 currency code, e.g. "NZD".
         * @param cancellable a #GCancellable or %NULL.
         */
        buy_async(
            id: string,
            amount: number,
            currency: string,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously buy a snap from the store.
         * See snapd_client_buy_sync() for more information.
         * @param id id of snap to buy.
         * @param amount amount of currency to spend, e.g. 0.99.
         * @param currency the currency to buy with as an ISO 4217 currency code, e.g. "NZD".
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        buy_async(
            id: string,
            amount: number,
            currency: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously buy a snap from the store.
         * See snapd_client_buy_sync() for more information.
         * @param id id of snap to buy.
         * @param amount amount of currency to spend, e.g. 0.99.
         * @param currency the currency to buy with as an ISO 4217 currency code, e.g. "NZD".
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        buy_async(
            id: string,
            amount: number,
            currency: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Complete request started with snapd_client_buy_async().
         * See snapd_client_buy_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns %TRUE on success or %FALSE on error.
         */
        buy_finish(result: Gio.AsyncResult): boolean;
        /**
         * Buy a snap from the store. Once purchased, this snap can be installed with
         * snapd_client_install2_sync().
         * @param id id of snap to buy.
         * @param amount amount of currency to spend, e.g. 0.99.
         * @param currency the currency to buy with as an ISO 4217 currency code, e.g. "NZD".
         * @param cancellable a #GCancellable or %NULL.
         * @returns %TRUE on success or %FALSE on error.
         */
        buy_sync(id: string, amount: number, currency: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously check if able to buy snaps.
         * See snapd_client_check_buy_sync() for more information.
         * @param cancellable a #GCancellable or %NULL.
         */
        check_buy_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously check if able to buy snaps.
         * See snapd_client_check_buy_sync() for more information.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        check_buy_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously check if able to buy snaps.
         * See snapd_client_check_buy_sync() for more information.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        check_buy_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Complete request started with snapd_client_check_buy_async().
         * See snapd_client_check_buy_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns %TRUE on success or %FALSE on error.
         */
        check_buy_finish(result: Gio.AsyncResult): boolean;
        /**
         * Check if able to buy snaps.
         * @param cancellable a #GCancellable or %NULL.
         * @returns %TRUE if able to buy snaps or %FALSE on error.
         */
        check_buy_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously check for snaps providing the requested desktop themes.
         * See snapd_client_check_themes_sync() for more information.
         * @param gtk_theme_names a list of GTK theme names.
         * @param icon_theme_names a list of icon theme names.
         * @param sound_theme_names a list of sound theme names.
         * @param cancellable a #GCancellable or %NULL.
         */
        check_themes_async(
            gtk_theme_names?: string[] | null,
            icon_theme_names?: string[] | null,
            sound_theme_names?: string[] | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<
            [
                GLib.HashTable<string, ThemeStatus>,
                GLib.HashTable<string, ThemeStatus>,
                GLib.HashTable<string, ThemeStatus>,
            ]
        >;
        /**
         * Asynchronously check for snaps providing the requested desktop themes.
         * See snapd_client_check_themes_sync() for more information.
         * @param gtk_theme_names a list of GTK theme names.
         * @param icon_theme_names a list of icon theme names.
         * @param sound_theme_names a list of sound theme names.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        check_themes_async(
            gtk_theme_names: string[] | null,
            icon_theme_names: string[] | null,
            sound_theme_names: string[] | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously check for snaps providing the requested desktop themes.
         * See snapd_client_check_themes_sync() for more information.
         * @param gtk_theme_names a list of GTK theme names.
         * @param icon_theme_names a list of icon theme names.
         * @param sound_theme_names a list of sound theme names.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        check_themes_async(
            gtk_theme_names?: string[] | null,
            icon_theme_names?: string[] | null,
            sound_theme_names?: string[] | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<
            [
                GLib.HashTable<string, ThemeStatus>,
                GLib.HashTable<string, ThemeStatus>,
                GLib.HashTable<string, ThemeStatus>,
            ]
        > | void;
        /**
         * Complete request started with snapd_client_check_themes_async().
         * See snapd_client_check_themes_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns %TRUE on success.
         */
        check_themes_finish(
            result: Gio.AsyncResult,
        ): [
            boolean,
            GLib.HashTable<string, ThemeStatus>,
            GLib.HashTable<string, ThemeStatus>,
            GLib.HashTable<string, ThemeStatus>,
        ];
        /**
         * Check the status of snap packaged versions of named desktop
         * themes. For each theme, it will determine whether it is already
         * installed, uninstalled but available on the store, or unavailable.
         * @param gtk_theme_names a list of GTK theme names.
         * @param icon_theme_names a list of icon theme names.
         * @param sound_theme_names a list of sound theme names.
         * @param cancellable a #GCancellable or %NULL.
         */
        check_themes_sync(
            gtk_theme_names: string[] | null,
            icon_theme_names: string[] | null,
            sound_theme_names: string[] | null,
            cancellable?: Gio.Cancellable | null,
        ): [
            boolean,
            GLib.HashTable<string, ThemeStatus>,
            GLib.HashTable<string, ThemeStatus>,
            GLib.HashTable<string, ThemeStatus>,
        ];
        /**
         * This method is no longer required and does nothing, snapd-glib now connects on demand.
         * @param cancellable a #GCancellable or %NULL
         */
        connect_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * This method is no longer required and does nothing, snapd-glib now connects on demand.
         * @param cancellable a #GCancellable or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        connect_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * This method is no longer required and does nothing, snapd-glib now connects on demand.
         * @param cancellable a #GCancellable or %NULL
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        connect_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Complete request started with snapd_client_connect_async().
         * See snapd_client_connect_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns %TRUE if successfully connected to snapd.
         */
        connect_finish(result: Gio.AsyncResult): boolean;
        /**
         * Asynchronously connect two interfaces together.
         * See snapd_client_connect_interface_sync() for more information.
         * @param plug_snap name of snap containing plug.
         * @param plug_name name of plug to connect.
         * @param slot_snap name of snap containing socket.
         * @param slot_name name of slot to connect.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         */
        connect_interface_async(
            plug_snap: string,
            plug_name: string,
            slot_snap: string,
            slot_name: string,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
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
        connect_interface_async(
            plug_snap: string,
            plug_name: string,
            slot_snap: string,
            slot_name: string,
            progress_callback: ProgressCallback | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        connect_interface_async(
            plug_snap: string,
            plug_name: string,
            slot_snap: string,
            slot_name: string,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Complete request started with snapd_client_connect_interface_async().
         * See snapd_client_connect_interface_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns %TRUE on success or %FALSE on error.
         */
        connect_interface_finish(result: Gio.AsyncResult): boolean;
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
        connect_interface_sync(
            plug_snap: string,
            plug_name: string,
            slot_snap: string,
            slot_name: string,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * This method is no longer required and does nothing, snapd-glib now connects on demand.
         * @param cancellable a #GCancellable or %NULL
         * @returns %TRUE if successfully connected to snapd.
         */
        connect_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously create a local user account.
         * See snapd_client_create_user_sync() for more information.
         * @param email the email of the user to create.
         * @param flags a set of #SnapdCreateUserFlags to control how the user account is created.
         * @param cancellable a #GCancellable or %NULL.
         */
        create_user_async(
            email: string,
            flags: CreateUserFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<UserInformation>;
        /**
         * Asynchronously create a local user account.
         * See snapd_client_create_user_sync() for more information.
         * @param email the email of the user to create.
         * @param flags a set of #SnapdCreateUserFlags to control how the user account is created.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        create_user_async(
            email: string,
            flags: CreateUserFlags | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously create a local user account.
         * See snapd_client_create_user_sync() for more information.
         * @param email the email of the user to create.
         * @param flags a set of #SnapdCreateUserFlags to control how the user account is created.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        create_user_async(
            email: string,
            flags: CreateUserFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<UserInformation> | void;
        /**
         * Complete request started with snapd_client_create_user_async().
         * See snapd_client_create_user_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns a #SnapdUserInformation or %NULL on error.
         */
        create_user_finish(result: Gio.AsyncResult): UserInformation;
        /**
         * Create a local user account for the given user.
         * @param email the email of the user to create.
         * @param flags a set of #SnapdCreateUserFlags to control how the user account is created.
         * @param cancellable a #GCancellable or %NULL.
         * @returns a #SnapdUserInformation or %NULL on error.
         */
        create_user_sync(
            email: string,
            flags: CreateUserFlags | null,
            cancellable?: Gio.Cancellable | null,
        ): UserInformation;
        /**
         * Asynchronously create local user accounts using the system-user assertions that are valid for this device.
         * See snapd_client_create_users_sync() for more information.
         * @param cancellable a #GCancellable or %NULL.
         */
        create_users_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<UserInformation[]>;
        /**
         * Asynchronously create local user accounts using the system-user assertions that are valid for this device.
         * See snapd_client_create_users_sync() for more information.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        create_users_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously create local user accounts using the system-user assertions that are valid for this device.
         * See snapd_client_create_users_sync() for more information.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        create_users_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<UserInformation[]> | void;
        /**
         * Complete request started with snapd_client_create_users_async().
         * See snapd_client_create_users_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns an array of #SnapdUserInformation or %NULL on error.
         */
        create_users_finish(result: Gio.AsyncResult): UserInformation[];
        /**
         * Create local user accounts using the system-user assertions that are valid for this device.
         * @param cancellable a #GCancellable or %NULL.
         * @returns an array of #SnapdUserInformation or %NULL on error.
         */
        create_users_sync(cancellable?: Gio.Cancellable | null): UserInformation[];
        /**
         * Asynchronously change the state of aliases.
         * See snapd_client_disable_aliases_sync() for more information.
         * @param snap the name of the snap to modify.
         * @param aliases the aliases to modify.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         */
        disable_aliases_async(
            snap: string,
            aliases: string[],
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously change the state of aliases.
         * See snapd_client_disable_aliases_sync() for more information.
         * @param snap the name of the snap to modify.
         * @param aliases the aliases to modify.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        disable_aliases_async(
            snap: string,
            aliases: string[],
            progress_callback: ProgressCallback | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously change the state of aliases.
         * See snapd_client_disable_aliases_sync() for more information.
         * @param snap the name of the snap to modify.
         * @param aliases the aliases to modify.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        disable_aliases_async(
            snap: string,
            aliases: string[],
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Complete request started with snapd_client_disable_aliases_async().
         * See snapd_client_disable_aliases_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns %TRUE on success or %FALSE on error.
         */
        disable_aliases_finish(result: Gio.AsyncResult): boolean;
        /**
         * Change the state of aliases.
         * @param snap the name of the snap to modify.
         * @param aliases the aliases to modify.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @returns %TRUE on success or %FALSE on error.
         */
        disable_aliases_sync(
            snap: string,
            aliases: string[],
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously disable an installed snap.
         * See snapd_client_disable_sync() for more information.
         * @param name name of snap to disable.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         */
        disable_async(
            name: string,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously disable an installed snap.
         * See snapd_client_disable_sync() for more information.
         * @param name name of snap to disable.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        disable_async(
            name: string,
            progress_callback: ProgressCallback | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously disable an installed snap.
         * See snapd_client_disable_sync() for more information.
         * @param name name of snap to disable.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        disable_async(
            name: string,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Complete request started with snapd_client_disable_async().
         * See snapd_client_disable_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns %TRUE on success or %FALSE on error.
         */
        disable_finish(result: Gio.AsyncResult): boolean;
        /**
         * Disable an installed snap.
         * @param name name of snap to disable.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @returns %TRUE on success or %FALSE on error.
         */
        disable_sync(
            name: string,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously disconnect two interfaces.
         * See snapd_client_disconnect_interface_sync() for more information.
         * @param plug_snap name of snap containing plug.
         * @param plug_name name of plug to disconnect.
         * @param slot_snap name of snap containing socket.
         * @param slot_name name of slot to disconnect.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         */
        disconnect_interface_async(
            plug_snap: string,
            plug_name: string,
            slot_snap: string,
            slot_name: string,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
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
        disconnect_interface_async(
            plug_snap: string,
            plug_name: string,
            slot_snap: string,
            slot_name: string,
            progress_callback: ProgressCallback | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        disconnect_interface_async(
            plug_snap: string,
            plug_name: string,
            slot_snap: string,
            slot_name: string,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Complete request started with snapd_client_disconnect_interface_async().
         * See snapd_client_disconnect_interface_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns %TRUE on success or %FALSE on error.
         */
        disconnect_interface_finish(result: Gio.AsyncResult): boolean;
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
        disconnect_interface_sync(
            plug_snap: string,
            plug_name: string,
            slot_snap: string,
            slot_name: string,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously download a snap.
         * See snapd_client_download_sync() for more information.
         * @param name name of snap to download.
         * @param channel channel to download from.
         * @param revision revision to download.
         * @param cancellable a #GCancellable or %NULL.
         */
        download_async(
            name: string,
            channel?: string | null,
            revision?: string | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<GLib.Bytes>;
        /**
         * Asynchronously download a snap.
         * See snapd_client_download_sync() for more information.
         * @param name name of snap to download.
         * @param channel channel to download from.
         * @param revision revision to download.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        download_async(
            name: string,
            channel: string | null,
            revision: string | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously download a snap.
         * See snapd_client_download_sync() for more information.
         * @param name name of snap to download.
         * @param channel channel to download from.
         * @param revision revision to download.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        download_async(
            name: string,
            channel?: string | null,
            revision?: string | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<GLib.Bytes> | void;
        /**
         * Complete request started with snapd_client_download_async().
         * See snapd_client_download_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns the snap contents or %NULL on error.
         */
        download_finish(result: Gio.AsyncResult): GLib.Bytes;
        /**
         * Download the given snap.
         * @param name name of snap to download.
         * @param channel channel to download from.
         * @param revision revision to download.
         * @param cancellable a #GCancellable or %NULL.
         * @returns the snap contents or %NULL on error.
         */
        download_sync(
            name: string,
            channel?: string | null,
            revision?: string | null,
            cancellable?: Gio.Cancellable | null,
        ): GLib.Bytes;
        /**
         * Asynchronously change the state of aliases.
         * See snapd_client_enable_aliases_sync() for more information.
         * @param snap the name of the snap to modify.
         * @param aliases the aliases to modify.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         */
        enable_aliases_async(
            snap: string,
            aliases: string[],
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously change the state of aliases.
         * See snapd_client_enable_aliases_sync() for more information.
         * @param snap the name of the snap to modify.
         * @param aliases the aliases to modify.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        enable_aliases_async(
            snap: string,
            aliases: string[],
            progress_callback: ProgressCallback | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously change the state of aliases.
         * See snapd_client_enable_aliases_sync() for more information.
         * @param snap the name of the snap to modify.
         * @param aliases the aliases to modify.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        enable_aliases_async(
            snap: string,
            aliases: string[],
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Complete request started with snapd_client_enable_aliases_async().
         * See snapd_client_enable_aliases_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns %TRUE on success or %FALSE on error.
         */
        enable_aliases_finish(result: Gio.AsyncResult): boolean;
        /**
         * Change the state of aliases.
         * @param snap the name of the snap to modify.
         * @param aliases the aliases to modify.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @returns %TRUE on success or %FALSE on error.
         */
        enable_aliases_sync(
            snap: string,
            aliases: string[],
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously enable an installed snap.
         * See snapd_client_enable_sync() for more information.
         * @param name name of snap to enable.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         */
        enable_async(
            name: string,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously enable an installed snap.
         * See snapd_client_enable_sync() for more information.
         * @param name name of snap to enable.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        enable_async(
            name: string,
            progress_callback: ProgressCallback | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously enable an installed snap.
         * See snapd_client_enable_sync() for more information.
         * @param name name of snap to enable.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        enable_async(
            name: string,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Complete request started with snapd_client_enable_async().
         * See snapd_client_enable_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns %TRUE on success or %FALSE on error.
         */
        enable_finish(result: Gio.AsyncResult): boolean;
        /**
         * Enable an installed snap.
         * @param name name of snap to enable.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @returns %TRUE on success or %FALSE on error.
         */
        enable_sync(
            name: string,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously find snaps in the store.
         * See snapd_client_find_sync() for more information.
         * @param flags a set of #SnapdFindFlags to control how the find is performed.
         * @param query query string to send or %NULL to return featured snaps.
         * @param cancellable a #GCancellable or %NULL.
         */
        find_async(
            flags: FindFlags | null,
            query?: string | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[Snap[], string]>;
        /**
         * Asynchronously find snaps in the store.
         * See snapd_client_find_sync() for more information.
         * @param flags a set of #SnapdFindFlags to control how the find is performed.
         * @param query query string to send or %NULL to return featured snaps.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        find_async(
            flags: FindFlags | null,
            query: string | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously find snaps in the store.
         * See snapd_client_find_sync() for more information.
         * @param flags a set of #SnapdFindFlags to control how the find is performed.
         * @param query query string to send or %NULL to return featured snaps.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        find_async(
            flags: FindFlags | null,
            query?: string | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[Snap[], string]> | void;
        /**
         * Asynchronously find snaps in the store.
         * See snapd_client_find_category_sync() for more information.
         * @param flags a set of #SnapdFindFlags to control how the find is performed.
         * @param category store category to search in or %NULL to search in all categories.
         * @param query query string to send or %NULL to get all snaps from the given category.
         * @param cancellable a #GCancellable or %NULL.
         */
        find_category_async(
            flags: FindFlags | null,
            category?: string | null,
            query?: string | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[Snap[], string]>;
        /**
         * Asynchronously find snaps in the store.
         * See snapd_client_find_category_sync() for more information.
         * @param flags a set of #SnapdFindFlags to control how the find is performed.
         * @param category store category to search in or %NULL to search in all categories.
         * @param query query string to send or %NULL to get all snaps from the given category.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        find_category_async(
            flags: FindFlags | null,
            category: string | null,
            query: string | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously find snaps in the store.
         * See snapd_client_find_category_sync() for more information.
         * @param flags a set of #SnapdFindFlags to control how the find is performed.
         * @param category store category to search in or %NULL to search in all categories.
         * @param query query string to send or %NULL to get all snaps from the given category.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        find_category_async(
            flags: FindFlags | null,
            category?: string | null,
            query?: string | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[Snap[], string]> | void;
        /**
         * Complete request started with snapd_client_find_async().
         * See snapd_client_find_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns an array of #SnapdSnap or %NULL on error.
         */
        find_category_finish(result: Gio.AsyncResult): [Snap[], string];
        /**
         * Find snaps in the store.
         * @param flags a set of #SnapdFindFlags to control how the find is performed.
         * @param category store category to search in or %NULL to search in all categories.
         * @param query query string to send or %NULL to get all snaps from the given category.
         * @param cancellable a #GCancellable or %NULL.
         * @returns an array of #SnapdSnap or %NULL on error.
         */
        find_category_sync(
            flags: FindFlags | null,
            category: string | null,
            query: string | null,
            cancellable?: Gio.Cancellable | null,
        ): [Snap[], string];
        /**
         * Complete request started with snapd_client_find_async().
         * See snapd_client_find_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns an array of #SnapdSnap or %NULL on error.
         */
        find_finish(result: Gio.AsyncResult): [Snap[], string];
        /**
         * Asynchronously find snaps in store that are newer revisions than locally installed versions.
         * See snapd_client_find_refreshable_sync() for more information.
         * @param cancellable a #GCancellable or %NULL.
         */
        find_refreshable_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<Snap[]>;
        /**
         * Asynchronously find snaps in store that are newer revisions than locally installed versions.
         * See snapd_client_find_refreshable_sync() for more information.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        find_refreshable_async(
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously find snaps in store that are newer revisions than locally installed versions.
         * See snapd_client_find_refreshable_sync() for more information.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        find_refreshable_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Snap[]> | void;
        /**
         * Complete request started with snapd_client_find_refreshable_async().
         * See snapd_client_find_refreshable_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns an array of #SnapdSnap or %NULL on error.
         */
        find_refreshable_finish(result: Gio.AsyncResult): Snap[];
        /**
         * Find snaps in store that are newer revisions than locally installed versions.
         * @param cancellable a #GCancellable or %NULL.
         * @returns an array of #SnapdSnap or %NULL on error.
         */
        find_refreshable_sync(cancellable?: Gio.Cancellable | null): Snap[];
        /**
         * Asynchronously find snaps in the store.
         * See snapd_client_find_section_sync() for more information.
         * @param flags a set of #SnapdFindFlags to control how the find is performed.
         * @param section store section to search in or %NULL to search in all sections.
         * @param query query string to send or %NULL to get all snaps from the given section.
         * @param cancellable a #GCancellable or %NULL.
         */
        find_section_async(
            flags: FindFlags | null,
            section?: string | null,
            query?: string | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[Snap[], string]>;
        /**
         * Asynchronously find snaps in the store.
         * See snapd_client_find_section_sync() for more information.
         * @param flags a set of #SnapdFindFlags to control how the find is performed.
         * @param section store section to search in or %NULL to search in all sections.
         * @param query query string to send or %NULL to get all snaps from the given section.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        find_section_async(
            flags: FindFlags | null,
            section: string | null,
            query: string | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously find snaps in the store.
         * See snapd_client_find_section_sync() for more information.
         * @param flags a set of #SnapdFindFlags to control how the find is performed.
         * @param section store section to search in or %NULL to search in all sections.
         * @param query query string to send or %NULL to get all snaps from the given section.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        find_section_async(
            flags: FindFlags | null,
            section?: string | null,
            query?: string | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[Snap[], string]> | void;
        /**
         * Complete request started with snapd_client_find_async().
         * See snapd_client_find_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns an array of #SnapdSnap or %NULL on error.
         */
        find_section_finish(result: Gio.AsyncResult): [Snap[], string];
        /**
         * Find snaps in the store.
         * @param flags a set of #SnapdFindFlags to control how the find is performed.
         * @param section store section to search in or %NULL to search in all sections.
         * @param query query string to send or %NULL to get all snaps from the given section.
         * @param cancellable a #GCancellable or %NULL.
         * @returns an array of #SnapdSnap or %NULL on error.
         */
        find_section_sync(
            flags: FindFlags | null,
            section: string | null,
            query: string | null,
            cancellable?: Gio.Cancellable | null,
        ): [Snap[], string];
        /**
         * Find snaps in the store.
         * @param flags a set of #SnapdFindFlags to control how the find is performed.
         * @param query query string to send or %NULL to return featured snaps.
         * @param cancellable a #GCancellable or %NULL.
         * @returns an array of #SnapdSnap or %NULL on error.
         */
        find_sync(
            flags: FindFlags | null,
            query: string | null,
            cancellable?: Gio.Cancellable | null,
        ): [Snap[], string];
        /**
         * Follow logs for snap services. This call will only complete if snapd closes the connection and will
         * stop any other request on this client from being sent.
         * @param names a null-terminated array of service names or %NULL.
         * @param log_callback a #SnapdLogCallback to call when a log is received.
         * @param cancellable a #GCancellable or %NULL.
         */
        follow_logs_async(
            names: string[] | null,
            log_callback: LogCallback,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Follow logs for snap services. This call will only complete if snapd closes the connection and will
         * stop any other request on this client from being sent.
         * @param names a null-terminated array of service names or %NULL.
         * @param log_callback a #SnapdLogCallback to call when a log is received.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        follow_logs_async(
            names: string[] | null,
            log_callback: LogCallback,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Follow logs for snap services. This call will only complete if snapd closes the connection and will
         * stop any other request on this client from being sent.
         * @param names a null-terminated array of service names or %NULL.
         * @param log_callback a #SnapdLogCallback to call when a log is received.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        follow_logs_async(
            names: string[] | null,
            log_callback: LogCallback,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Complete request started with snapd_client_follow_logs_async().
         * See snapd_client_follow_logs_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns %TRUE on success.
         */
        follow_logs_finish(result: Gio.AsyncResult): boolean;
        /**
         * Follow logs for snap services. This call will only complete if snapd closes the connection and will
         * stop any other request on this client from being sent.
         * @param names a null-terminated array of service names or %NULL.
         * @param log_callback a #SnapdLogCallback to call when a log is received.
         * @param cancellable a #GCancellable or %NULL.
         * @returns %TRUE on success.
         */
        follow_logs_sync(
            names: string[] | null,
            log_callback: LogCallback,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously get the available aliases.
         * See snapd_client_get_aliases_sync() for more information.
         * @param cancellable a #GCancellable or %NULL.
         */
        get_aliases_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<Alias[]>;
        /**
         * Asynchronously get the available aliases.
         * See snapd_client_get_aliases_sync() for more information.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_aliases_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously get the available aliases.
         * See snapd_client_get_aliases_sync() for more information.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_aliases_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Alias[]> | void;
        /**
         * Complete request started with snapd_client_get_aliases_async().
         * See snapd_client_get_aliases_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns an array of #SnapdAlias or %NULL on error.
         */
        get_aliases_finish(result: Gio.AsyncResult): Alias[];
        /**
         * Get the available aliases.
         * @param cancellable a #GCancellable or %NULL.
         * @returns an array of #SnapdAlias or %NULL on error.
         */
        get_aliases_sync(cancellable?: Gio.Cancellable | null): Alias[];
        /**
         * Get whether snapd operations are allowed to interact with the user.
         * @returns %TRUE if interaction is allowed.
         */
        get_allow_interaction(): boolean;
        /**
         * Asynchronously get information on installed apps.
         * See snapd_client_get_apps2_sync() for more information.
         * @param flags a set of #SnapdGetAppsFlags to control what results are returned.
         * @param snaps A list of snap names to return results for. If %NULL or empty then apps for all installed snaps are returned.
         * @param cancellable a #GCancellable or %NULL.
         */
        get_apps2_async(
            flags: GetAppsFlags | null,
            snaps?: string[] | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<App[]>;
        /**
         * Asynchronously get information on installed apps.
         * See snapd_client_get_apps2_sync() for more information.
         * @param flags a set of #SnapdGetAppsFlags to control what results are returned.
         * @param snaps A list of snap names to return results for. If %NULL or empty then apps for all installed snaps are returned.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_apps2_async(
            flags: GetAppsFlags | null,
            snaps: string[] | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously get information on installed apps.
         * See snapd_client_get_apps2_sync() for more information.
         * @param flags a set of #SnapdGetAppsFlags to control what results are returned.
         * @param snaps A list of snap names to return results for. If %NULL or empty then apps for all installed snaps are returned.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_apps2_async(
            flags: GetAppsFlags | null,
            snaps?: string[] | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<App[]> | void;
        /**
         * Complete request started with snapd_client_get_apps2_async().
         * See snapd_client_get_apps2_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns an array of #SnapdApp or %NULL on error.
         */
        get_apps2_finish(result: Gio.AsyncResult): App[];
        /**
         * Get information on installed apps.
         * @param flags a set of #SnapdGetAppsFlags to control what results are returned.
         * @param snaps A list of snap names to return results for. If %NULL or empty then apps for all installed snaps are returned.
         * @param cancellable a #GCancellable or %NULL.
         * @returns an array of #SnapdApp or %NULL on error.
         */
        get_apps2_sync(
            flags: GetAppsFlags | null,
            snaps?: string[] | null,
            cancellable?: Gio.Cancellable | null,
        ): App[];
        /**
         * Asynchronously get information on installed apps.
         * See snapd_client_get_apps_sync() for more information.
         * @param flags a set of #SnapdGetAppsFlags to control what results are returned.
         * @param cancellable a #GCancellable or %NULL.
         */
        get_apps_async(flags: GetAppsFlags | null, cancellable?: Gio.Cancellable | null): globalThis.Promise<App[]>;
        /**
         * Asynchronously get information on installed apps.
         * See snapd_client_get_apps_sync() for more information.
         * @param flags a set of #SnapdGetAppsFlags to control what results are returned.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_apps_async(
            flags: GetAppsFlags | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously get information on installed apps.
         * See snapd_client_get_apps_sync() for more information.
         * @param flags a set of #SnapdGetAppsFlags to control what results are returned.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_apps_async(
            flags: GetAppsFlags | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<App[]> | void;
        /**
         * Complete request started with snapd_client_get_apps_async().
         * See snapd_client_get_apps_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns an array of #SnapdApp or %NULL on error.
         */
        get_apps_finish(result: Gio.AsyncResult): App[];
        /**
         * Get information on installed apps.
         * @param flags a set of #SnapdGetAppsFlags to control what results are returned.
         * @param cancellable a #GCancellable or %NULL.
         * @returns an array of #SnapdApp or %NULL on error.
         */
        get_apps_sync(flags: GetAppsFlags | null, cancellable?: Gio.Cancellable | null): App[];
        /**
         * Asynchronously get assertions.
         * See snapd_client_get_assertions_sync() for more information.
         * @param type assertion type to get.
         * @param cancellable a #GCancellable or %NULL.
         */
        get_assertions_async(type: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<string[]>;
        /**
         * Asynchronously get assertions.
         * See snapd_client_get_assertions_sync() for more information.
         * @param type assertion type to get.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_assertions_async(
            type: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously get assertions.
         * See snapd_client_get_assertions_sync() for more information.
         * @param type assertion type to get.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_assertions_async(
            type: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string[]> | void;
        /**
         * Complete request started with snapd_client_get_assertions_async().
         * See snapd_client_get_assertions_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns an array of assertions or %NULL on error.
         */
        get_assertions_finish(result: Gio.AsyncResult): string[];
        /**
         * Get assertions.
         * @param type assertion type to get.
         * @param cancellable a #GCancellable or %NULL.
         * @returns an array of assertions or %NULL on error.
         */
        get_assertions_sync(type: string, cancellable?: Gio.Cancellable | null): string[];
        /**
         * Get the authorization data that is used for requests.
         * @returns a #SnapdAuthData or %NULL.
         */
        get_auth_data(): AuthData | null;
        /**
         * Asynchronously get the store categories.
         * See snapd_client_get_categories_sync() for more information.
         * @param cancellable a #GCancellable or %NULL.
         */
        get_categories_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<CategoryDetails[]>;
        /**
         * Asynchronously get the store categories.
         * See snapd_client_get_categories_sync() for more information.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_categories_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously get the store categories.
         * See snapd_client_get_categories_sync() for more information.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_categories_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<CategoryDetails[]> | void;
        /**
         * Complete request started with snapd_client_get_categories_async().
         * See snapd_client_get_categories_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns an array of #SnapdCategoryDetails or %NULL on error.
         */
        get_categories_finish(result: Gio.AsyncResult): CategoryDetails[];
        /**
         * Get the store categories.
         * @param cancellable a #GCancellable or %NULL.
         * @returns an array of #SnapdCategoryDetails or %NULL on error.
         */
        get_categories_sync(cancellable?: Gio.Cancellable | null): CategoryDetails[];
        /**
         * Asynchronously get information on a change.
         * See snapd_client_get_change_sync() for more information.
         * @param id a change ID to get information on.
         * @param cancellable a #GCancellable or %NULL.
         */
        get_change_async(id: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<Change>;
        /**
         * Asynchronously get information on a change.
         * See snapd_client_get_change_sync() for more information.
         * @param id a change ID to get information on.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_change_async(
            id: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously get information on a change.
         * See snapd_client_get_change_sync() for more information.
         * @param id a change ID to get information on.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_change_async(
            id: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Change> | void;
        /**
         * Complete request started with snapd_client_get_change_async().
         * See snapd_client_get_change_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns a #SnapdChange or %NULL on error.
         */
        get_change_finish(result: Gio.AsyncResult): Change;
        /**
         * Get information on a change.
         * @param id a change ID to get information on.
         * @param cancellable a #GCancellable or %NULL.
         * @returns a #SnapdChange or %NULL on error.
         */
        get_change_sync(id: string, cancellable?: Gio.Cancellable | null): Change;
        /**
         * Asynchronously get changes that have occurred / are occurring on the snap daemon.
         * See snapd_client_get_changes_sync() for more information.
         * @param filter changes to filter on.
         * @param snap_name name of snap to filter on or %NULL for changes for any snap.
         * @param cancellable a #GCancellable or %NULL.
         */
        get_changes_async(
            filter: ChangeFilter | null,
            snap_name?: string | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<Change[]>;
        /**
         * Asynchronously get changes that have occurred / are occurring on the snap daemon.
         * See snapd_client_get_changes_sync() for more information.
         * @param filter changes to filter on.
         * @param snap_name name of snap to filter on or %NULL for changes for any snap.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_changes_async(
            filter: ChangeFilter | null,
            snap_name: string | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously get changes that have occurred / are occurring on the snap daemon.
         * See snapd_client_get_changes_sync() for more information.
         * @param filter changes to filter on.
         * @param snap_name name of snap to filter on or %NULL for changes for any snap.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_changes_async(
            filter: ChangeFilter | null,
            snap_name?: string | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Change[]> | void;
        /**
         * Complete request started with snapd_client_get_changes_async().
         * See snapd_client_get_changes_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns an array of #SnapdChange or %NULL on error.
         */
        get_changes_finish(result: Gio.AsyncResult): Change[];
        /**
         * Get changes that have occurred / are occurring on the snap daemon.
         * @param filter changes to filter on.
         * @param snap_name name of snap to filter on or %NULL for changes for any snap.
         * @param cancellable a #GCancellable or %NULL.
         * @returns an array of #SnapdChange or %NULL on error.
         */
        get_changes_sync(
            filter: ChangeFilter | null,
            snap_name?: string | null,
            cancellable?: Gio.Cancellable | null,
        ): Change[];
        /**
         * Asynchronously get the installed snap connections.
         * See snapd_client_get_connections_sync() for more information.
         * @param flags a set of #SnapdGetConnectionsFlags to control what results are returned.
         * @param snap the name of the snap to get connections for or %NULL for all snaps.
         * @param _interface the name of the interface to get connections for or %NULL for all interfaces.
         * @param cancellable a #GCancellable or %NULL.
         */
        get_connections2_async(
            flags: GetConnectionsFlags | null,
            snap?: string | null,
            _interface?: string | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[Connection[] | null, Connection[] | null, Plug[] | null, Slot[] | null]>;
        /**
         * Asynchronously get the installed snap connections.
         * See snapd_client_get_connections_sync() for more information.
         * @param flags a set of #SnapdGetConnectionsFlags to control what results are returned.
         * @param snap the name of the snap to get connections for or %NULL for all snaps.
         * @param _interface the name of the interface to get connections for or %NULL for all interfaces.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_connections2_async(
            flags: GetConnectionsFlags | null,
            snap: string | null,
            _interface: string | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously get the installed snap connections.
         * See snapd_client_get_connections_sync() for more information.
         * @param flags a set of #SnapdGetConnectionsFlags to control what results are returned.
         * @param snap the name of the snap to get connections for or %NULL for all snaps.
         * @param _interface the name of the interface to get connections for or %NULL for all interfaces.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_connections2_async(
            flags: GetConnectionsFlags | null,
            snap?: string | null,
            _interface?: string | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[Connection[] | null, Connection[] | null, Plug[] | null, Slot[] | null]> | void;
        /**
         * Complete request started with snapd_client_get_connections_async().
         * See snapd_client_get_connections_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns %TRUE on success or %FALSE on error.
         */
        get_connections2_finish(
            result: Gio.AsyncResult,
        ): [boolean, Connection[] | null, Connection[] | null, Plug[] | null, Slot[] | null];
        /**
         * Get the installed snap connections.
         * @param flags a set of #SnapdGetConnectionsFlags to control what results are returned.
         * @param snap the name of the snap to get connections for or %NULL for all snaps.
         * @param _interface the name of the interface to get connections for or %NULL for all interfaces.
         * @param cancellable a #GCancellable or %NULL.
         * @returns %TRUE on success or %FALSE on error.
         */
        get_connections2_sync(
            flags: GetConnectionsFlags | null,
            snap?: string | null,
            _interface?: string | null,
            cancellable?: Gio.Cancellable | null,
        ): [boolean, Connection[] | null, Connection[] | null, Plug[] | null, Slot[] | null];
        /**
         * Asynchronously get the installed snap connections.
         * See snapd_client_get_connections_sync() for more information.
         * @param cancellable a #GCancellable or %NULL.
         */
        get_connections_async(
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[Connection[] | null, Connection[] | null, Plug[] | null, Slot[] | null]>;
        /**
         * Asynchronously get the installed snap connections.
         * See snapd_client_get_connections_sync() for more information.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_connections_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously get the installed snap connections.
         * See snapd_client_get_connections_sync() for more information.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_connections_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[Connection[] | null, Connection[] | null, Plug[] | null, Slot[] | null]> | void;
        /**
         * Complete request started with snapd_client_get_connections_async().
         * See snapd_client_get_connections_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns %TRUE on success or %FALSE on error.
         */
        get_connections_finish(
            result: Gio.AsyncResult,
        ): [boolean, Connection[] | null, Connection[] | null, Plug[] | null, Slot[] | null];
        /**
         * Get the installed snap connections.
         * @param cancellable a #GCancellable or %NULL.
         * @returns %TRUE on success or %FALSE on error.
         */
        get_connections_sync(
            cancellable?: Gio.Cancellable | null,
        ): [boolean, Connection[] | null, Connection[] | null, Plug[] | null, Slot[] | null];
        /**
         * Asynchronously get the icon for an installed snap.
         * See snapd_client_get_icon_sync() for more information.
         * @param name name of snap to get icon for.
         * @param cancellable a #GCancellable or %NULL.
         */
        get_icon_async(name: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<Icon>;
        /**
         * Asynchronously get the icon for an installed snap.
         * See snapd_client_get_icon_sync() for more information.
         * @param name name of snap to get icon for.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_icon_async(
            name: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously get the icon for an installed snap.
         * See snapd_client_get_icon_sync() for more information.
         * @param name name of snap to get icon for.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_icon_async(
            name: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Icon> | void;
        /**
         * Complete request started with snapd_client_get_icon_async().
         * See snapd_client_get_icon_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns a #SnapdIcon or %NULL on error.
         */
        get_icon_finish(result: Gio.AsyncResult): Icon;
        /**
         * Get the icon for an installed snap.
         * @param name name of snap to get icon for.
         * @param cancellable a #GCancellable or %NULL.
         * @returns a #SnapdIcon or %NULL on error.
         */
        get_icon_sync(name: string, cancellable?: Gio.Cancellable | null): Icon;
        /**
         * Asynchronously get the installed snap interfaces.
         * See snapd_client_get_interfaces2_sync() for more information.
         * @param flags a set of #SnapdGetInterfacesFlags to control what information is returned about the interfaces.
         * @param names a null-terminated array of interface names or %NULL.
         * @param cancellable a #GCancellable or %NULL.
         */
        get_interfaces2_async(
            flags: GetInterfacesFlags | null,
            names?: string[] | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<Interface[]>;
        /**
         * Asynchronously get the installed snap interfaces.
         * See snapd_client_get_interfaces2_sync() for more information.
         * @param flags a set of #SnapdGetInterfacesFlags to control what information is returned about the interfaces.
         * @param names a null-terminated array of interface names or %NULL.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_interfaces2_async(
            flags: GetInterfacesFlags | null,
            names: string[] | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously get the installed snap interfaces.
         * See snapd_client_get_interfaces2_sync() for more information.
         * @param flags a set of #SnapdGetInterfacesFlags to control what information is returned about the interfaces.
         * @param names a null-terminated array of interface names or %NULL.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_interfaces2_async(
            flags: GetInterfacesFlags | null,
            names?: string[] | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Interface[]> | void;
        /**
         * Complete request started with snapd_client_get_interfaces2_async().
         * See snapd_client_get_interfaces2_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns an array of #SnapdInterface or %NULL on error.
         */
        get_interfaces2_finish(result: Gio.AsyncResult): Interface[];
        /**
         * Get information about the available snap interfaces.
         * @param flags a set of #SnapdGetInterfacesFlags to control what information is returned about the interfaces.
         * @param names a null-terminated array of interface names or %NULL.
         * @param cancellable a #GCancellable or %NULL.
         * @returns the available interfaces.
         */
        get_interfaces2_sync(
            flags: GetInterfacesFlags | null,
            names?: string[] | null,
            cancellable?: Gio.Cancellable | null,
        ): Interface[];
        /**
         * Asynchronously get the installed snap interfaces.
         * See snapd_client_get_interfaces_sync() for more information.
         * @param cancellable a #GCancellable or %NULL.
         */
        get_interfaces_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<[Plug[] | null, Slot[] | null]>;
        /**
         * Asynchronously get the installed snap interfaces.
         * See snapd_client_get_interfaces_sync() for more information.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_interfaces_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously get the installed snap interfaces.
         * See snapd_client_get_interfaces_sync() for more information.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_interfaces_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[Plug[] | null, Slot[] | null]> | void;
        /**
         * Complete request started with snapd_client_get_interfaces_async().
         * See snapd_client_get_interfaces_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns %TRUE on success or %FALSE on error.
         */
        get_interfaces_finish(result: Gio.AsyncResult): [boolean, Plug[] | null, Slot[] | null];
        /**
         * Get the installed snap interfaces.
         * @param cancellable a #GCancellable or %NULL.
         * @returns %TRUE on success or %FALSE on error.
         */
        get_interfaces_sync(cancellable?: Gio.Cancellable | null): [boolean, Plug[] | null, Slot[] | null];
        /**
         * Asynchronously get logs for snap services.
         * See snapd_client_get_logs_sync() for more information.
         * @param names a null-terminated array of service names or %NULL.
         * @param n the number of logs to return or 0 for default.
         * @param cancellable a #GCancellable or %NULL.
         */
        get_logs_async(
            names: string[] | null,
            n: number,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<Log[]>;
        /**
         * Asynchronously get logs for snap services.
         * See snapd_client_get_logs_sync() for more information.
         * @param names a null-terminated array of service names or %NULL.
         * @param n the number of logs to return or 0 for default.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_logs_async(
            names: string[] | null,
            n: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously get logs for snap services.
         * See snapd_client_get_logs_sync() for more information.
         * @param names a null-terminated array of service names or %NULL.
         * @param n the number of logs to return or 0 for default.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_logs_async(
            names: string[] | null,
            n: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Log[]> | void;
        /**
         * Complete request started with snapd_client_get_logs_async().
         * See snapd_client_get_logs_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns an array of #SnapdLog or %NULL on error.
         */
        get_logs_finish(result: Gio.AsyncResult): Log[];
        /**
         * Get logs for snap services.
         * @param names a null-terminated array of service names or %NULL.
         * @param n the number of logs to return or 0 for default.
         * @param cancellable a #GCancellable or %NULL.
         * @returns an array of #SnapdLog or %NULL on error.
         */
        get_logs_sync(names: string[] | null, n: number, cancellable?: Gio.Cancellable | null): Log[];
        /**
         * Get the maintenance information reported by snapd or %NULL if no maintenance is in progress.
         * This information is updated after every request.
         * @returns a #SnapdMaintenance or %NULL.
         */
        get_maintenance(): Maintenance | null;
        /**
         * Asynchronously get the store sections.
         * See snapd_client_get_sections_sync() for more information.
         * @param cancellable a #GCancellable or %NULL.
         */
        get_sections_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<string[]>;
        /**
         * Asynchronously get the store sections.
         * See snapd_client_get_sections_sync() for more information.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_sections_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously get the store sections.
         * See snapd_client_get_sections_sync() for more information.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_sections_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string[]> | void;
        /**
         * Complete request started with snapd_client_get_sections_async().
         * See snapd_client_get_sections_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns an array of section names or %NULL on error.
         */
        get_sections_finish(result: Gio.AsyncResult): string[];
        /**
         * Get the store sections.
         * @param cancellable a #GCancellable or %NULL.
         * @returns an array of section names or %NULL on error.
         */
        get_sections_sync(cancellable?: Gio.Cancellable | null): string[];
        /**
         * Asynchronously get information of a single installed snap.
         * See snapd_client_get_snap_sync() for more information.
         * @param name name of snap to get.
         * @param cancellable a #GCancellable or %NULL.
         */
        get_snap_async(name: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<Snap>;
        /**
         * Asynchronously get information of a single installed snap.
         * See snapd_client_get_snap_sync() for more information.
         * @param name name of snap to get.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_snap_async(
            name: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously get information of a single installed snap.
         * See snapd_client_get_snap_sync() for more information.
         * @param name name of snap to get.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_snap_async(
            name: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Snap> | void;
        /**
         * Asynchronously get configuration for a snap.
         * See snapd_client_get_snap_conf_sync() for more information.
         * @param name name of snap to get configuration from.
         * @param keys keys to returns or %NULL to return all.
         * @param cancellable a #GCancellable or %NULL.
         */
        get_snap_conf_async(
            name: string,
            keys?: string[] | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<GLib.HashTable<string, GLib.Variant>>;
        /**
         * Asynchronously get configuration for a snap.
         * See snapd_client_get_snap_conf_sync() for more information.
         * @param name name of snap to get configuration from.
         * @param keys keys to returns or %NULL to return all.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_snap_conf_async(
            name: string,
            keys: string[] | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously get configuration for a snap.
         * See snapd_client_get_snap_conf_sync() for more information.
         * @param name name of snap to get configuration from.
         * @param keys keys to returns or %NULL to return all.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_snap_conf_async(
            name: string,
            keys?: string[] | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<GLib.HashTable<string, GLib.Variant>> | void;
        /**
         * Complete request started with snapd_client_get_snap_conf_async().
         * See snapd_client_get_snap_conf_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns a table of configuration values or %NULL on error.
         */
        get_snap_conf_finish(result: Gio.AsyncResult): GLib.HashTable<string, GLib.Variant>;
        /**
         * Get configuration for a snap. System configuration is stored using the name "system".
         * @param name name of snap to get configuration from.
         * @param keys keys to returns or %NULL to return all.
         * @param cancellable a #GCancellable or %NULL.
         * @returns a table of configuration values or %NULL on error.
         */
        get_snap_conf_sync(
            name: string,
            keys?: string[] | null,
            cancellable?: Gio.Cancellable | null,
        ): GLib.HashTable<string, GLib.Variant>;
        /**
         * Complete request started with snapd_client_get_snap_async().
         * See snapd_client_get_snap_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns a #SnapdSnap or %NULL on error.
         */
        get_snap_finish(result: Gio.AsyncResult): Snap;
        /**
         * Get information of a single installed snap. If the snap does not exist an error occurs.
         * @param name name of snap to get.
         * @param cancellable a #GCancellable or %NULL.
         * @returns a #SnapdSnap or %NULL on error.
         */
        get_snap_sync(name: string, cancellable?: Gio.Cancellable | null): Snap;
        /**
         * Asynchronously get information on installed snaps.
         * See snapd_client_get_snaps_sync() for more information.
         * @param flags a set of #SnapdGetSnapsFlags to control what results are returned.
         * @param names A list of snap names to return results for. If %NULL or empty then all installed snaps are returned.
         * @param cancellable a #GCancellable or %NULL.
         */
        get_snaps_async(
            flags: GetSnapsFlags | null,
            names?: string[] | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<Snap[]>;
        /**
         * Asynchronously get information on installed snaps.
         * See snapd_client_get_snaps_sync() for more information.
         * @param flags a set of #SnapdGetSnapsFlags to control what results are returned.
         * @param names A list of snap names to return results for. If %NULL or empty then all installed snaps are returned.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_snaps_async(
            flags: GetSnapsFlags | null,
            names: string[] | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously get information on installed snaps.
         * See snapd_client_get_snaps_sync() for more information.
         * @param flags a set of #SnapdGetSnapsFlags to control what results are returned.
         * @param names A list of snap names to return results for. If %NULL or empty then all installed snaps are returned.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_snaps_async(
            flags: GetSnapsFlags | null,
            names?: string[] | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Snap[]> | void;
        /**
         * Complete request started with snapd_client_get_snaps_async().
         * See snapd_client_get_snaps_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns an array of #SnapdSnap or %NULL on error.
         */
        get_snaps_finish(result: Gio.AsyncResult): Snap[];
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
        get_snaps_sync(
            flags: GetSnapsFlags | null,
            names?: string[] | null,
            cancellable?: Gio.Cancellable | null,
        ): Snap[];
        /**
         * Get the unix socket path to connect to snapd with.
         * @returns socket path.
         */
        get_socket_path(): string;
        /**
         * Request system information asynchronously from snapd.
         * See snapd_client_get_system_information_sync() for more information.
         * @param cancellable a #GCancellable or %NULL.
         */
        get_system_information_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<SystemInformation>;
        /**
         * Request system information asynchronously from snapd.
         * See snapd_client_get_system_information_sync() for more information.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_system_information_async(
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Request system information asynchronously from snapd.
         * See snapd_client_get_system_information_sync() for more information.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_system_information_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<SystemInformation> | void;
        /**
         * Complete request started with snapd_client_get_system_information_async().
         * See snapd_client_get_system_information_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns a #SnapdSystemInformation or %NULL on error.
         */
        get_system_information_finish(result: Gio.AsyncResult): SystemInformation;
        /**
         * Request system information from snapd.
         * While this blocks, snapd is expected to return the information quickly.
         * @param cancellable a #GCancellable or %NULL.
         * @returns a #SnapdSystemInformation or %NULL on error.
         */
        get_system_information_sync(cancellable?: Gio.Cancellable | null): SystemInformation;
        /**
         * Get the HTTP user-agent that is sent with each request to snapd.
         * @returns user agent or %NULL if none set.
         */
        get_user_agent(): string | null;
        /**
         * Asynchronously get user accounts that are valid for this device.
         * See snapd_client_get_users_sync() for more information.
         * @param cancellable a #GCancellable or %NULL.
         */
        get_users_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<UserInformation[]>;
        /**
         * Asynchronously get user accounts that are valid for this device.
         * See snapd_client_get_users_sync() for more information.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_users_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously get user accounts that are valid for this device.
         * See snapd_client_get_users_sync() for more information.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        get_users_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<UserInformation[]> | void;
        /**
         * Complete request started with snapd_client_get_users_async().
         * See snapd_client_get_users_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns an array of #SnapdUserInformation or %NULL on error.
         */
        get_users_finish(result: Gio.AsyncResult): UserInformation[];
        /**
         * Get user accounts that are valid for this device.
         * @param cancellable a #GCancellable or %NULL.
         * @returns an array of #SnapdUserInformation or %NULL on error.
         */
        get_users_sync(cancellable?: Gio.Cancellable | null): UserInformation[];
        /**
         * Asynchronously install a snap from the store.
         * See snapd_client_install2_sync() for more information.
         * @param flags a set of #SnapdInstallFlags to control install options.
         * @param name name of snap to install.
         * @param channel channel to install from or %NULL for default.
         * @param revision revision to install or %NULL for default.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         */
        install2_async(
            flags: InstallFlags | null,
            name: string,
            channel?: string | null,
            revision?: string | null,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
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
        install2_async(
            flags: InstallFlags | null,
            name: string,
            channel: string | null,
            revision: string | null,
            progress_callback: ProgressCallback | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        install2_async(
            flags: InstallFlags | null,
            name: string,
            channel?: string | null,
            revision?: string | null,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Complete request started with snapd_client_install2_async().
         * See snapd_client_install2_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns %TRUE on success or %FALSE on error.
         */
        install2_finish(result: Gio.AsyncResult): boolean;
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
        install2_sync(
            flags: InstallFlags | null,
            name: string,
            channel?: string | null,
            revision?: string | null,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously install a snap from the store.
         * See snapd_client_install_sync() for more information.
         * @param name name of snap to install.
         * @param channel channel to install from or %NULL for default.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         */
        install_async(
            name: string,
            channel?: string | null,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously install a snap from the store.
         * See snapd_client_install_sync() for more information.
         * @param name name of snap to install.
         * @param channel channel to install from or %NULL for default.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        install_async(
            name: string,
            channel: string | null,
            progress_callback: ProgressCallback | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously install a snap from the store.
         * See snapd_client_install_sync() for more information.
         * @param name name of snap to install.
         * @param channel channel to install from or %NULL for default.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        install_async(
            name: string,
            channel?: string | null,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Complete request started with snapd_client_install_async().
         * See snapd_client_install_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns %TRUE on success or %FALSE on error.
         */
        install_finish(result: Gio.AsyncResult): boolean;
        /**
         * Asynchronously install a snap.
         * See snapd_client_install_stream_sync() for more information.
         * @param flags a set of #SnapdInstallFlags to control install options.
         * @param stream a #GInputStream containing the snap file contents to install.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         */
        install_stream_async(
            flags: InstallFlags | null,
            stream: Gio.InputStream,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously install a snap.
         * See snapd_client_install_stream_sync() for more information.
         * @param flags a set of #SnapdInstallFlags to control install options.
         * @param stream a #GInputStream containing the snap file contents to install.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        install_stream_async(
            flags: InstallFlags | null,
            stream: Gio.InputStream,
            progress_callback: ProgressCallback | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously install a snap.
         * See snapd_client_install_stream_sync() for more information.
         * @param flags a set of #SnapdInstallFlags to control install options.
         * @param stream a #GInputStream containing the snap file contents to install.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        install_stream_async(
            flags: InstallFlags | null,
            stream: Gio.InputStream,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Complete request started with snapd_client_install_stream_async().
         * See snapd_client_install_stream_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns %TRUE on success or %FALSE on error.
         */
        install_stream_finish(result: Gio.AsyncResult): boolean;
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
        install_stream_sync(
            flags: InstallFlags | null,
            stream: Gio.InputStream,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Install a snap from the store.
         * @param name name of snap to install.
         * @param channel channel to install from or %NULL for default.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @returns %TRUE on success or %FALSE on error.
         */
        install_sync(
            name: string,
            channel?: string | null,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously install snaps that provide the requested desktop themes.
         * See snapd_client_install_themes_sync() for more information.
         * @param gtk_theme_names a list of GTK theme names.
         * @param icon_theme_names a list of icon theme names.
         * @param sound_theme_names a list of sound theme names.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         */
        install_themes_async(
            gtk_theme_names?: string[] | null,
            icon_theme_names?: string[] | null,
            sound_theme_names?: string[] | null,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously install snaps that provide the requested desktop themes.
         * See snapd_client_install_themes_sync() for more information.
         * @param gtk_theme_names a list of GTK theme names.
         * @param icon_theme_names a list of icon theme names.
         * @param sound_theme_names a list of sound theme names.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        install_themes_async(
            gtk_theme_names: string[] | null,
            icon_theme_names: string[] | null,
            sound_theme_names: string[] | null,
            progress_callback: ProgressCallback | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously install snaps that provide the requested desktop themes.
         * See snapd_client_install_themes_sync() for more information.
         * @param gtk_theme_names a list of GTK theme names.
         * @param icon_theme_names a list of icon theme names.
         * @param sound_theme_names a list of sound theme names.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        install_themes_async(
            gtk_theme_names?: string[] | null,
            icon_theme_names?: string[] | null,
            sound_theme_names?: string[] | null,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Complete request started with snapd_client_install_themes_async().
         * See snapd_client_install_themes_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns %TRUE on success.
         */
        install_themes_finish(result: Gio.AsyncResult): boolean;
        /**
         * Install snaps that provide the named desktop themes. If all the
         * named themes are in the "installed" or "unavailable" states, then
         * an error will be returned.
         * @param gtk_theme_names a list of GTK theme names.
         * @param icon_theme_names a list of icon theme names.
         * @param sound_theme_names a list of sound theme names.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         */
        install_themes_sync(
            gtk_theme_names?: string[] | null,
            icon_theme_names?: string[] | null,
            sound_theme_names?: string[] | null,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously get information on all installed snaps.
         * See snapd_client_list_sync() for more information.
         * @param cancellable a #GCancellable or %NULL.
         */
        list_async(cancellable?: Gio.Cancellable | null): globalThis.Promise<Snap[]>;
        /**
         * Asynchronously get information on all installed snaps.
         * See snapd_client_list_sync() for more information.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        list_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
        /**
         * Asynchronously get information on all installed snaps.
         * See snapd_client_list_sync() for more information.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        list_async(
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Snap[]> | void;
        /**
         * Complete request started with snapd_client_list_async().
         * See snapd_client_list_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns an array of #SnapdSnap or %NULL on error.
         */
        list_finish(result: Gio.AsyncResult): Snap[];
        /**
         * Asynchronously get information of a single installed snap.
         * See snapd_client_list_one_sync() for more information.
         * @param name name of snap to get.
         * @param cancellable a #GCancellable or %NULL.
         */
        list_one_async(name: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<Snap>;
        /**
         * Asynchronously get information of a single installed snap.
         * See snapd_client_list_one_sync() for more information.
         * @param name name of snap to get.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        list_one_async(
            name: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously get information of a single installed snap.
         * See snapd_client_list_one_sync() for more information.
         * @param name name of snap to get.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        list_one_async(
            name: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Snap> | void;
        /**
         * Complete request started with snapd_client_list_one_async().
         * See snapd_client_list_one_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns a #SnapdSnap or %NULL on error.
         */
        list_one_finish(result: Gio.AsyncResult): Snap;
        /**
         * Get information of a single installed snap.
         * @param name name of snap to get.
         * @param cancellable a #GCancellable or %NULL.
         * @returns a #SnapdSnap or %NULL on error.
         */
        list_one_sync(name: string, cancellable?: Gio.Cancellable | null): Snap;
        /**
         * Get information on all installed snaps.
         * @param cancellable a #GCancellable or %NULL.
         * @returns an array of #SnapdSnap or %NULL on error.
         */
        list_sync(cancellable?: Gio.Cancellable | null): Snap[];
        /**
         * Asynchronously get authorization to install/remove snaps.
         * See snapd_client_login2_sync() for more information.
         * @param email email address to log in with.
         * @param password password to log in with.
         * @param otp response to one-time password challenge.
         * @param cancellable a #GCancellable or %NULL.
         */
        login2_async(
            email: string,
            password: string,
            otp?: string | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<UserInformation>;
        /**
         * Asynchronously get authorization to install/remove snaps.
         * See snapd_client_login2_sync() for more information.
         * @param email email address to log in with.
         * @param password password to log in with.
         * @param otp response to one-time password challenge.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        login2_async(
            email: string,
            password: string,
            otp: string | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously get authorization to install/remove snaps.
         * See snapd_client_login2_sync() for more information.
         * @param email email address to log in with.
         * @param password password to log in with.
         * @param otp response to one-time password challenge.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        login2_async(
            email: string,
            password: string,
            otp?: string | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<UserInformation> | void;
        /**
         * Complete request started with snapd_client_login2_async().
         * See snapd_client_login2_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns a #SnapdUserInformation or %NULL on error.
         */
        login2_finish(result: Gio.AsyncResult): UserInformation;
        /**
         * Log in to snapd and get authorization to install/remove snaps.
         * @param email email address to log in with.
         * @param password password to log in with.
         * @param otp response to one-time password challenge.
         * @param cancellable a #GCancellable or %NULL.
         * @returns a #SnapdUserInformation or %NULL on error.
         */
        login2_sync(
            email: string,
            password: string,
            otp?: string | null,
            cancellable?: Gio.Cancellable | null,
        ): UserInformation;
        /**
         * Asynchronously get authorization to install/remove snaps.
         * See snapd_client_login_sync() for more information.
         * @param email email address to log in with.
         * @param password password to log in with.
         * @param otp response to one-time password challenge.
         * @param cancellable a #GCancellable or %NULL.
         */
        login_async(
            email: string,
            password: string,
            otp?: string | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<AuthData>;
        /**
         * Asynchronously get authorization to install/remove snaps.
         * See snapd_client_login_sync() for more information.
         * @param email email address to log in with.
         * @param password password to log in with.
         * @param otp response to one-time password challenge.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        login_async(
            email: string,
            password: string,
            otp: string | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously get authorization to install/remove snaps.
         * See snapd_client_login_sync() for more information.
         * @param email email address to log in with.
         * @param password password to log in with.
         * @param otp response to one-time password challenge.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        login_async(
            email: string,
            password: string,
            otp?: string | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<AuthData> | void;
        /**
         * Complete request started with snapd_client_login_async().
         * See snapd_client_login_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns a #SnapdAuthData or %NULL on error.
         */
        login_finish(result: Gio.AsyncResult): AuthData;
        /**
         * Log in to snapd and get authorization to install/remove snaps.
         * @param email email address to log in with.
         * @param password password to log in with.
         * @param otp response to one-time password challenge.
         * @param cancellable a #GCancellable or %NULL.
         * @returns a #SnapdAuthData or %NULL on error.
         */
        login_sync(
            email: string,
            password: string,
            otp?: string | null,
            cancellable?: Gio.Cancellable | null,
        ): AuthData;
        /**
         * Asynchronously log out from the snap store.
         * See snapd_client_logout_sync() for more information.
         * @param id login ID to use.
         * @param cancellable a #GCancellable or %NULL.
         */
        logout_async(id: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<boolean>;
        /**
         * Asynchronously log out from the snap store.
         * See snapd_client_logout_sync() for more information.
         * @param id login ID to use.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        logout_async(
            id: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously log out from the snap store.
         * See snapd_client_logout_sync() for more information.
         * @param id login ID to use.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        logout_async(
            id: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Complete request started with snapd_client_logout_async().
         * See snapd_client_logout_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns %TRUE on success or %FALSE on error.
         */
        logout_finish(result: Gio.AsyncResult): boolean;
        /**
         * Log out from snapd.
         * @param id login ID to use.
         * @param cancellable a #GCancellable or %NULL.
         * @returns %TRUE on success or %FALSE on error.
         */
        logout_sync(id: number, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Asynchronously ???.
         * See snapd_client_prefer_sync() for more information.
         * @param snap the name of the snap to modify.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         */
        prefer_async(
            snap: string,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously ???.
         * See snapd_client_prefer_sync() for more information.
         * @param snap the name of the snap to modify.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        prefer_async(
            snap: string,
            progress_callback: ProgressCallback | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously ???.
         * See snapd_client_prefer_sync() for more information.
         * @param snap the name of the snap to modify.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        prefer_async(
            snap: string,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Complete request started with snapd_client_prefer_async().
         * See snapd_client_prefer_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns %TRUE on success or %FALSE on error.
         */
        prefer_finish(result: Gio.AsyncResult): boolean;
        /**
         * ???
         * @param snap the name of the snap to modify.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         */
        prefer_sync(
            snap: string,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously ensure all snaps are updated to their latest versions.
         * See snapd_client_refresh_all_sync() for more information.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         */
        refresh_all_async(
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<string[]>;
        /**
         * Asynchronously ensure all snaps are updated to their latest versions.
         * See snapd_client_refresh_all_sync() for more information.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        refresh_all_async(
            progress_callback: ProgressCallback | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously ensure all snaps are updated to their latest versions.
         * See snapd_client_refresh_all_sync() for more information.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        refresh_all_async(
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<string[]> | void;
        /**
         * Complete request started with snapd_client_refresh_all_async().
         * See snapd_client_refresh_all_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns a %NULL-terminated array of the snap names refreshed or %NULL on error.
         */
        refresh_all_finish(result: Gio.AsyncResult): string[];
        /**
         * Update all installed snaps to their latest version.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @returns a %NULL-terminated array of the snap names refreshed or %NULL on error.
         */
        refresh_all_sync(progress_callback?: ProgressCallback | null, cancellable?: Gio.Cancellable | null): string[];
        /**
         * Asynchronously ensure an installed snap is at the latest version.
         * See snapd_client_refresh_sync() for more information.
         * @param name name of snap to refresh.
         * @param channel channel to refresh from or %NULL for default.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         */
        refresh_async(
            name: string,
            channel?: string | null,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously ensure an installed snap is at the latest version.
         * See snapd_client_refresh_sync() for more information.
         * @param name name of snap to refresh.
         * @param channel channel to refresh from or %NULL for default.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        refresh_async(
            name: string,
            channel: string | null,
            progress_callback: ProgressCallback | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously ensure an installed snap is at the latest version.
         * See snapd_client_refresh_sync() for more information.
         * @param name name of snap to refresh.
         * @param channel channel to refresh from or %NULL for default.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        refresh_async(
            name: string,
            channel?: string | null,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Complete request started with snapd_client_refresh_async().
         * See snapd_client_refresh_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns %TRUE on success or %FALSE on error.
         */
        refresh_finish(result: Gio.AsyncResult): boolean;
        /**
         * Ensure an installed snap is at the latest version.
         * @param name name of snap to refresh.
         * @param channel channel to refresh from or %NULL for default.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @returns %TRUE on success or %FALSE on error.
         */
        refresh_sync(
            name: string,
            channel?: string | null,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously uninstall a snap.
         * See snapd_client_remove2_sync() for more information.
         * @param flags a set of #SnapdRemoveFlags to control remove options.
         * @param name name of snap to remove.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         */
        remove2_async(
            flags: RemoveFlags | null,
            name: string,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously uninstall a snap.
         * See snapd_client_remove2_sync() for more information.
         * @param flags a set of #SnapdRemoveFlags to control remove options.
         * @param name name of snap to remove.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        remove2_async(
            flags: RemoveFlags | null,
            name: string,
            progress_callback: ProgressCallback | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously uninstall a snap.
         * See snapd_client_remove2_sync() for more information.
         * @param flags a set of #SnapdRemoveFlags to control remove options.
         * @param name name of snap to remove.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        remove2_async(
            flags: RemoveFlags | null,
            name: string,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Complete request started with snapd_client_remove2_async().
         * See snapd_client_remove2_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns %TRUE on success or %FALSE on error.
         */
        remove2_finish(result: Gio.AsyncResult): boolean;
        /**
         * Uninstall a snap.
         * @param flags a set of #SnapdRemoveFlags to control remove options.
         * @param name name of snap to remove.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @returns %TRUE on success or %FALSE on error.
         */
        remove2_sync(
            flags: RemoveFlags | null,
            name: string,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously uninstall a snap.
         * See snapd_client_remove_sync() for more information.
         * @param name name of snap to remove.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         */
        remove_async(
            name: string,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously uninstall a snap.
         * See snapd_client_remove_sync() for more information.
         * @param name name of snap to remove.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        remove_async(
            name: string,
            progress_callback: ProgressCallback | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously uninstall a snap.
         * See snapd_client_remove_sync() for more information.
         * @param name name of snap to remove.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        remove_async(
            name: string,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Complete request started with snapd_client_remove_async().
         * See snapd_client_remove_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns %TRUE on success or %FALSE on error.
         */
        remove_finish(result: Gio.AsyncResult): boolean;
        /**
         * Uninstall a snap.
         * @param name name of snap to remove.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @returns %TRUE on success or %FALSE on error.
         */
        remove_sync(
            name: string,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously change the state of aliases.
         * See snapd_client_reset_aliases_sync() for more information.
         * @param snap the name of the snap to modify.
         * @param aliases the aliases to modify.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         */
        reset_aliases_async(
            snap: string,
            aliases: string[],
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously change the state of aliases.
         * See snapd_client_reset_aliases_sync() for more information.
         * @param snap the name of the snap to modify.
         * @param aliases the aliases to modify.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        reset_aliases_async(
            snap: string,
            aliases: string[],
            progress_callback: ProgressCallback | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously change the state of aliases.
         * See snapd_client_reset_aliases_sync() for more information.
         * @param snap the name of the snap to modify.
         * @param aliases the aliases to modify.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        reset_aliases_async(
            snap: string,
            aliases: string[],
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Complete request started with snapd_client_reset_aliases_async().
         * See snapd_client_reset_aliases_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns %TRUE on success or %FALSE on error.
         */
        reset_aliases_finish(result: Gio.AsyncResult): boolean;
        /**
         * Change the state of aliases.
         * @param snap the name of the snap to modify.
         * @param aliases the aliases to modify.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @returns %TRUE on success or %FALSE on error.
         */
        reset_aliases_sync(
            snap: string,
            aliases: string[],
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously run a snapctl command.
         * See snapd_client_run_snapctl_sync() for more information.
         * @param context_id context for this call.
         * @param args the arguments to pass to snapctl.
         * @param cancellable a #GCancellable or %NULL.
         */
        run_snapctl2_async(
            context_id: string,
            args: string[],
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[string, string, number]>;
        /**
         * Asynchronously run a snapctl command.
         * See snapd_client_run_snapctl_sync() for more information.
         * @param context_id context for this call.
         * @param args the arguments to pass to snapctl.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        run_snapctl2_async(
            context_id: string,
            args: string[],
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously run a snapctl command.
         * See snapd_client_run_snapctl_sync() for more information.
         * @param context_id context for this call.
         * @param args the arguments to pass to snapctl.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        run_snapctl2_async(
            context_id: string,
            args: string[],
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[string, string, number]> | void;
        /**
         * Complete request started with snapd_client_run_snapctl2_async().
         * See snapd_client_run_snapctl2_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns %TRUE on success or %FALSE on error.
         */
        run_snapctl2_finish(result: Gio.AsyncResult): [boolean, string, string, number];
        /**
         * Run a snapctl command.
         * @param context_id context for this call.
         * @param args the arguments to pass to snapctl.
         * @param cancellable a #GCancellable or %NULL.
         * @returns %TRUE on success or %FALSE on error.
         */
        run_snapctl2_sync(
            context_id: string,
            args: string[],
            cancellable?: Gio.Cancellable | null,
        ): [boolean, string, string, number];
        /**
         * Asynchronously run a snapctl command.
         * See snapd_client_run_snapctl_sync() for more information.
         * @param context_id context for this call.
         * @param args the arguments to pass to snapctl.
         * @param cancellable a #GCancellable or %NULL.
         */
        run_snapctl_async(
            context_id: string,
            args: string[],
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<[string, string]>;
        /**
         * Asynchronously run a snapctl command.
         * See snapd_client_run_snapctl_sync() for more information.
         * @param context_id context for this call.
         * @param args the arguments to pass to snapctl.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        run_snapctl_async(
            context_id: string,
            args: string[],
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously run a snapctl command.
         * See snapd_client_run_snapctl_sync() for more information.
         * @param context_id context for this call.
         * @param args the arguments to pass to snapctl.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        run_snapctl_async(
            context_id: string,
            args: string[],
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[string, string]> | void;
        /**
         * Complete request started with snapd_client_run_snapctl_async().
         * See snapd_client_run_snapctl_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns %TRUE on success or %FALSE on error.
         */
        run_snapctl_finish(result: Gio.AsyncResult): [boolean, string, string];
        /**
         * Run a snapctl command.
         * @param context_id context for this call.
         * @param args the arguments to pass to snapctl.
         * @param cancellable a #GCancellable or %NULL.
         * @returns %TRUE on success or %FALSE on error.
         */
        run_snapctl_sync(
            context_id: string,
            args: string[],
            cancellable?: Gio.Cancellable | null,
        ): [boolean, string, string];
        /**
         * Set whether snapd operations are allowed to interact with the user.
         * This affects operations that use polkit authorisation.
         * Defaults to TRUE.
         * @param allow_interaction whether to allow interaction.
         */
        set_allow_interaction(allow_interaction: boolean): void;
        /**
         * Set the authorization data to use for requests. Authorization data can be
         * obtained by:
         *
         * - Logging into snapd using snapd_client_login_sync()
         *
         * - Using an existing authorization with snapd_auth_data_new().
         * @param auth_data a #SnapdAuthData or %NULL.
         */
        set_auth_data(auth_data?: AuthData | null): void;
        /**
         * Asynchronously set configuration for a snap.
         * See snapd_client_set_snap_conf_sync() for more information.
         * @param name name of snap to set configuration for.
         * @param key_values Keys to set.
         * @param cancellable a #GCancellable or %NULL.
         */
        set_snap_conf_async(
            name: string,
            key_values: { [key: string]: any } | GLib.HashTable<string, GLib.Variant>,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously set configuration for a snap.
         * See snapd_client_set_snap_conf_sync() for more information.
         * @param name name of snap to set configuration for.
         * @param key_values Keys to set.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        set_snap_conf_async(
            name: string,
            key_values: { [key: string]: any } | GLib.HashTable<string, GLib.Variant>,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously set configuration for a snap.
         * See snapd_client_set_snap_conf_sync() for more information.
         * @param name name of snap to set configuration for.
         * @param key_values Keys to set.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        set_snap_conf_async(
            name: string,
            key_values: { [key: string]: any } | GLib.HashTable<string, GLib.Variant>,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Complete request started with snapd_client_set_snap_conf_async().
         * See snapd_client_set_snap_conf_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns %TRUE if configuration successfully applied.
         */
        set_snap_conf_finish(result: Gio.AsyncResult): boolean;
        /**
         * Set configuration for a snap. System configuration is stored using the name "system".
         * @param name name of snap to set configuration for.
         * @param key_values Keys to set.
         * @param cancellable a #GCancellable or %NULL.
         * @returns %TRUE if configuration successfully applied.
         */
        set_snap_conf_sync(
            name: string,
            key_values: { [key: string]: any } | GLib.HashTable<string, GLib.Variant>,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Set the Unix socket path to connect to snapd with.
         * Defaults to the system socket.
         * @param socket_path a socket path or %NULL to reset to the default.
         */
        set_socket_path(socket_path?: string | null): void;
        /**
         * Set the HTTP user-agent that is sent with each request to snapd.
         * Defaults to "snapd-glib/VERSION".
         * @param user_agent a user agent or %NULL.
         */
        set_user_agent(user_agent?: string | null): void;
        /**
         * Asynchronously set the tracking channel on an installed snap.
         * See snapd_client_switch_sync() for more information.
         * @param name name of snap to switch channel.
         * @param channel channel to track.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         */
        switch_async(
            name: string,
            channel: string,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously set the tracking channel on an installed snap.
         * See snapd_client_switch_sync() for more information.
         * @param name name of snap to switch channel.
         * @param channel channel to track.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        switch_async(
            name: string,
            channel: string,
            progress_callback: ProgressCallback | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously set the tracking channel on an installed snap.
         * See snapd_client_switch_sync() for more information.
         * @param name name of snap to switch channel.
         * @param channel channel to track.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        switch_async(
            name: string,
            channel: string,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Complete request started with snapd_client_switch_async().
         * See snapd_client_switch_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns %TRUE on success or %FALSE on error.
         */
        switch_finish(result: Gio.AsyncResult): boolean;
        /**
         * Set the tracking channel on an installed snap.
         * @param name name of snap to switch channel.
         * @param channel channel to track.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @returns %TRUE on success or %FALSE on error.
         */
        switch_sync(
            name: string,
            channel: string,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously try a snap.
         * See snapd_client_try_sync() for more information.
         * @param path path to snap directory to try.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         */
        try_async(
            path: string,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously try a snap.
         * See snapd_client_try_sync() for more information.
         * @param path path to snap directory to try.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        try_async(
            path: string,
            progress_callback: ProgressCallback | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously try a snap.
         * See snapd_client_try_sync() for more information.
         * @param path path to snap directory to try.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        try_async(
            path: string,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Complete request started with snapd_client_try_async().
         * See snapd_client_try_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns %TRUE on success or %FALSE on error.
         */
        try_finish(result: Gio.AsyncResult): boolean;
        /**
         * Try a snap.
         * @param path path to snap directory to try.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @returns %TRUE on success or %FALSE on error.
         */
        try_sync(
            path: string,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Asynchronously remove an alias from an app.
         * See snapd_client_unalias_sync() for more information.
         * @param snap the name of the snap to modify or %NULL.
         * @param alias the name of the alias to remove or %NULL to remove all aliases for the given snap.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         */
        unalias_async(
            snap?: string | null,
            alias?: string | null,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
        /**
         * Asynchronously remove an alias from an app.
         * See snapd_client_unalias_sync() for more information.
         * @param snap the name of the snap to modify or %NULL.
         * @param alias the name of the alias to remove or %NULL to remove all aliases for the given snap.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        unalias_async(
            snap: string | null,
            alias: string | null,
            progress_callback: ProgressCallback | null,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Asynchronously remove an alias from an app.
         * See snapd_client_unalias_sync() for more information.
         * @param snap the name of the snap to modify or %NULL.
         * @param alias the name of the alias to remove or %NULL to remove all aliases for the given snap.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         * @param callback a #GAsyncReadyCallback to call when the request is satisfied.
         */
        unalias_async(
            snap?: string | null,
            alias?: string | null,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Complete request started with snapd_client_unalias_async().
         * See snapd_client_unalias_sync() for more information.
         * @param result a #GAsyncResult.
         * @returns %TRUE on success or %FALSE on error.
         */
        unalias_finish(result: Gio.AsyncResult): boolean;
        /**
         * Remove an alias from an app.
         * @param snap the name of the snap to modify or %NULL.
         * @param alias the name of the alias to remove or %NULL to remove all aliases for the given snap.
         * @param progress_callback function to callback with progress.
         * @param cancellable a #GCancellable or %NULL.
         */
        unalias_sync(
            snap?: string | null,
            alias?: string | null,
            progress_callback?: ProgressCallback | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
    }

    namespace Connection {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::gadget': (pspec: GObject.ParamSpec) => void;
            'notify::interface': (pspec: GObject.ParamSpec) => void;
            'notify::manual': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::plug': (pspec: GObject.ParamSpec) => void;
            'notify::plug-attrs': (pspec: GObject.ParamSpec) => void;
            'notify::slot': (pspec: GObject.ParamSpec) => void;
            'notify::slot-attrs': (pspec: GObject.ParamSpec) => void;
            'notify::snap': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            gadget: boolean;
            interface: string;
            manual: boolean;
            name: string;
            plug: PlugRef;
            plug_attrs: GLib.HashTable<any, any>;
            plugAttrs: GLib.HashTable<any, any>;
            slot: SlotRef;
            slot_attrs: GLib.HashTable<any, any>;
            slotAttrs: GLib.HashTable<any, any>;
            snap: string;
        }
    }

    /**
     * #SnapdConnection contains the state of Snap a interface connection.
     */
    class Connection extends GObject.Object {
        static $gtype: GObject.GType<Connection>;

        // Properties

        get gadget(): boolean;
        get interface(): string;
        get manual(): boolean;
        get name(): string;
        get plug(): PlugRef;
        get plug_attrs(): GLib.HashTable<any, any>;
        get plugAttrs(): GLib.HashTable<any, any>;
        get slot(): SlotRef;
        get slot_attrs(): GLib.HashTable<any, any>;
        get slotAttrs(): GLib.HashTable<any, any>;
        get snap(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Connection.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Connection.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Connection.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Connection.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Connection.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Connection.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Connection.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Connection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get if this connection was made by the gadget snap.
         * @returns %TRUE if connection was made by the gadget snap.
         */
        get_gadget(): boolean;
        /**
         * Get the interface this connections uses.
         * @returns an interface name.
         */
        get_interface(): string;
        /**
         * Get if this connection was made manually.
         * @returns %TRUE if connection was made manually.
         */
        get_manual(): boolean;
        /**
         * Get the name of this connection (i.e. a slot or plug name).
         * @returns a name.
         */
        get_name(): string;
        /**
         * Get the plug this connection is made with.
         * @returns a reference to a plug.
         */
        get_plug(): PlugRef;
        /**
         * Get an attribute for connected plug.
         * @param name an attribute name.
         * @returns an attribute value or %NULL if not set.
         */
        get_plug_attribute(name: string): GLib.Variant | null;
        /**
         * Get the names of the attributes the connected plug has.
         * @returns a string array of attribute names. Free with g_strfreev().
         */
        get_plug_attribute_names(): [string[], number];
        /**
         * Get the slot this connection is made with.
         * @returns a reference to a slot.
         */
        get_slot(): SlotRef;
        /**
         * Get an attribute for connected slot.
         * @param name an attribute name.
         * @returns an attribute value or %NULL if not set.
         */
        get_slot_attribute(name: string): GLib.Variant | null;
        /**
         * Get the names of the attributes the connected slot has.
         * @returns a string array of attribute names. Free with g_strfreev().
         */
        get_slot_attribute_names(): [string[], number];
        /**
         * Get the snap this connection is on.
         * @returns a snap name.
         */
        get_snap(): string;
        /**
         * Check if the connected plug has an attribute.
         * @param name an attribute name.
         * @returns %TRUE if this attribute exists.
         */
        has_plug_attribute(name: string): boolean;
        /**
         * Check if the connected slot has an attribute.
         * @param name an attribute name.
         * @returns %TRUE if this attribute exists.
         */
        has_slot_attribute(name: string): boolean;
    }

    namespace Icon {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::data': (pspec: GObject.ParamSpec) => void;
            'notify::mime-type': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            data: GLib.Bytes;
            mime_type: string;
            mimeType: string;
        }
    }

    /**
     * #SnapdIcon contains icon data.
     */
    class Icon extends GObject.Object {
        static $gtype: GObject.GType<Icon>;

        // Properties

        get data(): GLib.Bytes;
        get mime_type(): string;
        get mimeType(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Icon.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Icon.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Icon.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Icon.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Icon.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Icon.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Icon.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Icon.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the binary data for this icon.
         * @returns the binary data.
         */
        get_data(): GLib.Bytes;
        // Conflicted with GObject.Object.get_data
        get_data(...args: never[]): any;
        /**
         * Get the mime-type for this icon, e.g. "image/png".
         * @returns a MIME type.
         */
        get_mime_type(): string;
    }

    namespace Interface {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::doc-url': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::plugs': (pspec: GObject.ParamSpec) => void;
            'notify::slots': (pspec: GObject.ParamSpec) => void;
            'notify::summary': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            doc_url: string;
            docUrl: string;
            name: string;
            plugs: any[];
            slots: any[];
            summary: string;
        }
    }

    /**
     * #SnapdInterface contains information about a Snap interface.
     */
    class Interface extends GObject.Object {
        static $gtype: GObject.GType<Interface>;

        // Properties

        get doc_url(): string;
        get docUrl(): string;
        get name(): string;
        get plugs(): any[];
        get slots(): any[];
        get summary(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Interface.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Interface.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Interface.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Interface.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Interface.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Interface.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Interface.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Interface.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the documentation URL of this interface.
         * @returns a URL.
         */
        get_doc_url(): string;
        /**
         * Get the name of this interface.
         * @returns a name.
         */
        get_name(): string;
        /**
         * Get the plugs matching this interface type.
         * @returns an array of #SnapdPlug.
         */
        get_plugs(): Plug[];
        /**
         * Get the slots matching this interface type.
         * @returns an array of #SnapdSlot.
         */
        get_slots(): Slot[];
        /**
         * Get the summary of this interface.
         * @returns a summary.
         */
        get_summary(): string;
        /**
         * Make a label for this interface suitable for a user interface.
         * @returns a newly allocated label string.
         */
        make_label(): string;
    }

    namespace Log {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::message': (pspec: GObject.ParamSpec) => void;
            'notify::pid': (pspec: GObject.ParamSpec) => void;
            'notify::sid': (pspec: GObject.ParamSpec) => void;
            'notify::timestamp': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            message: string;
            pid: string;
            sid: string;
            timestamp: GLib.DateTime;
        }
    }

    /**
     * #SnapdLog is an opaque data structure and can only be accessed
     * using the provided functions.
     */
    class Log extends GObject.Object {
        static $gtype: GObject.GType<Log>;

        // Properties

        get message(): string;
        get pid(): string;
        get sid(): string;
        get timestamp(): GLib.DateTime;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Log.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Log.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Log.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Log.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Log.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Log.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Log.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Log.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the message of this log, e.g. "service started"
         * @returns a log message.
         */
        get_message(): string;
        /**
         * Get the process ID of this log, e.g. "1234"
         * @returns a process id.
         */
        get_pid(): string;
        /**
         * Get the syslog id of this log, e.g. "cups.cups-browsed"
         * @returns a syslog id.
         */
        get_sid(): string;
        /**
         * Get the time this log was generated.
         * @returns a timestamp.
         */
        get_timestamp(): GLib.DateTime;
    }

    namespace Maintenance {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::kind': (pspec: GObject.ParamSpec) => void;
            'notify::message': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            kind: MaintenanceKind;
            message: string;
        }
    }

    /**
     * #SnapdMaintenance contains maintenance information.
     */
    class Maintenance extends GObject.Object {
        static $gtype: GObject.GType<Maintenance>;

        // Properties

        get kind(): MaintenanceKind;
        get message(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Maintenance.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Maintenance.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Maintenance.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Maintenance.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Maintenance.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Maintenance.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Maintenance.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Maintenance.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the kind of maintenance kind, e.g. %SNAPD_MAINTENANCE_KIND_DAEMON_RESTART.
         * @returns a #SnapdMaintenanceKind.
         */
        get_kind(): MaintenanceKind;
        /**
         * Get the user readable message associate with the maintenance state.
         * @returns message text.
         */
        get_message(): string;
    }

    namespace MarkdownNode {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::children': (pspec: GObject.ParamSpec) => void;
            'notify::node-type': (pspec: GObject.ParamSpec) => void;
            'notify::text': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            children: any[];
            node_type: MarkdownNodeType;
            nodeType: MarkdownNodeType;
            text: string;
        }
    }

    /**
     * #SnapdMarkdownNode is an opaque data structure and can only be accessed
     * using the provided functions.
     */
    class MarkdownNode extends GObject.Object {
        static $gtype: GObject.GType<MarkdownNode>;

        // Properties

        get children(): any[];
        get node_type(): MarkdownNodeType;
        get nodeType(): MarkdownNodeType;
        get text(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MarkdownNode.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MarkdownNode.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof MarkdownNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MarkdownNode.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MarkdownNode.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MarkdownNode.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MarkdownNode.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MarkdownNode.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the child nodes of this node.
         * @returns child nodes or %NULL if none.
         */
        get_children(): MarkdownNode[];
        /**
         * Get the type of node this is.
         * @returns a #SnapdMarkdownNodeType
         */
        get_node_type(): MarkdownNodeType;
        /**
         * Gets the text associated with this node. This is only present for nodes of type
         * %SNAPD_MARKDOWN_NODE_TYPE_TEXT.
         * @returns a UTF-8 string or %NULL if none in this node.
         */
        get_text(): string;
    }

    namespace MarkdownParser {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * #SnapdMarkdownParser is an opaque data structure and can only be accessed
     * using the provided functions.
     */
    class MarkdownParser extends GObject.Object {
        static $gtype: GObject.GType<MarkdownParser>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MarkdownParser.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MarkdownParser.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](version: MarkdownVersion): MarkdownParser;

        // Signals

        connect<K extends keyof MarkdownParser.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MarkdownParser.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MarkdownParser.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MarkdownParser.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MarkdownParser.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MarkdownParser.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Check if paragraph whitespace will be kept intact.
         * @returns %TRUE if paragraph whitespace is preserved.
         */
        get_preserve_whitespace(): boolean;
        /**
         * Convert text in snapd markdown format to markup.
         * @param text text to parse.
         * @returns Text split into blocks.
         */
        parse(text: string): MarkdownNode[];
        /**
         * Consecutive paragraph whitespace (space, tabs, newlines) is automatically
         * combined into a single space character. This renders the paragraphs in the
         * form that HTML uses. If you need the original whitespace that the markdown
         * author wrote then set this to %FALSE.
         * @param preserve_whitespace %TRUE if the parse should keep paragraph whitespace intact.
         */
        set_preserve_whitespace(preserve_whitespace: boolean): void;
    }

    namespace Media {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::url': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            height: number;
            type: string;
            url: string;
            width: number;
        }
    }

    /**
     * #SnapdMedia contains media information.
     */
    class Media extends GObject.Object {
        static $gtype: GObject.GType<Media>;

        // Properties

        get height(): number;
        get type(): string;
        get url(): string;
        get width(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Media.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Media.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Media.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Media.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Media.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Media.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Media.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Media.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the height of the media in pixels or 0 if unknown.
         * @returns a height
         */
        get_height(): number;
        /**
         * Get the type for this media, e.g. "icon" or "screenshot".
         * @returns a type name
         */
        get_media_type(): string;
        /**
         * Get the URL for this media, e.g. "http://example.com/media.png"
         * @returns a URL
         */
        get_url(): string;
        /**
         * Get the width of the media in pixels or 0 if unknown.
         * @returns a width
         */
        get_width(): number;
    }

    namespace Plug {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::attributes': (pspec: GObject.ParamSpec) => void;
            'notify::connections': (pspec: GObject.ParamSpec) => void;
            'notify::interface': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::snap': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            attributes: GLib.HashTable<any, any>;
            connections: any[];
            interface: string;
            label: string;
            name: string;
            snap: string;
        }
    }

    /**
     * #SnapdPlug contains information about a Snap plug.
     */
    class Plug extends GObject.Object {
        static $gtype: GObject.GType<Plug>;

        // Properties

        get attributes(): GLib.HashTable<any, any>;
        get connections(): any[];
        get interface(): string;
        get label(): string;
        get name(): string;
        get snap(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Plug.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Plug.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Plug.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Plug.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Plug.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Plug.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Plug.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Plug.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get an attribute for this interface.
         * @param name an attribute name.
         * @returns an attribute value or %NULL if not set.
         */
        get_attribute(name: string): GLib.Variant | null;
        /**
         * Get the names of the attributes this plug has.
         * @returns a string array of attribute names. Free with g_strfreev().
         */
        get_attribute_names(): [string[], number];
        /**
         * Get the slots connected to this plug.
         * @returns an array of #SnapdSlotRef.
         */
        get_connected_slots(): SlotRef[];
        /**
         * Get the connections being made with this plug.
         * @returns an array of #SnapdConnection.
         */
        get_connections(): Connection[];
        /**
         * Get the name of the interface this plug provides.
         * @returns an interface name.
         */
        get_interface(): string;
        /**
         * Get a human readable label for this plug.
         * @returns a label.
         */
        get_label(): string;
        /**
         * Get the name of this plug.
         * @returns a name.
         */
        get_name(): string;
        /**
         * Get the snap this plug is on.
         * @returns a snap name.
         */
        get_snap(): string;
        /**
         * Check if this plug has an attribute.
         * @param name an attribute name.
         * @returns %TRUE if this attribute exists.
         */
        has_attribute(name: string): boolean;
    }

    namespace PlugRef {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::plug': (pspec: GObject.ParamSpec) => void;
            'notify::snap': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            plug: string;
            snap: string;
        }
    }

    /**
     * #SnapdPlugRef contains the state of Snap a interface plug_ref.
     */
    class PlugRef extends GObject.Object {
        static $gtype: GObject.GType<PlugRef>;

        // Properties

        get plug(): string;
        get snap(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PlugRef.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PlugRef.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof PlugRef.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PlugRef.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof PlugRef.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PlugRef.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof PlugRef.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PlugRef.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the name of the plug.
         * @returns a name.
         */
        get_plug(): string;
        /**
         * Get the snap this plug is on.
         * @returns a snap name.
         */
        get_snap(): string;
    }

    namespace Price {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::amount': (pspec: GObject.ParamSpec) => void;
            'notify::currency': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            amount: number;
            currency: string;
        }
    }

    /**
     * #SnapdPrice contains pricing information.
     */
    class Price extends GObject.Object {
        static $gtype: GObject.GType<Price>;

        // Properties

        get amount(): number;
        get currency(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Price.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Price.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Price.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Price.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Price.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Price.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Price.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Price.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the currency amount for this price, e.g. 0.99.
         * @returns a currency amount.
         */
        get_amount(): number;
        /**
         * Get the currency this price is in, e.g. "NZD".
         * @returns an ISO 4217 currency code.
         */
        get_currency(): string;
    }

    namespace Screenshot {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::url': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            height: number;
            url: string;
            width: number;
        }
    }

    /**
     * #SnapdScreenshot contains screenshot information.
     */
    class Screenshot extends GObject.Object {
        static $gtype: GObject.GType<Screenshot>;

        // Properties

        get height(): number;
        get url(): string;
        get width(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Screenshot.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Screenshot.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Screenshot.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Screenshot.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Screenshot.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Screenshot.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Screenshot.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Screenshot.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the height of the screenshot in pixels or 0 if unknown.
         * @returns a height
         */
        get_height(): number;
        /**
         * Get the URL for this screenshot, e.g. "http://example.com/screenshot.png"
         * @returns a URL
         */
        get_url(): string;
        /**
         * Get the width of the screenshot in pixels or 0 if unknown.
         * @returns a width
         */
        get_width(): number;
    }

    namespace Slot {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::attributes': (pspec: GObject.ParamSpec) => void;
            'notify::connections': (pspec: GObject.ParamSpec) => void;
            'notify::interface': (pspec: GObject.ParamSpec) => void;
            'notify::label': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::snap': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            attributes: GLib.HashTable<any, any>;
            connections: any[];
            interface: string;
            label: string;
            name: string;
            snap: string;
        }
    }

    /**
     * #SnapdSlot contains information about a Snap slot.
     */
    class Slot extends GObject.Object {
        static $gtype: GObject.GType<Slot>;

        // Properties

        get attributes(): GLib.HashTable<any, any>;
        get connections(): any[];
        get interface(): string;
        get label(): string;
        get name(): string;
        get snap(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Slot.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Slot.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Slot.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Slot.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Slot.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Slot.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Slot.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Slot.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get an attribute for this interface.
         * @param name an attribute name.
         * @returns an attribute value or %NULL if not set.
         */
        get_attribute(name: string): GLib.Variant | null;
        /**
         * Get the names of the attributes this slot has.
         * @returns a string array of attribute names. Free with g_strfreev().
         */
        get_attribute_names(): [string[], number];
        /**
         * Get the plugs connected to this slot.
         * @returns an array of #SnapdPlugRef.
         */
        get_connected_plugs(): PlugRef[];
        /**
         * Get the connections being made with this slot.
         * @returns an array of #SnapdConnection.
         */
        get_connections(): Connection[];
        /**
         * Get the name of the interface this slot accepts.
         * @returns an interface name.
         */
        get_interface(): string;
        /**
         * Get a human readable label for this slot.
         * @returns a label.
         */
        get_label(): string;
        /**
         * Get the name of this slot.
         * @returns a name
         */
        get_name(): string;
        /**
         * Get the snap this slot is on.
         * @returns a snap name.
         */
        get_snap(): string;
        /**
         * Check if this slot has an attribute.
         * @param name an attribute name.
         * @returns %TRUE if this attribute exists.
         */
        has_attribute(name: string): boolean;
    }

    namespace SlotRef {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::slot': (pspec: GObject.ParamSpec) => void;
            'notify::snap': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            slot: string;
            snap: string;
        }
    }

    /**
     * #SnapdSlotRef contains the state of Snap a interface slot_ref.
     */
    class SlotRef extends GObject.Object {
        static $gtype: GObject.GType<SlotRef>;

        // Properties

        get slot(): string;
        get snap(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SlotRef.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SlotRef.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof SlotRef.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SlotRef.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SlotRef.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SlotRef.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SlotRef.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SlotRef.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the name of the slot.
         * @returns a name.
         */
        get_slot(): string;
        /**
         * Get the snap this slot is on.
         * @returns a snap name.
         */
        get_snap(): string;
    }

    namespace Snap {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::apps': (pspec: GObject.ParamSpec) => void;
            'notify::base': (pspec: GObject.ParamSpec) => void;
            'notify::broken': (pspec: GObject.ParamSpec) => void;
            'notify::categories': (pspec: GObject.ParamSpec) => void;
            'notify::channel': (pspec: GObject.ParamSpec) => void;
            'notify::channels': (pspec: GObject.ParamSpec) => void;
            'notify::common-ids': (pspec: GObject.ParamSpec) => void;
            'notify::confinement': (pspec: GObject.ParamSpec) => void;
            'notify::contact': (pspec: GObject.ParamSpec) => void;
            'notify::description': (pspec: GObject.ParamSpec) => void;
            'notify::developer': (pspec: GObject.ParamSpec) => void;
            'notify::devmode': (pspec: GObject.ParamSpec) => void;
            'notify::download-size': (pspec: GObject.ParamSpec) => void;
            'notify::hold': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::install-date': (pspec: GObject.ParamSpec) => void;
            'notify::installed-size': (pspec: GObject.ParamSpec) => void;
            'notify::jailmode': (pspec: GObject.ParamSpec) => void;
            'notify::license': (pspec: GObject.ParamSpec) => void;
            'notify::media': (pspec: GObject.ParamSpec) => void;
            'notify::mounted-from': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::prices': (pspec: GObject.ParamSpec) => void;
            'notify::private': (pspec: GObject.ParamSpec) => void;
            'notify::publisher-display-name': (pspec: GObject.ParamSpec) => void;
            'notify::publisher-id': (pspec: GObject.ParamSpec) => void;
            'notify::publisher-username': (pspec: GObject.ParamSpec) => void;
            'notify::publisher-validation': (pspec: GObject.ParamSpec) => void;
            'notify::revision': (pspec: GObject.ParamSpec) => void;
            'notify::screenshots': (pspec: GObject.ParamSpec) => void;
            'notify::snap-type': (pspec: GObject.ParamSpec) => void;
            'notify::status': (pspec: GObject.ParamSpec) => void;
            'notify::store-url': (pspec: GObject.ParamSpec) => void;
            'notify::summary': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::tracking-channel': (pspec: GObject.ParamSpec) => void;
            'notify::tracks': (pspec: GObject.ParamSpec) => void;
            'notify::trymode': (pspec: GObject.ParamSpec) => void;
            'notify::version': (pspec: GObject.ParamSpec) => void;
            'notify::website': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            apps: any[];
            base: string;
            broken: string;
            categories: any[];
            channel: string;
            channels: any[];
            common_ids: string[];
            commonIds: string[];
            confinement: Confinement;
            contact: string;
            description: string;
            developer: string;
            devmode: boolean;
            download_size: number;
            downloadSize: number;
            hold: GLib.DateTime;
            icon: string;
            id: string;
            install_date: GLib.DateTime;
            installDate: GLib.DateTime;
            installed_size: number;
            installedSize: number;
            jailmode: boolean;
            license: string;
            media: any[];
            mounted_from: string;
            mountedFrom: string;
            name: string;
            prices: any[];
            private: boolean;
            publisher_display_name: string;
            publisherDisplayName: string;
            publisher_id: string;
            publisherId: string;
            publisher_username: string;
            publisherUsername: string;
            publisher_validation: PublisherValidation;
            publisherValidation: PublisherValidation;
            revision: string;
            screenshots: any[];
            snap_type: SnapType;
            snapType: SnapType;
            status: SnapStatus;
            store_url: string;
            storeUrl: string;
            summary: string;
            title: string;
            tracking_channel: string;
            trackingChannel: string;
            tracks: string[];
            trymode: boolean;
            version: string;
            website: string;
        }
    }

    /**
     * #SnapdSnap contains Snap metadata.
     */
    class Snap extends GObject.Object {
        static $gtype: GObject.GType<Snap>;

        // Properties

        get apps(): any[];
        get base(): string;
        get broken(): string;
        get categories(): any[];
        get channel(): string;
        get channels(): any[];
        get common_ids(): string[];
        get commonIds(): string[];
        get confinement(): Confinement;
        get contact(): string;
        get description(): string;
        get developer(): string;
        get devmode(): boolean;
        get download_size(): number;
        get downloadSize(): number;
        get hold(): GLib.DateTime;
        get icon(): string;
        get id(): string;
        get install_date(): GLib.DateTime;
        get installDate(): GLib.DateTime;
        get installed_size(): number;
        get installedSize(): number;
        get jailmode(): boolean;
        get license(): string;
        get media(): any[];
        get mounted_from(): string;
        get mountedFrom(): string;
        get name(): string;
        get prices(): any[];
        get private(): boolean;
        get publisher_display_name(): string;
        get publisherDisplayName(): string;
        get publisher_id(): string;
        get publisherId(): string;
        get publisher_username(): string;
        get publisherUsername(): string;
        get publisher_validation(): PublisherValidation;
        get publisherValidation(): PublisherValidation;
        get revision(): string;
        get screenshots(): any[];
        get snap_type(): SnapType;
        get snapType(): SnapType;
        get status(): SnapStatus;
        get store_url(): string;
        get storeUrl(): string;
        get summary(): string;
        get title(): string;
        get tracking_channel(): string;
        get trackingChannel(): string;
        get tracks(): string[];
        get trymode(): boolean;
        get version(): string;
        get website(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Snap.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Snap.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Snap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Snap.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Snap.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Snap.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Snap.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Snap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the apps this snap provides.
         * @returns an array of #SnapdApp.
         */
        get_apps(): App[];
        /**
         * Get the base snap this snap uses.
         * @returns a snap name or %NULL if not set.
         */
        get_base(): string | null;
        /**
         * Get the reason this snap is broken.
         * @returns an error string or %NULL if not broken.
         */
        get_broken(): string | null;
        /**
         * Gets the categories this snap belongs to.
         * @returns an array of #SnapdCategory.
         */
        get_categories(): Category[];
        /**
         * Get the channel this snap is from, e.g. "stable".
         * @returns a channel name.
         */
        get_channel(): string;
        /**
         * Gets the available channels for this snap.
         * @returns an array of #SnapdChannel.
         */
        get_channels(): Channel[];
        /**
         * Get common IDs associated with this snap.
         * @returns an array of common ids.
         */
        get_common_ids(): string[];
        /**
         * Get the confinement this snap is using, e.g. %SNAPD_CONFINEMENT_STRICT.
         * @returns a #SnapdConfinement.
         */
        get_confinement(): Confinement;
        /**
         * Get the means of contacting the snap developer, e.g. "mailto:developer`example`.com".
         * @returns a contact URL.
         */
        get_contact(): string;
        /**
         * Get a multi-line description of this snap. The description is formatted using
         * a subset of Markdown. To parse this use a #SnapdMarkdownParser.
         * @returns description text.
         */
        get_description(): string;
        /**
         * Get the developer who created this snap.
         * @returns a developer name.
         */
        get_developer(): string;
        /**
         * Get if this snap is running in developer mode.
         * @returns %TRUE if this snap is running in devmode.
         */
        get_devmode(): boolean;
        /**
         * Get the download size of this snap or 0 if unknown.
         * @returns a byte count.
         */
        get_download_size(): number;
        /**
         * Get the date this snap will re-enable automatic refreshing or %NULL if no hold is present.
         * @returns a #GDateTime or %NULL.
         */
        get_hold(): GLib.DateTime | null;
        /**
         * Get the icon for this Snap, either a URL or an absolute path to retrieve it
         * from snapd directly.
         * @returns a URL or path.
         */
        get_icon(): string;
        /**
         * Gets the unique ID for this snap.
         * @returns an ID.
         */
        get_id(): string;
        /**
         * Get the date this snap was installed or %NULL if unknown.
         * @returns a #GDateTime or %NULL.
         */
        get_install_date(): GLib.DateTime | null;
        /**
         * Get the installed size of this snap or 0 if unknown.
         * @returns a byte count.
         */
        get_installed_size(): number;
        /**
         * Get if this snap is running in enforced confinement (jail) mode.
         * @returns %TRUE if this snap is running in jailmode.
         */
        get_jailmode(): boolean;
        /**
         * Gets the SPDX license expression for this snap, e.g. "GPL-3.0+".
         * @returns an SPDX license expression or %NULL.
         */
        get_license(): string | null;
        /**
         * Get media that is associated with this snap.
         * @returns an array of #SnapdMedia.
         */
        get_media(): Media[];
        /**
         * Gets the path this snap is mounted from, which is a .snap file for installed
         * snaps and a directory for snaps in try mode.
         * @returns a file path or %NULL.
         */
        get_mounted_from(): string | null;
        /**
         * Get the name of this snap. This is used to reference this snap, e.g. for
         * installing / removing.
         * @returns a name.
         */
        get_name(): string;
        /**
         * Get the prices that this snap can be purchased at.
         * @returns an array of #SnapdPrice.
         */
        get_prices(): Price[];
        /**
         * Get if this snap is only available to the developer.
         * @returns %TRUE if this is a private snap.
         */
        get_private(): boolean;
        /**
         * Get the display name of the publisher who created this snap.
         * @returns a publisher display name.
         */
        get_publisher_display_name(): string;
        /**
         * Get the ID of the publisher who created this snap.
         * @returns a publisher ID.
         */
        get_publisher_id(): string;
        /**
         * Get the username of the publisher who created this snap.
         * @returns a publisher username.
         */
        get_publisher_username(): string;
        /**
         * Get the validation for the snap publisher, e.g. %SNAPD_PUBLISHER_VALIDATION_VERIFIED
         * @returns a #SnapdPublisherValidation.
         */
        get_publisher_validation(): PublisherValidation;
        /**
         * Get the revision for this snap. The format of the string is undefined.
         * See also snapd_snap_get_version().
         * @returns a revision string.
         */
        get_revision(): string;
        /**
         * Get the screenshots that are available for this snap.
         * @returns an array of #SnapdScreenshot.
         */
        get_screenshots(): Screenshot[];
        /**
         * Get the type of snap, e.g. %SNAPD_SNAP_TYPE_APP
         * @returns a #SnapdSnapType.
         */
        get_snap_type(): SnapType;
        /**
         * Get the current status of this snap, e.g. SNAPD_SNAP_STATUS_INSTALLED.
         * @returns a #SnapdSnapStatus.
         */
        get_status(): SnapStatus;
        /**
         * Get a URL to the web snap store, e.g. "https://snapcraft.io/example"
         * @returns a URL or %NULL.
         */
        get_store_url(): string | null;
        /**
         * Get a single line summary for this snap, e.g. "Best app ever!".
         * @returns a summary string.
         */
        get_summary(): string;
        /**
         * Get the title for this snap. If not available use the snap name instead.
         * @returns a title or %NULL.
         */
        get_title(): string | null;
        /**
         * Get the channel that updates will be installed from, e.g. "stable".
         * @returns a channel name.
         */
        get_tracking_channel(): string;
        /**
         * Get the tracks that are available.
         * @returns an ordered array of track names.
         */
        get_tracks(): string[];
        /**
         * Get if this snap is running in try mode (installed locally and able to be
         * directly modified).
         * @returns %TRUE if using trymode.
         */
        get_trymode(): boolean;
        /**
         * Get the version for this snap. The format of the string is undefined.
         * See also snapd_snap_get_revision().
         * @returns a version string.
         */
        get_version(): string;
        /**
         * Get the website of the snap developer, e.g. "http://example.com".
         * @returns a website URL.
         */
        get_website(): string;
        /**
         * Finds the available channel that best matches the given name.
         * If none matches %NULL is returned.
         * @param name a channel name.
         * @returns an #SnapdChannel or %NULL.
         */
        match_channel(name: string): Channel | null;
    }

    namespace SystemInformation {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::architecture': (pspec: GObject.ParamSpec) => void;
            'notify::binaries-directory': (pspec: GObject.ParamSpec) => void;
            'notify::build-id': (pspec: GObject.ParamSpec) => void;
            'notify::confinement': (pspec: GObject.ParamSpec) => void;
            'notify::kernel-version': (pspec: GObject.ParamSpec) => void;
            'notify::managed': (pspec: GObject.ParamSpec) => void;
            'notify::mount-directory': (pspec: GObject.ParamSpec) => void;
            'notify::on-classic': (pspec: GObject.ParamSpec) => void;
            'notify::os-id': (pspec: GObject.ParamSpec) => void;
            'notify::os-version': (pspec: GObject.ParamSpec) => void;
            'notify::refresh-hold': (pspec: GObject.ParamSpec) => void;
            'notify::refresh-last': (pspec: GObject.ParamSpec) => void;
            'notify::refresh-next': (pspec: GObject.ParamSpec) => void;
            'notify::refresh-schedule': (pspec: GObject.ParamSpec) => void;
            'notify::refresh-timer': (pspec: GObject.ParamSpec) => void;
            'notify::sandbox-features': (pspec: GObject.ParamSpec) => void;
            'notify::series': (pspec: GObject.ParamSpec) => void;
            'notify::store': (pspec: GObject.ParamSpec) => void;
            'notify::version': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            architecture: string;
            binaries_directory: string;
            binariesDirectory: string;
            build_id: string;
            buildId: string;
            confinement: SystemConfinement;
            kernel_version: string;
            kernelVersion: string;
            managed: boolean;
            mount_directory: string;
            mountDirectory: string;
            on_classic: boolean;
            onClassic: boolean;
            os_id: string;
            osId: string;
            os_version: string;
            osVersion: string;
            refresh_hold: GLib.DateTime;
            refreshHold: GLib.DateTime;
            refresh_last: GLib.DateTime;
            refreshLast: GLib.DateTime;
            refresh_next: GLib.DateTime;
            refreshNext: GLib.DateTime;
            refresh_schedule: string;
            refreshSchedule: string;
            refresh_timer: string;
            refreshTimer: string;
            sandbox_features: any;
            sandboxFeatures: any;
            series: string;
            store: string;
            version: string;
        }
    }

    /**
     * #SnapdSystemInformation contains information about the system snapd is running on.
     */
    class SystemInformation extends GObject.Object {
        static $gtype: GObject.GType<SystemInformation>;

        // Properties

        get architecture(): string;
        get binaries_directory(): string;
        get binariesDirectory(): string;
        get build_id(): string;
        get buildId(): string;
        get confinement(): SystemConfinement;
        get kernel_version(): string;
        get kernelVersion(): string;
        get managed(): boolean;
        get mount_directory(): string;
        get mountDirectory(): string;
        get on_classic(): boolean;
        get onClassic(): boolean;
        get os_id(): string;
        get osId(): string;
        get os_version(): string;
        get osVersion(): string;
        get refresh_hold(): GLib.DateTime;
        get refreshHold(): GLib.DateTime;
        get refresh_last(): GLib.DateTime;
        get refreshLast(): GLib.DateTime;
        get refresh_next(): GLib.DateTime;
        get refreshNext(): GLib.DateTime;
        get refresh_schedule(): string;
        get refreshSchedule(): string;
        get refresh_timer(): string;
        get refreshTimer(): string;
        get sandbox_features(): any;
        get sandboxFeatures(): any;
        get series(): string;
        get store(): string;
        get version(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SystemInformation.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SystemInformation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof SystemInformation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SystemInformation.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SystemInformation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SystemInformation.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SystemInformation.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SystemInformation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the architecture this system is using, e.g. "amd64".
         * @returns an architecture.
         */
        get_architecture(): string;
        /**
         * Get the directory snap binaries are stored, e.g. "/snap/bin".
         * @returns a directory.
         */
        get_binaries_directory(): string;
        /**
         * Gets the unique build ID for the snap build, e.g. "efdd0b5e69b0742fa5e5bad0771df4d1df2459d1"
         * @returns a build ID.
         */
        get_build_id(): string;
        /**
         * Get the level of confinement the system supports, e.g. %SNAPD_SYSTEM_CONFINEMENT_STRICT.
         * @returns a #SnapdSystemConfinement.
         */
        get_confinement(): SystemConfinement;
        /**
         * Get the version of the kernel snapd is running on, e.g. "4.10.0-15-generic".
         * @returns a version string.
         */
        get_kernel_version(): string;
        /**
         * Get if snapd is running on a managed system.
         * @returns %TRUE if running on a managed system.
         */
        get_managed(): boolean;
        /**
         * Get the directory snaps are mounted, e.g. "/snap".
         * @returns a directory.
         */
        get_mount_directory(): string;
        /**
         * Get if this system is a classic system.
         * @returns %TRUE if running on a classic system.
         */
        get_on_classic(): boolean;
        /**
         * Get the operating system ID, e.g. "ubuntu".
         * @returns an operating system ID.
         */
        get_os_id(): string;
        /**
         * Get the operating system version, e.g. "16.04".
         * @returns a version string.
         */
        get_os_version(): string;
        /**
         * Get the time refreshes will be applied at, or %NULL if they are applied immediately.
         * @returns a #GDateTime.
         */
        get_refresh_hold(): GLib.DateTime | null;
        /**
         * Get the time the last refresh occurred, or %NULL if has not occurred.
         * @returns a #GDateTime.
         */
        get_refresh_last(): GLib.DateTime | null;
        /**
         * Get the time the next refresh is scheduled for, or %NULL if none has been scheduled.
         * @returns a #GDateTime.
         */
        get_refresh_next(): GLib.DateTime | null;
        /**
         * Get the schedule when snap refreshes will occur.
         * @returns a Snap refresh schedule string.
         */
        get_refresh_schedule(): string | null;
        /**
         * Get the timer that refreshes are running to.
         * @returns a Snap refresh timer string.
         */
        get_refresh_timer(): string | null;
        /**
         * Gets the sandbox features that snapd provides. Each backend in snapd provides
         * a list of features that it supports. For example, the "confinement-options"
         * backend may provide "classic", "devmode" and "strict".
         * @returns a hash table of string arrays keyed by backend name.
         */
        get_sandbox_features(): GLib.HashTable;
        /**
         * Get the series of snapd running, e.g. "16".
         * @returns a series string.
         */
        get_series(): string;
        /**
         * Get the store being used by snapd, e.g. "Ubuntu"
         * @returns a store id or %NULL.
         */
        get_store(): string | null;
        /**
         * Get the version of snapd running, e.g. "2.11+ppa174-1".
         * @returns a version string.
         */
        get_version(): string;
    }

    namespace Task {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::kind': (pspec: GObject.ParamSpec) => void;
            'notify::progress-done': (pspec: GObject.ParamSpec) => void;
            'notify::progress-label': (pspec: GObject.ParamSpec) => void;
            'notify::progress-total': (pspec: GObject.ParamSpec) => void;
            'notify::ready': (pspec: GObject.ParamSpec) => void;
            'notify::ready-time': (pspec: GObject.ParamSpec) => void;
            'notify::spawn-time': (pspec: GObject.ParamSpec) => void;
            'notify::status': (pspec: GObject.ParamSpec) => void;
            'notify::summary': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            id: string;
            kind: string;
            progress_done: number;
            progressDone: number;
            progress_label: string;
            progressLabel: string;
            progress_total: number;
            progressTotal: number;
            ready: boolean;
            ready_time: GLib.DateTime;
            readyTime: GLib.DateTime;
            spawn_time: GLib.DateTime;
            spawnTime: GLib.DateTime;
            status: string;
            summary: string;
        }
    }

    /**
     * #SnapdTask contains progress information for a task in a Snap transaction.
     */
    class Task extends GObject.Object {
        static $gtype: GObject.GType<Task>;

        // Properties

        get id(): string;
        get kind(): string;
        get progress_done(): number;
        get progressDone(): number;
        get progress_label(): string;
        get progressLabel(): string;
        get progress_total(): number;
        get progressTotal(): number;
        get ready(): boolean;
        get ready_time(): GLib.DateTime;
        get readyTime(): GLib.DateTime;
        get spawn_time(): GLib.DateTime;
        get spawnTime(): GLib.DateTime;
        get status(): string;
        get summary(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Task.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Task.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof Task.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Task.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Task.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Task.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Task.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Task.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the unique ID for this task.
         * @returns an ID.
         */
        get_id(): string;
        /**
         * Gets the kind of task this is.
         * @returns the kind of task.
         */
        get_kind(): string;
        /**
         * Get the the number of items completed in this task.
         * @returns a count.
         */
        get_progress_done(): number;
        /**
         * Get the the label associated with the progress.
         * @returns a label string.
         */
        get_progress_label(): string;
        /**
         * Get the the total number of items to be completed in this task.
         * @returns a count.
         */
        get_progress_total(): number;
        /**
         * Get if this task is completed.
         * @returns %TRUE if this task is complete.
         */
        get_ready(): boolean;
        /**
         * Get the time this task completed or %NULL if not yet completed.
         * @returns a #GDateTime or %NULL.
         */
        get_ready_time(): GLib.DateTime | null;
        /**
         * Get the time this task started.
         * @returns a #GDateTime.
         */
        get_spawn_time(): GLib.DateTime;
        /**
         * Get the status of the task.
         * @returns a status string.
         */
        get_status(): string;
        /**
         * Get a human readable description of the task.
         * @returns a string describing the task.
         */
        get_summary(): string;
    }

    namespace UserInformation {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::auth-data': (pspec: GObject.ParamSpec) => void;
            'notify::email': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::ssh-keys': (pspec: GObject.ParamSpec) => void;
            'notify::username': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            auth_data: AuthData;
            authData: AuthData;
            email: string;
            id: number;
            ssh_keys: string[];
            sshKeys: string[];
            username: string;
        }
    }

    /**
     * #SnapdUserInformation contains information about a user account on the system
     * snapd is running on.
     */
    class UserInformation extends GObject.Object {
        static $gtype: GObject.GType<UserInformation>;

        // Properties

        get auth_data(): AuthData;
        get authData(): AuthData;
        get email(): string;
        get id(): number;
        get ssh_keys(): string[];
        get sshKeys(): string[];
        get username(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UserInformation.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<UserInformation.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect<K extends keyof UserInformation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserInformation.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof UserInformation.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, UserInformation.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof UserInformation.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<UserInformation.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the email address for this account.
         * @returns a #SnapdAuthData or %NULL if not set.
         */
        get_auth_data(): AuthData | null;
        /**
         * Get the email address for this account.
         * @returns a email address.
         */
        get_email(): string;
        /**
         * Get the id for this account.
         * @returns a user id.
         */
        get_id(): number;
        /**
         * Get the SSH keys added to this account.
         * @returns the names of the SSH keys.
         */
        get_ssh_keys(): string[];
        /**
         * Get the local username for this account.
         * @returns a username.
         */
        get_username(): string;
    }

    type AliasClass = typeof Alias;
    type AppClass = typeof App;
    type AssertionClass = typeof Assertion;
    type AuthDataClass = typeof AuthData;
    type CategoryClass = typeof Category;
    type CategoryDetailsClass = typeof CategoryDetails;
    type ChangeClass = typeof Change;
    type ChannelClass = typeof Channel;
    type ClientClass = typeof Client;
    type ConnectionClass = typeof Connection;
    type IconClass = typeof Icon;
    type InterfaceClass = typeof Interface;
    type LogClass = typeof Log;
    type MaintenanceClass = typeof Maintenance;
    type MarkdownNodeClass = typeof MarkdownNode;
    type MarkdownParserClass = typeof MarkdownParser;
    type MediaClass = typeof Media;
    type PlugClass = typeof Plug;
    type PlugRefClass = typeof PlugRef;
    type PriceClass = typeof Price;
    type ScreenshotClass = typeof Screenshot;
    type SlotClass = typeof Slot;
    type SlotRefClass = typeof SlotRef;
    type SnapClass = typeof Snap;
    type SystemInformationClass = typeof SystemInformation;
    type TaskClass = typeof Task;
    type UserInformationClass = typeof UserInformation;
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

export default Snapd;

// END
