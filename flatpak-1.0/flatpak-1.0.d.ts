/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './flatpak-1.0-ambient.d.ts';
import './flatpak-1.0-import.d.ts';
/**
 * Flatpak-1.0
 */

import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Flatpak {
    /**
     * Error codes for library functions.
     */
    class Error extends GLib.Error {
        // Own fields of Flatpak-1.0.Error

        /**
         * App/runtime is already installed
         */
        ALREADY_INSTALLED: number;
        /**
         * App/runtime is not installed
         */
        NOT_INSTALLED: number;
        /**
         * App/runtime was only pulled into the local
         *                             repository but not installed.
         */
        ONLY_PULLED: number;
        /**
         * The App/Runtime is already installed, but from a different remote.
         */
        DIFFERENT_REMOTE: number;
        /**
         * The transaction was aborted (returned %TRUE in operation-error signal).
         */
        ABORTED: number;
        /**
         * The App/Runtime install was skipped due to earlier errors.
         */
        SKIPPED: number;
        /**
         * The App/Runtime needs a more recent version of flatpak.
         */
        NEED_NEW_FLATPAK: number;
        /**
         * The specified remote was not found.
         */
        REMOTE_NOT_FOUND: number;
        /**
         * A runtime needed for the app was not found.
         */
        RUNTIME_NOT_FOUND: number;
        /**
         * The pulled commit is a downgrade, and a downgrade wasn't
         *                           specifically allowed. (Since: 1.0)
         */
        DOWNGRADE: number;
        /**
         * A ref could not be parsed. (Since: 1.0.3)
         */
        INVALID_REF: number;
        /**
         * Invalid data. (Since: 1.0.3)
         */
        INVALID_DATA: number;
        /**
         * Missing GPG key or signature. (Since: 1.0.3)
         */
        UNTRUSTED: number;
        /**
         * Sandbox setup failed. (Since: 1.0.3)
         */
        SETUP_FAILED: number;
        /**
         * Exporting data failed. (Since: 1.0.3)
         */
        EXPORT_FAILED: number;
        /**
         * Remote can't be uninstalled. (Since: 1.0.3)
         */
        REMOTE_USED: number;
        /**
         * Runtime can't be uninstalled. (Since: 1.0.3)
         */
        RUNTIME_USED: number;
        /**
         * Application, runtime or remote name is invalid. (Since: 1.0.3)
         */
        INVALID_NAME: number;
        /**
         * More disk space needed. (Since: 1.2.0)
         */
        OUT_OF_SPACE: number;
        /**
         * An operation is being attempted by the wrong user (such as
         *                            root operating on a user installation). (Since: 1.2.0)
         */
        WRONG_USER: number;
        /**
         * Cached data was requested, but it was not available. (Since: 1.4.0)
         */
        NOT_CACHED: number;
        /**
         * The specified ref was not found. (Since: 1.4.0)
         */
        REF_NOT_FOUND: number;
        /**
         * An operation was not allowed by the administrative policy.
         *                                   For example, an app is not allowed to be installed due
         *                                   to not complying with the parental controls policy. (Since: 1.5.1)
         */
        PERMISSION_DENIED: number;
        /**
         * An authentication operation failed, for example, no
         *                                       correct password was supplied. (Since: 1.7.3)
         */
        AUTHENTICATION_FAILED: number;
        /**
         * An operation tried to access a ref, or information about it that it
         *                                was not authorized. For example, when succesfully authenticating with a
         *                                server but the user doesn't have permissions for a private ref. (Since: 1.7.3)
         */
        NOT_AUTHORIZED: number;

        // Constructors of Flatpak-1.0.Error

        constructor(options: { message: string; code: number });

        // Owm methods of Flatpak-1.0.Error

        static quark(): GLib.Quark;
    }

    /**
     * Error codes returned by portal calls.
     */
    class PortalError extends GLib.Error {
        // Own fields of Flatpak-1.0.PortalError

        /**
         * General portal failure
         */
        FAILED: number;
        /**
         * An argument was invalid
         */
        INVALID_ARGUMENT: number;
        /**
         * The object was not found
         */
        NOT_FOUND: number;
        /**
         * The object already exists
         */
        EXISTS: number;
        /**
         * The call was not allowed
         */
        NOT_ALLOWED: number;
        /**
         * The call was cancelled by the user
         */
        CANCELLED: number;
        /**
         * The window was destroyed by the user
         */
        WINDOW_DESTROYED: number;

        // Constructors of Flatpak-1.0.PortalError

        constructor(options: { message: string; code: number });

        // Owm methods of Flatpak-1.0.PortalError

        static quark(): GLib.Quark;
    }

    /**
     * The kind of artifact that a FlatpakRef refers to.
     */
    enum RefKind {
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
    enum RemoteType {
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
    enum StorageType {
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
    enum TransactionOperationType {
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
    enum TransactionRemoteReason {
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
     * The major version.
     */
    const MAJOR_VERSION: number;
    /**
     * The micro version.
     */
    const MICRO_VERSION: number;
    /**
     * The minor version.
     */
    const MINOR_VERSION: number;
    function error_quark(): GLib.Quark;
    /**
     * Returns the canonical name for the arch of the current machine.
     * @returns an arch string
     */
    function get_default_arch(): string;
    /**
     * Returns the canonical names for the arches that are supported (i.e. can run)
     * on the current machine, in order of priority (default is first).
     * @returns a zero terminated array of arch strings
     */
    function get_supported_arches(): string[];
    /**
     * Lists the system installations according to the current configuration and current
     * availability (e.g. doesn't return a configured installation if not reachable).
     * @param cancellable a #GCancellable
     * @returns a GPtrArray of   #FlatpakInstallation instances
     */
    function get_system_installations(cancellable?: Gio.Cancellable | null): Installation[];
    function portal_error_quark(): GLib.Quark;
    /**
     * Converts the operation type to a string.
     * @param kind a #FlatpakTransactionOperationType
     * @returns a string representing @kind
     */
    function transaction_operation_type_to_string(kind: TransactionOperationType): string;
    interface ProgressCallback {
        (status: string, progress: number, estimating: boolean): void;
    }
    /**
     * Flags to alter the behavior of flatpak_installation_install_full().
     */
    enum InstallFlags {
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
     */
    enum LaunchFlags {
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
     */
    enum QueryFlags {
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
     */
    enum TransactionErrorDetails {
        /**
         * The operation failure was not fatal
         */
        FATAL,
    }
    /**
     * The details for #FlatpakTransaction::operation-done.
     */
    enum TransactionResult {
        /**
         * The update caused no changes
         */
        CHANGE,
    }
    /**
     * Flags to alter the behavior of flatpak_installation_uninstall_full().
     */
    enum UninstallFlags {
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
     */
    enum UpdateFlags {
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
    module BundleRef {
        // Constructor properties interface
    }

    class BundleRef extends Ref {
        // Own properties of Flatpak-1.0.BundleRef

        /**
         * The bundle file that this ref refers to.
         */
        file: Gio.File;

        // Constructors of Flatpak-1.0.BundleRef

        static ['new'](file: Gio.File): BundleRef;

        // Owm methods of Flatpak-1.0.BundleRef

        /**
         * Get the compressed appstream for the app/runtime
         * @returns an #GBytes with the appstream contents, or %NULL
         */
        get_appstream(): GLib.Bytes;
        /**
         * Get the file this bundle is stored in.
         * @returns an #GFile
         */
        get_file(): Gio.File;
        /**
         * Get the icon png data for the app/runtime
         * @param size 64 or 128
         * @returns an #GBytes with png contents
         */
        get_icon(size: number): GLib.Bytes;
        /**
         * Returns the installed size for the bundle.
         * @returns the installed size
         */
        get_installed_size(): number;
        /**
         * Get the metadata for the app/runtime
         * @returns an #GBytes with the metadata contents, or %NULL
         */
        get_metadata(): GLib.Bytes;
        /**
         * Get the origin url stored in the bundle
         * @returns an url string, or %NULL
         */
        get_origin(): string;
        /**
         * Get the runtime flatpakrepo url stored in the bundle (if any)
         * @returns an url string, or %NULL
         */
        get_runtime_repo_url(): string;
    }

    module Installation {
        // Constructor properties interface
    }

    class Installation extends GObject.Object {
        // Constructors of Flatpak-1.0.Installation

        static new_for_path(path: Gio.File, user: boolean, cancellable?: Gio.Cancellable | null): Installation;

        static new_system(cancellable?: Gio.Cancellable | null): Installation;

        static new_system_with_id(id?: string | null, cancellable?: Gio.Cancellable | null): Installation;

        static new_user(cancellable?: Gio.Cancellable | null): Installation;

        // Owm methods of Flatpak-1.0.Installation

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
         * @param if_needed if %TRUE, only add if it doesn't exists
         * @param cancellable a #GCancellable
         * @returns %TRUE if the modifications have been committed successfully
         */
        add_remote(remote: Remote, if_needed: boolean, cancellable?: Gio.Cancellable | null): boolean;
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
        cleanup_local_refs_sync(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Gets monitor object for the installation. The returned file monitor will
         * emit the #GFileMonitor::changed signal whenever an application or runtime
         * was installed, uninstalled or updated.
         * @param cancellable a #GCancellable
         * @returns a new #GFileMonitor instance, or %NULL on error
         */
        create_monitor(cancellable?: Gio.Cancellable | null): Gio.FileMonitor;
        /**
         * Drops all internal (in-memory) caches. For instance, this may be needed to pick up new or changed
         * remotes configured outside this installation instance.
         * @param cancellable a #GCancellable
         * @returns %TRUE on success, %FALSE on error
         */
        drop_caches(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Obtains the metadata file from a commit.
         *
         * NOTE: Since 0.11.4 this information is accessible in FlatpakRemoteRef, so this
         * function is not very useful anymore.
         * @param remote_name the name of the remote
         * @param ref the ref
         * @param cancellable a #GCancellable
         * @returns a #GBytes containing the flatpak metadata file,   or %NULL if an error occurred
         */
        fetch_remote_metadata_sync(remote_name: string, ref: Ref, cancellable?: Gio.Cancellable | null): GLib.Bytes;
        /**
         * Gets the current remote branch of a ref in the remote.
         * @param remote_name the name of the remote
         * @param kind what this ref contains (an #FlatpakRefKind)
         * @param name name of the app/runtime to fetch
         * @param arch which architecture to fetch (default: current architecture)
         * @param branch which branch to fetch (default: 'master')
         * @param cancellable a #GCancellable
         * @returns a #FlatpakRemoteRef instance, or %NULL
         */
        fetch_remote_ref_sync(
            remote_name: string,
            kind: RefKind,
            name: string,
            arch?: string | null,
            branch?: string | null,
            cancellable?: Gio.Cancellable | null,
        ): RemoteRef;
        /**
         * Gets the current remote branch of a ref in the remote.
         * @param remote_name the name of the remote
         * @param kind what this ref contains (an #FlatpakRefKind)
         * @param name name of the app/runtime to fetch
         * @param arch which architecture to fetch (default: current architecture)
         * @param branch which branch to fetch (default: 'master')
         * @param flags set of #FlatpakQueryFlags
         * @param cancellable a #GCancellable
         * @returns a #FlatpakRemoteRef instance, or %NULL
         */
        fetch_remote_ref_sync_full(
            remote_name: string,
            kind: RefKind,
            name: string,
            arch: string | null,
            branch: string | null,
            flags: QueryFlags,
            cancellable?: Gio.Cancellable | null,
        ): RemoteRef;
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
         * @param remote_name the name of the remote
         * @param ref the ref
         * @param cancellable a #GCancellable
         * @returns %TRUE, unless an error occurred
         */
        fetch_remote_size_sync(remote_name: string, ref: Ref, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Get a global configuration option for the installation, see
         * flatpak_installation_set_config_sync() for supported keys.
         * @param key the name of the key to get
         * @param cancellable a #GCancellable
         * @returns The (newly allocated) value, or %NULL on error (%G_KEY_FILE_ERROR_KEY_NOT_FOUND error if key is not set)
         */
        get_config(key: string, cancellable?: Gio.Cancellable | null): string;
        /**
         * Get the last build of reference `name` that was installed with
         * flatpak_installation_install(), or %NULL if the reference has
         * never been installed locally.
         * @param name the name of the app
         * @param cancellable a #GCancellable
         * @returns an #FlatpakInstalledRef
         */
        get_current_installed_app(name: string, cancellable?: Gio.Cancellable | null): InstalledRef;
        /**
         * Get the default languages used by the installation to decide which
         * subpaths to install of locale extensions. This list may also be used
         * by frontends like GNOME Software to decide which language-specific apps
         * to display. An empty array means that all languages should be installed.
         * @returns A possibly empty array of strings, or %NULL on error.
         */
        get_default_languages(): string[];
        /**
         * Like flatpak_installation_get_default_languages() but includes territory
         * information (e.g. `en_US` rather than `en`) which may be included in the
         * `extra-languages` configuration.
         *
         * Strings returned by this function are in the format specified by
         * [`setlocale()`](man:setlocale): `language[_territory][.codeset][`modifier]``.
         * @returns A possibly empty array of locale strings, or %NULL on error.
         */
        get_default_locales(): string[];
        /**
         * Returns the display name of the installation for `self`.
         *
         * Note that this function may return %NULL if the installation
         * does not have a display name.
         * @returns a string with the installation's display name
         */
        get_display_name(): string;
        /**
         * Returns the ID of the installation for `self`.
         *
         * The ID for the default system installation is "default".
         * The ID for the user installation is "user".
         * @returns a string with the installation's ID
         */
        get_id(): string;
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
        get_installed_ref(
            kind: RefKind,
            name: string,
            arch?: string | null,
            branch?: string | null,
            cancellable?: Gio.Cancellable | null,
        ): InstalledRef;
        /**
         * Returns whether the installation is for a user-specific location.
         * @returns %TRUE if @self is a per-user installation
         */
        get_is_user(): boolean;
        /**
         * Returns the min-free-space config value from the OSTree repository of this installation.
         *
         * Applications can use this value, together with information about the available
         * disk space and the size of pending updates or installs, to estimate whether a
         * pull operation will fail due to running out of disk space.
         * @returns %TRUE on success, or %FALSE on error.
         */
        get_min_free_space_bytes(): boolean;
        /**
         * Returns the value set with flatpak_installation_set_no_interaction().
         * @returns %TRUE if interactive authorization dialogs are not allowed
         */
        get_no_interaction(): boolean;
        /**
         * Returns the installation location for `self`.
         * @returns an #GFile
         */
        get_path(): Gio.File;
        /**
         * Returns the numeric priority of the installation for `self`.
         * @returns an integer with the configured priority value
         */
        get_priority(): number;
        /**
         * Looks up a remote by name.
         * @param name a remote name
         * @param cancellable a #GCancellable
         * @returns a #FlatpakRemote instance, or %NULL with @error   set
         */
        get_remote_by_name(name: string, cancellable?: Gio.Cancellable | null): Remote;
        /**
         * Returns the type of storage of the installation for `self`.
         * @returns a #FlatpakStorageType
         */
        get_storage_type(): StorageType;
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
         * @param remote_name name of the remote to use
         * @param kind what this ref contains (an #FlatpakRefKind)
         * @param name name of the app/runtime to fetch
         * @param arch which architecture to fetch (default: current architecture)
         * @param branch which branch to fetch (default: 'master')
         * @param cancellable a #GCancellable
         * @returns The ref for the newly installed app or %NULL on failure
         */
        install(
            remote_name: string,
            kind: RefKind,
            name: string,
            arch?: string | null,
            branch?: string | null,
            cancellable?: Gio.Cancellable | null,
        ): InstalledRef;
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
        install_bundle(file: Gio.File, cancellable?: Gio.Cancellable | null): InstalledRef;
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
         * @param remote_name name of the remote to use
         * @param kind what this ref contains (an #FlatpakRefKind)
         * @param name name of the app/runtime to fetch
         * @param arch which architecture to fetch (default: current architecture)
         * @param branch which branch to fetch (default: 'master')
         * @param subpaths A list of subpaths to fetch, or %NULL for everything
         * @param cancellable a #GCancellable
         * @returns The ref for the newly installed app or %NULL on failure
         */
        install_full(
            flags: InstallFlags,
            remote_name: string,
            kind: RefKind,
            name: string,
            arch?: string | null,
            branch?: string | null,
            subpaths?: string[] | null,
            cancellable?: Gio.Cancellable | null,
        ): InstalledRef;
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
         * @param ref_file_data The ref file contents
         * @param cancellable a #GCancellable
         * @returns a #FlatpakRemoteRef if the remote has been added successfully, %NULL on error.
         */
        install_ref_file(ref_file_data: GLib.Bytes, cancellable?: Gio.Cancellable | null): RemoteRef;
        /**
         * Launch an installed application.
         *
         * You can use flatpak_installation_get_installed_ref() or
         * flatpak_installation_get_current_installed_app() to find out what builds
         * are available, in order to get a value for `commit`.
         * @param name name of the app to launch
         * @param arch which architecture to launch (default: current architecture)
         * @param branch which branch of the application (default: "master")
         * @param commit the commit of @branch to launch
         * @param cancellable a #GCancellable
         * @returns %TRUE, unless an error occurred
         */
        launch(
            name: string,
            arch?: string | null,
            branch?: string | null,
            commit?: string | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
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
         * @param commit the commit of @branch to launch
         * @param instance_out return location for a #FlatpakInstance
         * @param cancellable a #GCancellable
         * @returns %TRUE, unless an error occurred
         */
        launch_full(
            flags: LaunchFlags,
            name: string,
            arch?: string | null,
            branch?: string | null,
            commit?: string | null,
            instance_out?: Instance | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Lists the installed references.
         * @param cancellable a #GCancellable
         * @returns a GPtrArray of   #FlatpakInstalledRef instances
         */
        list_installed_refs(cancellable?: Gio.Cancellable | null): InstalledRef[];
        /**
         * Lists the installed references of a specific kind.
         * @param kind the kind of installation
         * @param cancellable a #GCancellable
         * @returns a GPtrArray of   #FlatpakInstalledRef instances
         */
        list_installed_refs_by_kind(kind: RefKind, cancellable?: Gio.Cancellable | null): InstalledRef[];
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
        list_installed_refs_for_update(cancellable?: Gio.Cancellable | null): InstalledRef[];
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
         * @param remote_name the name of the remote
         * @param ref the ref
         * @param cancellable a #GCancellable
         * @returns a GPtrArray of   #FlatpakRelatedRef instances
         */
        list_installed_related_refs_sync(
            remote_name: string,
            ref: string,
            cancellable?: Gio.Cancellable | null,
        ): RelatedRef[];
        /**
         * Lists all the applications and runtimes in a remote.
         * @param remote_or_uri the name or URI of the remote
         * @param cancellable a #GCancellable
         * @returns a GPtrArray of   #FlatpakRemoteRef instances
         */
        list_remote_refs_sync(remote_or_uri: string, cancellable?: Gio.Cancellable | null): RemoteRef[];
        /**
         * Lists all the applications and runtimes in a remote.
         * @param remote_or_uri the name or URI of the remote
         * @param flags set of #FlatpakQueryFlags
         * @param cancellable a #GCancellable
         * @returns a GPtrArray of   #FlatpakRemoteRef instances
         */
        list_remote_refs_sync_full(
            remote_or_uri: string,
            flags: QueryFlags,
            cancellable?: Gio.Cancellable | null,
        ): RemoteRef[];
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
         * @param remote_name the name of the remote
         * @param ref the ref
         * @param cancellable a #GCancellable
         * @returns a GPtrArray of   #FlatpakRelatedRef instances
         */
        list_remote_related_refs_sync(
            remote_name: string,
            ref: string,
            cancellable?: Gio.Cancellable | null,
        ): RelatedRef[];
        /**
         * Lists the static remotes, in priority (highest first) order. For same
         * priority, an earlier added remote comes before a later added one.
         * @param cancellable a #GCancellable
         * @returns a GPtrArray of   #FlatpakRemote instances
         */
        list_remotes(cancellable?: Gio.Cancellable | null): Remote[];
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
        list_remotes_by_type(types: RemoteType[], cancellable?: Gio.Cancellable | null): Remote[];
        /**
         * Lists the installed references that are not 'used'.
         *
         * A reference is used if it is either an application, or an sdk,
         * or the runtime of a used ref, or an extension of a used ref.
         * @param arch if non-%NULL, the architecture of refs to collect
         * @param cancellable a #GCancellable
         * @returns a GPtrArray of   #FlatpakInstalledRef instances
         */
        list_unused_refs(arch?: string | null, cancellable?: Gio.Cancellable | null): InstalledRef[];
        /**
         * Loads the metadata overrides file for an application.
         * @param app_id an application id
         * @param cancellable a #GCancellable
         * @returns the contents of the overrides files,    or %NULL if an error occurred
         */
        load_app_overrides(app_id: string, cancellable?: Gio.Cancellable | null): string;
        /**
         * Saves changes in the `remote` object.
         * @param remote the modified #FlatpakRemote
         * @param cancellable a #GCancellable
         * @returns %TRUE if the modifications have been committed successfully
         */
        modify_remote(remote: Remote, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Remove all orphaned OSTree objects from the underlying OSTree repo in
         * `self`.
         * @param cancellable a #GCancellable
         * @returns %TRUE on success
         */
        prune_local_repo(cancellable?: Gio.Cancellable | null): boolean;
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
         * @param remote_name the name of the remote
         * @param ref the ref
         * @param cancellable a #GCancellable
         * @returns %TRUE on success
         */
        remove_local_ref_sync(remote_name: string, ref: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Removes the remote with the given name from the installation.
         * @param name the name of the remote to remove
         * @param cancellable a #GCancellable
         * @returns %TRUE if the remote has been removed successfully
         */
        remove_remote(name: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Run the trigger commands to update the files exported by the apps in
         * `self`. Should be used after one or more app install, upgrade or
         * uninstall operations with the %FLATPAK_INSTALL_FLAGS_NO_TRIGGERS,
         * %FLATPAK_UPDATE_FLAGS_NO_TRIGGERS or %FLATPAK_UNINSTALL_FLAGS_NO_TRIGGERS
         * flags set.
         * @param cancellable a #GCancellable
         * @returns %TRUE on success
         */
        run_triggers(cancellable?: Gio.Cancellable | null): boolean;
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
        set_config_sync(key: string, value: string, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * This method can be used to prevent interactive authorization dialogs to appear
         * for operations on `self`. This is useful for background operations that are not
         * directly triggered by a user action.
         *
         * By default, interaction is allowed.
         * @param no_interaction Whether to disallow interactive authorization for operations
         */
        set_no_interaction(no_interaction: boolean): void;
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
        uninstall(
            kind: RefKind,
            name: string,
            arch?: string | null,
            branch?: string | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
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
        uninstall_full(
            flags: UninstallFlags,
            kind: RefKind,
            name: string,
            arch?: string | null,
            branch?: string | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
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
        update(
            flags: UpdateFlags,
            kind: RefKind,
            name: string,
            arch?: string | null,
            branch?: string | null,
            cancellable?: Gio.Cancellable | null,
        ): InstalledRef;
        /**
         * Updates the local copy of appstream for `remote_name` for the specified `arch`.
         * @param remote_name the name of the remote
         * @param arch Architecture to update, or %NULL for the local machine arch
         * @param out_changed Set to %TRUE if the contents of the appstream changed, %FALSE if nothing changed
         * @param cancellable a #GCancellable
         * @returns %TRUE on success, or %FALSE on error
         */
        update_appstream_full_sync(
            remote_name: string,
            arch?: string | null,
            out_changed?: boolean | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
        /**
         * Updates the local copy of appstream for `remote_name` for the specified `arch`.
         * If you need progress feedback, use flatpak_installation_update_appstream_full_sync().
         * @param remote_name the name of the remote
         * @param arch Architecture to update, or %NULL for the local machine arch
         * @param out_changed Set to %TRUE if the contents of the appstream changed, %FALSE if nothing changed
         * @param cancellable a #GCancellable
         * @returns %TRUE on success, or %FALSE on error
         */
        update_appstream_sync(
            remote_name: string,
            arch?: string | null,
            out_changed?: boolean | null,
            cancellable?: Gio.Cancellable | null,
        ): boolean;
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
        update_full(
            flags: UpdateFlags,
            kind: RefKind,
            name: string,
            arch?: string | null,
            branch?: string | null,
            subpaths?: string[] | null,
            cancellable?: Gio.Cancellable | null,
        ): InstalledRef;
        /**
         * Updates the local configuration of a remote repository by fetching
         * the related information from the summary file in the remote OSTree
         * repository and committing the changes to the local installation.
         * @param name the name of the remote to update
         * @param cancellable a #GCancellable
         * @returns %TRUE if the remote has been updated successfully
         */
        update_remote_sync(name: string, cancellable?: Gio.Cancellable | null): boolean;
    }

    module InstalledRef {
        // Constructor properties interface
    }

    class InstalledRef extends Ref {
        // Own properties of Flatpak-1.0.InstalledRef

        appdata_content_rating: GLib.HashTable<any, any>;
        appdataContentRating: GLib.HashTable<any, any>;
        appdata_content_rating_type: string;
        appdataContentRatingType: string;
        appdata_license: string;
        appdataLicense: string;
        appdata_name: string;
        appdataName: string;
        appdata_summary: string;
        appdataSummary: string;
        appdata_version: string;
        appdataVersion: string;
        deploy_dir: string;
        deployDir: string;
        end_of_life: string;
        endOfLife: string;
        end_of_life_rebase: string;
        endOfLifeRebase: string;
        installed_size: number;
        installedSize: number;
        is_current: boolean;
        isCurrent: boolean;
        latest_commit: string;
        latestCommit: string;
        origin: string;
        subpaths: string[];

        // Owm methods of Flatpak-1.0.InstalledRef

        /**
         * Returns the content rating field from the appdata. This is a potentially
         * empty mapping of content rating attribute IDs to values, to be interpreted
         * by the semantics of the content rating type (see
         * flatpak_installed_ref_get_appdata_content_rating_type()).
         * @returns the content rating or %NULL
         */
        get_appdata_content_rating(): GLib.HashTable<any, any> | null;
        /**
         * Returns the content rating type from the appdata. For example, `oars-1.0` or
         * `oars-1.1`.
         * @returns the content rating type or %NULL
         */
        get_appdata_content_rating_type(): string | null;
        /**
         * Returns the license field from the appdata.
         * @returns the license or %NULL
         */
        get_appdata_license(): string;
        /**
         * Returns the name field from the appdata.
         *
         * The returned string is localized.
         * @returns the name or %NULL
         */
        get_appdata_name(): string;
        /**
         * Returns the summary field from the appdata.
         *
         * The returned string is localized.
         * @returns the summary or %NULL
         */
        get_appdata_summary(): string;
        /**
         * Returns the default version field from the appdata.
         * @returns the version or %NULL
         */
        get_appdata_version(): string;
        /**
         * Gets the deploy dir of the ref.
         * @returns the deploy dir
         */
        get_deploy_dir(): string;
        /**
         * Returns the end-of-life reason string, or %NULL if the
         * ref is not end-of-lifed.
         * @returns the end-of-life reason or %NULL
         */
        get_eol(): string;
        /**
         * Returns the end-of-life rebased ref, or %NULL if the
         * ref is not end-of-lifed.
         * @returns the end-of-life rebased ref or %NULL
         */
        get_eol_rebase(): string;
        /**
         * Returns the installed size of the ref.
         * @returns the installed size
         */
        get_installed_size(): number;
        /**
         * Returns whether the ref is current.
         * @returns %TRUE if the ref is current
         */
        get_is_current(): boolean;
        /**
         * Gets the latest commit of the ref.
         * @returns the latest commit
         */
        get_latest_commit(): string | null;
        /**
         * Gets the origin of the ref.
         * @returns the origin
         */
        get_origin(): string;
        /**
         * Returns the subpaths that are installed, or %NULL if all files installed.
         * @returns A strv, or %NULL
         */
        get_subpaths(): string[];
        /**
         * Loads the compressed xml appdata for this ref (if it exists).
         * @param cancellable a #GCancellable
         * @returns a #GBytes containing the compressed appdata file,     or %NULL if an error occurred
         */
        load_appdata(cancellable?: Gio.Cancellable | null): GLib.Bytes;
        /**
         * Loads the metadata file for this ref.
         * @param cancellable a #GCancellable
         * @returns a #GBytes containing the metadata file,     or %NULL if an error occurred
         */
        load_metadata(cancellable?: Gio.Cancellable | null): GLib.Bytes;
    }

    module Instance {
        // Constructor properties interface
    }

    class Instance extends GObject.Object {
        // Owm methods of Flatpak-1.0.Instance

        /**
         * Gets FlatpakInstance objects for all running sandboxes in the current session.
         */
        static get_all(): Instance[];

        // Owm methods of Flatpak-1.0.Instance

        /**
         * Gets the application ID of the application running in the instance.
         *
         * Note that this may return %NULL for sandboxes that don't have an application.
         * @returns the application ID
         */
        get_app(): string;
        /**
         * Gets the architecture of the application running in the instance.
         * @returns the architecture
         */
        get_arch(): string;
        /**
         * Gets the branch of the application running in the instance.
         * @returns the architecture
         */
        get_branch(): string;
        /**
         * Gets the PID of the application process in the sandbox.
         *
         * See flatpak_instance_get_pid().
         *
         * Note that this function may return 0 immediately after launching
         * a sandbox, for a short amount of time.
         * @returns the application process PID
         */
        get_child_pid(): number;
        /**
         * Gets the commit of the application running in the instance.
         * @returns the commit
         */
        get_commit(): string;
        /**
         * Gets the instance ID. The ID is used by Flatpak for bookkeeping
         * purposes and has no further relevance.
         * @returns the instance ID
         */
        get_id(): string;
        /**
         * Gets a keyfile that holds information about the running sandbox.
         *
         * This file is available as /.flatpak-info inside the sandbox as well.
         *
         * The most important data in the keyfile is available with separate getters,
         * but there may be more information in the keyfile.
         * @returns the flatpak-info keyfile
         */
        get_info(): GLib.KeyFile;
        /**
         * Gets the PID of the outermost process in the sandbox. This is not the
         * application process itself, but a bubblewrap 'babysitter' process.
         *
         * See flatpak_instance_get_child_pid().
         * @returns the outermost process PID
         */
        get_pid(): number;
        /**
         * Gets the ref of the runtime used in the instance.
         * @returns the runtime ref
         */
        get_runtime(): string;
        /**
         * Gets the commit of the runtime used in the instance.
         * @returns the runtime commit
         */
        get_runtime_commit(): string;
        /**
         * Finds out if the sandbox represented by `self` is still running.
         * @returns %TRUE if the sandbox is still running
         */
        is_running(): boolean;
    }

    module Ref {
        // Constructor properties interface
    }

    class Ref extends GObject.Object {
        // Own properties of Flatpak-1.0.Ref

        arch: string;
        branch: string;
        collection_id: string;
        collectionId: string;
        commit: string;
        kind: RefKind;
        name: string;

        // Owm methods of Flatpak-1.0.Ref

        /**
         * Tries to parse a full ref name and return a #FlatpakRef (without a
         * commit set) or fail if the ref is invalid somehow.
         * @param ref A string ref name, such as "app/org.test.App/x86_64/master"
         */
        static parse(ref: string): Ref;

        // Owm methods of Flatpak-1.0.Ref

        /**
         * Convert an FlatpakRef object into a string representation that
         * can be parsed by flatpak_ref_parse().
         * @returns string representation
         */
        format_ref(): string;
        /**
         * Gets the arch or the ref.
         * @returns the arch
         */
        get_arch(): string;
        /**
         * Gets the branch of the ref.
         * @returns the branch
         */
        get_branch(): string;
        /**
         * Gets the collection ID of the ref.
         * @returns the collection ID
         */
        get_collection_id(): string;
        /**
         * Gets the commit of the ref.
         * @returns the commit
         */
        get_commit(): string;
        /**
         * Gets the kind of artifact that this ref refers to.
         * @returns the kind of artifact
         */
        get_kind(): RefKind;
        /**
         * Gets the name of the ref.
         * @returns the name
         */
        get_name(): string;
    }

    module RelatedRef {
        // Constructor properties interface
    }

    class RelatedRef extends Ref {
        // Own properties of Flatpak-1.0.RelatedRef

        should_autoprune: boolean;
        shouldAutoprune: boolean;
        should_delete: boolean;
        shouldDelete: boolean;
        should_download: boolean;
        shouldDownload: boolean;
        subpaths: string[];

        // Owm methods of Flatpak-1.0.RelatedRef

        /**
         * Returns the subpaths that should be installed/updated for the ref.
         * This returns %NULL if all files should be installed.
         * @returns A strv, or %NULL
         */
        get_subpaths(): string[];
    }

    module Remote {
        // Constructor properties interface
    }

    class Remote extends GObject.Object {
        // Own properties of Flatpak-1.0.Remote

        /**
         * Name of the remote, as used in configuration files and when interfacing
         * with OSTree. This is typically human readable, but could be generated, and
         * must conform to ostree_validate_remote_name(). It should typically not be
         * presented in the UI.
         */
        name: string;
        /**
         * The type of the remote: whether it comes from static configuration files
         * (`FLATPAK_REMOTE_TYPE_STATIC)` or has been dynamically found from the local
         * network or a mounted USB drive (`FLATPAK_REMOTE_TYPE_LAN,`
         * `FLATPAK_REMOTE_TYPE_USB)`. Dynamic remotes may be added and removed over
         * time.
         */
        type: RemoteType;

        // Constructors of Flatpak-1.0.Remote

        static ['new'](name: string): Remote;

        static new_from_file(name: string, data: GLib.Bytes): Remote;

        // Owm methods of Flatpak-1.0.Remote

        /**
         * Returns the directory where this remote will store locally cached
         * appstream information for the specified `arch`.
         * @param arch which architecture to fetch (default: current architecture)
         * @returns a #GFile
         */
        get_appstream_dir(arch?: string | null): Gio.File;
        /**
         * Returns the timestamp file that will be updated whenever the appstream information
         * has been updated (or tried to update) for the specified `arch`.
         * @param arch which architecture to fetch (default: current architecture)
         * @returns a #GFile
         */
        get_appstream_timestamp(arch?: string | null): Gio.File;
        /**
         * Returns the repository collection ID of this remote, if set.
         * @returns the collection ID, or %NULL if unset
         */
        get_collection_id(): string | null;
        /**
         * Returns the comment of the remote.
         * @returns the comment
         */
        get_comment(): string;
        /**
         * Returns the default branch configured for the remote.
         * @returns the default branch, or %NULL
         */
        get_default_branch(): string;
        /**
         * Returns the description of the remote.
         * @returns the description
         */
        get_description(): string;
        /**
         * Returns whether this remote is disabled.
         * @returns whether the remote is marked as disabled
         */
        get_disabled(): boolean;
        /**
         * Returns the filter file of the remote.
         * @returns a pathname to a filter file
         */
        get_filter(): string;
        /**
         * Returns whether GPG verification is enabled for the remote.
         * @returns whether GPG verification is enabled
         */
        get_gpg_verify(): boolean;
        /**
         * Returns the homepage url of the remote.
         * @returns the homepage url
         */
        get_homepage(): string;
        /**
         * Returns the icon url of the remote.
         * @returns the icon url
         */
        get_icon(): string;
        /**
         * Returns the main ref of this remote, if set. The main ref is the ref that an
         * origin remote is created for.
         * @returns the main ref, or %NULL
         */
        get_main_ref(): string;
        /**
         * Returns the name of the remote repository.
         * @returns the name
         */
        get_name(): string;
        /**
         * Returns whether this remote should be used to find dependencies.
         * @returns whether the remote is marked as "don't use for dependencies"
         */
        get_nodeps(): boolean;
        /**
         * Returns whether this remote should be used to list applications.
         * @returns whether the remote is marked as "don't enumerate"
         */
        get_noenumerate(): boolean;
        /**
         * Returns the priority for the remote.
         * @returns the priority
         */
        get_prio(): number;
        /**
         * Get the value of #FlatpakRemote:type.
         * @returns the type of remote this is
         */
        get_remote_type(): RemoteType;
        /**
         * Returns the title of the remote.
         * @returns the title
         */
        get_title(): string;
        /**
         * Returns the repository URL of this remote.
         * @returns the URL
         */
        get_url(): string;
        /**
         * Sets the repository collection ID of this remote.
         *
         * Note: This is a local modification of this object, you must commit changes
         * using flatpak_installation_modify_remote() for the changes to take
         * effect.
         * @param collection_id The new collection ID, or %NULL to unset
         */
        set_collection_id(collection_id?: string | null): void;
        /**
         * Sets the comment of this remote.
         *
         * Note: This is a local modification of this object, you must commit changes
         * using flatpak_installation_modify_remote() for the changes to take
         * effect.
         * @param comment The new comment
         */
        set_comment(comment: string): void;
        /**
         * Sets the default branch configured for this remote.
         *
         * Note: This is a local modification of this object, you must commit changes
         * using flatpak_installation_modify_remote() for the changes to take
         * effect.
         * @param default_branch The new default_branch
         */
        set_default_branch(default_branch: string): void;
        /**
         * Sets the description of this remote.
         *
         * Note: This is a local modification of this object, you must commit changes
         * using flatpak_installation_modify_remote() for the changes to take
         * effect.
         * @param description The new description
         */
        set_description(description: string): void;
        /**
         * Sets the disabled config of this remote. See flatpak_remote_get_disabled().
         *
         * Note: This is a local modification of this object, you must commit changes
         * using flatpak_installation_modify_remote() for the changes to take
         * effect.
         * @param disabled a bool
         */
        set_disabled(disabled: boolean): void;
        /**
         * Sets a filter for this remote.
         *
         * Note: This is a local modification of this object, you must commit changes
         * using flatpak_installation_modify_remote() for the changes to take
         * effect.
         * @param filter_path The pathname of the new filter file
         */
        set_filter(filter_path: string): void;
        /**
         * Sets the trusted gpg key for this remote.
         *
         * Note: This is a local modification of this object, you must commit changes
         * using flatpak_installation_modify_remote() for the changes to take
         * effect.
         * @param gpg_key a #GBytes with gpg binary key data
         */
        set_gpg_key(gpg_key: GLib.Bytes): void;
        /**
         * Sets the gpg_verify config of this remote. See flatpak_remote_get_gpg_verify().
         *
         * Note: This is a local modification of this object, you must commit changes
         * using flatpak_installation_modify_remote() for the changes to take
         * effect.
         * @param gpg_verify a bool
         */
        set_gpg_verify(gpg_verify: boolean): void;
        /**
         * Sets the homepage of this remote.
         *
         * Note: This is a local modification of this object, you must commit changes
         * using flatpak_installation_modify_remote() for the changes to take
         * effect.
         * @param homepage The new homepage
         */
        set_homepage(homepage: string): void;
        /**
         * Sets the homepage of this remote.
         *
         * Note: This is a local modification of this object, you must commit changes
         * using flatpak_installation_modify_remote() for the changes to take
         * effect.
         * @param icon The new homepage
         */
        set_icon(icon: string): void;
        /**
         * Sets the main ref of this remote. The main ref is the ref that an origin
         * remote is created for.
         *
         * Note: This is a local modification of this object, you must commit changes
         * using flatpak_installation_modify_remote() for the changes to take
         * effect.
         * @param main_ref The new main ref
         */
        set_main_ref(main_ref: string): void;
        /**
         * Sets the nodeps config of this remote. See flatpak_remote_get_nodeps().
         *
         * Note: This is a local modification of this object, you must commit changes
         * using flatpak_installation_modify_remote() for the changes to take
         * effect.
         * @param nodeps a bool
         */
        set_nodeps(nodeps: boolean): void;
        /**
         * Sets the noenumeration config of this remote. See flatpak_remote_get_noenumerate().
         *
         * Note: This is a local modification of this object, you must commit changes
         * using flatpak_installation_modify_remote() for the changes to take
         * effect.
         * @param noenumerate a bool
         */
        set_noenumerate(noenumerate: boolean): void;
        /**
         * Sets the prio config of this remote. See flatpak_remote_get_prio().
         *
         * Note: This is a local modification of this object, you must commit changes
         * using flatpak_installation_modify_remote() for the changes to take
         * effect.
         * @param prio a bool
         */
        set_prio(prio: number): void;
        /**
         * Sets the repository title of this remote.
         *
         * Note: This is a local modification of this object, you must commit changes
         * using flatpak_installation_modify_remote() for the changes to take
         * effect.
         * @param title The new title
         */
        set_title(title: string): void;
        /**
         * Sets the repository URL of this remote.
         *
         * Note: This is a local modification of this object, you must commit changes
         * using flatpak_installation_modify_remote() for the changes to take
         * effect.
         * @param url The new url
         */
        set_url(url: string): void;
    }

    module RemoteRef {
        // Constructor properties interface
    }

    class RemoteRef extends Ref {
        // Own properties of Flatpak-1.0.RemoteRef

        download_size: number;
        downloadSize: number;
        end_of_life: string;
        endOfLife: string;
        end_of_life_rebase: string;
        endOfLifeRebase: string;
        installed_size: number;
        installedSize: number;
        metadata: GLib.Bytes;
        remote_name: string;
        remoteName: string;

        // Owm methods of Flatpak-1.0.RemoteRef

        /**
         * Returns the download size of the ref.
         * @returns the download size
         */
        get_download_size(): number;
        /**
         * Returns the end-of-life reason string, or %NULL if the
         * ref is not end-of-lifed.
         * @returns the end-of-life reason or %NULL
         */
        get_eol(): string;
        /**
         * Returns the end-of-life rebased ref, or %NULL if the
         * ref is not end-of-lifed.
         * @returns the end-of-life rebased ref or %NULL
         */
        get_eol_rebase(): string;
        /**
         * Returns the installed size of the ref.
         * @returns the installed size
         */
        get_installed_size(): number;
        /**
         * Returns the app metadata from the metadata cache of the ref.
         * @returns a #GBytes with the metadata file contents or %NULL
         */
        get_metadata(): GLib.Bytes | null;
        /**
         * Gets the remote name of the ref.
         * @returns the remote name
         */
        get_remote_name(): string;
    }

    module Transaction {
        // Signal callback interfaces

        interface AddNewRemote {
            (reason: TransactionRemoteReason, from_id: string, suggested_remote_name: string, url: string): boolean;
        }

        interface BasicAuthStart {
            (remote: string, realm: string, options: GLib.Variant, id: number): boolean;
        }

        interface ChooseRemoteForRef {
            (for_ref: string, runtime_ref: string, remotes: string[]): number;
        }

        interface EndOfLifed {
            (ref: string, reason: string, rebase: string): void;
        }

        interface EndOfLifedWithRebase {
            (remote: string, ref: string, reason: string, rebased_to_ref: string, previous_ids: string[]): boolean;
        }

        interface InstallAuthenticator {
            (remote: string, authenticator_ref: string): void;
        }

        interface NewOperation {
            (operation: TransactionOperation, progress: TransactionProgress): void;
        }

        interface OperationDone {
            (operation: TransactionOperation, commit: string, result: TransactionResult): void;
        }

        interface OperationError {
            (operation: TransactionOperation, error: GLib.Error, details: TransactionErrorDetails): boolean;
        }

        interface Ready {
            (): boolean;
        }

        interface WebflowDone {
            (options: GLib.Variant, id: number): void;
        }

        interface WebflowStart {
            (remote: string, url: string, options: GLib.Variant, id: number): boolean;
        }

        // Constructor properties interface
    }

    class Transaction extends GObject.Object {
        // Own properties of Flatpak-1.0.Transaction

        /**
         * The installation that the transaction operates on.
         */
        installation: Installation;

        // Constructors of Flatpak-1.0.Transaction

        static new_for_installation(installation: Installation, cancellable?: Gio.Cancellable | null): Transaction;

        // Owm methods of Flatpak-1.0.Transaction

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
        abort_webflow(id: number): void;
        /**
         * Similar to flatpak_transaction_add_dependency_source(), but adds
         * all the default installations, which means all the defined system-wide
         * (but not per-user) installations.
         */
        add_default_dependency_sources(): void;
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
        add_dependency_source(installation: Installation): void;
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
        add_install(remote: string, ref: string, subpaths?: string[] | null): boolean;
        /**
         * Adds installing the given bundle to this transaction.
         * @param file a #GFile that is an flatpak bundle
         * @param gpg_data GPG key with which to check bundle signatures, or  %NULL to use the key embedded in the bundle (if any)
         * @returns %TRUE on success; %FALSE with @error set on failure.
         */
        add_install_bundle(file: Gio.File, gpg_data?: GLib.Bytes | null): boolean;
        /**
         * Adds installing the given flatpakref to this transaction.
         * @param flatpakref_data data from a flatpakref file
         * @returns %TRUE on success; %FALSE with @error set on failure.
         */
        add_install_flatpakref(flatpakref_data: GLib.Bytes): boolean;
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
         * @param previous_ids Previous ids to add to the     given ref. These should simply be the ids, not the full ref names (e.g. org.foo.Bar,     not org.foo.Bar/x86_64/master).
         * @returns %TRUE on success; %FALSE with @error set on failure.
         */
        add_rebase(remote: string, ref: string, subpaths?: string | null, previous_ids?: string[] | null): boolean;
        /**
         * Adds an extra local ostree repo as source for installation. This is
         * equivalent to using the sideload-repos directories (see flatpak(1)), but can
         * be done dynamically. Any path added here is used in addition to ones in
         * those directories.
         * @param path a path to a local flatpak repository
         */
        add_sideload_repo(path: string): void;
        /**
         * Adds uninstalling the given ref to this transaction.
         * @param ref the ref
         * @returns %TRUE on success; %FALSE with @error set on failure.
         */
        add_uninstall(ref: string): boolean;
        /**
         * Adds updating the given ref to this transaction.
         * @param ref the ref
         * @param subpaths subpaths to install; %NULL  to use the current set plus the set of configured languages, or  `{ "", NULL }` to pull all subpaths.
         * @param commit the commit to update to, or %NULL to use the latest
         * @returns %TRUE on success; %FALSE with @error set on failure.
         */
        add_update(ref: string, subpaths?: string[] | null, commit?: string | null): boolean;
        /**
         * Finishes (or aborts) an ongoing basic auth request.
         * @param id The webflow id, as passed into the webflow-start signal
         * @param user The user name, or %NULL if aborting request
         * @param password The password
         * @param options Extra a{sv] variant with options (or %NULL), currently unused.
         */
        complete_basic_auth(id: number, user: string, password: string, options: GLib.Variant): void;
        /**
         * Gets the current operation.
         * @returns the current #FlatpakTransactionOperation
         */
        get_current_operation(): TransactionOperation;
        /**
         * Gets the installation this transaction was created for.
         * @returns a #FlatpakInstallation
         */
        get_installation(): Installation;
        /**
         * Gets whether the transaction is only downloading updates,
         * and not deploying them.
         * @returns %TRUE if no_deploy is set, %FALSE otherwise
         */
        get_no_deploy(): boolean;
        /**
         * Gets whether the transaction should operate only on locally
         * available data.
         * @returns %TRUE if no_pull is set, %FALSE otherwise
         */
        get_no_pull(): boolean;
        /**
         * Gets the list of operations. Skipped operations are not included.
         * @returns a #GList of operations
         */
        get_operations(): TransactionOperation[];
        /**
         * Gets the parent window set for this transaction, or %NULL if unset. See
         * flatpak_transaction_get_parent_window().
         * @returns a window name, or %NULL
         */
        get_parent_window(): string;
        /**
         * Returns whether the transaction contains any non-skipped operations.
         * @returns %TRUE if the transaction is empty
         */
        is_empty(): boolean;
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
         * @param cancellable a #GCancellable
         * @returns %TRUE on success, %FALSE if an error occurred
         */
        run(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Sets the architecture to default to where it is unspecified.
         * @param arch the arch to make default
         */
        set_default_arch(arch: string): void;
        /**
         * Sets whether the transaction should ignore runtime dependencies
         * when resolving operations for applications.
         * @param disable_dependencies whether to disable runtime dependencies
         */
        set_disable_dependencies(disable_dependencies: boolean): void;
        /**
         * Sets whether the transaction should avoid pruning the local OSTree
         * repository after updating.
         * @param disable_prune whether to avoid pruning
         */
        set_disable_prune(disable_prune: boolean): void;
        /**
         * Sets whether the transaction should avoid adding related refs
         * when resolving operations. Related refs are extensions that are
         * suggested by apps, such as locales.
         * @param disable_related whether to avoid adding related refs
         */
        set_disable_related(disable_related: boolean): void;
        /**
         * Sets whether the transaction should avoid using static
         * deltas when pulling.
         * @param disable_static_deltas whether to avoid static deltas
         */
        set_disable_static_deltas(disable_static_deltas: boolean): void;
        /**
         * Sets whether the transaction should uninstall files even
         * if they're used by a running application.
         * @param force_uninstall whether to force-uninstall refs
         */
        set_force_uninstall(force_uninstall: boolean): void;
        /**
         * Sets whether the transaction should download updates, but
         * not deploy them.
         * @param no_deploy whether to avoid deploying
         */
        set_no_deploy(no_deploy: boolean): void;
        /**
         * This method can be used to prevent interactive authorization dialogs to appear
         * for operations on `self`. This is useful for background operations that are not
         * directly triggered by a user action.
         *
         * By default, the setting from the parent #FlatpakInstallation is used.
         * @param no_interaction Whether to disallow interactive authorization for operations
         */
        set_no_interaction(no_interaction: boolean): void;
        /**
         * Sets whether the transaction should operate only on locally
         * available data.
         * @param no_pull whether to avoid pulls
         */
        set_no_pull(no_pull: boolean): void;
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
         * @param parent_window whether to avoid pulls
         */
        set_parent_window(parent_window: string): void;
        /**
         * Sets whether the transaction should uninstall first if a
         * ref is already installed.
         * @param reinstall whether to reinstall refs
         */
        set_reinstall(reinstall: boolean): void;
    }

    module TransactionOperation {
        // Constructor properties interface
    }

    class TransactionOperation extends GObject.Object {
        // Owm methods of Flatpak-1.0.TransactionOperation

        /**
         * Gets the path to the bundle.
         * @returns the bundle #GFile or %NULL
         */
        get_bundle_path(): Gio.File;
        /**
         * Gets the commit ID for the operation.
         *
         * This information is available when the transaction is resolved,
         * i.e. when #FlatpakTransaction::ready is emitted.
         * @returns the commit ID
         */
        get_commit(): string;
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
        get_download_size(): number;
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
        get_installed_size(): number;
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
        get_is_skipped(): boolean;
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
        get_metadata(): GLib.KeyFile;
        /**
         * Gets the metadata current metadata for the ref that `self` works on.
         * Also see flatpak_transaction_operation_get_metadata().
         *
         * This information is available when the transaction is resolved,
         * i.e. when #FlatpakTransaction::ready is emitted.
         * @returns the old metadata #GKeyFile
         */
        get_old_metadata(): GLib.KeyFile;
        /**
         * Gets the type of the operation.
         * @returns the type of operation, as #FlatpakTransactionOperationType
         */
        get_operation_type(): TransactionOperationType;
        /**
         * Gets the ref that the operation applies to.
         * @returns the ref
         */
        get_ref(): string;
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
        get_related_to_ops(): TransactionOperation[] | null;
        /**
         * Gets the remote that the operation applies to.
         * @returns the remote
         */
        get_remote(): string;
    }

    module TransactionProgress {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        // Constructor properties interface
    }

    class TransactionProgress extends GObject.Object {
        // Owm methods of Flatpak-1.0.TransactionProgress

        /**
         * Gets the number of bytes that have been transferred.
         * @returns the number of bytes transferred
         */
        get_bytes_transferred(): number;
        /**
         * Gets whether the progress is currently estimating
         * @returns whether we're estimating
         */
        get_is_estimating(): boolean;
        /**
         * Gets the current progress.
         * @returns the current progress, as an integer between 0 and 100
         */
        get_progress(): number;
        /**
         * Gets the time at which this operation has started, as monotonic time.
         * @returns the start time
         */
        get_start_time(): number;
        /**
         * Gets the current status string
         * @returns the current status
         */
        get_status(): string;
        /**
         * Sets how often progress should be updated.
         * @param update_interval the update interval, in milliseconds
         */
        set_update_frequency(update_interval: number): void;
    }

    class BundleRefClass {}

    class InstallationClass {}

    class InstalledRefClass {}

    class InstanceClass {}

    class RefClass {}

    class RelatedRefClass {}

    class RemoteClass {}

    class RemoteRefClass {}

    class TransactionClass {
        // Own fields of Flatpak-1.0.TransactionClass

        padding: any[];
    }

    class TransactionOperationClass {}

    class TransactionProgressClass {}

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

export default Flatpak;
// END
