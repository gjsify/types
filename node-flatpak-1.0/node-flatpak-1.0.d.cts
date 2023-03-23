
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gjs
 */
/**
 * Flatpak-1.0
 */

import type Gio from '@girs/node-gio-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';

/**
 * Error codes for library functions.
 */
export enum Error {
    /**
     * App/runtime is already installed
     */
    ALREADY_INSTALLED,
    /**
     * App/runtime is not installed
     */
    NOT_INSTALLED,
    /**
     * App/runtime was only pulled into the local
     *                             repository but not installed.
     */
    ONLY_PULLED,
    /**
     * The App/Runtime is already installed, but from a different remote.
     */
    DIFFERENT_REMOTE,
    /**
     * The transaction was aborted (returned %TRUE in operation-error signal).
     */
    ABORTED,
    /**
     * The App/Runtime install was skipped due to earlier errors.
     */
    SKIPPED,
    /**
     * The App/Runtime needs a more recent version of flatpak.
     */
    NEED_NEW_FLATPAK,
    /**
     * The specified remote was not found.
     */
    REMOTE_NOT_FOUND,
    /**
     * A runtime needed for the app was not found.
     */
    RUNTIME_NOT_FOUND,
    /**
     * The pulled commit is a downgrade, and a downgrade wasn't
     *                           specifically allowed. (Since: 1.0)
     */
    DOWNGRADE,
    /**
     * A ref could not be parsed. (Since: 1.0.3)
     */
    INVALID_REF,
    /**
     * Invalid data. (Since: 1.0.3)
     */
    INVALID_DATA,
    /**
     * Missing GPG key or signature. (Since: 1.0.3)
     */
    UNTRUSTED,
    /**
     * Sandbox setup failed. (Since: 1.0.3)
     */
    SETUP_FAILED,
    /**
     * Exporting data failed. (Since: 1.0.3)
     */
    EXPORT_FAILED,
    /**
     * Remote can't be uninstalled. (Since: 1.0.3)
     */
    REMOTE_USED,
    /**
     * Runtime can't be uninstalled. (Since: 1.0.3)
     */
    RUNTIME_USED,
    /**
     * Application, runtime or remote name is invalid. (Since: 1.0.3)
     */
    INVALID_NAME,
    /**
     * More disk space needed. (Since: 1.2.0)
     */
    OUT_OF_SPACE,
    /**
     * An operation is being attempted by the wrong user (such as
     *                            root operating on a user installation). (Since: 1.2.0)
     */
    WRONG_USER,
    /**
     * Cached data was requested, but it was not available. (Since: 1.4.0)
     */
    NOT_CACHED,
    /**
     * The specified ref was not found. (Since: 1.4.0)
     */
    REF_NOT_FOUND,
    /**
     * An operation was not allowed by the administrative policy.
     *                                   For example, an app is not allowed to be installed due
     *                                   to not complying with the parental controls policy. (Since: 1.5.1)
     */
    PERMISSION_DENIED,
    /**
     * An authentication operation failed, for example, no
     *                                       correct password was supplied. (Since: 1.7.3)
     */
    AUTHENTICATION_FAILED,
    /**
     * An operation tried to access a ref, or information about it that it
     *                                was not authorized. For example, when succesfully authenticating with a
     *                                server but the user doesn't have permissions for a private ref. (Since: 1.7.3)
     */
    NOT_AUTHORIZED,
}
/**
 * Error codes returned by portal calls.
 */
export enum PortalError {
    /**
     * General portal failure
     */
    FAILED,
    /**
     * An argument was invalid
     */
    INVALID_ARGUMENT,
    /**
     * The object was not found
     */
    NOT_FOUND,
    /**
     * The object already exists
     */
    EXISTS,
    /**
     * The call was not allowed
     */
    NOT_ALLOWED,
    /**
     * The call was cancelled by the user
     */
    CANCELLED,
    /**
     * The window was destroyed by the user
     */
    WINDOW_DESTROYED,
}
/**
 * The kind of artifact that a FlatpakRef refers to.
 */
export enum RefKind {
    /**
     * An application
     */
    APP,
    /**
     * A runtime that applications can use.
     */
    RUNTIME,
}
/**
 * Different types of `FlatpakRemote`.
 */
export enum RemoteType {
    /**
     * Statically configured remote
     */
    STATIC,
    /**
     * Dynamically detected local pathname remote
     */
    USB,
    /**
     * Dynamically detected network remote
     */
    LAN,
}
/**
 * Information about the storage of an installation.
 */
export enum StorageType {
    /**
     * default
     */
    DEFAULT,
    /**
     * installation is on a hard disk
     */
    HARD_DISK,
    /**
     * installation is on a SD card
     */
    SDCARD,
    /**
     * installation is on an MMC
     */
    MMC,
    /**
     * installation is on the network
     */
    NETWORK,
}
/**
 * The type of a #FlatpakTransactionOperation.
 */
export enum TransactionOperationType {
    /**
     * Install a ref from a remote
     */
    INSTALL,
    /**
     * Update an installed ref
     */
    UPDATE,
    /**
     * Install a bundle from a file
     */
    INSTALL_BUNDLE,
    /**
     * Uninstall a ref
     */
    UNINSTALL,
    /**
     * The (currently) last operation type
     */
    LAST_TYPE,
}
/**
 * The reason for #FlatpakTransaction::add-new-remote.
 */
export enum TransactionRemoteReason {
    /**
     * The remote specified in the flatpakref has other apps too
     */
    GENERIC_REPO,
    /**
     * The remote has runtimes needed for the app
     */
    RUNTIME_DEPS,
}
/**
 * Flags to alter the behavior of flatpak_installation_install_full().
 * @bitfield 
 */
export enum InstallFlags {
    /**
     * Default
     */
    NONE,
    /**
     * Don't use static deltas when pulling
     */
    NO_STATIC_DELTAS,
    /**
     * Don't install any new builds that might be fetched
     */
    NO_DEPLOY,
    /**
     * Don't try to fetch new builds from the remote repo
     */
    NO_PULL,
    /**
     * Don't call triggers after installing. If used,
     * the caller must later call flatpak_installation_run_triggers() to update
     * the exported files. (Since: 1.0.3)
     */
    NO_TRIGGERS,
}
/**
 * Flags to alter the behavior of flatpak_installation_launch_full().
 * @bitfield 
 */
export enum LaunchFlags {
    /**
     * Default
     */
    NONE,
    /**
     * Do not reap the child. Use this if you want to wait
     * for the child with g_child_watch_add(). (Snce: 1.1)
     */
    DO_NOT_REAP,
}
/**
 * Flags to alter the behavior of e.g flatpak_installation_list_remote_refs_sync_full().
 * @bitfield 
 */
export enum QueryFlags {
    /**
     * Default
     */
    NONE,
    /**
     * Don't do any network i/o, but only return cached data.
     * This can return stale data, or a #FLATPAK_ERROR_NOT_CACHED error, however it is a
     * lot more efficient if you're doing many requests.
     */
    ONLY_CACHED,
    /**
     * Only list refs available from any eventuall sideload repos. (Snce: 1.7)
     */
    ONLY_SIDELOADED,
}
/**
 * The details for #FlatpakTransaction::operation-error.
 * @bitfield 
 */
export enum TransactionErrorDetails {
    /**
     * The operation failure was not fatal
     */
    FATAL,
}
/**
 * The details for #FlatpakTransaction::operation-done.
 * @bitfield 
 */
export enum TransactionResult {
    /**
     * The update caused no changes
     */
    CHANGE,
}
/**
 * Flags to alter the behavior of flatpak_installation_uninstall_full().
 * @bitfield 
 */
export enum UninstallFlags {
    /**
     * Default
     */
    NONE,
    /**
     * Don't prune the local OSTree repository after uninstalling
     */
    NO_PRUNE,
    /**
     * Don't call triggers after uninstalling. If used,
     * the caller must later call flatpak_installation_run_triggers() to update
     * the exported file. (Since: 1.0.3)
     */
    NO_TRIGGERS,
}
/**
 * Flags to alter the behavior of flatpak_installation_update().
 * @bitfield 
 */
export enum UpdateFlags {
    /**
     * Fetch remote builds and install the latest one (default)
     */
    NONE,
    /**
     * Don't install any new builds that might be fetched
     */
    NO_DEPLOY,
    /**
     * Don't try to fetch new builds from the remote repo
     */
    NO_PULL,
    /**
     * Don't use static deltas when pulling
     */
    NO_STATIC_DELTAS,
    /**
     * Don't prune the local OSTree repository after updating (Since: 0.11.8)
     */
    NO_PRUNE,
    /**
     * Don't call triggers after updating. If used,
     * the caller must later call flatpak_installation_run_triggers() to update
     * the exported files. (Since: 1.0.3)
     */
    NO_TRIGGERS,
}
/**
 * The major version.
 */
export const MAJOR_VERSION: number
/**
 * The micro version.
 */
export const MICRO_VERSION: number
/**
 * The minor version.
 */
export const MINOR_VERSION: number
export function errorQuark(): GLib.Quark
/**
 * Returns the canonical name for the arch of the current machine.
 * @returns an arch string
 */
export function getDefaultArch(): string | null
/**
 * Returns the canonical names for the arches that are supported (i.e. can run)
 * on the current machine, in order of priority (default is first).
 * @returns a zero terminated array of arch strings
 */
export function getSupportedArches(): string[]
/**
 * Lists the system installations according to the current configuration and current
 * availability (e.g. doesn't return a configured installation if not reachable).
 * @param cancellable a #GCancellable
 * @returns a GPtrArray of   #FlatpakInstallation instances
 */
export function getSystemInstallations(cancellable: Gio.Cancellable | null): Installation[]
export function portalErrorQuark(): GLib.Quark
/**
 * Converts the operation type to a string.
 * @param kind a #FlatpakTransactionOperationType
 * @returns a string representing @kind
 */
export function transactionOperationTypeToString(kind: TransactionOperationType): string | null
/**
 * The progress callback is called repeatedly during long-running operations
 * such as installations or updates, and can be used to update progress information
 * in a user interface.
 * 
 * The callback occurs in the thread-default context of the caller.
 * @callback 
 * @param status A status string, suitable for display
 * @param progress percentage of completion
 * @param estimating whether `progress` is just an estimate
 */
export interface ProgressCallback {
    (status: string | null, progress: number, estimating: boolean): void
}
export module BundleRef {

    // Constructor properties interface

    export interface ConstructorProperties extends Ref.ConstructorProperties {

        // Own constructor properties of Flatpak-1.0.Flatpak.BundleRef

        /**
         * The bundle file that this ref refers to.
         */
        file?: Gio.File | null
    }

}

export interface BundleRef {

    // Own properties of Flatpak-1.0.Flatpak.BundleRef

    /**
     * The bundle file that this ref refers to.
     */
    readonly file: Gio.File
    __gtype__: number

    // Own fields of Flatpak-1.0.Flatpak.BundleRef

    parent: Ref & GObject.Object

    // Owm methods of Flatpak-1.0.Flatpak.BundleRef

    /**
     * Get the compressed appstream for the app/runtime
     * @returns an #GBytes with the appstream contents, or %NULL
     */
    getAppstream(): any
    /**
     * Get the file this bundle is stored in.
     * @returns an #GFile
     */
    getFile(): Gio.File
    /**
     * Get the icon png data for the app/runtime
     * @param size 64 or 128
     * @returns an #GBytes with png contents
     */
    getIcon(size: number): any
    /**
     * Returns the installed size for the bundle.
     * @returns the installed size
     */
    getInstalledSize(): number
    /**
     * Get the metadata for the app/runtime
     * @returns an #GBytes with the metadata contents, or %NULL
     */
    getMetadata(): any
    /**
     * Get the origin url stored in the bundle
     * @returns an url string, or %NULL
     */
    getOrigin(): string | null
    /**
     * Get the runtime flatpakrepo url stored in the bundle (if any)
     * @returns an url string, or %NULL
     */
    getRuntimeRepoUrl(): string | null

    // Class property signals of Flatpak-1.0.Flatpak.BundleRef

    connect(sigName: "notify::file", callback: (...args: any[]) => void): number
    on(sigName: "notify::file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::file", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::file", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::arch", callback: (...args: any[]) => void): number
    on(sigName: "notify::arch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::arch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::arch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::arch", ...args: any[]): void
    connect(sigName: "notify::branch", callback: (...args: any[]) => void): number
    on(sigName: "notify::branch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::branch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::branch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::branch", ...args: any[]): void
    connect(sigName: "notify::collection-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::collection-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::collection-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::collection-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::collection-id", ...args: any[]): void
    connect(sigName: "notify::commit", callback: (...args: any[]) => void): number
    on(sigName: "notify::commit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::commit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::commit", ...args: any[]): void
    connect(sigName: "notify::kind", callback: (...args: any[]) => void): number
    on(sigName: "notify::kind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::kind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::kind", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class BundleRef extends Ref {

    // Own properties of Flatpak-1.0.Flatpak.BundleRef

    static name: string

    // Constructors of Flatpak-1.0.Flatpak.BundleRef

    constructor(config?: BundleRef.ConstructorProperties) 
    /**
     * Creates a new bundle ref for the given file.
     * @constructor 
     * @param file a #GFile
     * @returns a new bundle ref.
     */
    constructor(file: Gio.File) 
    /**
     * Creates a new bundle ref for the given file.
     * @constructor 
     * @param file a #GFile
     * @returns a new bundle ref.
     */
    static new(file: Gio.File): BundleRef
    _init(config?: BundleRef.ConstructorProperties): void
}

export module Installation {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Installation {

    // Own properties of Flatpak-1.0.Flatpak.Installation

    __gtype__: number

    // Own fields of Flatpak-1.0.Flatpak.Installation

    parent: GObject.Object

    // Owm methods of Flatpak-1.0.Flatpak.Installation

    /**
     * Adds a new `remote` object to the set of remotes. This is similar
     * to flatpak_installation_modify_remote() for non-existing remote
     * names. However, if the named remote already exists then instead of
     * modifying it it fails with %FLATPAK_ERROR_ALREADY_INSTALLED, or if
     * `if_needed` is true it silently succeeds without doing anything.
     * 
     * As an exception to the last, if the local config has a filter defined,
     * but the new remote unsets the filter (for example, it comes from an
     * unfiltered .flatpakref via flatpak_remote_new_from_file()) the the local
     * remote filter gets reset. This is to allow the setup where there is a
     * default setup of a filtered remote, yet you can still use the standard
     * flatpakref file to get the full contents without getting two remotes.
     * @param remote the new #FlatpakRemote
     * @param ifNeeded if %TRUE, only add if it doesn't exists
     * @param cancellable a #GCancellable
     * @returns %TRUE if the modifications have been committed successfully
     */
    addRemote(remote: Remote, ifNeeded: boolean, cancellable: Gio.Cancellable | null): boolean
    /**
     * Remove all OSTree refs from the local flatpak repository which are not
     * in a deployed state. The next time the underlying OSTree repo is pruned,
     * objects which were attached to that ref will be removed. This is useful if
     * you pulled a flatpak refs using flatpak_installation_install_full() and
     * specified %FLATPAK_INSTALL_FLAGS_NO_DEPLOY but then decided not to
     * deploy the refs later on and want to remove the local refs to prevent them
     * from taking up disk space. Note that this will not remove the objects
     * referred to by `ref` from the underlying OSTree repo, you should use
     * flatpak_installation_prune_local_repo() to do that.
     * @param cancellable a #GCancellable
     * @returns %TRUE on success
     */
    cleanupLocalRefsSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Gets monitor object for the installation. The returned file monitor will
     * emit the #GFileMonitor::changed signal whenever an application or runtime
     * was installed, uninstalled or updated.
     * @param cancellable a #GCancellable
     * @returns a new #GFileMonitor instance, or %NULL on error
     */
    createMonitor(cancellable: Gio.Cancellable | null): Gio.FileMonitor
    /**
     * Drops all internal (in-memory) caches. For instance, this may be needed to pick up new or changed
     * remotes configured outside this installation instance.
     * @param cancellable a #GCancellable
     * @returns %TRUE on success, %FALSE on error
     */
    dropCaches(cancellable: Gio.Cancellable | null): boolean
    /**
     * Obtains the metadata file from a commit.
     * 
     * NOTE: Since 0.11.4 this information is accessible in FlatpakRemoteRef, so this
     * function is not very useful anymore.
     * @param remoteName the name of the remote
     * @param ref the ref
     * @param cancellable a #GCancellable
     * @returns a #GBytes containing the flatpak metadata file,   or %NULL if an error occurred
     */
    fetchRemoteMetadataSync(remoteName: string | null, ref: Ref, cancellable: Gio.Cancellable | null): any
    /**
     * Gets the current remote branch of a ref in the remote.
     * @param remoteName the name of the remote
     * @param kind what this ref contains (an #FlatpakRefKind)
     * @param name name of the app/runtime to fetch
     * @param arch which architecture to fetch (default: current architecture)
     * @param branch which branch to fetch (default: 'master')
     * @param cancellable a #GCancellable
     * @returns a #FlatpakRemoteRef instance, or %NULL
     */
    fetchRemoteRefSync(remoteName: string | null, kind: RefKind, name: string | null, arch: string | null, branch: string | null, cancellable: Gio.Cancellable | null): RemoteRef
    /**
     * Gets the current remote branch of a ref in the remote.
     * @param remoteName the name of the remote
     * @param kind what this ref contains (an #FlatpakRefKind)
     * @param name name of the app/runtime to fetch
     * @param arch which architecture to fetch (default: current architecture)
     * @param branch which branch to fetch (default: 'master')
     * @param flags set of #FlatpakQueryFlags
     * @param cancellable a #GCancellable
     * @returns a #FlatpakRemoteRef instance, or %NULL
     */
    fetchRemoteRefSyncFull(remoteName: string | null, kind: RefKind, name: string | null, arch: string | null, branch: string | null, flags: QueryFlags, cancellable: Gio.Cancellable | null): RemoteRef
    /**
     * Gets information about the maximum amount of data that needs to be transferred
     * to pull the ref from a remote repository, and about the amount of
     * local disk space that is required to check out this commit.
     * 
     * Note that if there are locally available data that are in the ref, which is common
     * for instance if you're doing an update then the real download size may be smaller
     * than what is returned here.
     * 
     * NOTE: Since 0.11.4 this information is accessible in FlatpakRemoteRef, so this
     * function is not very useful anymore.
     * @param remoteName the name of the remote
     * @param ref the ref
     * @param cancellable a #GCancellable
     * @returns %TRUE, unless an error occurred
     */
    fetchRemoteSizeSync(remoteName: string | null, ref: Ref, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* downloadSize */ number, /* installedSize */ number ]
    /**
     * Get a global configuration option for the installation, see
     * flatpak_installation_set_config_sync() for supported keys.
     * @param key the name of the key to get
     * @param cancellable a #GCancellable
     * @returns The (newly allocated) value, or %NULL on error (%G_KEY_FILE_ERROR_KEY_NOT_FOUND error if key is not set)
     */
    getConfig(key: string | null, cancellable: Gio.Cancellable | null): string | null
    /**
     * Get the last build of reference `name` that was installed with
     * flatpak_installation_install(), or %NULL if the reference has
     * never been installed locally.
     * @param name the name of the app
     * @param cancellable a #GCancellable
     * @returns an #FlatpakInstalledRef
     */
    getCurrentInstalledApp(name: string | null, cancellable: Gio.Cancellable | null): InstalledRef
    /**
     * Get the default languages used by the installation to decide which
     * subpaths to install of locale extensions. This list may also be used
     * by frontends like GNOME Software to decide which language-specific apps
     * to display. An empty array means that all languages should be installed.
     * @returns    A possibly empty array of strings, or %NULL on error.
     */
    getDefaultLanguages(): string[]
    /**
     * Like flatpak_installation_get_default_languages() but includes territory
     * information (e.g. `en_US` rather than `en`) which may be included in the
     * `extra-languages` configuration.
     * 
     * Strings returned by this function are in the format specified by
     * [`setlocale()`](man:setlocale): `language[_territory][.codeset][`modifier]``.
     * @returns    A possibly empty array of locale strings, or %NULL on error.
     */
    getDefaultLocales(): string[]
    /**
     * Returns the display name of the installation for `self`.
     * 
     * Note that this function may return %NULL if the installation
     * does not have a display name.
     * @returns a string with the installation's display name
     */
    getDisplayName(): string | null
    /**
     * Returns the ID of the installation for `self`.
     * 
     * The ID for the default system installation is "default".
     * The ID for the user installation is "user".
     * @returns a string with the installation's ID
     */
    getId(): string | null
    /**
     * Returns information about an installed ref, such as the available builds,
     * its size, location, etc.
     * @param kind whether this is an app or runtime
     * @param name name of the app/runtime to fetch
     * @param arch which architecture to fetch (default: current architecture)
     * @param branch which branch to fetch (default: "master")
     * @param cancellable a #GCancellable
     * @returns an #FlatpakInstalledRef, or %NULL if an error occurred
     */
    getInstalledRef(kind: RefKind, name: string | null, arch: string | null, branch: string | null, cancellable: Gio.Cancellable | null): InstalledRef
    /**
     * Returns whether the installation is for a user-specific location.
     * @returns %TRUE if @self is a per-user installation
     */
    getIsUser(): boolean
    /**
     * Returns the min-free-space config value from the OSTree repository of this installation.
     * 
     * Applications can use this value, together with information about the available
     * disk space and the size of pending updates or installs, to estimate whether a
     * pull operation will fail due to running out of disk space.
     * @returns %TRUE on success, or %FALSE on error.
     */
    getMinFreeSpaceBytes(): [ /* returnType */ boolean, /* outBytes */ number ]
    /**
     * Returns the value set with flatpak_installation_set_no_interaction().
     * @returns %TRUE if interactive authorization dialogs are not allowed
     */
    getNoInteraction(): boolean
    /**
     * Returns the installation location for `self`.
     * @returns an #GFile
     */
    getPath(): Gio.File
    /**
     * Returns the numeric priority of the installation for `self`.
     * @returns an integer with the configured priority value
     */
    getPriority(): number
    /**
     * Looks up a remote by name.
     * @param name a remote name
     * @param cancellable a #GCancellable
     * @returns a #FlatpakRemote instance, or %NULL with @error   set
     */
    getRemoteByName(name: string | null, cancellable: Gio.Cancellable | null): Remote
    /**
     * Returns the type of storage of the installation for `self`.
     * @returns a #FlatpakStorageType
     */
    getStorageType(): StorageType
    /**
     * This is an old deprecated function, you should use
     * #FlatpakTransaction and flatpak_transaction_add_install()
     * instead. It has a lot more interesting features.
     * 
     * Install a new application or runtime.
     * 
     * Note that this function was originally written to always return a
     * #FlatpakInstalledRef. Since 0.9.13, passing
     * FLATPAK_INSTALL_FLAGS_NO_DEPLOY will only pull refs into the local flatpak
     * repository without deploying them, however this function will
     * be unable to provide information on the installed ref, so
     * FLATPAK_ERROR_ONLY_PULLED will be set and the caller must respond
     * accordingly.
     * @param remoteName name of the remote to use
     * @param kind what this ref contains (an #FlatpakRefKind)
     * @param name name of the app/runtime to fetch
     * @param arch which architecture to fetch (default: current architecture)
     * @param branch which branch to fetch (default: 'master')
     * @param cancellable a #GCancellable
     * @returns The ref for the newly installed app or %NULL on failure
     */
    install(remoteName: string | null, kind: RefKind, name: string | null, arch: string | null, branch: string | null, cancellable: Gio.Cancellable | null): InstalledRef
    /**
     * This is an old deprecated function, you should use
     * #FlatpakTransaction and flatpak_transaction_add_install_bundle()
     * instead. It has a lot more interesting features.
     * 
     * Install an application or runtime from an flatpak bundle file.
     * See flatpak-build-bundle(1) for how to create bundles.
     * @param file a #GFile that is an flatpak bundle
     * @param cancellable a #GCancellable
     * @returns The ref for the newly installed app or %NULL on failure
     */
    installBundle(file: Gio.File, cancellable: Gio.Cancellable | null): InstalledRef
    /**
     * This is an old deprecated function, you should use
     * #FlatpakTransaction and flatpak_transaction_add_install()
     * instead. It has a lot more interesting features.
     * 
     * Install a new application or runtime.
     * 
     * Note that this function was originally written to always return a
     * #FlatpakInstalledRef. Since 0.9.13, passing
     * FLATPAK_INSTALL_FLAGS_NO_DEPLOY will only pull refs into the local flatpak
     * repository without deploying them, however this function will
     * be unable to provide information on the installed ref, so
     * FLATPAK_ERROR_ONLY_PULLED will be set and the caller must respond
     * accordingly.
     * @param flags set of #FlatpakInstallFlags flag
     * @param remoteName name of the remote to use
     * @param kind what this ref contains (an #FlatpakRefKind)
     * @param name name of the app/runtime to fetch
     * @param arch which architecture to fetch (default: current architecture)
     * @param branch which branch to fetch (default: 'master')
     * @param subpaths A list of subpaths to fetch, or %NULL for everything
     * @param cancellable a #GCancellable
     * @returns The ref for the newly installed app or %NULL on failure
     */
    installFull(flags: InstallFlags, remoteName: string | null, kind: RefKind, name: string | null, arch: string | null, branch: string | null, subpaths: string[] | null, cancellable: Gio.Cancellable | null): InstalledRef
    /**
     * This is an old deprecated function, you should use
     * #FlatpakTransaction and flatpak_transaction_add_install_flatpakref()
     * instead. It has a lot more interesting features.
     * 
     * Creates a remote based on the passed in .flatpakref file contents
     * in `ref_file_data` and returns the #FlatpakRemoteRef that can be used
     * to install it.
     * 
     * Note, the #FlatpakRemoteRef will not have the commit field set, or other details, to
     * avoid unnecessary roundtrips. If you need that you have to resolve it
     * explicitly with flatpak_installation_fetch_remote_ref_sync ().
     * @param refFileData The ref file contents
     * @param cancellable a #GCancellable
     * @returns a #FlatpakRemoteRef if the remote has been added successfully, %NULL on error.
     */
    installRefFile(refFileData: any, cancellable: Gio.Cancellable | null): RemoteRef
    /**
     * Launch an installed application.
     * 
     * You can use flatpak_installation_get_installed_ref() or
     * flatpak_installation_get_current_installed_app() to find out what builds
     * are available, in order to get a value for `commit`.
     * @param name name of the app to launch
     * @param arch which architecture to launch (default: current architecture)
     * @param branch which branch of the application (default: "master")
     * @param commit the commit of `branch` to launch
     * @param cancellable a #GCancellable
     * @returns %TRUE, unless an error occurred
     */
    launch(name: string | null, arch: string | null, branch: string | null, commit: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Launch an installed application.
     * 
     * You can use flatpak_installation_get_installed_ref() or
     * flatpak_installation_get_current_installed_app() to find out what builds
     * are available, in order to get a value for `commit`.
     * 
     * Compared to flatpak_installation_launch(), this function returns a #FlatpakInstance
     * that can be used to get information about the running instance. You can also use
     * it to wait for the instance to be done with g_child_watch_add() if you pass the
     * #FLATPAK_LAUNCH_FLAGS_DO_NOT_REAP flag.
     * @param flags set of #FlatpakLaunchFlags
     * @param name name of the app to launch
     * @param arch which architecture to launch (default: current architecture)
     * @param branch which branch of the application (default: "master")
     * @param commit the commit of `branch` to launch
     * @param instanceOut return location for a #FlatpakInstance
     * @param cancellable a #GCancellable
     * @returns %TRUE, unless an error occurred
     */
    launchFull(flags: LaunchFlags, name: string | null, arch: string | null, branch: string | null, commit: string | null, instanceOut: Instance | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Lists the installed references.
     * @param cancellable a #GCancellable
     * @returns a GPtrArray of   #FlatpakInstalledRef instances
     */
    listInstalledRefs(cancellable: Gio.Cancellable | null): InstalledRef[]
    /**
     * Lists the installed references of a specific kind.
     * @param kind the kind of installation
     * @param cancellable a #GCancellable
     * @returns a GPtrArray of   #FlatpakInstalledRef instances
     */
    listInstalledRefsByKind(kind: RefKind, cancellable: Gio.Cancellable | null): InstalledRef[]
    /**
     * Lists the installed apps and runtimes that have an update available, either
     * from the configured remote or locally available but not deployed (see
     * flatpak_transaction_set_no_deploy()).
     * 
     * This also checks if any of #FlatpakInstalledRef has a missing #FlatpakRelatedRef
     * (which has `should-download` set to %TRUE) or runtime. If so, it adds the
     * ref to the returning #GPtrArray to pull in the #FlatpakRelatedRef or runtime
     * again via an update operation in #FlatpakTransaction.
     * 
     * In case more than one app needs an update of the same runtime or extension,
     * this function will return all of those apps.
     * @param cancellable a #GCancellable
     * @returns a GPtrArray of   #FlatpakInstalledRef instances, or %NULL on error
     */
    listInstalledRefsForUpdate(cancellable: Gio.Cancellable | null): InstalledRef[]
    /**
     * Lists all the locally installed refs from `remote_name` that are
     * related to `ref`. These are things that are interesting to install,
     * update, or uninstall together with `ref`. For instance, locale data
     * or debug information.
     * 
     * This function is similar to flatpak_installation_list_remote_related_refs_sync,
     * but instead of looking at what is available on the remote, it only looks
     * at the locally installed refs. This is useful for instance when you're
     * looking for related refs to uninstall, or when you're planning to use
     * FLATPAK_UPDATE_FLAGS_NO_PULL to install previously pulled refs.
     * @param remoteName the name of the remote
     * @param ref the ref
     * @param cancellable a #GCancellable
     * @returns a GPtrArray of   #FlatpakRelatedRef instances
     */
    listInstalledRelatedRefsSync(remoteName: string | null, ref: string | null, cancellable: Gio.Cancellable | null): RelatedRef[]
    /**
     * Lists all the applications and runtimes in a remote.
     * @param remoteOrUri the name or URI of the remote
     * @param cancellable a #GCancellable
     * @returns a GPtrArray of   #FlatpakRemoteRef instances
     */
    listRemoteRefsSync(remoteOrUri: string | null, cancellable: Gio.Cancellable | null): RemoteRef[]
    /**
     * Lists all the applications and runtimes in a remote.
     * @param remoteOrUri the name or URI of the remote
     * @param flags set of #FlatpakQueryFlags
     * @param cancellable a #GCancellable
     * @returns a GPtrArray of   #FlatpakRemoteRef instances
     */
    listRemoteRefsSyncFull(remoteOrUri: string | null, flags: QueryFlags, cancellable: Gio.Cancellable | null): RemoteRef[]
    /**
     * Lists all the available refs on `remote_name` that are related to
     * `ref,` and the subpaths to use. These are things that are
     * interesting to install, update, or uninstall together with
     * `ref`. For instance, locale data or debug information.
     * 
     * The returned list contains all available related refs, but not
     * every one should always be installed. For example,
     * flatpak_related_ref_should_download() returns %TRUE if the
     * reference should be installed/updated with the app, and
     * flatpak_related_ref_should_delete() returns %TRUE if it
     * should be uninstalled with the main ref.
     * 
     * The commit property of each #FlatpakRelatedRef is not guaranteed to be
     * non-%NULL.
     * @param remoteName the name of the remote
     * @param ref the ref
     * @param cancellable a #GCancellable
     * @returns a GPtrArray of   #FlatpakRelatedRef instances
     */
    listRemoteRelatedRefsSync(remoteName: string | null, ref: string | null, cancellable: Gio.Cancellable | null): RelatedRef[]
    /**
     * Lists the static remotes, in priority (highest first) order. For same
     * priority, an earlier added remote comes before a later added one.
     * @param cancellable a #GCancellable
     * @returns a GPtrArray of   #FlatpakRemote instances
     */
    listRemotes(cancellable: Gio.Cancellable | null): Remote[]
    /**
     * Lists only the remotes whose type is included in the `types` argument.
     * 
     * Since flatpak 1.7 this will never return any types except FLATPAK_REMOTE_TYPE_STATIC.
     * Equivalent functionallity to FLATPAK_REMOTE_TYPE_USB can be had by listing remote refs
     * with FLATPAK_QUERY_FLAGS_ONLY_SIDELOADED.
     * @param types an array of #FlatpakRemoteType
     * @param cancellable a #GCancellable
     * @returns a GPtrArray of   #FlatpakRemote instances
     */
    listRemotesByType(types: RemoteType[], cancellable: Gio.Cancellable | null): Remote[]
    /**
     * Lists the installed references that are not 'used'.
     * 
     * A reference is used if it is either an application, or an sdk,
     * or the runtime of a used ref, or an extension of a used ref.
     * @param arch if non-%NULL, the architecture of refs to collect
     * @param cancellable a #GCancellable
     * @returns a GPtrArray of   #FlatpakInstalledRef instances
     */
    listUnusedRefs(arch: string | null, cancellable: Gio.Cancellable | null): InstalledRef[]
    /**
     * Loads the metadata overrides file for an application.
     * @param appId an application id
     * @param cancellable a #GCancellable
     * @returns the contents of the overrides files,    or %NULL if an error occurred
     */
    loadAppOverrides(appId: string | null, cancellable: Gio.Cancellable | null): string | null
    /**
     * Saves changes in the `remote` object.
     * @param remote the modified #FlatpakRemote
     * @param cancellable a #GCancellable
     * @returns %TRUE if the modifications have been committed successfully
     */
    modifyRemote(remote: Remote, cancellable: Gio.Cancellable | null): boolean
    /**
     * Remove all orphaned OSTree objects from the underlying OSTree repo in
     * `self`.
     * @param cancellable a #GCancellable
     * @returns %TRUE on success
     */
    pruneLocalRepo(cancellable: Gio.Cancellable | null): boolean
    /**
     * Remove the OSTree ref given by `remote_name:``ref` from the local flatpak
     * repository. The next time the underlying OSTree repo is pruned, objects
     * which were attached to that ref will be removed. This is useful if you
     * pulled a flatpak ref using flatpak_installation_install_full() and
     * specified %FLATPAK_INSTALL_FLAGS_NO_DEPLOY but then decided not to
     * deploy the ref later on and want to remove the local ref to prevent it
     * from taking up disk space. Note that this will not remove the objects
     * referred to by `ref` from the underlying OSTree repo, you should use
     * flatpak_installation_prune_local_repo() to do that.
     * @param remoteName the name of the remote
     * @param ref the ref
     * @param cancellable a #GCancellable
     * @returns %TRUE on success
     */
    removeLocalRefSync(remoteName: string | null, ref: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Removes the remote with the given name from the installation.
     * @param name the name of the remote to remove
     * @param cancellable a #GCancellable
     * @returns %TRUE if the remote has been removed successfully
     */
    removeRemote(name: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Run the trigger commands to update the files exported by the apps in
     * `self`. Should be used after one or more app install, upgrade or
     * uninstall operations with the %FLATPAK_INSTALL_FLAGS_NO_TRIGGERS,
     * %FLATPAK_UPDATE_FLAGS_NO_TRIGGERS or %FLATPAK_UNINSTALL_FLAGS_NO_TRIGGERS
     * flags set.
     * @param cancellable a #GCancellable
     * @returns %TRUE on success
     */
    runTriggers(cancellable: Gio.Cancellable | null): boolean
    /**
     * Set a global configuration option for the installation, currently
     * the only supported keys are `languages`, which is a semicolon-separated
     * list of language codes like `"sv;en;pl"`, or `""` to mean all languages,
     * and `extra-languages`, which is a semicolon-separated list of locale
     * identifiers like `"en;en_DK;zh_HK.big5hkscs;uz_UZ.utf8`cyrillic"``.
     * @param key the name of the key to set
     * @param value the new value, or %NULL to unset
     * @param cancellable a #GCancellable
     * @returns %TRUE if the option was set correctly
     */
    setConfigSync(key: string | null, value: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * This method can be used to prevent interactive authorization dialogs to appear
     * for operations on `self`. This is useful for background operations that are not
     * directly triggered by a user action.
     * 
     * By default, interaction is allowed.
     * @param noInteraction Whether to disallow interactive authorization for operations
     */
    setNoInteraction(noInteraction: boolean): void
    /**
     * This is an old deprecated function, you should use
     * #FlatpakTransaction and flatpak_transaction_add_uninstall()
     * instead. It has a lot more interesting features.
     * 
     * Uninstall an application or runtime.
     * @param kind what this ref contains (an #FlatpakRefKind)
     * @param name name of the app or runtime to uninstall
     * @param arch architecture of the app or runtime to uninstall; if  %NULL, flatpak_get_default_arch() is assumed
     * @param branch name of the branch of the app or runtime to uninstall;  if %NULL, `master` is assumed
     * @param cancellable a #GCancellable
     * @returns %TRUE on success
     */
    uninstall(kind: RefKind, name: string | null, arch: string | null, branch: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * This is an old deprecated function, you should use
     * #FlatpakTransaction and flatpak_transaction_add_uninstall()
     * instead. It has a lot more interesting features.
     * 
     * Uninstall an application or runtime.
     * @param flags set of #FlatpakUninstallFlags flags
     * @param kind what this ref contains (an #FlatpakRefKind)
     * @param name name of the app or runtime to uninstall
     * @param arch architecture of the app or runtime to uninstall; if  %NULL, flatpak_get_default_arch() is assumed
     * @param branch name of the branch of the app or runtime to uninstall;  if %NULL, `master` is assumed
     * @param cancellable a #GCancellable
     * @returns %TRUE on success
     */
    uninstallFull(flags: UninstallFlags, kind: RefKind, name: string | null, arch: string | null, branch: string | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * This is an old deprecated function, you should use
     * #FlatpakTransaction and flatpak_transaction_add_update()
     * instead. It has a lot more interesting features.
     * 
     * Update an application or runtime.
     * 
     * If the specified package is not installed, then %FLATPAK_ERROR_NOT_INSTALLED
     * will be thrown.
     * 
     * If no updates could be found on the remote end and the package is
     * already up to date, then %FLATPAK_ERROR_ALREADY_INSTALLED will be thrown.
     * @param flags set of #FlatpakUpdateFlags flag
     * @param kind whether this is an app or runtime
     * @param name name of the app or runtime to update
     * @param arch architecture of the app or runtime to update (default: current architecture)
     * @param branch name of the branch of the app or runtime to update (default: master)
     * @param cancellable a #GCancellable
     * @returns The ref for the newly updated app or %NULL on failure
     */
    update(flags: UpdateFlags, kind: RefKind, name: string | null, arch: string | null, branch: string | null, cancellable: Gio.Cancellable | null): InstalledRef
    /**
     * Updates the local copy of appstream for `remote_name` for the specified `arch`.
     * @param remoteName the name of the remote
     * @param arch Architecture to update, or %NULL for the local machine arch
     * @param outChanged Set to %TRUE if the contents of the appstream changed, %FALSE if nothing changed
     * @param cancellable a #GCancellable
     * @returns %TRUE on success, or %FALSE on error
     */
    updateAppstreamFullSync(remoteName: string | null, arch: string | null, outChanged: boolean | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Updates the local copy of appstream for `remote_name` for the specified `arch`.
     * If you need progress feedback, use flatpak_installation_update_appstream_full_sync().
     * @param remoteName the name of the remote
     * @param arch Architecture to update, or %NULL for the local machine arch
     * @param outChanged Set to %TRUE if the contents of the appstream changed, %FALSE if nothing changed
     * @param cancellable a #GCancellable
     * @returns %TRUE on success, or %FALSE on error
     */
    updateAppstreamSync(remoteName: string | null, arch: string | null, outChanged: boolean | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * This is an old deprecated function, you should use
     * #FlatpakTransaction and flatpak_transaction_add_update()
     * instead. It has a lot more interesting features.
     * 
     * Update an application or runtime.
     * 
     * If the specified package is not installed, then %FLATPAK_ERROR_NOT_INSTALLED
     * will be thrown.
     * 
     * If no updates could be found on the remote end and the package is
     * already up to date, then %FLATPAK_ERROR_ALREADY_INSTALLED will be thrown.
     * @param flags set of #FlatpakUpdateFlags flag
     * @param kind whether this is an app or runtime
     * @param name name of the app or runtime to update
     * @param arch architecture of the app or runtime to update (default: current architecture)
     * @param branch name of the branch of the app or runtime to update (default: master)
     * @param subpaths A list of subpaths to fetch, or %NULL for everything
     * @param cancellable a #GCancellable
     * @returns The ref for the newly updated app or %NULL on failure
     */
    updateFull(flags: UpdateFlags, kind: RefKind, name: string | null, arch: string | null, branch: string | null, subpaths: string[] | null, cancellable: Gio.Cancellable | null): InstalledRef
    /**
     * Updates the local configuration of a remote repository by fetching
     * the related information from the summary file in the remote OSTree
     * repository and committing the changes to the local installation.
     * @param name the name of the remote to update
     * @param cancellable a #GCancellable
     * @returns %TRUE if the remote has been updated successfully
     */
    updateRemoteSync(name: string | null, cancellable: Gio.Cancellable | null): boolean

    // Class property signals of Flatpak-1.0.Flatpak.Installation

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

export class Installation extends GObject.Object {

    // Own properties of Flatpak-1.0.Flatpak.Installation

    static name: string

    // Constructors of Flatpak-1.0.Flatpak.Installation

    constructor(config?: Installation.ConstructorProperties) 
    /**
     * Creates a new #FlatpakInstallation for the installation at the given `path`.
     * @constructor 
     * @param path a #GFile
     * @param user whether this is a user-specific location
     * @param cancellable a #GCancellable
     * @returns a new #FlatpakInstallation
     */
    static newForPath(path: Gio.File, user: boolean, cancellable: Gio.Cancellable | null): Installation
    /**
     * Creates a new #FlatpakInstallation for the default system-wide installation.
     * @constructor 
     * @param cancellable a #GCancellable
     * @returns a new #FlatpakInstallation
     */
    static newSystem(cancellable: Gio.Cancellable | null): Installation
    /**
     * Creates a new #FlatpakInstallation for the system-wide installation `id`.
     * @constructor 
     * @param id the ID of the system-wide installation
     * @param cancellable a #GCancellable
     * @returns a new #FlatpakInstallation
     */
    static newSystemWithId(id: string | null, cancellable: Gio.Cancellable | null): Installation
    /**
     * Creates a new #FlatpakInstallation for the per-user installation.
     * @constructor 
     * @param cancellable a #GCancellable
     * @returns a new #FlatpakInstallation
     */
    static newUser(cancellable: Gio.Cancellable | null): Installation
    _init(config?: Installation.ConstructorProperties): void
}

export module InstalledRef {

    // Constructor properties interface

    export interface ConstructorProperties extends Ref.ConstructorProperties {

        // Own constructor properties of Flatpak-1.0.Flatpak.InstalledRef

        appdataContentRating?: GLib.HashTable | null
        appdataContentRatingType?: string | null
        appdataLicense?: string | null
        appdataName?: string | null
        appdataSummary?: string | null
        appdataVersion?: string | null
        deployDir?: string | null
        endOfLife?: string | null
        endOfLifeRebase?: string | null
        installedSize?: number | null
        isCurrent?: boolean | null
        latestCommit?: string | null
        origin?: string | null
        subpaths?: string[] | null
    }

}

export interface InstalledRef {

    // Own properties of Flatpak-1.0.Flatpak.InstalledRef

    readonly appdataContentRating: GLib.HashTable
    readonly appdataContentRatingType: string | null
    readonly appdataLicense: string | null
    readonly appdataName: string | null
    readonly appdataSummary: string | null
    readonly appdataVersion: string | null
    deployDir: string | null
    readonly endOfLife: string | null
    readonly endOfLifeRebase: string | null
    installedSize: number
    isCurrent: boolean
    latestCommit: string | null
    origin: string | null
    subpaths: string[]
    __gtype__: number

    // Own fields of Flatpak-1.0.Flatpak.InstalledRef

    parent: Ref & GObject.Object

    // Owm methods of Flatpak-1.0.Flatpak.InstalledRef

    /**
     * Returns the content rating field from the appdata. This is a potentially
     * empty mapping of content rating attribute IDs to values, to be interpreted
     * by the semantics of the content rating type (see
     * flatpak_installed_ref_get_appdata_content_rating_type()).
     * @returns the content rating or %NULL
     */
    getAppdataContentRating(): GLib.HashTable | null
    /**
     * Returns the content rating type from the appdata. For example, `oars-1.0` or
     * `oars-1.1`.
     * @returns the content rating type or %NULL
     */
    getAppdataContentRatingType(): string | null
    /**
     * Returns the license field from the appdata.
     * @returns the license or %NULL
     */
    getAppdataLicense(): string | null
    /**
     * Returns the name field from the appdata.
     * 
     * The returned string is localized.
     * @returns the name or %NULL
     */
    getAppdataName(): string | null
    /**
     * Returns the summary field from the appdata.
     * 
     * The returned string is localized.
     * @returns the summary or %NULL
     */
    getAppdataSummary(): string | null
    /**
     * Returns the default version field from the appdata.
     * @returns the version or %NULL
     */
    getAppdataVersion(): string | null
    /**
     * Gets the deploy dir of the ref.
     * @returns the deploy dir
     */
    getDeployDir(): string | null
    /**
     * Returns the end-of-life reason string, or %NULL if the
     * ref is not end-of-lifed.
     * @returns the end-of-life reason or %NULL
     */
    getEol(): string | null
    /**
     * Returns the end-of-life rebased ref, or %NULL if the
     * ref is not end-of-lifed.
     * @returns the end-of-life rebased ref or %NULL
     */
    getEolRebase(): string | null
    /**
     * Returns the installed size of the ref.
     * @returns the installed size
     */
    getInstalledSize(): number
    /**
     * Returns whether the ref is current.
     * @returns %TRUE if the ref is current
     */
    getIsCurrent(): boolean
    /**
     * Gets the latest commit of the ref.
     * @returns the latest commit
     */
    getLatestCommit(): string | null
    /**
     * Gets the origin of the ref.
     * @returns the origin
     */
    getOrigin(): string | null
    /**
     * Returns the subpaths that are installed, or %NULL if all files installed.
     * @returns A strv, or %NULL
     */
    getSubpaths(): string[]
    /**
     * Loads the compressed xml appdata for this ref (if it exists).
     * @param cancellable a #GCancellable
     * @returns a #GBytes containing the compressed appdata file,     or %NULL if an error occurred
     */
    loadAppdata(cancellable: Gio.Cancellable | null): any
    /**
     * Loads the metadata file for this ref.
     * @param cancellable a #GCancellable
     * @returns a #GBytes containing the metadata file,     or %NULL if an error occurred
     */
    loadMetadata(cancellable: Gio.Cancellable | null): any

    // Class property signals of Flatpak-1.0.Flatpak.InstalledRef

    connect(sigName: "notify::appdata-content-rating", callback: (...args: any[]) => void): number
    on(sigName: "notify::appdata-content-rating", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::appdata-content-rating", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::appdata-content-rating", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::appdata-content-rating", ...args: any[]): void
    connect(sigName: "notify::appdata-content-rating-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::appdata-content-rating-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::appdata-content-rating-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::appdata-content-rating-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::appdata-content-rating-type", ...args: any[]): void
    connect(sigName: "notify::appdata-license", callback: (...args: any[]) => void): number
    on(sigName: "notify::appdata-license", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::appdata-license", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::appdata-license", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::appdata-license", ...args: any[]): void
    connect(sigName: "notify::appdata-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::appdata-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::appdata-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::appdata-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::appdata-name", ...args: any[]): void
    connect(sigName: "notify::appdata-summary", callback: (...args: any[]) => void): number
    on(sigName: "notify::appdata-summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::appdata-summary", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::appdata-summary", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::appdata-summary", ...args: any[]): void
    connect(sigName: "notify::appdata-version", callback: (...args: any[]) => void): number
    on(sigName: "notify::appdata-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::appdata-version", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::appdata-version", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::appdata-version", ...args: any[]): void
    connect(sigName: "notify::deploy-dir", callback: (...args: any[]) => void): number
    on(sigName: "notify::deploy-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::deploy-dir", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::deploy-dir", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::deploy-dir", ...args: any[]): void
    connect(sigName: "notify::end-of-life", callback: (...args: any[]) => void): number
    on(sigName: "notify::end-of-life", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::end-of-life", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::end-of-life", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::end-of-life", ...args: any[]): void
    connect(sigName: "notify::end-of-life-rebase", callback: (...args: any[]) => void): number
    on(sigName: "notify::end-of-life-rebase", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::end-of-life-rebase", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::end-of-life-rebase", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::end-of-life-rebase", ...args: any[]): void
    connect(sigName: "notify::installed-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::installed-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::installed-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::installed-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::installed-size", ...args: any[]): void
    connect(sigName: "notify::is-current", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-current", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-current", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-current", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-current", ...args: any[]): void
    connect(sigName: "notify::latest-commit", callback: (...args: any[]) => void): number
    on(sigName: "notify::latest-commit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::latest-commit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::latest-commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::latest-commit", ...args: any[]): void
    connect(sigName: "notify::origin", callback: (...args: any[]) => void): number
    on(sigName: "notify::origin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::origin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::origin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::origin", ...args: any[]): void
    connect(sigName: "notify::subpaths", callback: (...args: any[]) => void): number
    on(sigName: "notify::subpaths", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::subpaths", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::subpaths", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::subpaths", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::arch", callback: (...args: any[]) => void): number
    on(sigName: "notify::arch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::arch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::arch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::arch", ...args: any[]): void
    connect(sigName: "notify::branch", callback: (...args: any[]) => void): number
    on(sigName: "notify::branch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::branch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::branch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::branch", ...args: any[]): void
    connect(sigName: "notify::collection-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::collection-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::collection-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::collection-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::collection-id", ...args: any[]): void
    connect(sigName: "notify::commit", callback: (...args: any[]) => void): number
    on(sigName: "notify::commit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::commit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::commit", ...args: any[]): void
    connect(sigName: "notify::kind", callback: (...args: any[]) => void): number
    on(sigName: "notify::kind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::kind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::kind", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class InstalledRef extends Ref {

    // Own properties of Flatpak-1.0.Flatpak.InstalledRef

    static name: string

    // Constructors of Flatpak-1.0.Flatpak.InstalledRef

    constructor(config?: InstalledRef.ConstructorProperties) 
    _init(config?: InstalledRef.ConstructorProperties): void
}

export module Instance {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Instance {

    // Own properties of Flatpak-1.0.Flatpak.Instance

    __gtype__: number

    // Own fields of Flatpak-1.0.Flatpak.Instance

    parent: GObject.Object

    // Owm methods of Flatpak-1.0.Flatpak.Instance

    /**
     * Gets the application ID of the application running in the instance.
     * 
     * Note that this may return %NULL for sandboxes that don't have an application.
     * @returns the application ID
     */
    getApp(): string | null
    /**
     * Gets the architecture of the application running in the instance.
     * @returns the architecture
     */
    getArch(): string | null
    /**
     * Gets the branch of the application running in the instance.
     * @returns the architecture
     */
    getBranch(): string | null
    /**
     * Gets the PID of the application process in the sandbox.
     * 
     * See flatpak_instance_get_pid().
     * 
     * Note that this function may return 0 immediately after launching
     * a sandbox, for a short amount of time.
     * @returns the application process PID
     */
    getChildPid(): number
    /**
     * Gets the commit of the application running in the instance.
     * @returns the commit
     */
    getCommit(): string | null
    /**
     * Gets the instance ID. The ID is used by Flatpak for bookkeeping
     * purposes and has no further relevance.
     * @returns the instance ID
     */
    getId(): string | null
    /**
     * Gets a keyfile that holds information about the running sandbox.
     * 
     * This file is available as /.flatpak-info inside the sandbox as well.
     * 
     * The most important data in the keyfile is available with separate getters,
     * but there may be more information in the keyfile.
     * @returns the flatpak-info keyfile
     */
    getInfo(): GLib.KeyFile
    /**
     * Gets the PID of the outermost process in the sandbox. This is not the
     * application process itself, but a bubblewrap 'babysitter' process.
     * 
     * See flatpak_instance_get_child_pid().
     * @returns the outermost process PID
     */
    getPid(): number
    /**
     * Gets the ref of the runtime used in the instance.
     * @returns the runtime ref
     */
    getRuntime(): string | null
    /**
     * Gets the commit of the runtime used in the instance.
     * @returns the runtime commit
     */
    getRuntimeCommit(): string | null
    /**
     * Finds out if the sandbox represented by `self` is still running.
     * @returns %TRUE if the sandbox is still running
     */
    isRunning(): boolean

    // Class property signals of Flatpak-1.0.Flatpak.Instance

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

export class Instance extends GObject.Object {

    // Own properties of Flatpak-1.0.Flatpak.Instance

    static name: string

    // Constructors of Flatpak-1.0.Flatpak.Instance

    constructor(config?: Instance.ConstructorProperties) 
    _init(config?: Instance.ConstructorProperties): void
    /**
     * Gets FlatpakInstance objects for all running sandboxes in the current session.
     * @returns a #GPtrArray of   #FlatpakInstance objects
     */
    static getAll(): Instance[]
}

export module Ref {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Flatpak-1.0.Flatpak.Ref

        arch?: string | null
        branch?: string | null
        collectionId?: string | null
        commit?: string | null
        kind?: RefKind | null
        name?: string | null
    }

}

export interface Ref {

    // Own properties of Flatpak-1.0.Flatpak.Ref

    readonly arch: string | null
    readonly branch: string | null
    readonly collectionId: string | null
    readonly commit: string | null
    readonly kind: RefKind
    readonly name: string | null
    __gtype__: number

    // Own fields of Flatpak-1.0.Flatpak.Ref

    parent: GObject.Object

    // Owm methods of Flatpak-1.0.Flatpak.Ref

    /**
     * Convert an FlatpakRef object into a string representation that
     * can be parsed by flatpak_ref_parse().
     * @returns string representation
     */
    formatRef(): string | null
    /**
     * Gets the arch or the ref.
     * @returns the arch
     */
    getArch(): string | null
    /**
     * Gets the branch of the ref.
     * @returns the branch
     */
    getBranch(): string | null
    /**
     * Gets the collection ID of the ref.
     * @returns the collection ID
     */
    getCollectionId(): string | null
    /**
     * Gets the commit of the ref.
     * @returns the commit
     */
    getCommit(): string | null
    /**
     * Gets the kind of artifact that this ref refers to.
     * @returns the kind of artifact
     */
    getKind(): RefKind
    /**
     * Gets the name of the ref.
     * @returns the name
     */
    getName(): string | null

    // Class property signals of Flatpak-1.0.Flatpak.Ref

    connect(sigName: "notify::arch", callback: (...args: any[]) => void): number
    on(sigName: "notify::arch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::arch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::arch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::arch", ...args: any[]): void
    connect(sigName: "notify::branch", callback: (...args: any[]) => void): number
    on(sigName: "notify::branch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::branch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::branch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::branch", ...args: any[]): void
    connect(sigName: "notify::collection-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::collection-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::collection-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::collection-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::collection-id", ...args: any[]): void
    connect(sigName: "notify::commit", callback: (...args: any[]) => void): number
    on(sigName: "notify::commit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::commit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::commit", ...args: any[]): void
    connect(sigName: "notify::kind", callback: (...args: any[]) => void): number
    on(sigName: "notify::kind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::kind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::kind", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
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

export class Ref extends GObject.Object {

    // Own properties of Flatpak-1.0.Flatpak.Ref

    static name: string

    // Constructors of Flatpak-1.0.Flatpak.Ref

    constructor(config?: Ref.ConstructorProperties) 
    _init(config?: Ref.ConstructorProperties): void
    /**
     * Tries to parse a full ref name and return a #FlatpakRef (without a
     * commit set) or fail if the ref is invalid somehow.
     * @param ref A string ref name, such as "app/org.test.App/x86_64/master"
     * @returns an #FlatpakRef, or %NULL
     */
    static parse(ref: string | null): Ref
}

export module RelatedRef {

    // Constructor properties interface

    export interface ConstructorProperties extends Ref.ConstructorProperties {

        // Own constructor properties of Flatpak-1.0.Flatpak.RelatedRef

        shouldAutoprune?: boolean | null
        shouldDelete?: boolean | null
        shouldDownload?: boolean | null
        subpaths?: string[] | null
    }

}

export interface RelatedRef {

    // Own properties of Flatpak-1.0.Flatpak.RelatedRef

    readonly shouldAutoprune: boolean
    readonly shouldDelete: boolean
    readonly shouldDownload: boolean
    readonly subpaths: string[]
    __gtype__: number

    // Own fields of Flatpak-1.0.Flatpak.RelatedRef

    parent: Ref & GObject.Object

    // Owm methods of Flatpak-1.0.Flatpak.RelatedRef

    /**
     * Returns the subpaths that should be installed/updated for the ref.
     * This returns %NULL if all files should be installed.
     * @returns A strv, or %NULL
     */
    getSubpaths(): string[]

    // Class property signals of Flatpak-1.0.Flatpak.RelatedRef

    connect(sigName: "notify::should-autoprune", callback: (...args: any[]) => void): number
    on(sigName: "notify::should-autoprune", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::should-autoprune", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::should-autoprune", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::should-autoprune", ...args: any[]): void
    connect(sigName: "notify::should-delete", callback: (...args: any[]) => void): number
    on(sigName: "notify::should-delete", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::should-delete", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::should-delete", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::should-delete", ...args: any[]): void
    connect(sigName: "notify::should-download", callback: (...args: any[]) => void): number
    on(sigName: "notify::should-download", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::should-download", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::should-download", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::should-download", ...args: any[]): void
    connect(sigName: "notify::subpaths", callback: (...args: any[]) => void): number
    on(sigName: "notify::subpaths", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::subpaths", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::subpaths", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::subpaths", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::arch", callback: (...args: any[]) => void): number
    on(sigName: "notify::arch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::arch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::arch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::arch", ...args: any[]): void
    connect(sigName: "notify::branch", callback: (...args: any[]) => void): number
    on(sigName: "notify::branch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::branch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::branch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::branch", ...args: any[]): void
    connect(sigName: "notify::collection-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::collection-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::collection-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::collection-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::collection-id", ...args: any[]): void
    connect(sigName: "notify::commit", callback: (...args: any[]) => void): number
    on(sigName: "notify::commit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::commit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::commit", ...args: any[]): void
    connect(sigName: "notify::kind", callback: (...args: any[]) => void): number
    on(sigName: "notify::kind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::kind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::kind", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class RelatedRef extends Ref {

    // Own properties of Flatpak-1.0.Flatpak.RelatedRef

    static name: string

    // Constructors of Flatpak-1.0.Flatpak.RelatedRef

    constructor(config?: RelatedRef.ConstructorProperties) 
    _init(config?: RelatedRef.ConstructorProperties): void
}

export module Remote {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Flatpak-1.0.Flatpak.Remote

        /**
         * Name of the remote, as used in configuration files and when interfacing
         * with OSTree. This is typically human readable, but could be generated, and
         * must conform to ostree_validate_remote_name(). It should typically not be
         * presented in the UI.
         */
        name?: string | null
        /**
         * The type of the remote: whether it comes from static configuration files
         * (`FLATPAK_REMOTE_TYPE_STATIC)` or has been dynamically found from the local
         * network or a mounted USB drive (`FLATPAK_REMOTE_TYPE_LAN,`
         * `FLATPAK_REMOTE_TYPE_USB)`. Dynamic remotes may be added and removed over
         * time.
         */
        type?: RemoteType | null
    }

}

export interface Remote {

    // Own properties of Flatpak-1.0.Flatpak.Remote

    /**
     * Name of the remote, as used in configuration files and when interfacing
     * with OSTree. This is typically human readable, but could be generated, and
     * must conform to ostree_validate_remote_name(). It should typically not be
     * presented in the UI.
     */
    name: string | null
    /**
     * The type of the remote: whether it comes from static configuration files
     * (`FLATPAK_REMOTE_TYPE_STATIC)` or has been dynamically found from the local
     * network or a mounted USB drive (`FLATPAK_REMOTE_TYPE_LAN,`
     * `FLATPAK_REMOTE_TYPE_USB)`. Dynamic remotes may be added and removed over
     * time.
     */
    readonly type: RemoteType
    __gtype__: number

    // Own fields of Flatpak-1.0.Flatpak.Remote

    parent: GObject.Object

    // Owm methods of Flatpak-1.0.Flatpak.Remote

    /**
     * Returns the directory where this remote will store locally cached
     * appstream information for the specified `arch`.
     * @param arch which architecture to fetch (default: current architecture)
     * @returns a #GFile
     */
    getAppstreamDir(arch: string | null): Gio.File
    /**
     * Returns the timestamp file that will be updated whenever the appstream information
     * has been updated (or tried to update) for the specified `arch`.
     * @param arch which architecture to fetch (default: current architecture)
     * @returns a #GFile
     */
    getAppstreamTimestamp(arch: string | null): Gio.File
    /**
     * Returns the repository collection ID of this remote, if set.
     * @returns the collection ID, or %NULL if unset
     */
    getCollectionId(): string | null
    /**
     * Returns the comment of the remote.
     * @returns the comment
     */
    getComment(): string | null
    /**
     * Returns the default branch configured for the remote.
     * @returns the default branch, or %NULL
     */
    getDefaultBranch(): string | null
    /**
     * Returns the description of the remote.
     * @returns the description
     */
    getDescription(): string | null
    /**
     * Returns whether this remote is disabled.
     * @returns whether the remote is marked as disabled
     */
    getDisabled(): boolean
    /**
     * Returns the filter file of the remote.
     * @returns a pathname to a filter file
     */
    getFilter(): string | null
    /**
     * Returns whether GPG verification is enabled for the remote.
     * @returns whether GPG verification is enabled
     */
    getGpgVerify(): boolean
    /**
     * Returns the homepage url of the remote.
     * @returns the homepage url
     */
    getHomepage(): string | null
    /**
     * Returns the icon url of the remote.
     * @returns the icon url
     */
    getIcon(): string | null
    /**
     * Returns the main ref of this remote, if set. The main ref is the ref that an
     * origin remote is created for.
     * @returns the main ref, or %NULL
     */
    getMainRef(): string | null
    /**
     * Returns the name of the remote repository.
     * @returns the name
     */
    getName(): string | null
    /**
     * Returns whether this remote should be used to find dependencies.
     * @returns whether the remote is marked as "don't use for dependencies"
     */
    getNodeps(): boolean
    /**
     * Returns whether this remote should be used to list applications.
     * @returns whether the remote is marked as "don't enumerate"
     */
    getNoenumerate(): boolean
    /**
     * Returns the priority for the remote.
     * @returns the priority
     */
    getPrio(): number
    /**
     * Get the value of #FlatpakRemote:type.
     * @returns the type of remote this is
     */
    getRemoteType(): RemoteType
    /**
     * Returns the title of the remote.
     * @returns the title
     */
    getTitle(): string | null
    /**
     * Returns the repository URL of this remote.
     * @returns the URL
     */
    getUrl(): string | null
    /**
     * Sets the repository collection ID of this remote.
     * 
     * Note: This is a local modification of this object, you must commit changes
     * using flatpak_installation_modify_remote() for the changes to take
     * effect.
     * @param collectionId The new collection ID, or %NULL to unset
     */
    setCollectionId(collectionId: string | null): void
    /**
     * Sets the comment of this remote.
     * 
     * Note: This is a local modification of this object, you must commit changes
     * using flatpak_installation_modify_remote() for the changes to take
     * effect.
     * @param comment The new comment
     */
    setComment(comment: string | null): void
    /**
     * Sets the default branch configured for this remote.
     * 
     * Note: This is a local modification of this object, you must commit changes
     * using flatpak_installation_modify_remote() for the changes to take
     * effect.
     * @param defaultBranch The new default_branch
     */
    setDefaultBranch(defaultBranch: string | null): void
    /**
     * Sets the description of this remote.
     * 
     * Note: This is a local modification of this object, you must commit changes
     * using flatpak_installation_modify_remote() for the changes to take
     * effect.
     * @param description The new description
     */
    setDescription(description: string | null): void
    /**
     * Sets the disabled config of this remote. See flatpak_remote_get_disabled().
     * 
     * Note: This is a local modification of this object, you must commit changes
     * using flatpak_installation_modify_remote() for the changes to take
     * effect.
     * @param disabled a bool
     */
    setDisabled(disabled: boolean): void
    /**
     * Sets a filter for this remote.
     * 
     * Note: This is a local modification of this object, you must commit changes
     * using flatpak_installation_modify_remote() for the changes to take
     * effect.
     * @param filterPath The pathname of the new filter file
     */
    setFilter(filterPath: string | null): void
    /**
     * Sets the trusted gpg key for this remote.
     * 
     * Note: This is a local modification of this object, you must commit changes
     * using flatpak_installation_modify_remote() for the changes to take
     * effect.
     * @param gpgKey a #GBytes with gpg binary key data
     */
    setGpgKey(gpgKey: any): void
    /**
     * Sets the gpg_verify config of this remote. See flatpak_remote_get_gpg_verify().
     * 
     * Note: This is a local modification of this object, you must commit changes
     * using flatpak_installation_modify_remote() for the changes to take
     * effect.
     * @param gpgVerify a bool
     */
    setGpgVerify(gpgVerify: boolean): void
    /**
     * Sets the homepage of this remote.
     * 
     * Note: This is a local modification of this object, you must commit changes
     * using flatpak_installation_modify_remote() for the changes to take
     * effect.
     * @param homepage The new homepage
     */
    setHomepage(homepage: string | null): void
    /**
     * Sets the homepage of this remote.
     * 
     * Note: This is a local modification of this object, you must commit changes
     * using flatpak_installation_modify_remote() for the changes to take
     * effect.
     * @param icon The new homepage
     */
    setIcon(icon: string | null): void
    /**
     * Sets the main ref of this remote. The main ref is the ref that an origin
     * remote is created for.
     * 
     * Note: This is a local modification of this object, you must commit changes
     * using flatpak_installation_modify_remote() for the changes to take
     * effect.
     * @param mainRef The new main ref
     */
    setMainRef(mainRef: string | null): void
    /**
     * Sets the nodeps config of this remote. See flatpak_remote_get_nodeps().
     * 
     * Note: This is a local modification of this object, you must commit changes
     * using flatpak_installation_modify_remote() for the changes to take
     * effect.
     * @param nodeps a bool
     */
    setNodeps(nodeps: boolean): void
    /**
     * Sets the noenumeration config of this remote. See flatpak_remote_get_noenumerate().
     * 
     * Note: This is a local modification of this object, you must commit changes
     * using flatpak_installation_modify_remote() for the changes to take
     * effect.
     * @param noenumerate a bool
     */
    setNoenumerate(noenumerate: boolean): void
    /**
     * Sets the prio config of this remote. See flatpak_remote_get_prio().
     * 
     * Note: This is a local modification of this object, you must commit changes
     * using flatpak_installation_modify_remote() for the changes to take
     * effect.
     * @param prio a bool
     */
    setPrio(prio: number): void
    /**
     * Sets the repository title of this remote.
     * 
     * Note: This is a local modification of this object, you must commit changes
     * using flatpak_installation_modify_remote() for the changes to take
     * effect.
     * @param title The new title
     */
    setTitle(title: string | null): void
    /**
     * Sets the repository URL of this remote.
     * 
     * Note: This is a local modification of this object, you must commit changes
     * using flatpak_installation_modify_remote() for the changes to take
     * effect.
     * @param url The new url
     */
    setUrl(url: string | null): void

    // Class property signals of Flatpak-1.0.Flatpak.Remote

    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::type", callback: (...args: any[]) => void): number
    on(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::type", ...args: any[]): void
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

export class Remote extends GObject.Object {

    // Own properties of Flatpak-1.0.Flatpak.Remote

    static name: string

    // Constructors of Flatpak-1.0.Flatpak.Remote

    constructor(config?: Remote.ConstructorProperties) 
    /**
     * Returns a new remote object which can be used to configure a new remote.
     * 
     * Note: This is a local configuration object, you must commit changes
     * using flatpak_installation_modify_remote() or flatpak_installation_add_remote() for the changes to take
     * effect.
     * @constructor 
     * @param name a name
     * @returns a new #FlatpakRemote
     */
    constructor(name: string | null) 
    /**
     * Returns a new remote object which can be used to configure a new remote.
     * 
     * Note: This is a local configuration object, you must commit changes
     * using flatpak_installation_modify_remote() or flatpak_installation_add_remote() for the changes to take
     * effect.
     * @constructor 
     * @param name a name
     * @returns a new #FlatpakRemote
     */
    static new(name: string | null): Remote
    /**
     * Returns a new pre-filled remote object which can be used to configure a new remote.
     * The fields in the remote are filled in according to the values in the
     * passed in flatpakrepo file.
     * 
     * Note: This is a local configuration object, you must commit changes
     * using flatpak_installation_modify_remote()  or flatpak_installation_add_remote() for the changes to take
     * effect.
     * @constructor 
     * @param name a name
     * @param data The content of a flatpakrepo file
     * @returns a new #FlatpakRemote, or %NULL on error
     */
    static newFromFile(name: string | null, data: any): Remote
    _init(config?: Remote.ConstructorProperties): void
}

export module RemoteRef {

    // Constructor properties interface

    export interface ConstructorProperties extends Ref.ConstructorProperties {

        // Own constructor properties of Flatpak-1.0.Flatpak.RemoteRef

        downloadSize?: number | null
        endOfLife?: string | null
        endOfLifeRebase?: string | null
        installedSize?: number | null
        metadata?: any | null
        remoteName?: string | null
    }

}

export interface RemoteRef {

    // Own properties of Flatpak-1.0.Flatpak.RemoteRef

    readonly downloadSize: number
    readonly endOfLife: string | null
    readonly endOfLifeRebase: string | null
    readonly installedSize: number
    readonly metadata: any
    readonly remoteName: string | null
    __gtype__: number

    // Own fields of Flatpak-1.0.Flatpak.RemoteRef

    parent: Ref & GObject.Object

    // Owm methods of Flatpak-1.0.Flatpak.RemoteRef

    /**
     * Returns the download size of the ref.
     * @returns the download size
     */
    getDownloadSize(): number
    /**
     * Returns the end-of-life reason string, or %NULL if the
     * ref is not end-of-lifed.
     * @returns the end-of-life reason or %NULL
     */
    getEol(): string | null
    /**
     * Returns the end-of-life rebased ref, or %NULL if the
     * ref is not end-of-lifed.
     * @returns the end-of-life rebased ref or %NULL
     */
    getEolRebase(): string | null
    /**
     * Returns the installed size of the ref.
     * @returns the installed size
     */
    getInstalledSize(): number
    /**
     * Returns the app metadata from the metadata cache of the ref.
     * @returns a #GBytes with the metadata file contents or %NULL
     */
    getMetadata(): any | null
    /**
     * Gets the remote name of the ref.
     * @returns the remote name
     */
    getRemoteName(): string | null

    // Class property signals of Flatpak-1.0.Flatpak.RemoteRef

    connect(sigName: "notify::download-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::download-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::download-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::download-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::download-size", ...args: any[]): void
    connect(sigName: "notify::end-of-life", callback: (...args: any[]) => void): number
    on(sigName: "notify::end-of-life", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::end-of-life", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::end-of-life", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::end-of-life", ...args: any[]): void
    connect(sigName: "notify::end-of-life-rebase", callback: (...args: any[]) => void): number
    on(sigName: "notify::end-of-life-rebase", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::end-of-life-rebase", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::end-of-life-rebase", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::end-of-life-rebase", ...args: any[]): void
    connect(sigName: "notify::installed-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::installed-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::installed-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::installed-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::installed-size", ...args: any[]): void
    connect(sigName: "notify::metadata", callback: (...args: any[]) => void): number
    on(sigName: "notify::metadata", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::metadata", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::metadata", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::metadata", ...args: any[]): void
    connect(sigName: "notify::remote-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::remote-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::remote-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::remote-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::remote-name", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::arch", callback: (...args: any[]) => void): number
    on(sigName: "notify::arch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::arch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::arch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::arch", ...args: any[]): void
    connect(sigName: "notify::branch", callback: (...args: any[]) => void): number
    on(sigName: "notify::branch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::branch", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::branch", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::branch", ...args: any[]): void
    connect(sigName: "notify::collection-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::collection-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::collection-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::collection-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::collection-id", ...args: any[]): void
    connect(sigName: "notify::commit", callback: (...args: any[]) => void): number
    on(sigName: "notify::commit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::commit", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::commit", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::commit", ...args: any[]): void
    connect(sigName: "notify::kind", callback: (...args: any[]) => void): number
    on(sigName: "notify::kind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::kind", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::kind", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::kind", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

export class RemoteRef extends Ref {

    // Own properties of Flatpak-1.0.Flatpak.RemoteRef

    static name: string

    // Constructors of Flatpak-1.0.Flatpak.RemoteRef

    constructor(config?: RemoteRef.ConstructorProperties) 
    _init(config?: RemoteRef.ConstructorProperties): void
}

export module Transaction {

    // Signal callback interfaces

    /**
     * Signal callback interface for `add-new-remote`
     */
    export interface AddNewRemoteSignalCallback {
        (reason: TransactionRemoteReason, fromId: string | null, suggestedRemoteName: string | null, url: string | null): boolean
    }

    /**
     * Signal callback interface for `basic-auth-start`
     */
    export interface BasicAuthStartSignalCallback {
        (remote: string | null, realm: string | null, options: GLib.Variant, id: number): boolean
    }

    /**
     * Signal callback interface for `choose-remote-for-ref`
     */
    export interface ChooseRemoteForRefSignalCallback {
        (forRef: string | null, runtimeRef: string | null, remotes: string[]): number
    }

    /**
     * Signal callback interface for `end-of-lifed`
     */
    export interface EndOfLifedSignalCallback {
        (ref: string | null, reason: string | null, rebase: string | null): void
    }

    /**
     * Signal callback interface for `end-of-lifed-with-rebase`
     */
    export interface EndOfLifedWithRebaseSignalCallback {
        (remote: string | null, ref: string | null, reason: string | null, rebasedToRef: string | null, previousIds: string[]): boolean
    }

    /**
     * Signal callback interface for `install-authenticator`
     */
    export interface InstallAuthenticatorSignalCallback {
        (remote: string | null, authenticatorRef: string | null): void
    }

    /**
     * Signal callback interface for `new-operation`
     */
    export interface NewOperationSignalCallback {
        (operation: TransactionOperation, progress: TransactionProgress): void
    }

    /**
     * Signal callback interface for `operation-done`
     */
    export interface OperationDoneSignalCallback {
        (operation: TransactionOperation, commit: string | null, result: TransactionResult): void
    }

    /**
     * Signal callback interface for `operation-error`
     */
    export interface OperationErrorSignalCallback {
        (operation: TransactionOperation, error: GLib.Error, details: TransactionErrorDetails): boolean
    }

    /**
     * Signal callback interface for `ready`
     */
    export interface ReadySignalCallback {
        (): boolean
    }

    /**
     * Signal callback interface for `webflow-done`
     */
    export interface WebflowDoneSignalCallback {
        (options: GLib.Variant, id: number): void
    }

    /**
     * Signal callback interface for `webflow-start`
     */
    export interface WebflowStartSignalCallback {
        (remote: string | null, url: string | null, options: GLib.Variant, id: number): boolean
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Flatpak-1.0.Flatpak.Transaction

        /**
         * The installation that the transaction operates on.
         */
        installation?: Installation | null
    }

}

export interface Transaction extends Gio.Initable {

    // Own properties of Flatpak-1.0.Flatpak.Transaction

    /**
     * The installation that the transaction operates on.
     */
    readonly installation: Installation
    __gtype__: number

    // Own fields of Flatpak-1.0.Flatpak.Transaction

    parentInstance: GObject.Object

    // Owm methods of Flatpak-1.0.Flatpak.Transaction

    /**
     * Cancel an ongoing webflow authentication request. This can be call
     * in the time between #FlatpakTransaction::webflow-start returned
     * %TRUE, and #FlatpakTransaction::webflow-done is emitted. It will
     * cancel the ongoing authentication operation.
     * 
     * This is useful for example if you're showing an authenticaion
     * window with a browser, but the user closed it before it was finished.
     * @param id The webflow id, as passed into the webflow-start signal
     */
    abortWebflow(id: number): void
    /**
     * Similar to flatpak_transaction_add_dependency_source(), but adds
     * all the default installations, which means all the defined system-wide
     * (but not per-user) installations.
     */
    addDefaultDependencySources(): void
    /**
     * Adds an extra installation as a source for application dependencies.
     * This means that applications can be installed in this transaction relying
     * on runtimes from this additional installation (whereas it would normally
     * install required runtimes that are not installed in the installation
     * the transaction works on).
     * 
     * Also see flatpak_transaction_add_default_dependency_sources().
     * @param installation a #FlatpakInstallation
     */
    addDependencySource(installation: Installation): void
    /**
     * Adds installing the given ref to this transaction.
     * 
     * The `remote` can either be a configured remote of the installation,
     * or a file:// uri pointing at a local repository to install from,
     * in which case an origin remote is created.
     * @param remote the name of the remote
     * @param ref the ref
     * @param subpaths subpaths to install, or the  empty list or %NULL to pull all subpaths
     * @returns %TRUE on success; %FALSE with @error set on failure.
     */
    addInstall(remote: string | null, ref: string | null, subpaths: string[] | null): boolean
    /**
     * Adds installing the given bundle to this transaction.
     * @param file a #GFile that is an flatpak bundle
     * @param gpgData GPG key with which to check bundle signatures, or  %NULL to use the key embedded in the bundle (if any)
     * @returns %TRUE on success; %FALSE with @error set on failure.
     */
    addInstallBundle(file: Gio.File, gpgData: any | null): boolean
    /**
     * Adds installing the given flatpakref to this transaction.
     * @param flatpakrefData data from a flatpakref file
     * @returns %TRUE on success; %FALSE with @error set on failure.
     */
    addInstallFlatpakref(flatpakrefData: any): boolean
    /**
     * Adds updating the `previous_ids` of the given ref to this transaction, via either
     * installing the `ref` if it was not already present. The will treat `ref` as the
     * result of following an eol-rebase, and data migration from the refs in
     * `previous_ids` will be set up.
     * 
     * See flatpak_transaction_add_install() for a description of `remote`.
     * @param remote the name of the remote
     * @param ref the ref
     * @param subpaths the subpaths to include, or %NULL to install the complete ref
     * @param previousIds Previous ids to add to the     given ref. These should simply be the ids, not the full ref names (e.g. org.foo.Bar,     not org.foo.Bar/x86_64/master).
     * @returns %TRUE on success; %FALSE with @error set on failure.
     */
    addRebase(remote: string | null, ref: string | null, subpaths: string | null, previousIds: string[] | null): boolean
    /**
     * Adds an extra local ostree repo as source for installation. This is
     * equivalent to using the sideload-repos directories (see flatpak(1)), but can
     * be done dynamically. Any path added here is used in addition to ones in
     * those directories.
     * @param path a path to a local flatpak repository
     */
    addSideloadRepo(path: string | null): void
    /**
     * Adds uninstalling the given ref to this transaction.
     * @param ref the ref
     * @returns %TRUE on success; %FALSE with @error set on failure.
     */
    addUninstall(ref: string | null): boolean
    /**
     * Adds updating the given ref to this transaction.
     * @param ref the ref
     * @param subpaths subpaths to install; %NULL  to use the current set plus the set of configured languages, or  `{ "", NULL }` to pull all subpaths.
     * @param commit the commit to update to, or %NULL to use the latest
     * @returns %TRUE on success; %FALSE with @error set on failure.
     */
    addUpdate(ref: string | null, subpaths: string[] | null, commit: string | null): boolean
    /**
     * Finishes (or aborts) an ongoing basic auth request.
     * @param id The webflow id, as passed into the webflow-start signal
     * @param user The user name, or %NULL if aborting request
     * @param password The password
     * @param options Extra a{sv] variant with options (or %NULL), currently unused.
     */
    completeBasicAuth(id: number, user: string | null, password: string | null, options: GLib.Variant): void
    /**
     * Gets the current operation.
     * @returns the current #FlatpakTransactionOperation
     */
    getCurrentOperation(): TransactionOperation
    /**
     * Gets the installation this transaction was created for.
     * @returns a #FlatpakInstallation
     */
    getInstallation(): Installation
    /**
     * Gets whether the transaction is only downloading updates,
     * and not deploying them.
     * @returns %TRUE if no_deploy is set, %FALSE otherwise
     */
    getNoDeploy(): boolean
    /**
     * Gets whether the transaction should operate only on locally
     * available data.
     * @returns %TRUE if no_pull is set, %FALSE otherwise
     */
    getNoPull(): boolean
    /**
     * Gets the list of operations. Skipped operations are not included.
     * @returns a #GList of operations
     */
    getOperations(): TransactionOperation[]
    /**
     * Gets the parent window set for this transaction, or %NULL if unset. See
     * flatpak_transaction_get_parent_window().
     * @returns a window name, or %NULL
     */
    getParentWindow(): string | null
    /**
     * Returns whether the transaction contains any non-skipped operations.
     * @returns %TRUE if the transaction is empty
     */
    isEmpty(): boolean
    // Has conflict: run(cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets the architecture to default to where it is unspecified.
     * @param arch the arch to make default
     */
    setDefaultArch(arch: string | null): void
    /**
     * Sets whether the transaction should ignore runtime dependencies
     * when resolving operations for applications.
     * @param disableDependencies whether to disable runtime dependencies
     */
    setDisableDependencies(disableDependencies: boolean): void
    /**
     * Sets whether the transaction should avoid pruning the local OSTree
     * repository after updating.
     * @param disablePrune whether to avoid pruning
     */
    setDisablePrune(disablePrune: boolean): void
    /**
     * Sets whether the transaction should avoid adding related refs
     * when resolving operations. Related refs are extensions that are
     * suggested by apps, such as locales.
     * @param disableRelated whether to avoid adding related refs
     */
    setDisableRelated(disableRelated: boolean): void
    /**
     * Sets whether the transaction should avoid using static
     * deltas when pulling.
     * @param disableStaticDeltas whether to avoid static deltas
     */
    setDisableStaticDeltas(disableStaticDeltas: boolean): void
    /**
     * Sets whether the transaction should uninstall files even
     * if they're used by a running application.
     * @param forceUninstall whether to force-uninstall refs
     */
    setForceUninstall(forceUninstall: boolean): void
    /**
     * Sets whether the transaction should download updates, but
     * not deploy them.
     * @param noDeploy whether to avoid deploying
     */
    setNoDeploy(noDeploy: boolean): void
    /**
     * This method can be used to prevent interactive authorization dialogs to appear
     * for operations on `self`. This is useful for background operations that are not
     * directly triggered by a user action.
     * 
     * By default, the setting from the parent #FlatpakInstallation is used.
     * @param noInteraction Whether to disallow interactive authorization for operations
     */
    setNoInteraction(noInteraction: boolean): void
    /**
     * Sets whether the transaction should operate only on locally
     * available data.
     * @param noPull whether to avoid pulls
     */
    setNoPull(noPull: boolean): void
    /**
     * Sets the parent window (if any) to use for any UI show by this transaction.
     * This is used by authenticators if they need to interact with the user during
     * authentication.
     * 
     * The format of this string depends on the display system in use, and is the
     * same as used by xdg-desktop-portal.
     * 
     * On X11 it should be of the form x11:$xid where $xid is the hex
     * version of the xwindows id.
     * 
     * On wayland is should be wayland:$handle where handle is gotten by
     * using the export call of the xdg-foreign-unstable wayland extension.
     * @param parentWindow whether to avoid pulls
     */
    setParentWindow(parentWindow: string | null): void
    /**
     * Sets whether the transaction should uninstall first if a
     * ref is already installed.
     * @param reinstall whether to reinstall refs
     */
    setReinstall(reinstall: boolean): void

    // Own virtual methods of Flatpak-1.0.Flatpak.Transaction

    addNewRemote(reason: TransactionRemoteReason, fromId: string | null, remoteName: string | null, url: string | null): boolean
    basicAuthStart(remote: string | null, realm: string | null, options: GLib.Variant, id: number): boolean
    chooseRemoteForRef(forRef: string | null, runtimeRef: string | null, remotes: string | null): number
    endOfLifed(ref: string | null, reason: string | null, rebase: string | null): void
    endOfLifedWithRebase(remote: string | null, ref: string | null, reason: string | null, rebasedToRef: string | null, previousIds: string | null): boolean
    installAuthenticator(remote: string | null, authenticatorRef: string | null): void
    newOperation(operation: TransactionOperation, progress: TransactionProgress): void
    operationDone(operation: TransactionOperation, commit: string | null, details: TransactionResult): void
    operationError(operation: TransactionOperation, error: GLib.Error, detail: TransactionErrorDetails): boolean
    ready(): boolean
    /**
     * Executes the transaction.
     * 
     * During the course of the execution, various signals will get emitted.
     * The FlatpakTransaction::choose-remote-for-ref  and
     * #FlatpakTransaction::add-new-remote signals may get emitted while
     * resolving operations. #FlatpakTransaction::ready is emitted when
     * the transaction has been fully resolved, and #FlatpakTransaction::new-operation
     * and #FlatpakTransaction::operation-done are emitted while the operations
     * are carried out. If an error occurs at any point during the execution,
     * #FlatpakTransaction::operation-error is emitted.
     * 
     * Note that this call blocks until the transaction is done.
     * @virtual 
     * @param cancellable a #GCancellable
     * @returns %TRUE on success, %FALSE if an error occurred
     */
    run(cancellable: Gio.Cancellable | null): boolean
    webflowDone(options: GLib.Variant, id: number): void
    webflowStart(remote: string | null, url: string | null, options: GLib.Variant, id: number): boolean

    // Own signals of Flatpak-1.0.Flatpak.Transaction

    connect(sigName: "add-new-remote", callback: Transaction.AddNewRemoteSignalCallback): number
    on(sigName: "add-new-remote", callback: Transaction.AddNewRemoteSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "add-new-remote", callback: Transaction.AddNewRemoteSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "add-new-remote", callback: Transaction.AddNewRemoteSignalCallback): NodeJS.EventEmitter
    emit(sigName: "add-new-remote", fromId: string | null, suggestedRemoteName: string | null, url: string | null, ...args: any[]): void
    connect(sigName: "basic-auth-start", callback: Transaction.BasicAuthStartSignalCallback): number
    on(sigName: "basic-auth-start", callback: Transaction.BasicAuthStartSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "basic-auth-start", callback: Transaction.BasicAuthStartSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "basic-auth-start", callback: Transaction.BasicAuthStartSignalCallback): NodeJS.EventEmitter
    emit(sigName: "basic-auth-start", realm: string | null, options: GLib.Variant, id: number, ...args: any[]): void
    connect(sigName: "choose-remote-for-ref", callback: Transaction.ChooseRemoteForRefSignalCallback): number
    on(sigName: "choose-remote-for-ref", callback: Transaction.ChooseRemoteForRefSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "choose-remote-for-ref", callback: Transaction.ChooseRemoteForRefSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "choose-remote-for-ref", callback: Transaction.ChooseRemoteForRefSignalCallback): NodeJS.EventEmitter
    emit(sigName: "choose-remote-for-ref", runtimeRef: string | null, remotes: string[], ...args: any[]): void
    connect(sigName: "end-of-lifed", callback: Transaction.EndOfLifedSignalCallback): number
    on(sigName: "end-of-lifed", callback: Transaction.EndOfLifedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "end-of-lifed", callback: Transaction.EndOfLifedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "end-of-lifed", callback: Transaction.EndOfLifedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "end-of-lifed", reason: string | null, rebase: string | null, ...args: any[]): void
    connect(sigName: "end-of-lifed-with-rebase", callback: Transaction.EndOfLifedWithRebaseSignalCallback): number
    on(sigName: "end-of-lifed-with-rebase", callback: Transaction.EndOfLifedWithRebaseSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "end-of-lifed-with-rebase", callback: Transaction.EndOfLifedWithRebaseSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "end-of-lifed-with-rebase", callback: Transaction.EndOfLifedWithRebaseSignalCallback): NodeJS.EventEmitter
    emit(sigName: "end-of-lifed-with-rebase", ref: string | null, reason: string | null, rebasedToRef: string | null, previousIds: string[], ...args: any[]): void
    connect(sigName: "install-authenticator", callback: Transaction.InstallAuthenticatorSignalCallback): number
    on(sigName: "install-authenticator", callback: Transaction.InstallAuthenticatorSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "install-authenticator", callback: Transaction.InstallAuthenticatorSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "install-authenticator", callback: Transaction.InstallAuthenticatorSignalCallback): NodeJS.EventEmitter
    emit(sigName: "install-authenticator", authenticatorRef: string | null, ...args: any[]): void
    connect(sigName: "new-operation", callback: Transaction.NewOperationSignalCallback): number
    on(sigName: "new-operation", callback: Transaction.NewOperationSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-operation", callback: Transaction.NewOperationSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-operation", callback: Transaction.NewOperationSignalCallback): NodeJS.EventEmitter
    emit(sigName: "new-operation", progress: TransactionProgress, ...args: any[]): void
    connect(sigName: "operation-done", callback: Transaction.OperationDoneSignalCallback): number
    on(sigName: "operation-done", callback: Transaction.OperationDoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "operation-done", callback: Transaction.OperationDoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "operation-done", callback: Transaction.OperationDoneSignalCallback): NodeJS.EventEmitter
    emit(sigName: "operation-done", commit: string | null, result: TransactionResult, ...args: any[]): void
    connect(sigName: "operation-error", callback: Transaction.OperationErrorSignalCallback): number
    on(sigName: "operation-error", callback: Transaction.OperationErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "operation-error", callback: Transaction.OperationErrorSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "operation-error", callback: Transaction.OperationErrorSignalCallback): NodeJS.EventEmitter
    emit(sigName: "operation-error", error: GLib.Error, details: TransactionErrorDetails, ...args: any[]): void
    connect(sigName: "ready", callback: Transaction.ReadySignalCallback): number
    on(sigName: "ready", callback: Transaction.ReadySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "ready", callback: Transaction.ReadySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "ready", callback: Transaction.ReadySignalCallback): NodeJS.EventEmitter
    emit(sigName: "ready", ...args: any[]): void
    connect(sigName: "webflow-done", callback: Transaction.WebflowDoneSignalCallback): number
    on(sigName: "webflow-done", callback: Transaction.WebflowDoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "webflow-done", callback: Transaction.WebflowDoneSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "webflow-done", callback: Transaction.WebflowDoneSignalCallback): NodeJS.EventEmitter
    emit(sigName: "webflow-done", id: number, ...args: any[]): void
    connect(sigName: "webflow-start", callback: Transaction.WebflowStartSignalCallback): number
    on(sigName: "webflow-start", callback: Transaction.WebflowStartSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "webflow-start", callback: Transaction.WebflowStartSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "webflow-start", callback: Transaction.WebflowStartSignalCallback): NodeJS.EventEmitter
    emit(sigName: "webflow-start", url: string | null, options: GLib.Variant, id: number, ...args: any[]): void

    // Class property signals of Flatpak-1.0.Flatpak.Transaction

    connect(sigName: "notify::installation", callback: (...args: any[]) => void): number
    on(sigName: "notify::installation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::installation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::installation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::installation", ...args: any[]): void
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

export class Transaction extends GObject.Object {

    // Own properties of Flatpak-1.0.Flatpak.Transaction

    static name: string

    // Constructors of Flatpak-1.0.Flatpak.Transaction

    constructor(config?: Transaction.ConstructorProperties) 
    /**
     * Creates a new #FlatpakTransaction object that can be used to do installation
     * and updates of multiple refs, as well as their dependencies, in a single
     * operation. Set the options you want on the transaction and add the
     * refs you want to install/update, then start the transaction with
     * flatpak_transaction_run ().
     * @constructor 
     * @param installation a #FlatpakInstallation
     * @param cancellable a #GCancellable
     * @returns a #FlatpakTransaction, or %NULL on failure.
     */
    static newForInstallation(installation: Installation, cancellable: Gio.Cancellable | null): Transaction
    _init(config?: Transaction.ConstructorProperties): void
}

export module TransactionOperation {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface TransactionOperation {

    // Own properties of Flatpak-1.0.Flatpak.TransactionOperation

    __gtype__: number

    // Owm methods of Flatpak-1.0.Flatpak.TransactionOperation

    /**
     * Gets the path to the bundle.
     * @returns the bundle #GFile or %NULL
     */
    getBundlePath(): Gio.File
    /**
     * Gets the commit ID for the operation.
     * 
     * This information is available when the transaction is resolved,
     * i.e. when #FlatpakTransaction::ready is emitted.
     * @returns the commit ID
     */
    getCommit(): string | null
    /**
     * Gets the maximum download size for the operation.
     * 
     * Note that this does not include the size of dependencies, and
     * the actual download may be smaller, if some of the data is already
     * available locally.
     * 
     * For uninstall operations, this returns 0.
     * 
     * This information is available when the transaction is resolved,
     * i.e. when #FlatpakTransaction::ready is emitted.
     * @returns the download size, in bytes
     */
    getDownloadSize(): number
    /**
     * Gets the installed size for the operation.
     * 
     * Note that even for a new install, the extra space required on
     * disk may be smaller than this number, if some of the data is already
     * available locally.
     * 
     * For uninstall operations, this returns 0.
     * 
     * This information is available when the transaction is resolved,
     * i.e. when #FlatpakTransaction::ready is emitted.
     * @returns the installed size, in bytes
     */
    getInstalledSize(): number
    /**
     * Gets whether this operation will be skipped when the transaction is run.
     * Operations are skipped in some transaction situations, for example when an
     * app has reached end of life and needs a rebase, or when it would have been
     * updated but no update is available. By default, skipped
     * operations are not returned by flatpak_transaction_get_operations() — but
     * they can be accessed by traversing the operation graph using
     * flatpak_transaction_operation_get_related_to_ops().
     * @returns %TRUE if the operation has been marked as to skip, %FALSE otherwise
     */
    getIsSkipped(): boolean
    /**
     * Gets the metadata that will be applicable when the
     * operation is done.
     * 
     * This can be compared to the current metadata returned
     * by flatpak_transaction_operation_get_old_metadata()
     * to find new required permissions and similar changes.
     * 
     * This information is available when the transaction is resolved,
     * i.e. when #FlatpakTransaction::ready is emitted.
     * @returns the metadata #GKeyFile
     */
    getMetadata(): GLib.KeyFile
    /**
     * Gets the metadata current metadata for the ref that `self` works on.
     * Also see flatpak_transaction_operation_get_metadata().
     * 
     * This information is available when the transaction is resolved,
     * i.e. when #FlatpakTransaction::ready is emitted.
     * @returns the old metadata #GKeyFile
     */
    getOldMetadata(): GLib.KeyFile
    /**
     * Gets the type of the operation.
     * @returns the type of operation, as #FlatpakTransactionOperationType
     */
    getOperationType(): TransactionOperationType
    /**
     * Gets the ref that the operation applies to.
     * @returns the ref
     */
    getRef(): string | null
    /**
     * Gets the operations which caused this operation to be added to the
     * transaction. In the case of a runtime, it's the apps whose runtime it is (and
     * this could be multiple apps, if they all require the same runtime). In
     * the case of a related ref such as an extension, it's the main app or
     * runtime. In the case of a main app or something added to the transaction by
     * flatpak_transaction_add_ref(), %NULL or an empty array will be returned.
     * 
     * Note that an op will be returned even if it’s marked as to be skipped when
     * the transaction is run. Check that using
     * flatpak_transaction_operation_get_is_skipped().
     * 
     * Elements in the returned array are only safe to access while the parent
     * #FlatpakTransaction is alive.
     * @returns the   #FlatpakTransactionOperations this one is related to (may be %NULL or an   empty array, which are equivalent)
     */
    getRelatedToOps(): TransactionOperation[] | null
    /**
     * Gets the remote that the operation applies to.
     * @returns the remote
     */
    getRemote(): string | null

    // Class property signals of Flatpak-1.0.Flatpak.TransactionOperation

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

export class TransactionOperation extends GObject.Object {

    // Own properties of Flatpak-1.0.Flatpak.TransactionOperation

    static name: string

    // Constructors of Flatpak-1.0.Flatpak.TransactionOperation

    constructor(config?: TransactionOperation.ConstructorProperties) 
    _init(config?: TransactionOperation.ConstructorProperties): void
}

export module TransactionProgress {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface TransactionProgress {

    // Own properties of Flatpak-1.0.Flatpak.TransactionProgress

    __gtype__: number

    // Owm methods of Flatpak-1.0.Flatpak.TransactionProgress

    /**
     * Gets the number of bytes that have been transferred.
     * @returns the number of bytes transferred
     */
    getBytesTransferred(): number
    /**
     * Gets whether the progress is currently estimating
     * @returns whether we're estimating
     */
    getIsEstimating(): boolean
    /**
     * Gets the current progress.
     * @returns the current progress, as an integer between 0 and 100
     */
    getProgress(): number
    /**
     * Gets the time at which this operation has started, as monotonic time.
     * @returns the start time
     */
    getStartTime(): number
    /**
     * Gets the current status string
     * @returns the current status
     */
    getStatus(): string | null
    /**
     * Sets how often progress should be updated.
     * @param updateInterval the update interval, in milliseconds
     */
    setUpdateFrequency(updateInterval: number): void

    // Own signals of Flatpak-1.0.Flatpak.TransactionProgress

    connect(sigName: "changed", callback: TransactionProgress.ChangedSignalCallback): number
    on(sigName: "changed", callback: TransactionProgress.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: TransactionProgress.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: TransactionProgress.ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of Flatpak-1.0.Flatpak.TransactionProgress

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

export class TransactionProgress extends GObject.Object {

    // Own properties of Flatpak-1.0.Flatpak.TransactionProgress

    static name: string

    // Constructors of Flatpak-1.0.Flatpak.TransactionProgress

    constructor(config?: TransactionProgress.ConstructorProperties) 
    _init(config?: TransactionProgress.ConstructorProperties): void
}

export interface BundleRefClass {

    // Own fields of Flatpak-1.0.Flatpak.BundleRefClass

    parentClass: RefClass
}

export abstract class BundleRefClass {

    // Own properties of Flatpak-1.0.Flatpak.BundleRefClass

    static name: string
}

export interface InstallationClass {

    // Own fields of Flatpak-1.0.Flatpak.InstallationClass

    parentClass: GObject.ObjectClass
}

export abstract class InstallationClass {

    // Own properties of Flatpak-1.0.Flatpak.InstallationClass

    static name: string
}

export interface InstalledRefClass {

    // Own fields of Flatpak-1.0.Flatpak.InstalledRefClass

    parentClass: RefClass
}

export abstract class InstalledRefClass {

    // Own properties of Flatpak-1.0.Flatpak.InstalledRefClass

    static name: string
}

export interface InstanceClass {

    // Own fields of Flatpak-1.0.Flatpak.InstanceClass

    parentClass: GObject.ObjectClass
}

export abstract class InstanceClass {

    // Own properties of Flatpak-1.0.Flatpak.InstanceClass

    static name: string
}

export interface RefClass {

    // Own fields of Flatpak-1.0.Flatpak.RefClass

    parentClass: GObject.ObjectClass
}

export abstract class RefClass {

    // Own properties of Flatpak-1.0.Flatpak.RefClass

    static name: string
}

export interface RelatedRefClass {

    // Own fields of Flatpak-1.0.Flatpak.RelatedRefClass

    parentClass: RefClass
}

export abstract class RelatedRefClass {

    // Own properties of Flatpak-1.0.Flatpak.RelatedRefClass

    static name: string
}

export interface RemoteClass {

    // Own fields of Flatpak-1.0.Flatpak.RemoteClass

    parentClass: GObject.ObjectClass
}

export abstract class RemoteClass {

    // Own properties of Flatpak-1.0.Flatpak.RemoteClass

    static name: string
}

export interface RemoteRefClass {

    // Own fields of Flatpak-1.0.Flatpak.RemoteRefClass

    parentClass: RefClass
}

export abstract class RemoteRefClass {

    // Own properties of Flatpak-1.0.Flatpak.RemoteRefClass

    static name: string
}

export interface TransactionClass {

    // Own fields of Flatpak-1.0.Flatpak.TransactionClass

    parentClass: GObject.ObjectClass
    newOperation: (transaction: Transaction, operation: TransactionOperation, progress: TransactionProgress) => void
    operationDone: (transaction: Transaction, operation: TransactionOperation, commit: string | null, details: TransactionResult) => void
    operationError: (transaction: Transaction, operation: TransactionOperation, error: GLib.Error, detail: TransactionErrorDetails) => boolean
    chooseRemoteForRef: (transaction: Transaction, forRef: string | null, runtimeRef: string | null, remotes: string | null) => number
    endOfLifed: (transaction: Transaction, ref: string | null, reason: string | null, rebase: string | null) => void
    ready: (transaction: Transaction) => boolean
    addNewRemote: (transaction: Transaction, reason: TransactionRemoteReason, fromId: string | null, remoteName: string | null, url: string | null) => boolean
    run: (transaction: Transaction, cancellable: Gio.Cancellable | null) => boolean
    endOfLifedWithRebase: (transaction: Transaction, remote: string | null, ref: string | null, reason: string | null, rebasedToRef: string | null, previousIds: string | null) => boolean
    webflowStart: (transaction: Transaction, remote: string | null, url: string | null, options: GLib.Variant, id: number) => boolean
    webflowDone: (transaction: Transaction, options: GLib.Variant, id: number) => void
    basicAuthStart: (transaction: Transaction, remote: string | null, realm: string | null, options: GLib.Variant, id: number) => boolean
    installAuthenticator: (transaction: Transaction, remote: string | null, authenticatorRef: string | null) => void
    padding: any[]
}

export abstract class TransactionClass {

    // Own properties of Flatpak-1.0.Flatpak.TransactionClass

    static name: string
}

export interface TransactionOperationClass {

    // Own fields of Flatpak-1.0.Flatpak.TransactionOperationClass

    parentClass: GObject.ObjectClass
}

export abstract class TransactionOperationClass {

    // Own properties of Flatpak-1.0.Flatpak.TransactionOperationClass

    static name: string
}

export interface TransactionProgressClass {

    // Own fields of Flatpak-1.0.Flatpak.TransactionProgressClass

    parentClass: GObject.ObjectClass
}

export abstract class TransactionProgressClass {

    // Own properties of Flatpak-1.0.Flatpak.TransactionProgressClass

    static name: string
}
